# Backend Asclepius

Proyek ini merupakan submission untuk tugas akhir (final project) kelas di [Dicoding](https://www.dicoding.com/).

## Deskripsi

**Asclepius** adalah sebuah aplikasi yang dirancang untuk mendeteksi penyakit kanker kulit (Cancer atau Non-cancer) dari gambar yang diunggah oleh pengguna. Proyek ini merupakan bagian backend API dari aplikasi tersebut yang bertugas untuk menerima input gambar, melakukan inferensi menggunakan model Machine Learning yang telah dilatih, dan menyimpan riwayat prediksi ke dalam database.

Proyek ini dibangun menggunakan:
- **Node.js** dengan framework **Hapi** untuk server API.
- **TensorFlow.js Node** untuk inferensi model machine learning secara langsung di backend.
- **Google Cloud Firestore** untuk menyimpan data (riwayat prediksi).

## Cara Menjalankan (Local Development)

1. Pastikan Anda sudah menginstal **Node.js**.
2. Clone repositori ini dan masuk ke direktori proyek.
3. Instal semua dependensi dengan perintah:
   ```bash
   npm install
   ```
4. Siapkan file `.env` di root direktori untuk environment variable yang dibutuhkan (seperti kredensial atau port).
5. Jalankan server aplikasi dengan perintah:
   ```bash
   npm run start
   ```
   Atau secara langsung:
   ```bash
   node src/server.js
   ```

## Struktur Direktori Utama

- `src/server/` - Berisi logika server (seperti handler dan routes).
- `src/services/` - Berisi logika untuk inferensi machine learning dan interaksi database.
- `asclepius/` - Direktori terkait model atau resource tambahan lainnya.
