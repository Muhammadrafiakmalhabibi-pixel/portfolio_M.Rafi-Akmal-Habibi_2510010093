
// DATA DETAIL UNIT USAHA
const unitUsaha = {

    fnb: {
        nama: "F&B (Food & Drink)",
        deskripsi:
            "Unit F&B menyediakan berbagai pilihan makanan dan minuman untuk memenuhi kebutuhan mahasiswa. Produk yang ditawarkan dapat mendukung aktivitas mahasiswa sehari-hari."
    },

    percetakan: {
        nama: "Percetakan & Dokumen",
        deskripsi:
            "Unit percetakan melayani jasa print, fotokopi, dan pengetikan dokumen untuk membantu kebutuhan akademik mahasiswa."
    },

    konsinyasi: {
        nama: "Konsinyasi",
        deskripsi:
            "Unit konsinyasi menyediakan fasilitas bagi mahasiswa yang ingin menitipkan dan memasarkan produk atau barang dagangannya."
    },

    kreatif: {
        nama: "Jasa Kreatif",
        deskripsi:
            "Unit jasa kreatif menawarkan layanan desain grafis, fotografi, dan videografi untuk berbagai kebutuhan kegiatan mahasiswa."
    }

};


// FUNGSI TOMBOL DETAIL
function showDetail(kategori) {

    const data = unitUsaha[kategori];

    if (data) {

        alert(
            "UNIT USAHA: " + data.nama +
            "\n\n" + data.deskripsi
        );

    } else {

        alert("Informasi unit usaha tidak ditemukan.");

    }

}
