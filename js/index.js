// js/index.js
particlesJS('particles-js', {
    particles: {
        number: { value: 90 },
        color: { value: "#FF007F" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 140, color: "#FF007F", opacity: 0.25, width: 1 },
        move: { enable: true, speed: 2 }
    },
    interactivity: { events: { onhover: { enable: true, mode: "repulse" } } },
    retina_detect: true
});

AOS.init({ duration: 1000, once: true });
window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 100);
});