# Python CLI - Sistem Diagnosa Kerusakan HP

## Deskripsi
Versi CLI dari aplikasi sistem pakar diagnosa. Pengguna memasukkan gejala sebagai teks terpisah dengan koma, kemudian program mencocokkan gejala dengan rules di rules.json.

## Cara Menjalankan
1. Pastikan Python 3 terpasang.
2. Masuk folder python-version.
3. Jalankan:
4. Masukkan gejala, contoh: hp tidak bisa menyala,layar gelap

## Menambah Rule
Edit rules.json dan tambahkan object rule baru dengan format:

```json
{
  "id": 7,
  "if": ["gejala 1", "gejala 2"],
  "then": "Kemungkinan: ...",
  "solution": "Saran tindakan"
}
---

# *File: web-version/index.html*

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Sistem Diagnosa Kerusakan HP</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main class="container">
    <h1>Sistem Diagnosa Kerusakan HP</h1>

    <label for="symptoms">Masukkan gejala (pisahkan dengan koma):</label>
    <input id="symptoms" placeholder="contoh: hp tidak menyala, layar gelap">

    <div class="buttons">
      <button id="btn-diagnose">Diagnosa</button>
      <button id="btn-clear">Bersihkan</button>
    </div>

    <section class="result" id="result">
      <h2>Hasil</h2>
      <div id="result-content">Belum ada diagnosa.</div>
    </section>

    <section class="help">
      <h3>Contoh gejala yang dikenali</h3>
      <ul>
        <li>hp tidak menyala</li>
        <li>layar gelap</li>
        <li>hp cepat panas</li>
        <li>baterai cepat habis</li>
        <li>hp hang</li>
        <li>speaker tidak berbunyi</li>
        <li>kamera tidak bisa dibuka</li>
        <li>hp tidak bisa charger</li>
      </ul>
    </section>

    <footer>
      <p>Project sederhana — version 1.0</p>
    </footer>
  </main>

  <script src="script.js"></script>
</body>
</html>