function random() {
    const range = document.getElementById('jumlahPeserta').value;

    if (!range) {
        alert("Jumlah peserta harus diisi");
    } else {
        const result = Math.floor(Math.random() * range);

        document.getElementById('result').innerHTML = result;
    }
}