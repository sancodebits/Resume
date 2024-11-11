function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop - 60, // offset for header
        behavior: 'smooth'
    });
}
