const menuEmail = document.querySelector('.navbar-email');
const eMenu = document.querySelector('.desktop-menu');
const mobileMenuIcon = document.querySelector('.menuIcon');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleMenu);
mobileMenuIcon.addEventListener('click', toggleMenu);

function toggleMenu() {
    eMenu.classList.toggle('inactive');
    mobileMenu.classList.toggle('inactive');
}