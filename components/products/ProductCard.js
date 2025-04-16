import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, 1);
  };

  return (
    <div className="card product-card h-100">
      <div className="position-relative">
        {product.discount && (
          <div className="position-absolute top-0 start-0 bg-danger text-white py-1 px-2 m-2 rounded-pill">
            %{product.discount} İndirim
          </div>
        )}
        {product.isNew && (
          <div className="position-absolute top-0 end-0 bg-success text-white py-1 px-2 m-2 rounded-pill">
            Yeni
          </div>
        )}
        <Image 
          src={product.image} 
          alt={product.name}
          width={300}
          height={300}
          className="card-img-top"
        />
      </div>
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="badge bg-secondary">{product.category}</span>
          <button className="btn btn-sm btn-outline-danger">
            <i className="far fa-heart"></i>
          </button>
        </div>
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text flex-grow-1">{product.shortDescription}</p>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div>
            {product.oldPrice ? (
              <>
                <span className="text-decoration-line-through text-muted me-2">
                  {product.oldPrice.toLocaleString('tr-TR')} ₺
                </span>
                <span className="price">{product.price.toLocaleString('tr-TR')} ₺</span>
              </>
            ) : (
              <span className="price">{product.price.toLocaleString('tr-TR')} ₺</span>
            )}
          </div>
          <div className="d-flex">
            <Link href={`/product/${product.id}`} className="btn btn-outline-primary me-2">
              <i className="fas fa-eye"></i>
            </Link>
            <button className="btn btn-primary" onClick={handleAddToCart}>
              <i className="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
