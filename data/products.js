// Ürün verileri
const products = [
  // 3D Yazıcılar
  {
    id: 1,
    name: 'Ender 3 V2 3D Yazıcı',
    shortDescription: 'Yeni başlayanlar için ideal, yüksek kaliteli 3D yazıcı',
    description: `Creality Ender 3 V2, yeni başlayanlar ve hobi kullanıcıları için tasarlanmış, kullanımı kolay ve uygun fiyatlı bir 3D yazıcıdır. Yüksek kaliteli baskılar elde etmenizi sağlayan gelişmiş özelliklere sahiptir.

    Özellikler:
    - Baskı Hacmi: 220 x 220 x 250 mm
    - Baskı Hassasiyeti: ±0.1mm
    - Nozzle Çapı: 0.4mm
    - Filament Çapı: 1.75mm
    - Maksimum Nozzle Sıcaklığı: 260°C
    - Maksimum Tabla Sıcaklığı: 100°C
    - Baskı Hızı: 30-180mm/s
    - Desteklenen Filamentler: PLA, ABS, PETG, TPU
    
    Paket İçeriği:
    - Ender 3 V2 3D Yazıcı
    - Güç Kablosu
    - USB Kablo
    - Örnek PLA Filament
    - Spatula
    - Yan Keski
    - Nozzle Temizleme İğnesi
    - SD Kart ve Kart Okuyucu
    - Yedek Nozzle
    - Montaj Araçları ve Vidalar
    - Kullanım Kılavuzu`,
    price: 4999.99,
    oldPrice: 5499.99,
    discount: 10,
    category: '3D Yazıcılar',
    image: '/images/products/ender3v2.jpg',
    images: [
      '/images/products/ender3v2.jpg',
      '/images/products/ender3v2-2.jpg',
      '/images/products/ender3v2-3.jpg',
    ],
    stock: 15,
    rating: 4.5,
    reviews: 28,
    isNew: false,
    specifications: [
      { name: 'Baskı Teknolojisi', value: 'FDM (Fused Deposition Modeling)' },
      { name: 'Baskı Hacmi', value: '220 x 220 x 250 mm' },
      { name: 'Baskı Hassasiyeti', value: '±0.1mm' },
      { name: 'Nozzle Çapı', value: '0.4mm' },
      { name: 'Filament Çapı', value: '1.75mm' },
      { name: 'Maksimum Nozzle Sıcaklığı', value: '260°C' },
      { name: 'Maksimum Tabla Sıcaklığı', value: '100°C' },
      { name: 'Baskı Hızı', value: '30-180mm/s' },
      { name: 'Desteklenen Filamentler', value: 'PLA, ABS, PETG, TPU' },
      { name: 'Bağlantı', value: 'SD Kart, USB' },
      { name: 'Güç Tüketimi', value: '350W' },
      { name: 'Boyutlar', value: '475 x 470 x 620 mm' },
      { name: 'Ağırlık', value: '7.8 kg' }
    ]
  },
  {
    id: 5,
    name: 'Creality CR-10 3D Yazıcı',
    shortDescription: 'Geniş baskı alanına sahip profesyonel 3D yazıcı',
    description: `Creality CR-10, geniş baskı hacmi ve sağlam yapısıyla büyük ölçekli projeler için ideal bir 3D yazıcıdır. Kolay kurulum ve kullanım özellikleriyle hem yeni başlayanlar hem de deneyimli kullanıcılar için uygundur.

    Özellikler:
    - Baskı Hacmi: 300 x 300 x 400 mm
    - Baskı Hassasiyeti: ±0.1mm
    - Nozzle Çapı: 0.4mm
    - Filament Çapı: 1.75mm
    - Maksimum Nozzle Sıcaklığı: 260°C
    - Maksimum Tabla Sıcaklığı: 100°C
    - Baskı Hızı: 30-180mm/s
    - Desteklenen Filamentler: PLA, ABS, PETG, TPU, Wood
    
    Paket İçeriği:
    - CR-10 3D Yazıcı
    - Kontrol Kutusu
    - Güç Kablosu
    - USB Kablo
    - Örnek PLA Filament
    - Spatula
    - Yan Keski
    - Nozzle Temizleme İğnesi
    - SD Kart ve Kart Okuyucu
    - Yedek Nozzle
    - Montaj Araçları ve Vidalar
    - Kullanım Kılavuzu`,
    price: 7999.99,
    oldPrice: 8499.99,
    discount: 5,
    category: '3D Yazıcılar',
    image: '/images/products/cr10.jpg',
    images: [
      '/images/products/cr10.jpg',
      '/images/products/cr10-2.jpg',
      '/images/products/cr10-3.jpg',
    ],
    stock: 8,
    rating: 4.7,
    reviews: 15,
    isNew: true,
    specifications: [
      { name: 'Baskı Teknolojisi', value: 'FDM (Fused Deposition Modeling)' },
      { name: 'Baskı Hacmi', value: '300 x 300 x 400 mm' },
      { name: 'Baskı Hassasiyeti', value: '±0.1mm' },
      { name: 'Nozzle Çapı', value: '0.4mm' },
      { name: 'Filament Çapı', value: '1.75mm' },
      { name: 'Maksimum Nozzle Sıcaklığı', value: '260°C' },
      { name: 'Maksimum Tabla Sıcaklığı', value: '100°C' },
      { name: 'Baskı Hızı', value: '30-180mm/s' },
      { name: 'Desteklenen Filamentler', value: 'PLA, ABS, PETG, TPU, Wood' },
      { name: 'Bağlantı', value: 'SD Kart, USB' },
      { name: 'Güç Tüketimi', value: '500W' },
      { name: 'Boyutlar', value: '620 x 500 x 700 mm' },
      { name: 'Ağırlık', value: '13.5 kg' }
    ]
  },
  {
    id: 6,
    name: 'Prusa i3 MK3S+ 3D Yazıcı',
    shortDescription: 'Yüksek hassasiyetli, güvenilir 3D yazıcı',
    description: `Prusa i3 MK3S+, endüstri standardı haline gelmiş, yüksek kaliteli ve güvenilir bir 3D yazıcıdır. Gelişmiş özellikleri ve açık kaynak yazılımı ile profesyonel kullanıcılar için ideal bir seçimdir.

    Özellikler:
    - Baskı Hacmi: 250 x 210 x 210 mm
    - Baskı Hassasiyeti: ±0.05mm
    - Nozzle Çapı: 0.4mm
    - Filament Çapı: 1.75mm
    - Maksimum Nozzle Sıcaklığı: 300°C
    - Maksimum Tabla Sıcaklığı: 120°C
    - Baskı Hızı: 200mm/s'ye kadar
    - Desteklenen Filamentler: PLA, ABS, PETG, TPU, PC, Nylon, ASA, PP, HIPS
    
    Paket İçeriği:
    - Prusa i3 MK3S+ 3D Yazıcı
    - Güç Kablosu
    - USB Kablo
    - 1kg PLA Filament
    - Bakım Kiti
    - Yedek Parçalar
    - Montaj ve Kullanım Kılavuzu`,
    price: 12999.99,
    oldPrice: null,
    discount: null,
    category: '3D Yazıcılar',
    image: '/images/products/prusa.jpg',
    images: [
      '/images/products/prusa.jpg',
      '/images/products/prusa-2.jpg',
      '/images/products/prusa-3.jpg',
    ],
    stock: 5,
    rating: 4.9,
    reviews: 32,
    isNew: false,
    specifications: [
      { name: 'Baskı Teknolojisi', value: 'FDM (Fused Deposition Modeling)' },
      { name: 'Baskı Hacmi', value: '250 x 210 x 210 mm' },
      { name: 'Baskı Hassasiyeti', value: '±0.05mm' },
      { name: 'Nozzle Çapı', value: '0.4mm' },
      { name: 'Filament Çapı', value: '1.75mm' },
      { name: 'Maksimum Nozzle Sıcaklığı', value: '300°C' },
      { name: 'Maksimum Tabla Sıcaklığı', value: '120°C' },
      { name: 'Baskı Hızı', value: '200mm/s\'ye kadar' },
      { name: 'Desteklenen Filamentler', value: 'PLA, ABS, PETG, TPU, PC, Nylon, ASA, PP, HIPS' },
      { name: 'Bağlantı', value: 'USB, Wi-Fi, Ethernet, SD Kart' },
      { name: 'Güç Tüketimi', value: '240W' },
      { name: 'Boyutlar', value: '500 x 400 x 550 mm' },
      { name: 'Ağırlık', value: '7 kg' }
    ]
  },
  {
    id: 7,
    name: 'Anycubic Photon Mono X 3D Yazıcı',
    shortDescription: 'Reçine bazlı, yüksek detaylı baskı yapabilen 3D yazıcı',
    description: `Anycubic Photon Mono X, reçine bazlı (SLA) teknolojisi ile çalışan, yüksek detaylı ve hassas baskılar yapabilen profesyonel bir 3D yazıcıdır. Büyük baskı hacmi ve hızlı baskı özellikleri ile öne çıkar.

    Özellikler:
    - Baskı Teknolojisi: MSLA (Masked Stereolithography)
    - Baskı Hacmi: 192 x 120 x 245 mm
    - XY Çözünürlük: 50 mikron (0.05mm)
    - Z Ekseni Çözünürlüğü: 0.01mm
    - Işık Kaynağı: UV LED
    - Ekran: 8.9 inç 4K Monokrom LCD
    - Baskı Hızı: 60mm/saat
    
    Paket İçeriği:
    - Photon Mono X 3D Yazıcı
    - Güç Kablosu
    - USB Bellek
    - Kullanım Kılavuzu
    - Reçine Tankı
    - Baskı Platformu
    - Maske
    - Eldiven
    - Filtre Hunisi
    - Spatula
    - Temizlik Malzemeleri`,
    price: 9999.99,
    oldPrice: 11999.99,
    discount: 15,
    category: '3D Yazıcılar',
    image: '/images/products/photon.jpg',
    images: [
      '/images/products/photon.jpg',
      '/images/products/photon-2.jpg',
      '/images/products/photon-3.jpg',
    ],
    stock: 3,
    rating: 4.8,
    reviews: 22,
    isNew: false,
    specifications: [
      { name: 'Baskı Teknolojisi', value: 'MSLA (Masked Stereolithography)' },
      { name: 'Baskı Hacmi', value: '192 x 120 x 245 mm' },
      { name: 'XY Çözünürlük', value: '50 mikron (0.05mm)' },
      { name: 'Z Ekseni Çözünürlüğü', value: '0.01mm' },
      { name: 'Işık Kaynağı', value: 'UV LED' },
      { name: 'Ekran', value: '8.9 inç 4K Monokrom LCD' },
      { name: 'Baskı Hızı', value: '60mm/saat' },
      { name: 'Desteklenen Reçineler', value: 'Tüm 405nm UV reçineler' },
      { name: 'Bağlantı', value: 'USB, Wi-Fi' },
      { name: 'Güç Tüketimi', value: '120W' },
      { name: 'Boyutlar', value: '290 x 290 x 475 mm' },
      { name: 'Ağırlık', value: '10.75 kg' }
    ]
  },
  
  // Filamentler
  {
    id: 2,
    name: 'PLA+ Filament 1kg',
    shortDescription: 'Yüksek kaliteli, dayanıklı PLA+ filament',
    description: `PLA+ filament, standart PLA'dan daha dayanıklı ve daha az kırılgan özelliklere sahip geliştirilmiş bir filament türüdür. Kolay baskı özellikleri ve geniş renk seçenekleri ile 3D baskı projeleriniz için ideal bir seçimdir.

    Özellikler:
    - Malzeme: PLA+ (Polilaktik Asit Plus)
    - Çap: 1.75mm (±0.03mm tolerans)
    - Ağırlık: 1kg
    - Önerilen Nozzle Sıcaklığı: 190-220°C
    - Önerilen Tabla Sıcaklığı: 50-60°C
    - Renk: Beyaz
    - Vakumlu Paketleme
    
    Avantajları:
    - Standart PLA'dan daha dayanıklı
    - Daha az kırılgan
    - Kolay baskı
    - Minimal çarpılma
    - Düşük koku
    - Çevre dostu
    
    Kullanım Alanları:
    - Prototip oluşturma
    - Mimari modeller
    - Oyuncaklar
    - Dekoratif objeler
    - Fonksiyonel parçalar`,
    price: 349.99,
    oldPrice: null,
    discount: null,
    category: 'Filamentler',
    image: '/images/products/pla-filament.jpg',
    images: [
      '/images/products/pla-filament.jpg',
      '/images/products/pla-filament-2.jpg',
      '/images/products/pla-filament-3.jpg',
    ],
    stock: 50,
    rating: 4.6,
    reviews: 42,
    isNew: true,
    specifications: [
      { name: 'Malzeme', value: 'PLA+ (Polilaktik Asit Plus)' },
      { name: 'Çap', value: '1.75mm (±0.03mm tolerans)' },
      { name: 'Ağırlık', value: '1kg' },
      { name: 'Önerilen Nozzle Sıcaklığı', value: '190-220°C' },
      { name: 'Önerilen Tabla Sıcaklığı', value: '50-60°C' },
      { name: 'Renk', value: 'Beyaz' },
      { name: 'Paketleme', value: 'Vakumlu Paketleme' },
      { name: 'Yoğunluk', value: '1.24 g/cm³' },
      { name: 'Erime Noktası', value: '180°C' },
      { name: 'Çarpılma', value: 'Minimal' }
    ]
  },
  {
    id: 8,
    name: 'PETG Filament 1kg',
    shortDescription: 'Dayanıklı ve esnek PETG filament',
    description: `PETG filament, PLA'dan daha dayanıklı ve ABS'den daha kolay baskı yapılabilen bir filament türüdür. Yüksek darbe dayanımı, kimyasal direnci ve esnekliği ile fonksiyonel parçalar için idealdir.

    Özellikler:
    - Malzeme: PETG (Polietilen Tereftalat Glikol)
    - Çap: 1.75mm (±0.03mm tolerans)
    - Ağırlık: 1kg
    - Önerilen Nozzle Sıcaklığı: 230-250°C
    - Önerilen Tabla Sıcaklığı: 70-80°C
    - Renk: Şeffaf Mavi
    - Vakumlu Paketleme
    
    Avantajları:
    - Yüksek darbe dayanımı
    - Kimyasal direnci
    - Esneklik
    - UV direnci
    - Düşük çarpılma
    - Düşük koku
    
    Kullanım Alanları:
    - Mekanik parçalar
    - Fonksiyonel prototipleme
    - Su geçirmez uygulamalar
    - Dış mekan kullanımı
    - Gıda ile temas eden ürünler
    - Dayanıklı kaplar ve tutucular`,
    price: 399.99,
    oldPrice: 449.99,
    discount: 10,
    category: 'Filamentler',
    image: '/images/products/petg-filament.jpg',
    images: [
      '/images/products/petg-filament.jpg',
      '/images/products/petg-filament-2.jpg',
      '/images/products/petg-filament-3.jpg',
    ],
    stock: 35,
    rating: 4.7,
    reviews: 31,
    isNew: false,
    specifications: [
      { name: 'Malzeme', value: 'PETG (Polietilen Tereftalat Glikol)' },
      { name: 'Çap', value: '1.75mm (±0.03mm tolerans)' },
      { name: 'Ağırlık', value: '1kg' },
      { name: 'Önerilen Nozzle Sıcaklığı', value: '230-250°C' },
      { name: 'Önerilen Tabla Sıcaklığı', value: '70-80°C' },
      { name: 'Renk', value: 'Şeffaf Mavi' },
      { name: 'Paketleme', value: 'Vakumlu Paketleme' },
      { name: 'Yoğunluk', value: '1.27 g/cm³' },
      { name: 'Erime Noktası', value: '230°C' },
      { name: 'Çarpılma', value: 'Düşük' }
    ]
  },
  {
    id: 9,
    name: 'ABS Filament 1kg',
    shortDescription: 'Yüksek sıcaklık dayanımı olan ABS filament',
    description: `ABS filament, yüksek sıcaklık dayanımı ve darbe direnci ile mekanik parçalar için ideal bir filament türüdür. Asetonla işlenebilme özelliği sayesinde pürüzsüz yüzeyler elde edilebilir.

    Özellikler:
    - Malzeme: ABS (Akrilonitril Bütadien Stiren)
    - Çap: 1.75mm (±0.03mm tolerans)
    - Ağırlık: 1kg
    - Önerilen Nozzle Sıcaklığı: 230-250°C
    - Önerilen Tabla Sıcaklığı: 90-110°C
    - Renk: Siyah
    - Vakumlu Paketleme
    
    Avantajları:
    - Yüksek sıcaklık dayanımı
    - Darbe direnci
    - Asetonla işlenebilme
    - Sağlamlık
    - Uzun ömür
    
    Kullanım Alanları:
    - Mekanik parçalar
    - Otomotiv parçaları
    - Elektronik muhafazalar
    - Dayanıklı prototipleme
    - Fonksiyonel parçalar
    - Yüksek sıcaklık uygulamaları`,
    price: 379.99,
    oldPrice: 429.99,
    discount: 10,
    category: 'Filamentler',
    image: '/images/products/abs-filament.jpg',
    images: [
      '/images/products/abs-filament.jpg',
      '/images/products/abs-filament-2.jpg',
      '/images/products/abs-filament-3.jpg',
    ],
    stock: 25,
    rating: 4.5,
    reviews: 27,
    isNew: false,
    specifications: [
      { name: 'Malzeme', value: 'ABS (Akrilonitril Bütadien Stiren)' },
      { name: 'Çap', value: '1.75mm (±0.03mm tolerans)' },
      { name: 'Ağırlık', value: '1kg' },
      { name: 'Önerilen Nozzle Sıcaklığı', value: '230-250°C' },
      { name: 'Önerilen Tabla Sıcaklığı', value: '90-110°C' },
      { name: 'Renk', value: 'Siyah' },
      { name: 'Paketleme', value: 'Vakumlu Paketleme' },
      { name: 'Yoğunluk', value: '1.04 g/cm³' },
      { name: 'Erime Noktası', value: '220°C' },
      { name: 'Çarpılma', value: 'Orta-Yüksek' }
    ]
  },
  
  // 3D Baskı Ürünler
  {
    id: 3,
    name: 'Minyatür Ejderha Figürü',
    shortDescription: '3D baskı ile üretilmiş detaylı ejderha figürü',
    description: `Bu detaylı ejderha figürü, yüksek kaliteli 3D baskı teknolojisi ile üretilmiştir. Fantastik koleksiyonunuz için mükemmel bir eklenti veya masa oyunları için ideal bir minyatürdür.

    Özellikler:
    - Malzeme: Yüksek kaliteli PLA
    - Boyutlar: 15cm x 10cm x 12cm
    - Ağırlık: 120g
    - El boyaması
    - Detaylı yüzey özellikleri
    
    Tasarım Özellikleri:
    - Detaylı pul desenleri
    - Keskin pençeler ve dişler
    - Dinamik poz
    - Kanat detayları
    
    Kullanım Alanları:
    - Koleksiyon parçası
    - Masa oyunları için minyatür
    - Dekoratif obje
    - Hediye
    
    Not: Her figür el boyaması olduğundan, renk tonlarında küçük farklılıklar olabilir.`,
    price: 199.99,
    oldPrice: 249.99,
    discount: 20,
    category: '3D Baskı Ürünler',
    image: '/images/products/dragon-figure.jpg',
    images: [
      '/images/products/dragon-figure.jpg',
      '/images/products/dragon-figure-2.jpg',
      '/images/products/dragon-figure-3.jpg',
    ],
    stock: 18,
    rating: 4.8,
    reviews: 35,
    isNew: false,
    specifications: [
      { name: 'Malzeme', value: 'Yüksek kaliteli PLA' },
      { name: 'Boyutlar', value: '15cm x 10cm x 12cm' },
      { name: 'Ağırlık', value: '120g' },
      { name: 'Boya', value: 'El boyaması, akrilik' },
      { name: 'Baskı Katman Yüksekliği', value: '0.1mm' },
      { name: 'Doluluk Oranı', value: '%20' },
      { name: 'Üretim Süresi', value: '14 saat' },
      { name: 'Paketleme', value: 'Koruyucu köpük içinde kutu' }
    ]
  },
  {
    id: 10,
    name: 'Masaüstü Organizer',
    shortDescription: 'Modüler tasarımlı 3D baskı masaüstü düzenleyici',
    description: `Bu modüler masaüstü organizer, çalışma alanınızı düzenli tutmak için tasarlanmış pratik bir 3D baskı üründür. Kalem tutucu, not kağıdı bölmesi ve küçük eşyalar için bölmeler içerir.

    Özellikler:
    - Malzeme: Dayanıklı PETG
    - Boyutlar: 25cm x 15cm x 10cm
    - Ağırlık: 250g
    - Modüler tasarım
    - 5 farklı bölme
    
    Tasarım Özellikleri:
    - Kalem ve kalemlik bölmesi
    - Not kağıdı tutucu
    - Telefon standı
    - Ataç ve küçük eşya bölmeleri
    - Çıkarılabilir modüller
    
    Kullanım Alanları:
    - Ofis masası
    - Çalışma masası
    - Ev kullanımı
    - Hediye
    
    Not: Ürün rengi stok durumuna göre değişebilir. Mevcut renkler: Siyah, Beyaz, Mavi.`,
    price: 149.99,
    oldPrice: 179.99,
    discount: 15,
    category: '3D Baskı Ürünler',
    image: '/images/products/desk-organizer.jpg',
    images: [
      '/images/products/desk-organizer.jpg',
      '/images/products/desk-organizer-2.jpg',
      '/images/products/desk-organizer-3.jpg',
    ],
    stock: 22,
    rating: 4.6,
    reviews: 29,
    isNew: true,
    specifications: [
      { name: 'Malzeme', value: 'Dayanıklı PETG' },
      { name: 'Boyutlar', value: '25cm x 15cm x 10cm' },
      { name: 'Ağırlık', value: '250g' },
      { name: 'Renk Seçenekleri', value: 'Siyah, Beyaz, Mavi' },
      { name: 'Baskı Katman Yüksekliği', value: '0.2mm' },
      { name: 'Doluluk Oranı', value: '%15' },
      { name: 'Üretim Süresi', value: '18 saat' },
      { name: 'Paketleme', value: 'Koruyucu ambalaj' }
    ]
  },
  {
    id: 11,
    name: 'Akıllı Telefon Standı',
    shortDescription: 'Ayarlanabilir açılı 3D baskı telefon standı',
    description: `Bu ayarlanabilir telefon standı, akıllı telefonunuzu ideal görüntüleme açısında tutmak için tasarlanmış pratik bir 3D baskı üründür. Farklı açılarda ayarlanabilir ve katlanabilir özellikleri ile seyahat için idealdir.

    Özellikler:
    - Malzeme: Dayanıklı PLA+
    - Boyutlar: 10cm x 8cm x 2cm (katlanmış)
    - Ağırlık: 80g
    - Ayarlanabilir açı: 15° - 75°
    - Katlanabilir tasarım
    
    Tasarım Özellikleri:
    - Kaymaz taban
    - Kablo geçişi için boşluk
    - Tüm telefon boyutlarına uygun
    - Yatay ve dikey kullanım
    - Kompakt ve taşınabilir
    
    Kullanım Alanları:
    - Video izleme
    - Görüntülü görüşme
    - Yemek tarifi takibi
    - Seyahat
    - Ofis kullanımı
    
    Not: Ürün rengi stok durumuna göre değişebilir. Mevcut renkler: Siyah, Gri, Kırmızı.`,
    price: 79.99,
    oldPrice: 99.99,
    discount: 20,
    category: '3D Baskı Ürünler',
    image: '/images/products/phone-stand.jpg',
    images: [
      '/images/products/phone-stand.jpg',
      '/images/products/phone-stand-2.jpg',
      '/images/products/phone-stand-3.jpg',
    ],
    stock: 45,
    rating: 4.7,
    reviews: 52,
    isNew: false,
    specifications: [
      { name: 'Malzeme', value: 'Dayanıklı PLA+' },
      { name: 'Boyutlar', value: '10cm x 8cm x 2cm (katlanmış)' },
      { name: 'Ağırlık', value: '80g' },
      { name: 'Ayarlanabilir Açı', value: '15° - 75°' },
      { name: 'Renk Seçenekleri', value: 'Siyah, Gri, Kırmızı' },
      { name: 'Baskı Katman Yüksekliği', value: '0.15mm' },
      { name: 'Doluluk Oranı', value: '%25' },
      { name: 'Üretim Süresi', value: '6 saat' }
    ]
  },
  
  // 3D Modeller
  {
    id: 4,
    name: 'Mimari Model STL Dosyası',
    shortDescription: 'Modern villa 3D baskı modeli',
    description: `Bu modern villa 3D modeli, mimari projeleriniz veya hobi amaçlı 3D baskılarınız için tasarlanmış detaylı bir STL dosyasıdır. İç mekan detayları ve mobilyalar dahildir.

    Özellikler:
    - Dosya Formatı: STL
    - Dosya Boyutu: 25MB
    - Poligon Sayısı: 1.2 milyon
    - Ölçeklenebilir tasarım
    - 3D baskıya hazır
    
    Tasarım Özellikleri:
    - Detaylı dış cephe
    - İç mekan bölümleri
    - Mobilyalar
    - Bahçe düzenlemesi
    - Havuz
    
    Kullanım Alanları:
    - Mimari sunum
    - Hobi amaçlı 3D baskı
    - Eğitim
    - Koleksiyon
    
    Not: Bu ürün dijital bir dosyadır ve fiziksel bir ürün içermez. Satın alımdan sonra indirme bağlantısı e-posta ile gönderilecektir.`,
    price: 79.99,
    oldPrice: null,
    discount: null,
    category: '3D Modeller',
    image: '/images/products/villa-model.jpg',
    images: [
      '/images/products/villa-model.jpg',
      '/images/products/villa-model-2.jpg',
      '/images/products/villa-model-3.jpg',
    ],
    stock: 999,
    rating: 4.9,
    reviews: 18,
    isNew: false,
    specifications: [
      { name: 'Dosya Formatı', value: 'STL' },
      { name: 'Dosya Boyutu', value: '25MB' },
      { name: 'Poligon Sayısı', value: '1.2 milyon' },
      { name: 'Ölçek', value: 'Ölçeklenebilir' },
      { name: 'Baskı Tavsiyesi', value: '0.1mm katman yüksekliği' },
      { name: 'Tahmini Baskı Süresi', value: '22 saat (1:100 ölçekte)' },
      { name: 'Tahmini Filament Kullanımı', value: '120g (1:100 ölçekte)' },
      { name: 'Lisans', value: 'Kişisel kullanım' }
    ]
  },
  {
    id: 12,
    name: 'Mekanik Dişli Seti STL Dosyası',
    shortDescription: 'Çalışan mekanik dişli sistemi 3D modeli',
    description: `Bu mekanik dişli seti, çalışan bir mekanizma oluşturmak için tasarlanmış detaylı bir 3D model koleksiyonudur. Eğitim, hobi veya fonksiyonel projeler için idealdir.

    Özellikler:
    - Dosya Formatı: STL
    - Dosya Boyutu: 15MB
    - Parça Sayısı: 25
    - 3D baskıya hazır
    - Montaj talimatları dahil
    
    Tasarım Özellikleri:
    - Farklı boyutlarda dişliler
    - Mil ve bağlantı parçaları
    - Çalışan mekanizma
    - Modüler tasarım
    - Özelleştirilebilir parçalar
    
    Kullanım Alanları:
    - Eğitim projeleri
    - Mekanik prototipleme
    - Hobi projeleri
    - STEM eğitimi
    
    Not: Bu ürün dijital bir dosyadır ve fiziksel bir ürün içermez. Satın alımdan sonra indirme bağlantısı e-posta ile gönderilecektir.`,
    price: 59.99,
    oldPrice: 69.99,
    discount: 15,
    category: '3D Modeller',
    image: '/images/products/gear-model.jpg',
    images: [
      '/images/products/gear-model.jpg',
      '/images/products/gear-model-2.jpg',
      '/images/products/gear-model-3.jpg',
    ],
    stock: 999,
    rating: 4.7,
    reviews: 24,
    isNew: true,
    specifications: [
      { name: 'Dosya Formatı', value: 'STL' },
      { name: 'Dosya Boyutu', value: '15MB' },
      { name: 'Parça Sayısı', value: '25' },
      { name: 'Önerilen Filament', value: 'PLA veya PETG' },
      { name: 'Baskı Tavsiyesi', value: '0.2mm katman yüksekliği, %20 doluluk' },
      { name: 'Tahmini Baskı Süresi', value: '14 saat (tüm parçalar)' },
      { name: 'Tahmini Filament Kullanımı', value: '180g (tüm parçalar)' },
      { name: 'Lisans', value: 'Kişisel ve eğitim amaçlı kullanım' }
    ]
  },
  {
    id: 13,
    name: 'Karakter Koleksiyonu STL Dosyası',
    shortDescription: 'Fantastik karakter koleksiyonu 3D modelleri',
    description: `Bu fantastik karakter koleksiyonu, masa oyunları, dekorasyon veya koleksiyon için ideal 10 farklı karakter içeren bir 3D model paketidir.

    Özellikler:
    - Dosya Formatı: STL
    - Dosya Boyutu: 50MB
    - Karakter Sayısı: 10
    - 3D baskıya hazır
    - Destekler dahil
    
    Karakter Listesi:
    - Savaşçı
    - Büyücü
    - Elf Okçu
    - Cüce Demirci
    - Ork Şef
    - Goblin Hırsız
    - Ejderha (Mini)
    - Şövalye
    - Nekromancer
    - Paladin
    
    Kullanım Alanları:
    - Masa oyunları
    - Koleksiyon
    - Dekorasyon
    - Hobi
    
    Not: Bu ürün dijital bir dosyadır ve fiziksel bir ürün içermez. Satın alımdan sonra indirme bağlantısı e-posta ile gönderilecektir.`,
    price: 99.99,
    oldPrice: 129.99,
    discount: 25,
    category: '3D Modeller',
    image: '/images/products/character-models.jpg',
    images: [
      '/images/products/character-models.jpg',
      '/images/products/character-models-2.jpg',
      '/images/products/character-models-3.jpg',
    ],
    stock: 999,
    rating: 4.8,
    reviews: 37,
    isNew: false,
    specifications: [
      { name: 'Dosya Formatı', value: 'STL' },
      { name: 'Dosya Boyutu', value: '50MB' },
      { name: 'Karakter Sayısı', value: '10' },
      { name: 'Karakter Boyutları', value: '28mm ölçek (ölçeklenebilir)' },
      { name: 'Önerilen Baskı', value: 'Reçine yazıcı veya 0.1mm FDM' },
      { name: 'Tahmini Baskı Süresi', value: '2-3 saat (karakter başına)' },
      { name: 'Tahmini Malzeme Kullanımı', value: '10-15g (karakter başına)' },
      { name: 'Lisans', value: 'Kişisel kullanım, ticari kullanım için ek lisans gerekli' }
    ]
  }
];

export default products;
