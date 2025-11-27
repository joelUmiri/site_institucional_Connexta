// js/servicos.js
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Navbar scroll effect (mesmo de todas as páginas)
window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 100);
});