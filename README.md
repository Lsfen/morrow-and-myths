# Morrow and Myths

Website statis untuk **Morrow and Myths**, kanal cerita yang menceritakan ulang mitos dan cerita rakyat dari seluruh dunia lewat video pendek vertikal (Reels).

Website ini dibuat dengan HTML, CSS, dan JavaScript biasa, **tanpa proses build**. Cukup unggah ke GitHub dan aktifkan GitHub Pages.

---

## Struktur folder

```
morrow-and-myths/
├── index.html          ← Halaman utama (semua teks website ada di sini)
├── css/
│   └── style.css       ← Warna, font, dan tampilan
├── js/
│   ├── episodes.js     ← DAFTAR EPISODE (edit file ini untuk menambah episode)
│   └── main.js         ← Logika website (tidak perlu diubah)
├── assets/             ← Semua gambar
│   ├── hero.jpg
│   ├── faelin.jpg
│   ├── echo.jpg
│   ├── archive.jpg
│   ├── episode-teru-teru-bozu.jpg
│   ├── episode-nure-onna.jpg
│   └── og-image.jpg
└── README.md
```

---

## 1. Cara mengganti gambar

Semua gambar di folder `assets/` saat ini adalah **gambar sementara (placeholder)** bertuliskan nama file-nya. Untuk menggantinya dengan artwork kamu sendiri:

1. Siapkan gambar kamu dalam format **.jpg**.
2. Beri nama file **persis sama** dengan file yang ingin diganti (huruf kecil semua, misalnya `faelin.jpg`).
3. Timpa (replace) file lama di folder `assets/` dengan file baru kamu.
4. Commit dan push ke GitHub. Website akan otomatis diperbarui dalam 1–2 menit.

### Ukuran yang disarankan

| File | Dipakai untuk | Rasio | Ukuran saran |
|---|---|---|---|
| `hero.jpg` | Latar belakang bagian paling atas | 4:5 (potret) | 1600 × 2000 px |
| `faelin.jpg` | Potret Faelin | 4:5 | 1080 × 1350 px |
| `echo.jpg` | Potret Echo | 4:5 | 1080 × 1350 px |
| `archive.jpg` | Gambar The Archive | 16:10 | 1600 × 1000 px |
| `episode-*.jpg` | Sampul kartu episode | **9:16** (seperti Reels) | 1080 × 1920 px |
| `og-image.jpg` | Gambar pratinjau saat link dibagikan di Facebook/WhatsApp | 1.91:1 | 1200 × 630 px |

