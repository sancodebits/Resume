document.addEventListener("DOMContentLoaded", function () {
    // Apply floating effect to elements with 'floating' class
    const floatingElements = document.querySelectorAll('.floating');
    floatingElements.forEach((element) => {
        element.classList.add('floating');
    });

    // Form Submission for Contact Section
    const form = document.getElementById('contact-form');
    const greetingMessage = document.getElementById('greeting-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Show greeting message
        greetingMessage.style.display = 'block';

        // Reset form after submission
        form.reset();

        // Disable submit button and update text
        const submitButton = form.querySelector('button');
        submitButton.disabled = true;
        submitButton.textContent = 'Message Sent';

        // Re-enable button after 3 seconds
        setTimeout(function () {
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
        }, 3000);
    });
});
