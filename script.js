document.addEventListener('DOMContentLoaded', () => {
    console.log('Resume Website Loaded');
  
    // Section reveal on scroll
    const sections = document.querySelectorAll('.section');
    const revealOnScroll = () => {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.8) {
          section.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
  
    // Theme Toggle
    const themeToggle = document.createElement('button');
    themeToggle.textContent = 'Toggle Theme';
    themeToggle.classList.add('theme-toggle');
    document.body.appendChild(themeToggle);
  
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  });
  