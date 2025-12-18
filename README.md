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
        // Define function to add task
        function daftarTugas() {
            // Get value from input field
            const inputTugas = document.getElementById("inputTugas").value;
            // Get task list element
            const listTugas = document.getElementById("listTugas");
            // Create new list item
            const li = document.createElement("li");

            // Check if input is not empty
            if (inputTugas !== "") {
                // Set text of list item
                li.innerText = inputTugas;
                // Append list item to list
                listTugas.appendChild(li);
                // Clear input field
                document.getElementById("inputTugas").value = "";
                // Exit function
                return;
            }else {
                // Alert if input is empty
                alert("Tolong masukkan tugas terlebih dahulu!");
                // Exit function
                return;
            }
        }
    </script>
</body>
</html>
```
<<<<<<< SEARCH
```html
<!-- Declare HTML5 document type -->
<!DOCTYPE html>
<!-- Start HTML document with English language -->
<html lang="en">
<!-- Head section for metadata -->
<head>
    <!-- Set character encoding to UTF-8 -->
    <meta charset="UTF-8">
    <!-- Set viewport for responsive design -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Set page title -->
    <title>Latihan</title>
</head>
<!-- Body section for content -->
<body>
    <!-- Input field for age entry -->
    <input type="number" id="inputUmur" placeholder="Masukkan umur...">
    <!-- Button to check KTP, calls cekKtp function -->
    <button onclick="cekKtp()">Cek Sekarang</button>
    <!-- Heading for result -->
    <h1 id="hasilKtp">Hasil cek KTP</h1>

    <!-- Script section for JavaScript -->
    <script>
        // Define function to check KTP eligibility
        function cekKtp() {
            // Get age value from input
            const umur = document.getElementById("inputUmur").value;
            // Get result element
            const hasil = document.getElementById("hasilKtp");

            // Check if age is 17 or above
            if (umur >= 17) {
                // Set result to eligible
                hasil.innerText = "Sudah Bisa Membuat KTP";
            }else {
                // Set result to not eligible
                hasil.innerText = "Belum Bisa Membuat KTP";
            }
        }
    </script>
</body>
</html>
```
=======
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
        // Define function to check KTP eligibility
        function cekKtp() {
            // Get age value from input
            const umur = document.getElementById("inputUmur").value;
            // Get result element
            const hasil = document.getElementById("hasilKtp");

            // Check if age is 17 or above
            if (umur >= 17) {
                // Set result to eligible
                hasil.innerText = "Sudah Bisa Membuat KTP";
            }else {
                // Set result to not eligible
                hasil.innerText = "Belum Bisa Membuat KTP";
            }
        }
    </script>
</body>
</html>
```
<<<<<<< SEARCH
```html
<!-- Declare HTML5 document type -->
<!DOCTYPE html>
<!-- Start HTML document with English language -->
<html lang="en">
<!-- Head section for metadata -->
<head>
    <!-- Set character encoding to UTF-8 -->
    <meta charset="UTF-8">
    <!-- Set viewport for responsive design -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Set page title -->
    <title>Document</title>
</head>
<!-- Body section for content -->
<body>
    <!-- Script section for JavaScript -->
    <script>
        // Commented out hobby array example
        // let hobi = ["sepakBola", "futsal", "Berenang"];
        // Commented out console log for hobby
        // console.log(hobi[1]);

        // Declare attendance array with objects
        let absensi = [
            // First student object
            {
                // Name property
                nama: "Ahmad",
                // Attendance property
                hadir: false
            },
            // Second student object
            {
                // Name property
                nama: "Budi",
                // Attendance property
                hadir: true
            }
        ];

        // Iterate over attendance array
        absensi.forEach(function(siswa) {
            // Log student name and attendance
            console.log(`${siswa.nama} : ${siswa.hadir}`);
        });
    </script>
</body>
</html>
```
=======
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
        // Commented out hobby array example
        // let hobi = ["sepakBola", "futsal", "Berenang"];
        // Commented out console log for hobby
        // console.log(hobi[1]);

        // Declare attendance array with objects
        let absensi = [
            // First student object
            {
                // Name property
                nama: "Ahmad",
                // Attendance property
                hadir: false
            },
            // Second student object
            {
                // Name property
                nama: "Budi",
                // Attendance property
                hadir: true
            }
        ];

        // Iterate over attendance array
        absensi.forEach(function(siswa) {
            // Log student name and attendance
            console.log(`${siswa.nama} : ${siswa.hadir}`);
        });
    </script>
</body>
</html>
```
<<<<<<< SEARCH
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
=======
```html
<!-- Declare HTML5 document type -->
<!DOCTYPE html>
<!-- Start HTML document with English language -->
<html lang="en">
<!-- Head section for metadata -->
<head>
    <!-- Set character encoding to UTF-8 -->
    <meta charset="UTF-8">
    <!-- Set viewport for responsive design -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Set page title -->
    <title>Latihan</title>
</head>
<!-- Body section for content -->
<body>
    <!-- Input field for age entry -->
    <input type="number" id="inputUmur" placeholder="Masukkan umur...">
    <!-- Button to check KTP, calls cekKtp function -->
    <button onclick="cekKtp()">Cek Sekarang</button>
    <!-- Heading for result -->
    <h1 id="hasilKtp">Hasil cek KTP</h1>

    <!-- Script section for JavaScript -->
    <script>
        // Define function to check KTP eligibility
        function cekKtp() {
            // Get age value from input
            const umur = document.getElementById("inputUmur").value;
            // Get result element
            const hasil = document.getElementById("hasilKtp");

            // Check if age is 17 or above
            if (umur >= 17) {
                // Set result to eligible
                hasil.innerText = "Sudah Bisa Membuat KTP";
            }else {
                // Set result to not eligible
                hasil.innerText = "Belum Bisa Membuat KTP";
            }
        }
    </script>
</body>
</html>
```
<<<<<<< SEARCH
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
```
=======
```html
<!-- Declare HTML5 document type -->
<!DOCTYPE html>
<!-- Start HTML document with English language -->
<html lang="en">
<!-- Head section for metadata -->
<head>
    <!-- Set character encoding to UTF-8 -->
    <meta charset="UTF-8">
    <!-- Set viewport for responsive design -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Set page title -->
    <title>Document</title>
</head>
<!-- Body section for content -->
<body>
    <!-- Script section for JavaScript -->
    <script>
        // Commented out hobby array example
        // let hobi = ["sepakBola", "futsal", "Berenang"];
        // Commented out console log for hobby
        // console.log(hobi[1]);

        // Declare attendance array with objects
        let absensi = [
            // First student object
            {
                // Name property
                nama: "Ahmad",
                // Attendance property
                hadir: false
            },
            // Second student object
            {
                // Name property
                nama: "Budi",
                // Attendance property
                hadir: true
            }
        ];

        // Iterate over attendance array
        absensi.forEach(function(siswa) {
            // Log student name and attendance
            console.log(`${siswa.nama} : ${siswa.hadir}`);
        });
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