**Tips:**
- **Jangan tampilkan wajah Faelin.** Gunakan siluet, sosok bertudung, atau tampak dari belakang.
- Untuk `hero.jpg`, bagian **bawah** gambar akan tertutup judul dan tombol. Letakkan elemen penting di bagian tengah-atas.
- Untuk sampul episode, bagian **bawah sepertiga** gambar akan tertutup judul dan deskripsi.
- Kompres gambar sebelum diunggah (misalnya lewat [squoosh.app](https://squoosh.app)) agar website cepat dibuka di HP. Usahakan di bawah 300 KB per gambar.
- Bulan bercahaya di bagian atas dibuat dengan CSS, jadi gambar `hero.jpg` kamu **tidak perlu** menyertakan bulan.

---

## 2. Cara menambah episode baru

Semua episode diatur di satu file: **`js/episodes.js`**.

### Langkah-langkah

1. Siapkan gambar sampul episode (rasio 9:16), beri nama misalnya `episode-kappa.jpg`, lalu taruh di folder `assets/`.
2. Buka file `js/episodes.js`.
3. Salin satu blok `{ ... }` yang sudah ada, lalu tempel di **paling atas** daftar (episode terbaru di atas).
4. Ubah isinya. Contoh:

```js
const EPISODES = [
  {
    title: "Kappa",
    origin: "Japan",
    summary: "A river spirit with a dish of water on its head, and very good manners.",
    image: "assets/episode-kappa.jpg",
    link: "https://www.facebook.com/reel/1234567890",
    status: "released",
    date: ""
  },
  {
    title: "Nure-onna",
    ...
  },
  ...
];
```

5. Simpan, commit, dan push ke GitHub.

### Penjelasan setiap kolom

| Kolom | Isi |
|---|---|
| `title` | Nama tamu / judul episode |
| `origin` | Asal cerita (misalnya `"Japan"`, `"Indonesia"`, `"Norway"`) |
| `summary` | Satu atau dua kalimat yang muncul di kartu |
| `image` | Lokasi gambar sampul, misalnya `"assets/episode-kappa.jpg"` |
| `link` | URL Facebook Reel kamu |
| `status` | `"released"` (sudah tayang, kartu bisa diklik) atau `"coming-soon"` (segera hadir, kartu tidak bisa diklik) |
| `date` | Opsional. Untuk episode `coming-soon`, teks ini muncul di kartu (misalnya `"November 2026"`) |

**Penting:**
- Setiap blok `{ ... }` dipisahkan dengan **koma** `,`.
- Teks harus diapit tanda kutip `"..."`.
- Nomor tamu ("Guest No. 01, 02, …") dihitung otomatis dari urutan daftar. Episode paling bawah adalah nomor 01.

### Saat episode "Coming soon" sudah tayang

Cukup ubah dua hal pada blok episode tersebut:
- `status: "coming-soon"` → `status: "released"`
- `link:` → ganti dengan URL Reel yang asli

### Cara mendapatkan link Facebook Reel

Buka Reel kamu di Facebook → klik **Share / Bagikan** → **Copy link / Salin tautan**. Tempelkan ke kolom `link`.

---

## 3. Mengganti link Facebook di bagian "Follow"

Buka `index.html`, cari teks berikut:

```
https://www.facebook.com/YOUR_PAGE_HERE
```

Ganti dengan alamat halaman Facebook kamu, misalnya `https://www.facebook.com/morrowandmyths`.

---

## 4. Cara mengaktifkan GitHub Pages (langkah demi langkah)

1. Buka repository ini di GitHub: `https://github.com/lsfen/morrow-and-myths`
2. Klik tab **Settings** (ikon roda gigi, di bagian atas repository).
3. Di menu sebelah kiri, klik **Pages** (di bawah bagian *Code and automation*).
4. Di bagian **Build and deployment**:
   - **Source**: pilih **Deploy from a branch**.
   - **Branch**: pilih **`main`**, lalu folder **`/ (root)`**.
5. Klik **Save**.
6. Tunggu sekitar 1–3 menit. Muat ulang (refresh) halaman Settings → Pages. Akan muncul tulisan:
   > Your site is live at `https://lsfen.github.io/morrow-and-myths/`
7. Klik link tersebut untuk membuka website kamu. 🎉

### Catatan

- Jika repository **private**, GitHub Pages hanya tersedia untuk akun berbayar (GitHub Pro). Untuk akun gratis, ubah repository menjadi **public** di Settings → General → *Danger Zone* → *Change visibility*.
- Setiap kali kamu push perubahan ke branch `main`, website akan diperbarui otomatis dalam 1–2 menit. Kamu bisa memantau prosesnya di tab **Actions**.
- Jika perubahan belum terlihat, coba refresh paksa browser (Ctrl+Shift+R di komputer) atau buka di mode penyamaran. Di HP, cache browser kadang perlu beberapa menit.
- (Opsional) Untuk memakai domain sendiri (misalnya `morrowandmyths.com`), isi kolom **Custom domain** di halaman Settings → Pages dan ikuti petunjuk DNS dari GitHub.

---

## 5. Mencoba website di komputer sendiri

Tidak perlu install apa pun. Cukup klik dua kali `index.html` untuk membukanya di browser.

---

## Tentang dunia Morrow and Myths

- **Faelin**: seorang Taleweaver keturunan Veilborn (perpaduan elf penjaga pengetahuan dan fae). Ia memiliki sihir ingatan. Ia menyerahkan wajah dan nama aslinya kepada **The Archive** sebagai ganti menjadi Taleweaver, dan suatu hari ia bisa mengambilnya kembali. Wajahnya tidak pernah ditampilkan.
- **Echo**: pendamping Faelin, keturunan **Moon Hounds** (serigala roh yang berburu dengan suaranya). Di dunia modern, Echo berwujud toy poodle kecil berwarna cokelat.
- **Tamu (Guests)**: tidak ada penjahat. Tokoh-tokoh dari buku yang dibaca Faelin kadang datang berkunjung ke The Archive. Setiap episode adalah kisah satu tamu.
