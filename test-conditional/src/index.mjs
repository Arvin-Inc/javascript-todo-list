import "./styles.css";

let season = "hujan";
let response;

// Add your code here
// use switch case
switch (season) {
  case "cerah":
    response =
      "Cuaca yang terjadi saat langit cerah tanpa awan yang signifikan. Matahari bersinar terang dan cuaca umumnya hangat.";
    break;
  case "berawan":
    response =
      "Cuaca yang ditandai oleh kehadiran awan yang menutupi langit. Meskipun tidak terlalu cerah, biasanya tidak ada hujan atau salju yang turun.";
    break;
  case "hujan":
    response =
      "Cuaca di mana air turun dari langit dalam bentuk tetesan air. Hujan dapat bervariasi dari gerimis ringan hingga hujan deras.";
    break;
  case "salju":
    response =
      "Cuaca di mana air turun dari langit dalam bentuk kristal es. Salju sering terjadi di daerah dengan suhu rendah dan dapat menyebabkan penumpukan lapisan salju di permukaan tanah.";
    break;
  case "badai petir":
    response =
      "Cuaca yang ditandai oleh kilat, guntur, dan hujan yang intens. Badai petir biasanya terjadi dalam kondisi yang lembap dan dapat disertai dengan angin kencang.";
    break;
  case "kabut":
    response =
      "Cuaca di mana partikel air mengisi udara dan mengurangi jarak pandang. Kabut biasanya terjadi saat kelembapan tinggi dan suhu rendah.";
    break;
  default:
    response = "Saya tidak tahu cuaca apa yang sedang terjadi";
}

// use if, else if, else
if (season === "cerah") {
  response =
    "Cuaca yang terjadi saat langit cerah tanpa awan yang signifikan. Matahari bersinar terang dan cuaca umumnya hangat.";
} else if (season === "berawan") {
  response =
    "Cuaca yang ditandai oleh kehadiran awan yang menutupi langit. Meskipun tidak terlalu cerah, biasanya tidak ada hujan atau salju yang turun.";
} else if (season === "hujan") {
  response =
    "Cuaca di mana air turun dari langit dalam bentuk tetesan air. Hujan dapat bervariasi dari gerimis ringan hingga hujan deras.";
} else if (season === "salju") {
  response =
    "Cuaca di mana air turun dari langit dalam bentuk kristal es. Salju sering terjadi di daerah dengan suhu rendah dan dapat menyebabkan penumpukan lapisan salju di permukaan tanah.";
} else if (season === "badai petir") {
  response =
    "Cuaca yang ditandai oleh kilat, guntur, dan hujan yang intens. Badai petir biasanya terjadi dalam kondisi yang lembap dan dapat disertai dengan angin kencang.";
} else if (season === "kabut") {
  response =
    "Cuaca di mana partikel air mengisi udara dan mengurangi jarak pandang. Kabut biasanya terjadi saat kelembapan tinggi dan suhu rendah.";
} else {
  response = "Saya tidak tahu cuaca apa yang sedang terjadi";
}

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = response;
section.appendChild(para1);
