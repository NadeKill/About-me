// script.js

// Apare elementele la scroll
const fadeIns = document.querySelectorAll('.fade-in');

function revealOnScroll() {
  fadeIns.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Formular rezervare
const rezervareForm = document.getElementById('rezervareForm');
if (rezervareForm) {
  rezervareForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Rezervarea a fost trimisă! Vă așteptăm cu drag!');
    rezervareForm.reset();
  });
}

// Formular comandă
const comandaForm = document.getElementById('comandaForm');
if (comandaForm) {
  comandaForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Comanda a fost plasată cu succes! Veți fi contactat în scurt timp.');
    comandaForm.reset();
  });
}