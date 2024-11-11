// Smooth Scroll Functionality
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Form Validation (Optional - For a simple validation to check fields)
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    if (!name || !email || !message) {
        e.preventDefault(); // Prevent form submission
        alert('Please fill out all fields before submitting!');
    } else {
        alert('Your message has been sent!');
    }
});

// Scroll Animation Effect (Adding an animation when sections come into view)
const elements = document.querySelectorAll('.container, .experience-item, .contact-info');

function handleScrollAnimation() {
    elements.forEach(el => {
        const position = el.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            el.classList.add('animate');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimation);

// Initial call to animate elements that are in view
handleScrollAnimation();
