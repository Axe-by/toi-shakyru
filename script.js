// TIMER
const weddingDate = new Date("2026-02-07T18:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("timer").innerHTML =
    `${days} күн ${hours} сағат ${minutes} минут`;
}, 1000);

// RSVP -> WhatsApp
function sendRSVP(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const status = document.getElementById("status").value;
  const guests = document.getElementById("guests").value || "1";

  const message =
    `Сәлеметсіз бе! Мен тойға ${status}. Атым: ${name}. Адам саны: ${guests}`;

  const phone = "77076212009"; // өз номерің
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}
