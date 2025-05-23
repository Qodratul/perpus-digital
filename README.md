# 📚 Perpustakaan Digital UIN SUSKA RIAU

Aplikasi web katalog perpustakaan digital yang dibuat untuk membantu mahasiswa UIN SUSKA RIAU dalam mencari dan melihat informasi buku yang tersedia di perpustakaan kampus, tanpa harus datang langsung ke lokasi.

---

## 🔍 Latar Belakang

Perpustakaan di UIN SUSKA belum memiliki sistem katalog online. Mahasiswa harus datang langsung hanya untuk mengecek apakah buku tersedia, di rak mana buku tersebut berada, atau apakah buku sudah dipinjam orang lain. Masalah yang sering terjadi:

- Buku yang dicari ternyata tidak tersedia.
- Tidak tahu buku berada di rak mana atau bagian mana.
- Tidak ada sistem untuk melihat riwayat atau status peminjaman pribadi.

Aplikasi ini dikembangkan untuk menjawab masalah tersebut.

---

## ✨ Fitur Utama

### 📖 Katalog Buku
- Lihat daftar semua buku yang tersedia di perpustakaan.
- Informasi buku mencakup:
    - Judul
    - Penulis
    - Status ketersediaan
    - Lokasi rak dan bagian

### 🔍 Pencarian Buku
- Cari berdasarkan judul atau nama penulis.

### 👤 Pendaftaran & Login Member
- Mahasiswa bisa mendaftar akun member perpustakaan.
- Login memberikan akses ke fitur tambahan.

### 📚 Status Peminjaman (Member)
- Melihat:
    - Buku yang sedang dipinjam
    - Tanggal peminjaman
    - Tenggat pengembalian
    - Tanggal pengembalian (jika sudah dikembalikan)
- Peminjaman tetap dilakukan secara langsung di perpustakaan.

---

## 🛠️ Teknologi yang Digunakan

### Frontend
- React + Vite
- TypeScript
- Tailwind CSS

### Backend
- Express.js (TypeScript)
- Prisma ORM
- PostgreSQL
- JWT Authentication
