const menuEmail = document.querySelector('.navbar-email');
const eMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleMenu);

function toggleMenu() {
    eMenu.classList.toggle('inactive');
}