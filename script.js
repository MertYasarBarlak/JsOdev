let username = prompt("İsminiz:");
let info = document.querySelector("#info");
let zone = document.querySelector("#time");
info.innerHTML = `Merhaba, ${username}! Hoş Geldin!`;
let date = new Date().getDay();
let dateİnfo;
if (date == 1) {
  dateİnfo = "Pazar";
} else if (date == 2) {
  dateİnfo = "Pazartesi";
} else if (date == 3) {
  dateİnfo = "Salı";
} else if (date == 4) {
  dateİnfo = "Çarşamba";
} else if (date == 5) {
  dateİnfo = "Perşembe";
} else if (date == 6) {
  dateİnfo = "Cuma";
} else if (date == 7) {
  dateİnfo = "Cumartesi";
}

function tarihsaat() {
  let time = new Date().toLocaleTimeString();
  zone.innerHTML = `${time} ${dateİnfo}`;
}

setInterval(tarihsaat, 1000);
