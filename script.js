// TIMER
const weddingDate = new Date("2026-02-07T18:00:00").getTime();
setInterval(() => {
  const diff = weddingDate - new Date().getTime();
  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff / (1000*60*60)) % 24);
  const m = Math.floor((diff / (1000*60)) % 60);
  document.getElementById("timer").innerText = `${d} күн ${h} сағат ${m} минут`;
}, 1000);

// RSVP
function sendRSVP(e) {
  e.preventDefault();
  const msg =
    `Сәлеметсіз бе! Мен тойға ${status.value}. Атым: ${name.value}. Адам саны: ${guests.value || 1}`;
  window.open(`https://wa.me/77076212009?text=${encodeURIComponent(msg)}`);
}

// QR
document.getElementById("qr").src =
  "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" + encodeURIComponent(location.href);

// THEME
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// FADE-IN
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add("show"));
});
document.querySelectorAll(".fade").forEach(el => observer.observe(el));
