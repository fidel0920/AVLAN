let currentIndex = 0;
const totalSlides = document.querySelectorAll('.cards li').length;
const gallery = document.querySelector('.gallery');

function updateSlider() {
    const newTransform = -currentIndex * 820; // Ancho del slide
    gallery.style.transform = `translateX(${newTransform}px)`;
}

// Función para avanzar automáticamente el slider cada 5 segundos
function autoPlay() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}

// Iniciar autoplay
let autoPlayInterval = setInterval(autoPlay, 5000);

// Mover con botones y reiniciar el autoplay
document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
    resetAutoPlay();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
    resetAutoPlay();
});

// Reiniciar autoplay cuando el usuario interactúa con los botones
function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(autoPlay, 5000);
}
 
//Evento para transicion de cindicador en el navbar
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
  
    window.addEventListener('scroll', function() {
      let current = '';
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
          current = section.getAttribute('id');
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
          link.classList.add('active');
        }
      });
    });
  });
  
