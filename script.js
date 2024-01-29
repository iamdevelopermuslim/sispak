function diagnose() {
    // Ambil gejala yang dipilih
    var selectedSymptoms = [];
    var selectBox = document.getElementById('symptoms');
    for (var i = 0; i < selectBox.options.length; i++) {
        if (selectBox.options[i].selected) {
            selectedSymptoms.push(selectBox.options[i].value);
        }
    }

    // Lakukan diagnosa berdasarkan gejala
    var result = "Hasil Diagnosa: ";
    var treatment = "Solusi Pengobatan: ";
    if (selectedSymptoms.length === 0) {
        result += "Pilih setidaknya satu gejala.";
        
    } else {
        // Contoh logika diagnosa dan solusi pengobatan sederhana
        if (selectedSymptoms.includes("kuning")) {
            result += "Tanaman mungkin mengalami defisiensi nutrisi.";
            treatment += "Berikan pupuk yang mengandung nutrisi yang dibutuhkan.";
        } else if (selectedSymptoms.includes("bintik")) {
            result += "Tanaman mungkin terinfeksi penyakit daun bercak.";
            treatment += "Gunakan fungisida yang direkomendasikan oleh ahli pertanian.";
        } else if (selectedSymptoms.includes("layu")) {
            result += "Tanaman mungkin terkena penyakit layu.";
            treatment += "Isolasi tanaman yang terinfeksi dan berikan perlakuan fungisida.";
        } else if (selectedSymptoms.includes("kerut")) {
            result += "Tanaman mungkin mengalami daun mengkerut.";
            treatment += "Periksa penyiraman tanaman dan pastikan kelembaban cukup.";
        } else if (selectedSymptoms.includes("busuk")) {
            result += "Buah atau batang mungkin mengalami pembusukan.";
            treatment += "Hapus bagian yang terinfeksi dan hindari kelebihan air.";
        } else if (selectedSymptoms.includes("bercak_putih")) {
            result += "Muncul bercak putih pada daun, kemungkinan penyakit jamur.";
            treatment += "Pemakaian fungisida dapat membantu dalam mengatasi masalah ini.";
        } else if (selectedSymptoms.includes("daun_kering")) {
            result += "Daun tanaman mengering, bisa jadi akibat kekeringan.";
            treatment += "Perhatikan pola penyiraman dan pastikan tanaman mendapatkan cukup air.";
        } else if (selectedSymptoms.includes("ulat")) {
            result += "Tanaman mungkin terkena serangan ulat.";
            treatment += "Gunakan insektisida yang sesuai untuk mengendalikan ulat.";
        } else if (selectedSymptoms.includes("bungan_jatuh")) {
            result += "Bunga jatuh sebelum berbuah, bisa disebabkan oleh faktor lingkungan.";
            treatment += "Periksa kondisi tanah dan pertimbangkan untuk memberikan pupuk tambahan.";
        } else if (selectedSymptoms.includes("tanaman_pucat")) {
            result += "Tanaman tampak pucat, mungkin karena kekurangan zat besi.";
            treatment += "Berikan pupuk yang mengandung zat besi atau segera periksakan tanah.";
        } else if (selectedSymptoms.includes("daun_menjalar")) {
            result += "Daun tanaman mengalami perjalanan (menjalar), kemungkinan ada serangan jamur.";
            treatment += "Hindari kelembaban yang tinggi dan gunakan fungisida sesuai petunjuk.";
        } else {
            result += "Tidak dapat menentukan penyebab masalah.";
            treatment += "Konsultasikan dengan ahli pertanian untuk mendapatkan bantuan lebih lanjut.";
        }
    }

    // Tampilkan hasil diagnosa dan solusi pengobatan
    document.getElementById('result').innerText = result;
    document.getElementById('treatment').innerText = treatment;
}
