document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message, we will be in touch shortly!');
    this.reset();
});
