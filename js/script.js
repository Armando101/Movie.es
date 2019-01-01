const ipad = window.matchMedia('screen and (max-width: 355px)');
 // Al estar ejecutando muchas veces este selector, lo guardaremos en una variable
const menu = document.querySelector('.menu-ham');
// console.log(menu);
const burgerButton = document.querySelector('#burger-menu');
// console.log(burgerButton);

// Para que este listener funcione por primera vez debe haber un cambio dentro de la pantalla, por lo tanto la funcion validation la tenemos que llamar una vez al cargar el sitio
ipad.addListener(validation);
// Aqui vamos a mandar llamar la funcion validation para que se ejecute al cargar el sitio
validation(ipad);

function validation(event) {
   console.log(event.matches);
   if (event.matches) {
     burgerButton.addEventListener('click', hideShow);
   } else {
     burgerButton.removeEventListener('click', hideShow);
   }
}

function hideShow() {
  if (menu.classList.contains('is-active')) {
    menu.classList.remove('is-active');
  } else {
    menu.classList.add('is-active');
  }
}
