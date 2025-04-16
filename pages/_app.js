import '../styles/globals.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Layout from '../components/Layout/Layout';
import { CartProvider } from '../context/CartContext';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
