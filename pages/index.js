import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '../components/products/ProductCard';
import products from '../data/products';

export default function Home() {
  // Öne çıkan ürünleri seç
  const featuredProducts = [
    products[0], // Ender 3 V2
    products[4], // PLA+ Filament
    products[8], // Minyatür Ejderha Figürü
    products[11] // Mimari Model STL
  ];

  const categories = [
    {
      id: 1,
      name: '3D Yazıcılar',
      image: '/images/categories/3d-printers.jpg',
      url: '/category/3d-printers'
    },
    {
      id: 2,
      name: 'Filamentler',
      image: '/images/categories/filaments.jpg',
      url: '/category/filaments'
    },
    {
      id: 3,
      name: '3D Baskı Ürünler',
      image: '/images/categories/3d-printed-products.jpg',
      url: '/category/3d-printed-products'
    },
    {
      id: 4,
      name: '3D Modeller',
      image: '/images/categories/3d-models.jpg',
      url: '/category/3d-models'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero text-center">
        <div className="container">
          <h1>3D Baskı Dünyasına Hoş Geldiniz</h1>
          <p>3D yazıcılar, filamentler, hazır baskı ürünler ve 3D modeller için tek adres</p>
          <div className="mt-4">
            <Link href="/category/3d-printers" className="btn btn-primary btn-lg me-2">
              Alışverişe Başla
            </Link>
            <Link href="/about" className="btn btn-outline-light btn-lg">
              Daha Fazla Bilgi
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="category-section">
        <div className="container">
          <h2 className="category-title">Kategoriler</h2>
          <div className="row g-4 mt-3">
            {categories.map(category => (
              <div key={category.id} className="col-6 col-md-3">
                <Link href={category.url} className="text-decoration-none">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-img-top position-relative" style={{ height: '150px', overflow: 'hidden' }}>
                      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <Image
                          src={category.image}
                          alt={category.name}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
                        <h5 className="text-white m-0">{category.name}</h5>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="category-section">
        <div className="container">
          <h2 className="category-title">Öne Çıkan Ürünler</h2>
          <div className="row g-4 mt-3">
            {featuredProducts.map(product => (
              <div key={product.id} className="col-12 col-md-6 col-lg-3">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="/products" className="btn btn-primary">
              Tüm Ürünleri Gör
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center">
                <i className="fas fa-truck fa-3x text-primary mb-3"></i>
                <h4>Hızlı Teslimat</h4>
                <p>Siparişleriniz aynı gün kargoya verilir ve en hızlı şekilde size ulaştırılır.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <i className="fas fa-shield-alt fa-3x text-primary mb-3"></i>
                <h4>Güvenli Ödeme</h4>
                <p>Tüm ödeme işlemleriniz SSL sertifikası ile güvence altındadır.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <i className="fas fa-headset fa-3x text-primary mb-3"></i>
                <h4>7/24 Destek</h4>
                <p>Sorularınız için müşteri hizmetlerimiz her zaman yanınızda.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <h3>Bültenimize Abone Olun</h3>
              <p className="mb-0">Yeni ürünler, indirimler ve 3D baskı dünyasındaki gelişmelerden haberdar olun.</p>
            </div>
            <div className="col-md-6">
              <div className="input-group">
                <input type="email" className="form-control" placeholder="E-posta adresiniz" />
                <button className="btn btn-dark" type="button">Abone Ol</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
