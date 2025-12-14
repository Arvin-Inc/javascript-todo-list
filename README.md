# Project Overview

This repository contains several HTML files with JavaScript examples. Below are the filenames and their complete code content for easy reference.

## appDaftarTugas.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text" id="inputTugas" placeholder="Masukkan tugas...">
    <button id="submit" onclick="daftarTugas()">Tambah Tugas</button>

    <h2>Daftar Tugas:</h2>
    <ul id="listTugas">
    </ul>

    <script>
        function daftarTugas() {
            const inputTugas = document.getElementById("inputTugas").value;
            const listTugas = document.getElementById("listTugas");
            const li = document.createElement("li");

            if (inputTugas !== "") {
                li.innerText = inputTugas;
                listTugas.appendChild(li);
                document.getElementById("inputTugas").value = "";
                return;
            }else {
                alert("Tolong masukkan tugas terlebih dahulu!");
                return;
            }
        }
    </script>
</body>
</html>
```

## pembuatanKtp.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Latihan</title>
</head>
<body>
    <input type="number" id="inputUmur" placeholder="Masukkan umur...">
    <button onclick="cekKtp()">Cek Sekarang</button>
    <h1 id="hasilKtp">Hasil cek KTP</h1>


    <script>
        function cekKtp() {
            const umur = document.getElementById("inputUmur").value;
            const hasil = document.getElementById("hasilKtp");

            if (umur >= 17) {
                hasil.innerText = "Sudah Bisa Membuat KTP";
            }else {
                hasil.innerText = "Belum Bisa Membuat KTP";
            }
        }
    </script>
</body>
</html>
```

## pengolahanArray.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // let hobi = ["sepakBola", "futsal", "Berenang"];
        // console.log(hobi[1]);

        let absensi = [
            {
                nama: "Ahmad",
                hadir: false
            },
            {
                nama: "Budi",
                hadir: true
            }
        ];

        absensi.forEach(function(siswa) {
            console.log(`${siswa.nama} : ${siswa.hadir}`);
        });
    </script>
</body>
</html>
