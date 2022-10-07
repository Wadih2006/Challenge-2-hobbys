const header = document.getElementById('js-rotate');
  const button = document.getElementById('js-menu-button');
  const hamburger = document.getElementById('js-hamburger');
  button.onclick = (e) => {
    e.preventDefault;
    header.classList.toggle('main-header--rotate');
    hamburger.classList.toggle('menu-button__hb-is-active');}





    document.addEventListener('DOMContentLoaded', () => {
        for(let i = 0; i < 75; i++) {
          let bubble = document.createElement('div');
          bubble.className = 'bubble';
          
          bubble.style.cssText = `
            --blob-size: ${2 + Math.random()*4}rem;
            --blob-distance: ${5 + Math.random()*4}rem;
            --blob-position: ${-5 + Math.random()*110}%;
            --blob-time: ${2 + Math.random()*2}s;
            --blob-delay: ${-1 * (2 + Math.random()*2)}s;
          `;
          
          document.querySelector('#bubble-container').append(bubble);
        }
      });