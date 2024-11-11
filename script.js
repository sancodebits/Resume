function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("greeting-message").innerHTML = "<p>Thank you for your message! I will get back to you soon.</p>";
});
