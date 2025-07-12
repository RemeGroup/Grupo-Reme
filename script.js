// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){ entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  });
},{threshold:0.2});
faders.forEach(fader => observer.observe(fader));

// Mobile menu toggle
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('navbar');
toggle.addEventListener('click', () => menu.classList.toggle('show'));
