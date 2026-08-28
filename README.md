# Profil Pribadi Moh. Dasuki

Website portofolio profesional Moh. Dasuki, M.Kom — dosen Informatika, web developer, serta peneliti AI dan Natural Language Processing di Universitas Muhammadiyah Jember.

## Teknologi

- React 19
- Vite 8
- CSS responsif
- ESLint

## Menjalankan proyek

Pastikan Node.js sudah terpasang, kemudian jalankan:

```bash
npm install
npm run dev
```

Vite akan menampilkan alamat lokal untuk membuka website di browser.

## Perintah tersedia

```bash
npm run dev      # Menjalankan development server
npm run lint     # Memeriksa kualitas kode
npm run build    # Membuat production build
npm run preview  # Melihat production build secara lokal
```

## Struktur proyek

```text
src/
├── assets/       # Foto dan aset visual
├── components/   # Komponen antarmuka yang digunakan ulang
├── data/         # Identitas, tautan, keahlian, dan data proyek
├── sections/     # Bagian utama halaman portofolio
├── App.jsx       # Komposisi halaman
├── App.css       # Gaya komponen dan halaman
├── index.css     # Reset dan gaya global
└── main.jsx      # Entry point React
```

Untuk memperbarui profil, tautan akademik, keahlian, atau proyek, edit `src/data/portfolio.js`.

## Pemilik

Moh. Dasuki, M.Kom  
Universitas Muhammadiyah Jember  
[GitHub](https://github.com/mohdasuki)

## Deployment Netlify

Repository ini menyertakan `netlify.toml`, sehingga pengaturan build dibaca otomatis oleh Netlify:

- Production branch: `main`
- Build command: `npm run build`
- Publish directory: `dist`
- Node.js: versi 22

Untuk deployment pertama, pilih **Add new project → Import an existing project** di Netlify, hubungkan GitHub, kemudian pilih repository `mohdasuki/profil-pribadi`. Setelah terhubung, setiap push ke branch `main` akan memicu build dan deployment baru secara otomatis.
