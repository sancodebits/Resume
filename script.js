function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.floating-box');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the clicked section
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';
}

// Initially show the Education section
showSection('education');
