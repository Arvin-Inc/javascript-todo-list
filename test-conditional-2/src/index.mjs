import "./styles.css";

let response;
let score = ;
let machineActive = true;

// Add your code here
if (machineActive === true) {
  if (score < 0 || score > 100) {
    response = "Ini tidak mungkin, kesalahan telah terjadi.";
  } else if (score <= 19) {
    response = "Itu adalah skor yang mengerikan — gagal total!";
  } else if (score <= 39) {
    response =
      "Anda tahu beberapa hal, tetapi itu skor yang cukup buruk. Perlu perbaikan.";
  } else if (score <= 69) {
    response = "Kamu melakukan pekerjaan yang layak, lumayan!";
  } else if (score <= 89) {
    response = "Itu skor yang bagus, Anda benar-benar tahu hal-hal Anda.";
  } else if (score <= 100) {
    response = "Skor yang luar biasa! Apakah kamu curang? Apakah kamu nyata?";
  }
} else {
  response =
    "Mesin tidak aktif, hidupkan terlebih dahulu untuk mengecek score kamu";
}
// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = `Your score is ${score}`;
para2.textContent = response;
section.appendChild(para1);
section.appendChild(para2);
