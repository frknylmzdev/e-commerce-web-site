import { useCart } from '../context/CartContext';
import Link from 'next/link';
import { useState } from 'react';

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVC: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  // Sepet boş kontrolü
  if (cart.items.length === 0 && !orderComplete) {
    return (
      <div className="container py-5">
        <div className="text-center py-5">
          <i className="fas fa-shopping-cart fa-4x text-muted mb-4"></i>
          <h2>Sepetiniz Boş</h2>
          <p className="lead mb-4">Ödeme yapmak için sepetinizde ürün bulunmalıdır.</p>
          <Link href="/products" className="btn btn-primary">
            Alışverişe Başla
          </Link>
        </div>
      </div>
    );
  }

  // Form değişikliği
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Hata mesajını temizle
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: '',
      });
    }
  };

  // Form doğrulama
  const validateForm = () => {
    const errors = {};
    
    if (!formData.firstName.trim()) errors.firstName = 'Ad alanı zorunludur';
    if (!formData.lastName.trim()) errors.lastName = 'Soyad alanı zorunludur';
    if (!formData.email.trim()) errors.email = 'E-posta alanı zorunludur';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Geçerli bir e-posta adresi giriniz';
    if (!formData.phone.trim()) errors.phone = 'Telefon alanı zorunludur';
    if (!formData.address.trim()) errors.address = 'Adres alanı zorunludur';
    if (!formData.city.trim()) errors.city = 'Şehir alanı zorunludur';
    if (!formData.postalCode.trim()) errors.postalCode = 'Posta kodu alanı zorunludur';
    
    if (!formData.cardName.trim()) errors.cardName = 'Kart üzerindeki isim zorunludur';
    if (!formData.cardNumber.trim()) errors.cardNumber = 'Kart numarası zorunludur';
    else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) errors.cardNumber = 'Geçerli bir kart numarası giriniz';
    if (!formData.cardExpiry.trim()) errors.cardExpiry = 'Son kullanma tarihi zorunludur';
    else if (!/^\d{2}\/\d{2}$/.test(formData.cardExpiry)) errors.cardExpiry = 'GG/YY formatında giriniz';
    if (!formData.cardCVC.trim()) errors.cardCVC = 'CVC kodu zorunludur';
    else if (!/^\d{3,4}$/.test(formData.cardCVC)) errors.cardCVC = 'Geçerli bir CVC kodu giriniz';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Form gönderimi
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Sipariş numarası oluştur
      const orderNum = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
      setOrderNumber(orderNum);
      setOrderComplete(true);
      clearCart();
    }
  };

  // Kargo ücreti
  const shippingCost = cart.totalPrice >= 500 ? 0 : 29.99;
  
  // Toplam tutar
  const totalAmount = cart.totalPrice + shippingCost;

  // Sipariş tamamlandı ekranı
  if (orderComplete) {
    return (
      <div className="container py-5">
        <div className="text-center py-5">
          <div className="mb-4">
            <span className="bg-success text-white p-3 rounded-circle">
              <i className="fas fa-check fa-3x"></i>
            </span>
          </div>
          <h2 className="mb-3">Siparişiniz Tamamlandı!</h2>
          <p className="lead mb-2">Sipariş numaranız: <strong>{orderNumber}</strong></p>
          <p className="mb-4">Siparişinizle ilgili detaylar e-posta adresinize gönderilmiştir.</p>
          <div className="d-flex justify-content-center">
            <Link href="/" className="btn btn-primary me-2">
              Ana Sayfaya Dön
            </Link>
            <Link href="/products" className="btn btn-outline-primary">
              Alışverişe Devam Et
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h1 className="mb-4">Ödeme</h1>
      
      <div className="row">
        <div className="col-lg-8">
          <form onSubmit={handleSubmit}>
            {/* Teslimat Bilgileri */}
            <div className="card mb-4">
              <div className="card-header bg-white">
                <h5 className="mb-0">Teslimat Bilgileri</h5>
              </div>
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">Ad</label>
                    <input 
                      type="text" 
                      className={`form-control ${formErrors.firstName ? 'is-invalid' : ''}`} 
                      id="firstName" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    {formErrors.firstName && <div className="invalid-feedback">{formErrors.firstName}</div>}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">Soyad</label>
                    <input 
                      type="text" 
                      className={`form-control ${formErrors.lastName ? 'is-invalid' : ''}`} 
                      id="lastName" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    {formErrors.lastName && <div className="invalid-feedback">{formErrors.lastName}</div>}
                  </div>
                </div>
                
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">E-posta</label>
                    <input 
                      type="email" 
                      className={`form-control ${formErrors.email ? 'is-invalid' : ''}`} 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">Telefon</label>
                    <input 
                      type="tel" 
                      className={`form-control ${formErrors.phone ? 'is-invalid' : ''}`} 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {formErrors.phone && <div className="invalid-feedback">{formErrors.phone}</div>}
                  </div>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Adres</label>
                  <textarea 
                    className={`form-control ${formErrors.address ? 'is-invalid' : ''}`} 
                    id="address" 
                    name="address"
                    rows="3"
                    value={formData.address}
                    onChange={handleChange}
                  ></textarea>
                  {formErrors.address && <div className="invalid-feedback">{formErrors.address}</div>}
                </div>
                
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="city" className="form-label">Şehir</label>
                    <input 
                      type="text" 
                      className={`form-control ${formErrors.city ? 'is-invalid' : ''}`} 
                      id="city" 
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                    {formErrors.city && <div className="invalid-feedback">{formErrors.city}</div>}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="postalCode" className="form-label">Posta Kodu</label>
                    <input 
                      type="text" 
                      className={`form-control ${formErrors.postalCode ? 'is-invalid' : ''}`} 
                      id="postalCode" 
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                    />
                    {formErrors.postalCode && <div className="invalid-feedback">{formErrors.postalCode}</div>}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Ödeme Bilgileri */}
            <div className="card mb-4">
              <div className="card-header bg-white">
                <h5 className="mb-0">Ödeme Bilgileri</h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="cardName" className="form-label">Kart Üzerindeki İsim</label>
                  <input 
                    type="text" 
                    className={`form-control ${formErrors.cardName ? 'is-invalid' : ''}`} 
                    id="cardName" 
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                  />
                  {formErrors.cardName && <div className="invalid-feedback">{formErrors.cardName}</div>}
                </div>
                
                <div className="mb-3">
                  <label htmlFor="cardNumber" className="form-label">Kart Numarası</label>
                  <div className="input-group">
                    <input 
                      type="text" 
                      className={`form-control ${formErrors.cardNumber ? 'is-invalid' : ''}`} 
                      id="cardNumber" 
                      name="cardNumber"
                      placeholder="XXXX XXXX XXXX XXXX"
                      value={formData.cardNumber}
                      onChange={handleChange}
                    />
                    <span className="input-group-text">
                      <i className="fab fa-cc-visa me-1"></i>
                      <i className="fab fa-cc-mastercard"></i>
                    </span>
                    {formErrors.cardNumber && <div className="invalid-feedback">{formErrors.cardNumber}</div>}
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cardExpiry" className="form-label">Son Kullanma Tarihi</label>
                    <input 
                      type="text" 
                      className={`form-control ${formErrors.cardExpiry ? 'is-invalid' : ''}`} 
                      id="cardExpiry" 
                      name="cardExpiry"
                      placeholder="AA/YY"
                      value={formData.cardExpiry}
                      onChange={handleChange}
                    />
                    {formErrors.cardExpiry && <div className="invalid-feedback">{formErrors.cardExpiry}</div>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cardCVC" className="form-label">CVC</label>
                    <input 
                      type="text" 
                      className={`form-control ${formErrors.cardCVC ? 'is-invalid' : ''}`} 
                      id="cardCVC" 
                      name="cardCVC"
                      placeholder="XXX"
                      value={formData.cardCVC}
                      onChange={handleChange}
                    />
                    {formErrors.cardCVC && <div className="invalid-feedback">{formErrors.cardCVC}</div>}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="d-flex justify-content-between mb-4">
              <Link href="/cart" className="btn btn-outline-primary">
                <i className="fas fa-arrow-left me-2"></i>
                Sepete Dön
              </Link>
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-lock me-2"></i>
                Siparişi Tamamla
              </button>
            </div>
          </form>
        </div>
        
        <div className="col-lg-4">
          {/* Sipariş Özeti */}
          <div className="card">
            <div className="card-header bg-white">
              <h5 className="mb-0">Sipariş Özeti</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <h6 className="mb-2">Ürünler</h6>
                {cart.items.map((item) => (
                  <div key={item.id} className="d-flex justify-content-between mb-2">
                    <span>{item.name} <small>x{item.quantity}</small></span>
                    <span>{(item.price * item.quantity).toLocaleString('tr-TR')} ₺</span>
                  </div>
                ))}
              </div>
              
              <hr />
              
              <div className="d-flex justify-content-between mb-2">
                <span>Ara Toplam</span>
                <span>{cart.totalPrice.toLocaleString('tr-TR')} ₺</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Kargo</span>
                <span>
                  {shippingCost === 0 ? (
                    <span className="text-success">Ücretsiz</span>
                  ) : (
                    `${shippingCost.toLocaleString('tr-TR')} ₺`
                  )}
                </span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-0">
                <strong>Toplam</strong>
                <strong className="text-primary">{totalAmount.toLocaleString('tr-TR')} ₺</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
