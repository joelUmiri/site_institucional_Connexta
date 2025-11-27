// js/contato.js
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 100);
});