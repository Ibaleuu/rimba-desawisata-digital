# Rimba — DesaWisata Digital

Prototipe web responsif untuk Studi Kasus 3. Aplikasi mencakup katalog wisatawan, permintaan reservasi, etalase UMKM, dan portal pengelola.

## Menjalankan

Buka `index.html` di browser. Untuk development, jalankan server statis dari folder ini, misalnya:

```bash
python -m http.server 8000
```

Lalu buka `http://localhost:8000`.

## Alur wisatawan

- Jelajahi, cari, dan filter destinasi.
- Buka detail destinasi untuk membaca aktivitas, fasilitas, musim kunjungan, dan paket terkait.
- Buka detail paket untuk melihat harga, durasi, kapasitas, lalu kirim permintaan reservasi.
- Permintaan diberi status **Menunggu konfirmasi** sampai pengelola memeriksa jadwal dan kapasitas secara manual. Tidak ada pembayaran daring.
- Lihat produk UMKM, kirim pertanyaan produk, atau hubungi penjual bila kontak WhatsApp tersedia.

## Portal pengelola

Klik **Portal pengelola** di kanan atas. Portal menyediakan:

- Ringkasan aktivitas dan permintaan terbaru.
- Detail reservasi, informasi kontak, dan aksi konfirmasi atau penolakan.
- CRUD destinasi dan paket; perubahan katalog langsung tampil di sisi wisatawan.
- CRUD produk UMKM, termasuk foto, kontak usaha, serta kotak masuk pertanyaan produk dan penanda tindak lanjut.
- Foto destinasi/paket/produk bisa dipilih dari perangkat (JPG, PNG, WebP hingga 8 MB); prototipe mengecilkan gambar sebelum menyimpannya di browser.

## Batas prototipe

Data disimpan di `localStorage` browser, sehingga belum tersinkron antarperangkat dan bukan pengganti backend. Portal pengelola demo belum dilindungi autentikasi. Data awal, harga, dan kapasitas adalah konten contoh yang perlu dikonfirmasi dengan pengelola desa. Gambar dimuat dari Unsplash dan font dari Google Fonts, sehingga membutuhkan koneksi internet.

Ruang lingkup dan alur mengikuti katalog destinasi, paket wisata, profil/katalog UMKM, permintaan reservasi, serta panel pengelola pada Studi Kasus 3. Pola ringkasan, pencarian, daftar detail, dan status mengacu pada struktur proyek Web Pelaporan Fasilitas Kampus.

## Alur kerja 7 platform

Peta integrasi, event analytics, brief desain, dan prompt handoff ada di:

- `WORKFLOW_7_PLATFORM.md` — peran dan status Codex, Notion, Linear, Figma, Antigravity, GitHub, PostHog.
- `FIGMA_HANDOFF.md` — layar, komponen, alur, dan batas produk untuk desain.
- `ANTIGRAVITY_PROMPT.md` — prompt implementasi yang konsisten dengan Studi Kasus 3.

Build statis: `npm run build` (Node.js 20+). Analytics PostHog project Rimba sudah dikonfigurasi lokal melalui `.env.local` (diabaikan Git). Build menyuntikkan konfigurasi runtime hanya ke `dist/`. Untuk GitHub Actions, siapkan repository secrets `POSTHOG_PROJECT_TOKEN` serta `POSTHOG_HOST`.

Notion: https://app.notion.com/p/415213332eb081c7819de0e074ef1627?pvs=204
Linear: https://linear.app/ibaleuu/project/desawisata-digital-6dcfa2717daf

Figma Design: https://www.figma.com/design/qaf4j7YX8E1S30dOR3mJZa (file terbuat; frame layar masih menunggu proses import).

