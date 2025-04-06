let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.style.transform = 'translateY(0)';
    return;
  }

  if (currentScroll > lastScroll) {
    // Scroll vers le bas → cacher la navbar
    header.style.transform = 'translateY(-100%)';
  } else {
    // Scroll vers le haut → montrer la navbar
    header.style.transform = 'translateY(0)';
  }

  lastScroll = currentScroll;
});
