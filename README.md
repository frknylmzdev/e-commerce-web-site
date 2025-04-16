# 3D Print E-Ticaret Sitesi

Modern ve kullanıcı dostu bir 3D yazıcı e-ticaret platformu. Bu proje, 3D yazıcılar, filamentler, 3D baskı ürünler ve 3D modellerin satışını yapan bir online mağaza olarak tasarlanmıştır.

![3D Print E-Ticaret Ana Sayfa](./screenshots/homepage.png)

## 🚀 Özellikler

- **Modern Tasarım**: Bootstrap 5 ile oluşturulmuş temiz ve kullanıcı dostu arayüz
- **Responsive Tasarım**: Tüm cihazlarda (mobil, tablet, masaüstü) mükemmel görüntüleme
- **Ürün Kategorileri**: 3D Yazıcılar, Filamentler, 3D Baskı Ürünler ve 3D Modeller
- **Ürün Detay Sayfaları**: Detaylı ürün bilgileri, özellikler ve değerlendirmeler
- **Alışveriş Sepeti**: Ürün ekleme, çıkarma ve miktar güncelleme
- **Ödeme İşlemi**: Kullanıcı dostu ödeme akışı
- **Yerel Depolama**: Sepet bilgilerini tarayıcı yerel depolama alanında saklama

## 🛠️ Kullanılan Teknolojiler

- **Frontend Framework**: [Next.js](https://nextjs.org/) (React tabanlı)
- **Stil**: [SCSS](https://sass-lang.com/) ve [Bootstrap 5](https://getbootstrap.com/)
- **İkonlar**: [Font Awesome](https://fontawesome.com/)
- **State Yönetimi**: React Context API
- **Responsive Tasarım**: Özel medya sorguları ve Bootstrap grid sistemi
- **Deployment**: Vercel veya Netlify üzerinden kolayca deploy edilebilir

## 📋 Proje Yapısı

```
3d-print-ecommerce/
├── components/           # React bileşenleri
│   ├── layout/           # Layout bileşenleri (Header, Footer, Layout)
│   └── products/         # Ürün ile ilgili bileşenler (ProductCard)
├── context/              # React Context dosyaları
│   └── CartContext.js    # Sepet yönetimi için context
├── data/                 # Veri dosyaları
│   ├── products.js       # Ürün verileri
│   └── images.js         # Görsel URL'leri
├── pages/                # Next.js sayfaları
│   ├── _app.js           # Ana uygulama bileşeni
│   ├── index.js          # Ana sayfa
│   ├── cart.js           # Sepet sayfası
│   ├── checkout.js       # Ödeme sayfası
│   ├── category/         # Kategori sayfaları
│   │   └── [slug].js     # Dinamik kategori sayfası
│   └── product/          # Ürün sayfaları
│       └── [id].js       # Dinamik ürün detay sayfası
├── public/               # Statik dosyalar
│   └── images/           # Görsel dosyaları
├── styles/               # SCSS stil dosyaları
│   ├── globals.scss      # Ana stil dosyası
│   └── responsive.scss   # Responsive tasarım için stil dosyası
├── next.config.js        # Next.js yapılandırma dosyası
└── package.json          # Proje bağımlılıkları ve script'leri
```

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler

- Node.js (v14 veya üzeri)
- npm veya yarn

### Kurulum Adımları

1. Projeyi klonlayın:
   ```bash
   git clone https://github.com/kullaniciadi/3d-print-ecommerce.git
   cd 3d-print-ecommerce
   ```

2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   # veya
   yarn install
   ```

3. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   # veya
   yarn dev
   ```

4. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

### Derleme ve Dağıtım

Projeyi üretim için derlemek:

```bash
npm run build
# veya
yarn build
```

Derlenmiş uygulamayı çalıştırmak:

```bash
npm start
# veya
yarn start
```

## 📱 Responsive Tasarım

Bu proje, farklı ekran boyutlarına uyum sağlayacak şekilde tasarlanmıştır:

- **Mobil Cihazlar**: 576px'den küçük ekranlar
- **Tabletler**: 576px - 991px arası ekranlar
- **Masaüstü**: 992px ve üzeri ekranlar

Responsive tasarım, özel medya sorguları ve Bootstrap grid sistemi kullanılarak uygulanmıştır.

## 🛒 Alışveriş Sepeti İşlevselliği

Alışveriş sepeti işlevselliği, React Context API kullanılarak uygulanmıştır. Sepet verileri, tarayıcının yerel depolama alanında saklanır, böylece kullanıcılar sayfayı yenilediklerinde sepet içeriği korunur.

Sepet işlevleri:
- Ürün ekleme
- Ürün çıkarma
- Ürün miktarını güncelleme
- Sepeti temizleme
- Sepet özetini görüntüleme

## 🔍 Ürün Sayfaları

Ürün sayfaları, dinamik routing kullanılarak oluşturulmuştur. Her ürün için benzersiz bir URL oluşturulur ve ürün detayları bu URL üzerinden erişilebilir.

Ürün detay sayfası özellikleri:
- Ürün görselleri
- Ürün açıklaması
- Teknik özellikler
- Fiyat bilgisi
- Kullanıcı değerlendirmeleri
- Sepete ekleme işlevselliği

## 📝 Lisans

Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır.

## 📞 İletişim

Sorularınız veya geri bildirimleriniz için [email@example.com](mailto:email@example.com) adresine e-posta gönderebilirsiniz.

---

⭐️ Bu proje [GitHub](https://github.com/kullaniciadi/3d-print-ecommerce) üzerinde yıldız vermeyi unutmayın!
