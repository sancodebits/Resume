# Personal Resume Website

A modern, responsive personal resume website built with pure HTML, CSS, and JavaScript. Features a clean design with interactive elements and seamless email integration.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Made with HTML](https://img.shields.io/badge/Made%20with-HTML-orange)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/Styled%20with-CSS-blue)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/Powered%20by-JavaScript-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

A personal portfolio website designed to showcase professional experience, skills, and projects. Features a responsive design, interactive UI elements, and integrated contact functionality.

## Features

- **Responsive Design**
  - Mobile-first approach
  - Adaptive layouts for all screen sizes
  - Dynamic content scaling

- **Interactive UI Elements**
  - Floating sections with hover animations
  - Smooth scrolling navigation
  - Dynamic contact form with EmailJS
  - Real-time form validation

- **Professional Sections**
  - About Me
  - Work Experience
  - Projects Portfolio
  - Skills Showcase
  - Education Background
  - Contact Information

## Technologies

- **Frontend Development**
  - HTML5
  - CSS3 (Custom styling & animations)
  - Vanilla JavaScript

- **External Libraries**
  - Font Awesome 6.0.0
  - EmailJS Integration

- **Design**
  - Custom CSS Gradients
  - Flexbox Layout
  - Responsive Design

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/resume-website.git
```

2. Navigate to project directory
```bash
cd resume-website
```

3. Open index.html in your browser
```bash
open index.html  # For macOS
start index.html # For Windows
```

## Usage

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Configure your email service
3. Update the EmailJS configuration:

```javascript
emailjs.init("YOUR_USER_ID");
```

### Customization

Modify the color scheme in CSS:
```css
:root {
    --primary-color: #0073e6;
    --secondary-color: #0062cc;
    --gradient: linear-gradient(135deg, #0073e6, #0062cc);
}
```

## Configuration

### Required Environment Variables

Create a `.env` file in the root directory:

```env
EMAILJS_USER_ID=your_user_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_SERVICE_ID=your_service_id
```

### Custom Styling

1. Modify `styles.css` for custom themes
2. Update font imports in HTML header
3. Adjust responsive breakpoints in CSS

## Development

### Prerequisites

- Basic understanding of HTML/CSS/JavaScript
- Text editor (VS Code recommended)
- Modern web browser
- Git for version control

### Local Development

1. Fork the repository
2. Create a new branch
```bash
git checkout -b feature/YourFeature
```
3. Make changes and commit
```bash
git commit -m "Add new feature"
```
4. Push to your fork
```bash
git push origin feature/YourFeature
```

## Contributing

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## Contact

- LinkedIn: [Sandeep Singh](https://www.linkedin.com/in/sancode/)
- Email: sandeepsingh.official.dev@gmail.com
- GitHub: [@sancodebits](https://github.com/sancodebits)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Font Awesome for icons
- EmailJS for form functionality
- Open source community for inspiration
