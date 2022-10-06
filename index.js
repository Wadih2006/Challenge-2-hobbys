const header = document.getElementById('js-rotate');
  const button = document.getElementById('js-menu-button');
  const hamburger = document.getElementById('js-hamburger');
  button.onclick = (e) => {
    e.preventDefault;
    header.classList.toggle('main-header--rotate');
    hamburger.classList.toggle('menu-button__hb-is-active');}