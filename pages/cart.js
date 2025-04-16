import { useCart } from '../context/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Cart() {
  const { cart, removeItem, updateQuantity, clearCart } = useCart();
  const [couponCode, setCouponCode] = useState('');
  
  // Sepet boş kontrolü
  if (cart.items.length === 0) {
    return (
      <div className="container py-5">
        <div className="text-center py-5">
          <i className="fas fa-shopping-cart fa-4x text-muted mb-4"></i>
          <h2>Sepetiniz Boş</h2>
          <p className="lead mb-4">Sepetinizde henüz ürün bulunmamaktadır.</p>
          <Link href="/products" className="btn btn-primary">
            Alışverişe Başla
          </Link>
        </div>
      </div>
    );
  }

  // Miktar değişikliği
  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      updateQuantity(id, quantity);
    }
  };

  // Kargo ücreti
  const shippingCost = cart.totalPrice >= 500 ? 0 : 29.99;
  
  // Toplam tutar
  const totalAmount = cart.totalPrice + shippingCost;

  return (
    <div className="container py-4">
      <h1 className="mb-4">Alışveriş Sepeti</h1>
      
      <div className="row">
        <div className="col-lg-8">
          {/* Sepet Ürünleri */}
          <div className="card mb-4">
            <div className="card-header bg-white">
              <div className="row">
                <div className="col-md-6">
                  <h5 className="mb-0">Ürün</h5>
                </div>
                <div className="col-md-2 text-center">
                  <h5 className="mb-0">Fiyat</h5>
                </div>
                <div className="col-md-2 text-center">
                  <h5 className="mb-0">Miktar</h5>
                </div>
                <div className="col-md-2 text-center">
                  <h5 className="mb-0">Toplam</h5>
                </div>
              </div>
            </div>
            <div className="card-body">
              {cart.items.map((item) => (
                <div key={item.id} className="row cart-item align-items-center mb-3 pb-3 border-bottom">
                  <div className="col-md-6 d-flex align-items-center">
                    <div className="position-relative" style={{ width: '80px', height: '80px' }}>
                      <Image 
                        src={item.image} 
                        alt={item.name}
                        fill
                        style={{ objectFit: 'contain' }}
                        className="item-image"
                      />
                    </div>
                    <div className="ms-3">
                      <h6 className="item-title mb-1">{item.name}</h6>
                      <button 
                        className="btn btn-sm text-danger p-0"
                        onClick={() => removeItem(item.id)}
                      >
                        <i className="fas fa-trash-alt me-1"></i>
                        Kaldır
                      </button>
                    </div>
                  </div>
                  <div className="col-md-2 text-center">
                    <span className="item-price">{item.price.toLocaleString('tr-TR')} ₺</span>
                  </div>
                  <div className="col-md-2 text-center">
                    <div className="input-group input-group-sm" style={{ maxWidth: '100px', margin: '0 auto' }}>
                      <button 
                        className="btn btn-outline-secondary" 
                        type="button"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <input 
                        type="number" 
                        className="form-control text-center" 
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                        min="1"
                      />
                      <button 
                        className="btn btn-outline-secondary" 
                        type="button"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-2 text-center">
                    <span className="item-price">{(item.price * item.quantity).toLocaleString('tr-TR')} ₺</span>
                  </div>
                </div>
              ))}
              
              <div className="d-flex justify-content-between mt-4">
                <button className="btn btn-outline-secondary" onClick={clearCart}>
                  <i className="fas fa-trash me-2"></i>
                  Sepeti Temizle
                </button>
                <Link href="/" className="btn btn-outline-primary">
                  <i className="fas fa-arrow-left me-2"></i>
                  Alışverişe Devam Et
                </Link>
              </div>
            </div>
          </div>
          
          {/* Kupon Kodu */}
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="mb-3">Kupon Kodu</h5>
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Kupon kodunuzu girin" 
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <button className="btn btn-primary" type="button">Uygula</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          {/* Sipariş Özeti */}
          <div className="card">
            <div className="card-header bg-white">
              <h5 className="mb-0">Sipariş Özeti</h5>
            </div>
            <div className="card-body">
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
              {shippingCost > 0 && (
                <div className="alert alert-info small mb-3">
                  <i className="fas fa-info-circle me-2"></i>
                  500 ₺ ve üzeri alışverişlerde kargo ücretsizdir. Ücretsiz kargo için {(500 - cart.totalPrice).toLocaleString('tr-TR')} ₺ daha ürün ekleyin.
                </div>
              )}
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <strong>Toplam</strong>
                <strong className="text-primary">{totalAmount.toLocaleString('tr-TR')} ₺</strong>
              </div>
              <Link href="/checkout" className="btn btn-primary w-100">
                Ödeme Adımına Geç
              </Link>
              <div className="mt-3">
                <div className="d-flex justify-content-center">
                  <i className="fab fa-cc-visa fa-2x mx-1"></i>
                  <i className="fab fa-cc-mastercard fa-2x mx-1"></i>
                  <i className="fab fa-cc-paypal fa-2x mx-1"></i>
                  <i className="fas fa-money-bill-wave fa-2x mx-1"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
