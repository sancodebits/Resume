document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Extract name from the form and display a greeting message
    const name = event.target.name.value;
    const messageDiv = document.getElementById('greeting-message');
    messageDiv.textContent = `Thank you for your message, ${name}! I will get back to you soon.`;
    messageDiv.style.display = 'block';

    // Hide the greeting message after 5 seconds
    setTimeout(function() {
        messageDiv.style.display = 'none';
    }, 5000);
});
