# Figma handoff — Rimba

## Tujuan
Rancang ulang dan dokumentasikan antarmuka DesaWisata Digital berdasarkan Studi Kasus 3. Gunakan website di `index.html`, `app.js`, dan `styles.css` sebagai referensi implementasi terkini.

## Sistem visual saat ini
- Brand: Rimba; karakter hangat, alam, editorial, mudah dibaca.
- Warna dasar: hijau hutan (`#173f35`), hijau gelap untuk aksi, lime lembut untuk aksen, latar putih gading.
- Font: serif berkarakter untuk judul editorial dan sans serif untuk navigasi/form.
- Komponen: kartu foto, label kategori, filter, panel/modal, status reservasi, tombol utama dan sekunder.
- Jaga kontras dan fokus keyboard; jangan mengandalkan warna saja untuk status.

## Frame yang perlu dibuat (desktop + mobile)
1. Beranda / pencarian destinasi.
2. Hasil dan filter destinasi.
3. Detail destinasi dan paket terkait.
4. Detail paket dan formulir permintaan reservasi.
5. Konfirmasi permintaan berstatus menunggu verifikasi manual.
6. Etalase produk UMKM dan formulir pertanyaan produk.
7. Portal pengelola: ringkasan, reservasi, CRUD destinasi/paket, CRUD UMKM, kotak masuk pertanyaan.

## Batas produk yang wajib tercermin
Reservasi adalah permintaan, bukan pemesanan final; pengelola memeriksa tanggal dan kapasitas manual. Tidak ada pembayaran daring. Katalog destinasi, paket, dan produk dikelola melalui portal. Tampilkan keterbatasan prototipe localStorage bila desain mencakup pengelola.

## Alur prototipe
Beranda → detail destinasi → detail paket → kirim permintaan → menunggu konfirmasi. Pengelola → tinjau reservasi → konfirmasi/tolak. UMKM → detail produk → kirim pertanyaan.

## Catatan handoff
Buat komponen dan varian responsif, state kosong/error/loading, serta catatan perilaku. Hubungkan setiap iterasi UI ke issue Linear DW terkait. File Figma sudah dibuat; gunakan brief ini untuk membangun layar dan komponen secara editable.

File Figma: https://www.figma.com/design/qaf4j7YX8E1S30dOR3mJZa
Status: file Design dibuat dan tertaut di Linear/Notion. Frame belum diimpor; capture localhost dihentikan oleh proteksi URL di browser Windows.
