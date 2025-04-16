import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import allProducts from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  
  // ID'ye göre ürünü bul
  const product = allProducts.find(p => p.id === parseInt(id)) || allProducts[0];
  
  const handleAddToCart = () => {
    addItem(product, quantity);
  };
  
  // Miktar değişikliği
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= product.stock) {
      setQuantity(value);
    }
  };
  
  // Miktar artırma
  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  // Miktar azaltma
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  // Aktif resim
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="container py-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Ana Sayfa</Link>
          </li>
          <li className="breadcrumb-item">
            <Link href={`/category/${product.category === '3D Yazıcılar' ? '3d-printers' : 
                          product.category === 'Filamentler' ? 'filaments' : 
                          product.category === '3D Baskı Ürünler' ? '3d-printed-products' : '3d-models'}`}>
              {product.category}
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {product.name}
          </li>
        </ol>
      </nav>
      
      <div className="row">
        {/* Ürün Görselleri */}
        <div className="col-md-6 mb-4">
          <div className="position-relative mb-3" style={{ height: '400px' }}>
            {product.discount && (
              <div className="position-absolute top-0 start-0 bg-danger text-white py-1 px-2 m-2 rounded-pill z-1">
                %{product.discount} İndirim
              </div>
            )}
            <div className="position-relative h-100">
              <Image 
                src={product.images[activeImage]} 
                alt={product.name}
                fill
                style={{ objectFit: 'contain' }}
                className="product-image"
              />
            </div>
          </div>
          <div className="row g-2">
            {product.images.map((image, index) => (
              <div key={index} className="col-3">
                <div 
                  className={`position-relative border ${activeImage === index ? 'border-primary' : ''}`} 
                  style={{ height: '80px', cursor: 'pointer' }}
                  onClick={() => setActiveImage(index)}
                >
                  <Image 
                    src={image} 
                    alt={`${product.name} - Görsel ${index + 1}`}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Ürün Bilgileri */}
        <div className="col-md-6 product-detail">
          <h1 className="product-title">{product.name}</h1>
          
          <div className="d-flex align-items-center mb-3">
            <div className="me-3">
              <i className={`fas fa-star ${product.rating >= 1 ? 'text-warning' : 'text-muted'}`}></i>
              <i className={`fas fa-star ${product.rating >= 2 ? 'text-warning' : 'text-muted'}`}></i>
              <i className={`fas fa-star ${product.rating >= 3 ? 'text-warning' : 'text-muted'}`}></i>
              <i className={`fas fa-star ${product.rating >= 4 ? 'text-warning' : 'text-muted'}`}></i>
              <i className={`fas fa-star ${product.rating >= 5 ? 'text-warning' : 'text-muted'}`}></i>
            </div>
            <span className="text-muted">{product.reviews} Değerlendirme</span>
          </div>
          
          <div className="mb-3">
            {product.oldPrice ? (
              <div className="d-flex align-items-center">
                <span className="text-decoration-line-through text-muted me-2">
                  {product.oldPrice.toLocaleString('tr-TR')} ₺
                </span>
                <span className="product-price">{product.price.toLocaleString('tr-TR')} ₺</span>
              </div>
            ) : (
              <span className="product-price">{product.price.toLocaleString('tr-TR')} ₺</span>
            )}
          </div>
          
          <p className="product-description">{product.shortDescription}</p>
          
          <div className="mb-4">
            <div className="d-flex align-items-center">
              <span className={`badge ${product.stock > 0 ? 'bg-success' : 'bg-danger'} me-2`}>
                {product.stock > 0 ? 'Stokta' : 'Tükendi'}
              </span>
              {product.stock > 0 && (
                <span className="text-muted">
                  {product.stock} adet stokta
                </span>
              )}
            </div>
          </div>
          
          <div className="mb-4">
            <div className="d-flex align-items-center">
              <div className="input-group me-3" style={{ width: '150px' }}>
                <button 
                  className="btn btn-outline-secondary" 
                  type="button"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                >
                  <i className="fas fa-minus"></i>
                </button>
                <input 
                  type="number" 
                  className="form-control text-center" 
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                  max={product.stock}
                />
                <button 
                  className="btn btn-outline-secondary" 
                  type="button"
                  onClick={increaseQuantity}
                  disabled={quantity >= product.stock}
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <button className="btn btn-primary btn-lg" onClick={handleAddToCart}>
                <i className="fas fa-shopping-cart me-2"></i>
                Sepete Ekle
              </button>
            </div>
          </div>
          
          <div className="d-flex mb-4">
            <button className="btn btn-outline-secondary me-2">
              <i className="far fa-heart me-1"></i>
              Favorilere Ekle
            </button>
            <button className="btn btn-outline-secondary">
              <i className="fas fa-share-alt me-1"></i>
              Paylaş
            </button>
          </div>
          
          <div className="mb-4">
            <h5>Ödeme Seçenekleri</h5>
            <div className="d-flex">
              <i className="fab fa-cc-visa fa-2x me-2"></i>
              <i className="fab fa-cc-mastercard fa-2x me-2"></i>
              <i className="fab fa-cc-paypal fa-2x me-2"></i>
              <i className="fas fa-money-bill-wave fa-2x"></i>
            </div>
          </div>
          
          <div>
            <h5>Kargo Bilgileri</h5>
            <p className="mb-1">
              <i className="fas fa-truck me-2"></i>
              Aynı gün kargoya verilir
            </p>
            <p className="mb-0">
              <i className="fas fa-box me-2"></i>
              Ücretsiz kargo (500 ₺ ve üzeri alışverişlerde)
            </p>
          </div>
        </div>
      </div>
      
      {/* Ürün Detayları Tabları */}
      <div className="row mt-5">
        <div className="col-12">
          <ul className="nav nav-tabs" id="productTabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button 
                className="nav-link active" 
                id="description-tab" 
                data-bs-toggle="tab" 
                data-bs-target="#description" 
                type="button" 
                role="tab" 
                aria-controls="description" 
                aria-selected="true"
              >
                Ürün Açıklaması
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button 
                className="nav-link" 
                id="specifications-tab" 
                data-bs-toggle="tab" 
                data-bs-target="#specifications" 
                type="button" 
                role="tab" 
                aria-controls="specifications" 
                aria-selected="false"
              >
                Teknik Özellikler
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button 
                className="nav-link" 
                id="reviews-tab" 
                data-bs-toggle="tab" 
                data-bs-target="#reviews" 
                type="button" 
                role="tab" 
                aria-controls="reviews" 
                aria-selected="false"
              >
                Değerlendirmeler ({product.reviews})
              </button>
            </li>
          </ul>
          <div className="tab-content p-4 border border-top-0 rounded-bottom" id="productTabsContent">
            <div 
              className="tab-pane fade show active" 
              id="description" 
              role="tabpanel" 
              aria-labelledby="description-tab"
            >
              <div className="product-description" style={{ whiteSpace: 'pre-line' }}>
                {product.description}
              </div>
            </div>
            <div 
              className="tab-pane fade" 
              id="specifications" 
              role="tabpanel" 
              aria-labelledby="specifications-tab"
            >
              <table className="table table-striped">
                <tbody>
                  {product.specifications.map((spec, index) => (
                    <tr key={index}>
                      <th style={{ width: '30%' }}>{spec.name}</th>
                      <td>{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div 
              className="tab-pane fade" 
              id="reviews" 
              role="tabpanel" 
              aria-labelledby="reviews-tab"
            >
              <div className="mb-4">
                <h4>Müşteri Değerlendirmeleri</h4>
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3">
                    <span className="display-4">{product.rating}</span>
                    <span className="text-muted">/ 5</span>
                  </div>
                  <div>
                    <div className="mb-1">
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <span className="ms-2">80%</span>
                    </div>
                    <div className="mb-1">
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="far fa-star text-warning"></i>
                      <span className="ms-2">15%</span>
                    </div>
                    <div className="mb-1">
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="far fa-star text-warning"></i>
                      <i className="far fa-star text-warning"></i>
                      <span className="ms-2">5%</span>
                    </div>
                    <div className="mb-1">
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="far fa-star text-warning"></i>
                      <i className="far fa-star text-warning"></i>
                      <i className="far fa-star text-warning"></i>
                      <span className="ms-2">0%</span>
                    </div>
                    <div>
                      <i className="fas fa-star text-warning"></i>
                      <i className="far fa-star text-warning"></i>
                      <i className="far fa-star text-warning"></i>
                      <i className="far fa-star text-warning"></i>
                      <i className="far fa-star text-warning"></i>
                      <span className="ms-2">0%</span>
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary">Değerlendirme Yaz</button>
              </div>
              
              <hr />
              
              <div className="review-list">
                <div className="review-item mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <div>
                      <h5 className="mb-0">Ahmet Y.</h5>
                      <div>
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                      </div>
                    </div>
                    <div className="text-muted">12.03.2025</div>
                  </div>
                  <p>Harika bir ürün! Kurulumu çok kolay ve baskı kalitesi beklediğimden çok daha iyi. Başlangıç seviyesi için kesinlikle tavsiye ederim.</p>
                </div>
                
                <div className="review-item mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <div>
                      <h5 className="mb-0">Mehmet K.</h5>
                      <div>
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                        <i className="far fa-star text-warning"></i>
                      </div>
                    </div>
                    <div className="text-muted">05.03.2025</div>
                  </div>
                  <p>Fiyat/performans açısından çok iyi bir ürün. Kurulum biraz zaman alıyor ama sonuç mükemmel. Sadece fan sesi biraz fazla olabilir.</p>
                </div>
                
                <div className="review-item">
                  <div className="d-flex justify-content-between mb-2">
                    <div>
                      <h5 className="mb-0">Ayşe S.</h5>
                      <div>
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                      </div>
                    </div>
                    <div className="text-muted">20.02.2025</div>
                  </div>
                  <p>3D baskı dünyasına yeni girdim ve bu yazıcı ile başlamak harika bir karar oldu. Kullanımı kolay ve sonuçlar etkileyici. Kesinlikle tavsiye ederim!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Benzer Ürünler */}
      <section className="mt-5">
        <h3 className="mb-4">Benzer Ürünler</h3>
        <div className="row g-4">
          <div className="col-md-3">
            <div className="card product-card h-100">
              <Image 
                src="/images/products/cr10.jpg" 
                alt="Creality CR-10 3D Yazıcı"
                width={300}
                height={300}
                className="card-img-top"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Creality CR-10 3D Yazıcı</h5>
                <p className="card-text flex-grow-1">Geniş baskı alanına sahip profesyonel 3D yazıcı</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="price">7.999,99 ₺</span>
                  <button className="btn btn-primary">
                    <i className="fas fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-3">
            <div className="card product-card h-100">
              <Image 
                src="/images/products/prusa.jpg" 
                alt="Prusa i3 MK3S+ 3D Yazıcı"
                width={300}
                height={300}
                className="card-img-top"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Prusa i3 MK3S+ 3D Yazıcı</h5>
                <p className="card-text flex-grow-1">Yüksek hassasiyetli, güvenilir 3D yazıcı</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="price">12.999,99 ₺</span>
                  <button className="btn btn-primary">
                    <i className="fas fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-3">
            <div className="card product-card h-100">
              <Image 
                src="/images/products/photon.jpg" 
                alt="Anycubic Photon Mono X 3D Yazıcı"
                width={300}
                height={300}
                className="card-img-top"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Anycubic Photon Mono X 3D Yazıcı</h5>
                <p className="card-text flex-grow-1">Reçine bazlı, yüksek detaylı baskı yapabilen 3D yazıcı</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="price">9.999,99 ₺</span>
                  <button className="btn btn-primary">
                    <i className="fas fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-3">
            <div className="card product-card h-100">
              <Image 
                src="/images/products/pla-filament.jpg" 
                alt="PLA+ Filament 1kg"
                width={300}
                height={300}
                className="card-img-top"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">PLA+ Filament 1kg</h5>
                <p className="card-text flex-grow-1">Yüksek kaliteli, dayanıklı PLA+ filament</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="price">349,99 ₺</span>
                  <button className="btn btn-primary">
                    <i className="fas fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
