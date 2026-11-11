# Rimba — alur 7 platform

| Platform | Peran pada proyek | Status / handoff |
|---|---|---|
| Codex (orchestrator AI) | Memecah kebutuhan, menjaga konsistensi studi kasus, menyiapkan dan meninjau perubahan | Aktif di workspace ini; dokumen studi kasus menjadi sumber kebutuhan |
| Notion | PRD, keputusan, cakupan, dan catatan koordinasi | Draft PRD/workflow dibuat pada Notion dan ditautkan ke project Linear |
| Linear | Backlog, milestone, issue, dan progres | Project DesaWisata Digital; issue DW-01 sampai DW-42, 5 milestone |
| Figma | Source of truth desain dan handoff frame | File Design dibuat dan ditautkan; layar belum diimpor karena capture lokal dihentikan proteksi URL Windows. Brief tersedia di `FIGMA_HANDOFF.md`: https://www.figma.com/design/qaf4j7YX8E1S30dOR3mJZa |
| Antigravity | Handoff prompt untuk bantuan implementasi | Aktif di workspace `desawisata-digital` mengikuti `ANTIGRAVITY_PROMPT.md` |
| GitHub | Version control, review perubahan, CI build | Repo private [Ibaleuu/rimba-desawisata-digital](https://github.com/Ibaleuu/rimba-desawisata-digital) tersedia; workflow CI dan PR template siap |
| PostHog | Analitik penggunaan tanpa data pribadi | Project Rimba telah disiapkan; token lokal sudah dikonfigurasi, secrets CI masih perlu diisi |

## Siklus perubahan

1. Catat kebutuhan/keputusan di Notion.
2. Kaitkan perubahan dengan issue DW di Linear.
3. Ubah atau review desain pada Figma berdasarkan `FIGMA_HANDOFF.md`.
4. Implementasikan perubahan di branch GitHub dan gunakan prompt handoff Antigravity bila diperlukan.
5. CI membangun situs statis pada push/PR; review UI manual mengikuti PR template.
6. Setelah deploy, pantau funnel dan interaksi agregat di PostHog.
7. Catat hasil, keputusan, dan issue tindak lanjut kembali di Notion/Linear.

## Event PostHog yang diizinkan

`destination_viewed` (destination_id, category), `package_viewed` (package_id, destination_id), `reservation_started` (package_id), `reservation_submitted` (package_id, rentang jumlah peserta, status pending), dan `msme_product_clicked` (product_id). Pageview dikirim sebagai pageview dasar. Autocapture dimatikan, IP dianonimkan, session replay dimatikan. Jangan menambahkan nama, telepon, tanggal kunjungan, catatan, pencarian, atau isi pesan ke analytics.

## Aktifkan analytics lokal

Konfigurasi lokal `.env.local` sudah disiapkan dan diabaikan Git. Jalankan `npm run build`; file runtime dibuat ke `dist/` dan tidak masuk repo. Untuk CI GitHub, tambahkan secrets `POSTHOG_PROJECT_TOKEN` dan `POSTHOG_HOST`; workflow membaca secrets tersebut saat build.

## Status keterbatasan

Repo GitHub remote dan koneksi Antigravity belum terhubung karena akses/kredensial masing-masing belum tersedia. File Figma sudah dibuat, tetapi frame belum terisi. Capture halaman localhost terhenti oleh proteksi URL Computer Use Windows; file tetap tertaut untuk handoff. CI saat ini membangun artefak statis dan belum menguji aplikasi. Data aplikasi demo masih berada di localStorage dan bukan backend produksi.
