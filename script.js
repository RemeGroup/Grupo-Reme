// Mobile menu toggle
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('navbar');
toggle.addEventListener('click', () => menu.classList.toggle('show'));

// Carousel functionality
const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let currentIndex = 0;
document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  slides.style.transform = `translateX(-${currentIndex * 100}%);`;
});
document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slideCount;
  slides.style.transform = `translateX(-${currentIndex * 100}%);`;
});
setInterval(() => {
  currentIndex = (currentIndex + 1) % slideCount;
  slides.style.transform = `translateX(-${currentIndex * 100}%);`;
}, 5000);
