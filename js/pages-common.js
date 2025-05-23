// Cargar Footer y botones de contacto (rutas relativas desde /pages/)
document.addEventListener('DOMContentLoaded', () => {
  fetch('../components/footer-commons.html')
    .then(response => {
      if (!response.ok) throw new Error('Error cargando footer');
      return response.text();
    })
    .then(data => {
      const footer = document.getElementById('footer');
      if (footer) footer.innerHTML = data;
    })
    .catch(err => console.error('Error cargando footer:', err));

  fetch('../components/contact-buttons.html')
    .then(response => {
      if (!response.ok) throw new Error('Error cargando botones de contacto');
      return response.text();
    })
    .then(data => {
      const contacto = document.getElementById('contacto');
      if (contacto) contacto.innerHTML = data;
    })
    .catch(err => console.error('Error cargando botones de contacto:', err));
});

// Navbar scroll
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 50) {
    navbar.style.top = '-190px';
  } else {
    navbar.style.top = '0';
  }
  lastScroll = currentScroll;
});

// Toggle menú móvil
function toggleMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  navLinks.classList.toggle('show');
  menuToggle.classList.toggle('open');
}

let slideIndex = 0;
    const slides = document.querySelector('.carousel-slides');
    const totalSlides = document.querySelectorAll('.carousel-slide').length;

    function showSlide(index) {
      slides.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
      slideIndex = (slideIndex + 1) % totalSlides;
      showSlide(slideIndex);
    }

    function prevSlide() {
      slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
      showSlide(slideIndex);
    }

    // Iniciar con el primer slide
    showSlide(slideIndex);
