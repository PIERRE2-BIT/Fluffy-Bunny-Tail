// Step 1: Get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 1000;
let timeAutoNext = 100000;

nextDom.onclick = function () {
    showSlider('next');
};

prevDom.onclick = function () {
    showSlider('prev');
};

let runTimeOut;
let runNextAuto = setTimeout(() => {
    nextDom.click();
}, timeAutoNext);

function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

    if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);  // Mueve el primer elemento al final
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);  // Mueve el primer thumbnail al final
        carouselDom.classList.add('next');
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);  // Mueve el último elemento al principio
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);  // Mueve el último thumbnail al principio
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}

// pie de pagina
document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var successMessage = document.getElementById('successMessage');

    if (email) {
        successMessage.textContent = '¡Gracias por suscribirte!';
        document.getElementById('email').value = '';
    } else {
        successMessage.textContent = 'Por favor ingresa un email válido.';
    }
});

// Obtén los elementos del DOM
const registerLink = document.getElementById('register-link');
const modal = document.getElementById('register-modal');
const closeBtn = document.querySelector('.close-btn');

// Muestra el modal cuando se hace clic en el enlace de registro
registerLink.addEventListener('click', function(e) {
  e.preventDefault(); // Evita la acción por defecto del enlace
  modal.style.display = 'block';
});

// Oculta el modal cuando se hace clic en el botón de cierre
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Oculta el modal si el usuario hace clic fuera del contenido del modal
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});