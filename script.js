const hamburger = document.querySelector('.container_menu');
const navMenu = document.querySelector('.li-desk');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('change');
  navMenu.classList.toggle('change');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('change');
  navMenu.classList.remove('change');
}));