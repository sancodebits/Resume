// Function to toggle between dark and light mode
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const themeButton = document.querySelector('.theme-toggle');

    // Update button icon based on current theme
    if (document.body.classList.contains('dark-mode')) {
        themeButton.textContent = '🌞';  // Sun icon for light mode
    } else {
        themeButton.textContent = '🌙';  // Moon icon for dark mode
    }
}

// Scroll reveal for sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    
    const revealSections = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.8) {
                section.classList.add('visible');
            }
        });
    };
    
    window.addEventListener('scroll', revealSections);
    revealSections();  // Trigger on initial load
});
