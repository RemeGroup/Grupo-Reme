// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); }
  });
}, {threshold:0.2});
faders.forEach(f => obs.observe(f));

// Mobile menu
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('navbar');
toggle.addEventListener('click', () => menu.classList.toggle('show'));

// Carousel
document.querySelectorAll('.carousel').forEach(car => {
  const slides = car.querySelector('.slides');
  const imgs = slides.children;
  let idx=0;
  car.querySelector('.prev').onclick = () => { idx=(idx-1+imgs.length)%imgs.length; slides.style.transform=`translateX(-${idx*100}%)`; };
  car.querySelector('.next').onclick = () => { idx=(idx+1)%imgs.length; slides.style.transform=`translateX(-${idx*100}%)`; };
});
