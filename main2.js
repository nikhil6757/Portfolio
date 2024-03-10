burger = document.querySelector('.burger');
header = document.querySelector('.header');
navbar = document.querySelector('.navbar');

burger.addEventListener('click', () => {
    header.classList.toggle('h-nav-resp');
    navbar.classList.toggle('v-class-resp');
})