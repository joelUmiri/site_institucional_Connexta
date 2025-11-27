// js/cases.js
AOS.init({
    duration: 1100,
    once: true,
    offset: 120
});

window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 100);
});