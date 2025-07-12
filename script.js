// Mobile menu toggle
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('navbar');
toggle.addEventListener('click', () => menu.classList.toggle('show'));

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});
