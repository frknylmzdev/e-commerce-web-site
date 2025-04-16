import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-3">3D Print Shop</h5>
            <p>3D yazıcılar, filamentler, 3D baskı ürünler ve 3D modellerin satıldığı modern e-ticaret platformu.</p>
            <div className="social-icons mt-3">
              <a href="#" className="text-light me-3"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-light me-3"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-light me-3"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-light me-3"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="col-md-2 mb-4 mb-md-0">
            <h5 className="mb-3">Kategoriler</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/category/3d-printers" className="text-light text-decoration-none">
                  3D Yazıcılar
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/category/filaments" className="text-light text-decoration-none">
                  Filamentler
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/category/3d-printed-products" className="text-light text-decoration-none">
                  3D Baskı Ürünler
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/category/3d-models" className="text-light text-decoration-none">
                  3D Modeller
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 mb-4 mb-md-0">
            <h5 className="mb-3">Bilgi</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/about" className="text-light text-decoration-none">
                  Hakkımızda
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-light text-decoration-none">
                  İletişim
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/faq" className="text-light text-decoration-none">
                  Sık Sorulan Sorular
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/blog" className="text-light text-decoration-none">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="mb-3">Bültenimize Abone Olun</h5>
            <p>Yeni ürünler ve kampanyalardan haberdar olmak için bültenimize abone olun.</p>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="E-posta adresiniz" aria-label="E-posta adresiniz" />
              <button className="btn btn-primary" type="button">Abone Ol</button>
            </div>
          </div>
        </div>
        <hr className="mt-4 mb-4 bg-light" />
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">&copy; {new Date().getFullYear()} 3D Print Shop. Tüm hakları saklıdır.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <Link href="/privacy-policy" className="text-light text-decoration-none me-3">
              Gizlilik Politikası
            </Link>
            <Link href="/terms-of-service" className="text-light text-decoration-none">
              Kullanım Koşulları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
