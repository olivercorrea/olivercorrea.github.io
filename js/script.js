// Link activo

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    // sticky navbar
    let header = document.querySelector('.header')

    header.classList.toggle('sticky', window.scrollY > 100);
};

// scroll reveal
ScrollReveal({ 
    reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

ScrollReveal().reveal('.home-img img, .services-container, .contact form', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });

ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });






