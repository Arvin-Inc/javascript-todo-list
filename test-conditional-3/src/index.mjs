let machineActive = true;
let pwd = "cheese";

let machineResult;
let pwdResult;

// Add your code here
if (machineActive) {
  machineResult = "Mesin sudah aktif, coba login";
  pwdResult = pwd === "cheese" ? "Berhasil Login" : "Gagal Login";
} else {
  machineResult = "Mesin Tidak aktif";
}

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = machineResult;
para2.textContent = pwdResult;
section.appendChild(para1);
section.appendChild(para2);
