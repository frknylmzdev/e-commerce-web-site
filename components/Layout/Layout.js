import Head from 'next/head';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, title = '3D Yazıcı E-Ticaret' }) {
  useEffect(() => {
    // Bootstrap JS
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="3D yazıcılar, filamentler, 3D baskı ürünler ve 3D modellerin satıldığı modern e-ticaret sitesi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <main className="container py-4">
        {children}
      </main>
      <Footer />
    </>
  );
}
