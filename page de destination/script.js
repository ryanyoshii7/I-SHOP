// scripts.js
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