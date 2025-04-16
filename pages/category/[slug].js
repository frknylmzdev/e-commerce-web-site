import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ProductCard from '../../components/products/ProductCard';
import allProducts from '../../data/products';

export default function CategoryPage() {
  const router = useRouter();
  const { slug } = router.query;
  
  const [sortBy, setSortBy] = useState('featured');
  
  // Kategori başlıklarını belirle
  const getCategoryTitle = (slug) => {
    switch(slug) {
      case '3d-printers':
        return '3D Yazıcılar';
      case 'filaments':
        return 'Filamentler';
      case '3d-printed-products':
        return '3D Baskı Ürünler';
      case '3d-models':
        return '3D Modeller';
      default:
        return 'Ürünler';
    }
  };
  
  // Kategoriye göre ürünleri filtrele
  const filteredProducts = allProducts.filter(product => {
    if (slug === '3d-printers') return product.category === '3D Yazıcılar';
    if (slug === 'filaments') return product.category === 'Filamentler';
    if (slug === '3d-printed-products') return product.category === '3D Baskı Ürünler';
    if (slug === '3d-models') return product.category === '3D Modeller';
    return true;
  });
  
  // Sıralama işlemi
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'newest') return b.isNew ? 1 : -1;
    // Default: featured
    return 0;
  });

  return (
    <div className="container py-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Ana Sayfa</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {getCategoryTitle(slug)}
          </li>
        </ol>
      </nav>
      
      <div className="row">
        {/* Sidebar / Filtreler */}
        <div className="col-lg-3 mb-4">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">Filtreler</h5>
            </div>
            <div className="card-body">
              <h6 className="mb-3">Fiyat Aralığı</h6>
              <div className="mb-3">
                <input type="range" className="form-range" min="0" max="15000" id="priceRange" />
                <div className="d-flex justify-content-between">
                  <span>0 ₺</span>
                  <span>15.000 ₺</span>
                </div>
              </div>
              
              <hr />
              
              <h6 className="mb-3">Markalar</h6>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" value="" id="brand1" />
                <label className="form-check-label" htmlFor="brand1">
                  Creality
                </label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" value="" id="brand2" />
                <label className="form-check-label" htmlFor="brand2">
                  Prusa
                </label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" value="" id="brand3" />
                <label className="form-check-label" htmlFor="brand3">
                  Anycubic
                </label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" value="" id="brand4" />
                <label className="form-check-label" htmlFor="brand4">
                  Ultimaker
                </label>
              </div>
              
              <hr />
              
              <h6 className="mb-3">Özellikler</h6>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" value="" id="feature1" />
                <label className="form-check-label" htmlFor="feature1">
                  İndirimli Ürünler
                </label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" value="" id="feature2" />
                <label className="form-check-label" htmlFor="feature2">
                  Yeni Ürünler
                </label>
              </div>
              
              <div className="d-grid gap-2 mt-4">
                <button className="btn btn-primary">Filtrele</button>
                <button className="btn btn-outline-secondary">Sıfırla</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Ürün Listesi */}
        <div className="col-lg-9">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>{getCategoryTitle(slug)}</h2>
            <div className="d-flex align-items-center">
              <label htmlFor="sortBy" className="me-2">Sırala:</label>
              <select 
                className="form-select" 
                id="sortBy" 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Öne Çıkanlar</option>
                <option value="price-low">Fiyat (Düşükten Yükseğe)</option>
                <option value="price-high">Fiyat (Yüksekten Düşüğe)</option>
                <option value="newest">En Yeniler</option>
              </select>
            </div>
          </div>
          
          {sortedProducts.length === 0 ? (
            <div className="alert alert-info">
              Bu kategoride henüz ürün bulunmamaktadır.
            </div>
          ) : (
            <div className="row g-4">
              {sortedProducts.map(product => (
                <div key={product.id} className="col-md-6 col-lg-4">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
          
          {/* Pagination */}
          <nav className="mt-5">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Önceki</a>
              </li>
              <li className="page-item active"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#">Sonraki</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
