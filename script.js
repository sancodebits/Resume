// Smooth Scrolling for Navigation
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop - 60, // Offset for the header
        behavior: 'smooth'
    });
}

// Form Validation and Greeting Message
const form = document.getElementById('contact-form');
const greetingMessage = document.getElementById('greeting-message');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Basic validation (empty fields)
    if (name && email && message) {
        greetingMessage.innerHTML = `
            <p>Thank you, ${name}! Your message has been sent. I'll get back to you soon.</p>
        `;
        form.reset(); // Clear the form
    } else {
        greetingMessage.innerHTML = `
            <p style="color: red;">Please fill in all the fields.</p>
        `;
    }
});

// Scroll Animation for Sections
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.floating');
    sections.forEach(function(section) {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('fade-in');
        }
    });
});
