export interface NavLinkItem {
  label: string;
  href: string;
}

export interface TrustMetric {
  id: string;
  value: string;
  label: string;
  isPlaceholder: boolean;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  highlight?: string;
  iconName:
    | 'user-check'
    | 'clipboard-check'
    | 'layout-dashboard'
    | 'message-circle'
    | 'calendar-clock'
    | 'map-pin';
  spanWide?: boolean;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export type TemplateId = 'modern-batik' | 'janur-floral' | 'genz-minimal';

export interface TemplateItem {
  id: TemplateId;
  name: string;
  category: string;
  tagline: string;
  paletteLabel: string;
  coupleSample: string;
  dateSample: string;
  venueSample: string;
}

export interface PricingPlan {
  id: 'gratis' | 'premium';
  name: string;
  price: string;
  period: string;
  description: string;
  badge?: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  coupleName: string;
  city: string;
  templateUsed: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const SITE_BRAND = {
  name: 'Kondangan',
  tagline: 'Undangan pernikahan digital yang hangat, modern, dan personal.',
  copyright: `© ${new Date().getFullYear()} Kondangan. Dibuat di Indonesia.`,
};

export const NAVBAR_DATA = {
  links: [
    { label: 'Fitur', href: '#fitur' },
    { label: 'Template', href: '#template' },
    { label: 'Harga', href: '#harga' },
    { label: 'FAQ', href: '#faq' },
  ] satisfies NavLinkItem[],
  ctaLabel: 'Buat Undangan',
  ctaHref: '/editor',
};

export const HERO_DATA = {
  eyebrow: 'Platform Undangan Pernikahan Digital',
  headline: 'Undangan cantik, tanpa ribet.',
  subheadline:
    'Sebarkan kabar bahagiamu lewat undangan digital bernuansa Nusantara yang hangat dan personal. Cukup pilih template, isi detail acara, lalu kirim link ke setiap tamu.',
  primaryCta: {
    label: 'Buat Undangan Sekarang',
    href: '/editor',
  },
  secondaryCta: {
    label: 'Lihat Contoh',
    href: '/templates',
  },
  sampleGuestPresets: [
    'Kak Nadia & Partner',
    'Mas Dimas & Keluarga',
    'Geng Kuliah 2019',
  ],
  phoneSample: {
    greeting: 'Kamu diundang kondangan!',
    couple: 'Rara & Bagas',
    eventLabel: 'Akad & Resepsi Pernikahan',
    date: 'Sabtu, 24 Oktober 2026',
    time: '10.00 — 14.00 WIB',
    venue: 'Pendopo Sasana Asri, Yogyakarta',
    countdownDays: '42',
  },
};

/**
 * Placeholder trust metrics for initial landing page demonstration.
 * Replace these values with live aggregated platform statistics before launch.
 */
export const TRUST_BAR_DATA = {
  placeholderNote: 'Angka contoh untuk pratinjau',
  metrics: [
    {
      id: 'invitations-created',
      value: '14.800+',
      label: 'Undangan dibuat',
      isPlaceholder: true, // Example placeholder metric
    },
    {
      id: 'guests-reached',
      value: '1,2 Juta+',
      label: 'Tamu menerima undangan',
      isPlaceholder: true, // Example placeholder metric
    },
    {
      id: 'couple-rating',
      value: '4,9 / 5',
      label: 'Kepuasan calon pengantin',
      isPlaceholder: true, // Example placeholder metric
    },
  ] satisfies TrustMetric[],
};

export const FEATURES_DATA = {
  eyebrow: 'Fitur Lengkap',
  title: 'Semua yang kamu butuhkan untuk sebar undangan lebih tenang',
  subtitle:
    'Dirancang agar persiapan hari bahagiamu terasa ringan dari kirim link pertama sampai hari resepsi tiba.',
  items: [
    {
      id: 'personal-link',
      title: 'Link Personal per Tamu',
      description:
        'Setiap tamu mendapat sapaan nama khusus di halaman depan undangan, terasa jauh lebih sopan dan akrab.',
      highlight: 'Contoh: kondangan.id/rara-bagas?to=Nadia',
      iconName: 'user-check',
      spanWide: true,
    },
    {
      id: 'auto-rsvp',
      title: 'RSVP Otomatis',
      description:
        'Tamu bisa konfirmasi kehadiran dan jumlah orang yang ikut hanya dalam dua ketukan dari ponsel.',
      iconName: 'clipboard-check',
    },
    {
      id: 'guest-dashboard',
      title: 'Dashboard Tamu Real-time',
      description:
        'Pantau daftar tamu yang hadir, berhalangan, hingga ucapan doa dalam satu tampilan rapi.',
      iconName: 'layout-dashboard',
    },
    {
      id: 'whatsapp-share',
      title: 'Kirim Sekali Klik via WhatsApp',
      description:
        'Siapkan template pesan pengantar yang sopan dan kirim langsung ke kontak WhatsApp tamu tanpa ketik ulang.',
      highlight: 'Otomatis menyisipkan nama tamu & tautan personal',
      iconName: 'message-circle',
      spanWide: true,
    },
    {
      id: 'countdown-calendar',
      title: 'Countdown & Simpan Kalender',
      description:
        'Hitung mundur menuju hari H dan tombol simpan pengingat ke Google Calendar atau Apple Calendar.',
      iconName: 'calendar-clock',
    },
    {
      id: 'location-map',
      title: 'Peta Lokasi & Petunjuk Arah',
      description:
        'Tautan langsung ke Google Maps untuk lokasi akad dan resepsi agar tamu tidak nyasar di jalan.',
      iconName: 'map-pin',
    },
  ] satisfies FeatureItem[],
};

export const HOW_IT_WORKS_DATA = {
  eyebrow: 'Cara Kerja',
  title: 'Tiga langkah singkat menuju undangan siap sebar',
  subtitle:
    'Tidak perlu keahlian desain. Coba dulu gratis, lihat hasilnya, baru bagikan ketika sudah mantap.',
  steps: [
    {
      number: '01.',
      title: 'Pilih Template Favorit',
      description:
        'Tentukan gaya yang paling cocok dengan tema pernikahanmu, dari sentuhan batik modern hingga minimalis hangat.',
    },
    {
      number: '02.',
      title: 'Isi Data Mempelai & Acara',
      description:
        'Masukkan nama kedua mempelai, jadwal akad, lokasi resepsi, serta daftar nama tamu undangan.',
    },
    {
      number: '03.',
      title: 'Bagikan Link Personal',
      description:
        'Salin link unik per tamu atau kirim langsung lewat WhatsApp, lalu pantau konfirmasi RSVP secara otomatis.',
    },
  ] satisfies StepItem[],
};

export const TEMPLATE_GALLERY_DATA = {
  eyebrow: 'Galeri Template',
  title: 'Pilihan gaya bernuansa Nusantara yang tetap segar',
  subtitle:
    'Setiap desain disiapkan agar nyaman dibaca di layar ponsel, ringan dibuka, dan tetap sopan untuk keluarga besar.',
  templates: [
    {
      id: 'modern-batik',
      name: 'Modern Batik',
      category: 'Tradisional Kontemporer',
      tagline: 'Bingkai motif parang dan palet merah bata yang hangat serta berwibawa.',
      paletteLabel: 'Merah Bata · Emas Tua · Krem',
      coupleSample: 'Rara & Bagas',
      dateSample: '24 Oktober 2026',
      venueSample: 'Yogyakarta',
    },
    {
      id: 'janur-floral',
      name: 'Janur Floral',
      category: 'Botanical Nusantara',
      tagline: 'Aksen lengkung janur dan dedaunan sage yang teduh untuk resepsi taman atau pendopo.',
      paletteLabel: 'Hijau Sage · Krem Gading · Emas',
      coupleSample: 'Sinta & Raka',
      dateSample: '14 November 2026',
      venueSample: 'Bandung',
    },
    {
      id: 'genz-minimal',
      name: 'Gen Z Minimal',
      category: 'Editorial Ringkas',
      tagline: 'Tipografi ekspresif yang bersih dan playful untuk pasangan yang suka tampilan simpel.',
      paletteLabel: 'Gading · Arang Hangat · Bata',
      coupleSample: 'Tiara & Dimas',
      dateSample: '06 Desember 2026',
      venueSample: 'Jakarta Selatan',
    },
  ] satisfies TemplateItem[],
};

export const PRICING_DATA = {
  eyebrow: 'Harga Transparan',
  title: 'Mulai gratis, upgrade kapan pun butuh fitur ekstra',
  subtitle:
    'Tidak ada biaya berlangganan bulanan. Cukup sekali bayar jika kamu ingin mengaktifkan paket Premium.',
  plans: [
    {
      id: 'gratis',
      name: 'Gratis',
      price: 'Rp 0',
      period: 'selamanya untuk coba & acara intim',
      description:
        'Cocok untuk mencoba editor, menyusun undangan sederhana, dan dibagikan ke lingkaran terdekat.',
      features: [
        'Akses 1 template pilihan (Gen Z Minimal)',
        'Maksimal 30 link nama tamu personal',
        'Konfirmasi RSVP & ucapan tamu',
        'Countdown & tautan Google Maps',
        'Masa aktif undangan 14 hari',
      ],
      ctaLabel: 'Coba Gratis Sekarang',
      ctaHref: '/editor?plan=gratis',
      highlighted: false,
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 'Rp 99.000',
      period: 'sekali bayar per undangan',
      badge: 'Paling Populer',
      description:
        'Paket lengkap untuk hari besar tanpa batas tamu dan akses penuh semua sentuhan desain Nusantara.',
      features: [
        'Semua template (Modern Batik, Janur Floral, Gen Z Minimal)',
        'Tamu tanpa batas dengan link personal',
        'Kirim massal & template pesan WhatsApp sekali klik',
        'Dashboard tamu + ekspor daftar hadir (CSV)',
        'Simpan ke Google & Apple Calendar',
        'Masa aktif undangan hingga 1 tahun penuh',
      ],
      ctaLabel: 'Pilih Paket Premium',
      ctaHref: '/editor?plan=premium',
      highlighted: true,
    },
  ] satisfies PricingPlan[],
};

export const TESTIMONIALS_DATA = {
  eyebrow: 'Cerita Pengantin',
  title: 'Dipakai pasangan yang ingin persiapan nikah lebih santai',
  subtitle:
    'Beberapa cerita contoh dari pasangan yang menyukai undangan ringkas namun tetap terasa personal.',
  items: [
    {
      id: 'testi-1',
      quote:
        'Orang tua suka karena ada aksen batiknya dan mudah dibaca, sementara teman kantor langsung paham RSVP lewat HP tanpa tanya-tanya lagi.',
      coupleName: 'Raka & Sinta',
      city: 'Bandung',
      templateUsed: 'Modern Batik',
    },
    {
      id: 'testi-2',
      quote:
        'Fitur kirim WhatsApp dengan nama tamu otomatis itu penyelamat banget. Sebar ke 250 tamu selesai dalam satu malam sambil santai.',
      coupleName: 'Dimas & Tiara',
      city: 'Yogyakarta',
      templateUsed: 'Janur Floral',
    },
    {
      id: 'testi-3',
      quote:
        'Dashboard tamunya bikin kami gampang estimasi jumlah porsi katering. Tampilannya bersih, nggak norak, dan cepat dibuka di sinyal lemah.',
      coupleName: 'Bagas & Putri',
      city: 'Surabaya',
      templateUsed: 'Gen Z Minimal',
    },
  ] satisfies TestimonialItem[],
};

export const FAQ_DATA = {
  eyebrow: 'Pertanyaan Umum',
  title: 'Hal yang sering ditanyakan calon pengantin',
  subtitle: 'Masih ragu sebelum mulai? Simak jawaban singkat seputar cara pakai Kondangan.',
  items: [
    {
      id: 'faq-1',
      question: 'Apakah saya bisa mencoba buat undangan sebelum membayar?',
      answer:
        'Bisa banget. Kamu bisa langsung memilih template, mengisi nama mempelai, jadwal acara, dan melihat pratinjau undangan secara gratis di editor tanpa harus langsung bayar.',
    },
    {
      id: 'faq-2',
      question: 'Bagaimana cara kerja link personal untuk masing-masing tamu?',
      answer:
        'Cukup tambahkan daftar nama tamu di dashboard atau generator link. Sistem akan membuat tautan unik sehingga saat tamu membuka undangan, nama mereka langsung muncul di halaman sampul.',
    },
    {
      id: 'faq-3',
      question: 'Apakah tamu perlu mengunduh aplikasi untuk mengisi RSVP?',
      answer:
        'Tidak perlu. Undangan Kondangan berjalan langsung di browser ponsel atau komputer. Tamu cukup membuka link lalu mengetuk tombol konfirmasi hadir dan menuliskan ucapan.',
    },
    {
      id: 'faq-4',
      question: 'Bolehkah data tanggal atau lokasi diubah setelah undangan dibagikan?',
      answer:
        'Boleh. Kamu bisa memperbarui jam acara, titik Google Maps, atau detail lainnya kapan saja melalui dashboard, dan perubahan langsung tersinkron di link yang sudah tersebar.',
    },
    {
      id: 'faq-5',
      question: 'Apakah paket Premium dikenakan biaya bulanan?',
      answer:
        'Tidak. Paket Premium sebesar Rp 99.000 cukup dibayar satu kali saja untuk satu undangan pernikahan, dengan masa aktif hingga 1 tahun penuh.',
    },
  ] satisfies FaqItem[],
};

export const CLOSING_CTA_DATA = {
  eyebrow: 'Siap Sebar Kabar Bahagia?',
  title: 'Buat undangan digitalmu hari ini, gratis untuk dicoba.',
  subtitle:
    'Rangkai undangan yang hangat untuk keluarga besar dan tetap kekinian untuk sahabat terdekat dalam beberapa menit saja.',
  ctaLabel: 'Buat Undangan Gratis Sekarang',
  ctaHref: '/editor',
};

export const FOOTER_DATA = {
  description:
    'Platform undangan pernikahan digital yang memadukan kehangatan tradisi Nusantara dengan kemudahan teknologi modern.',
  navigationTitle: 'Navigasi',
  legalTitle: 'Informasi',
  contactTitle: 'Kontak & Sosial',
  legalLinks: [
    { label: 'Kebijakan Privasi', slug: 'privacy' as const },
    { label: 'Syarat Layanan', slug: 'terms' as const },
  ],
  contacts: [
    { label: 'halo@kondangan.id', href: 'mailto:halo@kondangan.id' },
    { label: 'WhatsApp Tim Kondangan', href: 'https://wa.me/6281200000000' },
  ],
  socials: [
    { label: 'Instagram @kondangan.id', href: 'https://instagram.com' },
    { label: 'TikTok @kondangan.id', href: 'https://tiktok.com' },
  ],
};
