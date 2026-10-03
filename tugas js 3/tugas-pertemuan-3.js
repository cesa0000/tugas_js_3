// ==========================================
// Tugas Pertemuan 3 JS - Manajemen Produk Toko
// ==========================================

// 1. Array produkToko
let produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 },
];

// Format angka ke Rupiah, contoh: 7000000 -> Rp 7.000.000
function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

// 2. Fungsi tambahProduk(nama, harga, stok)
function tambahProduk(nama, harga, stok) {
  // Validasi input
  if (typeof nama !== "string" || nama.trim() === "") {
    console.log("Gagal: nama produk tidak valid.");
    return;
  }
  if (typeof harga !== "number" || harga <= 0 || typeof stok !== "number" || stok < 0) {
    console.log("Gagal: harga harus > 0 dan stok tidak boleh negatif.");
    return;
  }

  // id baru = id terbesar + 1 (aman walaupun ada produk yang pernah dihapus)
  const idBaru =
    produkToko.length > 0 ? Math.max(...produkToko.map((p) => p.id)) + 1 : 1;

  produkToko.push({ id: idBaru, nama: nama.trim(), harga, stok });
  console.log(`Produk "${nama}" berhasil ditambahkan dengan id ${idBaru}.`);
}

// 3. Fungsi hapusProduk(id)
function hapusProduk(id) {
  const index = produkToko.findIndex((p) => p.id === id);

  if (index === -1) {
    console.log(`Gagal: produk dengan id ${id} tidak ditemukan.`);
    return;
  }

  const [dihapus] = produkToko.splice(index, 1);
  console.log(`Produk "${dihapus.nama}" (id ${id}) berhasil dihapus.`);
}

// 4. Fungsi tampilkanProduk()
function tampilkanProduk() {
  console.log("\n=== DAFTAR PRODUK ===");

  if (produkToko.length === 0) {
    console.log("Belum ada produk.");
    return;
  }

  produkToko.forEach((p) => {
    console.log(
      `ID: ${p.id} | Nama: ${p.nama} | Harga: ${formatRupiah(p.harga)} | Stok: ${p.stok}`
    );
  });
}

// ==========================================
// Pengujian
// ==========================================
tampilkanProduk();

tambahProduk("Monitor", 1800000, 4);
tampilkanProduk();

hapusProduk(2); // hapus Mouse
hapusProduk(99); // id tidak ada -> pesan gagal
tampilkanProduk();
