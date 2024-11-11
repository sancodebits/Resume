document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = event.target.name.value;
    const messageDiv = document.getElementById('greeting-message');
    messageDiv.textContent = `Thank you for your message, ${name}! I will get back to you soon.`;
    messageDiv.style.display = 'block';

    setTimeout(function() {
        messageDiv.style.display = 'none';
    }, 5000); // Hide the message after 5 seconds
});
