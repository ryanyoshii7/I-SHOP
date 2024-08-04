// scripts.js
document.getElementById('menu-toggle').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
});

var slides = document.querySelectorAll('.slide');
var currentSlide = 0;

document.querySelector('.carousel-control.next').addEventListener('click', function() {
    goToSlide(currentSlide + 1);
});

document.querySelector('.carousel-control.prev').addEventListener('click', function() {
    goToSlide(currentSlide - 1);
});

function goToSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Optionnel : Faire défiler automatiquement toutes les 5 secondes
setInterval(function() {
    goToSlide(currentSlide + 1);
}, 5000);

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('newsletter-email').value;
    var message = document.getElementById('newsletter-message');

    if (validateEmail(email)) {
        message.textContent = 'Merci pour votre inscription!';
        message.style.color = 'green';
        // Envoyer le formulaire ou traiter l'inscription ici
    } else {
        message.textContent = 'Veuillez entrer une adresse email valide.';
        message.style.color = 'red';
    }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}