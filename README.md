# 🌌 Surreal Dreamscape

<div align="center">
  <img src="public/images/logo.png" alt="Surreal Dreamscape Logo" width="200" height="auto" />
  <p><em>Portofolio digital dengan tema surreal yang memukau</em></p>
</div>

## ✨ Fitur Utama

- 🎨 **Desain Surreal** - Pengalaman visual yang unik dengan efek gradient dan animasi yang memukau
- 🚀 **Animasi Halus** - Implementasi Framer Motion untuk transisi dan animasi yang halus
- 📱 **Responsif** - Tampilan yang optimal di semua perangkat (desktop, tablet, dan mobile)
- 🌙 **Tema Gelap** - Desain dengan tema gelap yang elegan dan nyaman di mata
- ⚡ **Performa Tinggi** - Dioptimalkan untuk kecepatan dan pengalaman pengguna yang lancar
- 🔍 **SEO Friendly** - Metadata yang terstruktur untuk meningkatkan visibilitas di mesin pencari

## 🛠️ Teknologi

- **Framework**: [Next.js 14](https://nextjs.org/) dengan App Router
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Animasi**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Fonts**: Geist Sans & Geist Mono

## 📋 Struktur Proyek

```
surreal-dreamscape/
├── public/               # Aset statis (gambar, favicon, dll)
├── src/                  # Kode sumber
│   ├── app/              # Halaman aplikasi (Next.js App Router)
│   │   ├── about/        # Halaman Tentang Saya
│   │   ├── contact/      # Halaman Kontak
│   │   ├── projects/     # Halaman Proyek
│   │   ├── layout.tsx    # Layout utama aplikasi
│   │   └── page.tsx      # Halaman beranda
│   ├── components/       # Komponen React
│   │   ├── layout/       # Komponen layout (Navbar, Footer, dll)
│   │   ├── sections/     # Bagian-bagian halaman (Hero, About, dll)
│   │   └── ui/           # Komponen UI yang dapat digunakan kembali
│   └── styles/           # Gaya global dan utilitas
└── ...                   # File konfigurasi lainnya
```

## 🚀 Memulai

### Prasyarat

- Node.js 18.0.0 atau lebih baru
- npm atau yarn

### Instalasi

1. Clone repositori
   ```bash
   git clone https://github.com/bimadevs/surreal-dreamscape.git
   cd surreal-dreamscape
   ```

2. Instal dependensi
   ```bash
   npm install
   # atau
   yarn install
   ```

3. Jalankan server pengembangan
   ```bash
   npm run dev
   # atau
   yarn dev
   ```

4. Buka [http://localhost:3000](http://localhost:3000) di browser Anda

## 📝 Fitur Halaman

### 🏠 Beranda
- Hero section dengan animasi teks dan efek parallax
- Pengenalan singkat tentang kreator
- Tampilan proyek unggulan
- Call-to-action untuk kontak

### 👤 Tentang Saya
- Informasi personal dan profesional
- Timeline perjalanan karir
- Keahlian dan teknologi
- Pendidikan dan pengalaman

### 💼 Proyek
- Galeri proyek dengan filter kategori
- Detail proyek dengan gambar dan deskripsi
- Tautan ke demo dan repositori

### 📞 Kontak
- Formulir kontak interaktif dengan validasi
- Informasi kontak langsung
- Jam operasional
- Notifikasi sukses setelah pengiriman pesan

## 🎨 Komponen UI

### Animasi
- **AnimatedText**: Komponen untuk animasi teks dengan berbagai efek
- **SplitText**: Memecah teks menjadi karakter untuk animasi individual
- **GradientText**: Teks dengan efek gradient yang dinamis

### Interaksi
- **Button**: Tombol dengan berbagai varian dan efek hover
- **Notification**: Sistem notifikasi dengan animasi dan auto-close
- **ProjectCard**: Kartu proyek dengan efek hover dan animasi

### Layout
- **Navbar**: Navigasi responsif dengan efek scroll
- **Footer**: Footer dengan tautan sosial media dan informasi kontak
- **MainLayout**: Layout utama yang digunakan di semua halaman

## 🌟 Fitur Khusus

### Efek Surreal
- **SurrealBackground**: Latar belakang dengan efek gradient dan partikel
- **Parallax**: Efek parallax pada elemen untuk kedalaman visual
- **Glow Effects**: Efek cahaya pada elemen UI untuk nuansa surreal

### Formulir Kontak
- Validasi input real-time
- Animasi fokus pada input
- Notifikasi sukses setelah pengiriman
- Desain input yang unik dengan efek border gradient

### Animasi Halaman
- Transisi halus antar halaman
- Animasi masuk untuk elemen saat scroll
- Efek hover yang interaktif pada kartu dan tombol

## 📱 Responsivitas

Surreal Dreamscape didesain untuk memberikan pengalaman optimal di semua ukuran layar:

- **Desktop**: Tampilan penuh dengan semua efek visual
- **Tablet**: Layout yang dioptimalkan dengan navigasi yang disederhanakan
- **Mobile**: Pengalaman yang dioptimalkan untuk layar kecil dengan fokus pada konten

## 🔧 Kustomisasi

### Tema dan Warna
Warna tema dapat disesuaikan di file `globals.css`:

```css
:root {
  --background: #050714;
  --foreground: #f0f0f0;
  
  --primary: #8a2be2;
  --secondary: #00bfff;
  --accent: #ff6b6b;
  
  /* Warna lainnya... */
}
```

### Font
Font dapat diubah di file `layout.tsx`:

```typescript
const customFont = localFont({
  src: './fonts/YourFont.woff2',
  variable: '--font-custom',
});
```

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

## 👨‍💻 Kreator

Dibuat dengan ❤️ oleh [Bimadev](https://github.com/bimadevs)

---

<div align="center">
  <p>© 2023 Surreal Dreamscape. All rights reserved.</p>
</div>
