import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link href="/" className="navbar-brand">
            <i className="fas fa-cube me-2"></i>
            3D Print Shop
          </Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded={!isNavCollapsed ? true : false} 
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  Ana Sayfa
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Kategoriler
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link href="/category/3d-printers" className="dropdown-item">
                      3D Yazıcılar
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/filaments" className="dropdown-item">
                      Filamentler
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/3d-printed-products" className="dropdown-item">
                      3D Baskı Ürünler
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/3d-models" className="dropdown-item">
                      3D Modeller
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link">
                  Hakkımızda
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">
                  İletişim
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <Link href="/cart" className="btn btn-outline-light me-2">
                <i className="fas fa-shopping-cart me-1"></i>
                Sepet <span className="badge bg-danger">0</span>
              </Link>
              <Link href="/account" className="btn btn-outline-light">
                <i className="fas fa-user me-1"></i>
                Hesabım
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
