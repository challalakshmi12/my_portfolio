// script.js

document.addEventListener('DOMContentLoaded', function() {

    // --- AOS (Animate on Scroll) Initialization ---
    AOS.init({
        duration: 800, // values from 0 to 3000, with step 50ms
        once: true, // whether animation should happen only once - while scrolling down
    });

    // --- Typing Effect ---
    const typingElement = document.querySelector('.typing-effect');
    if (typingElement) {
        const roles = ["Web Developer", "UI/UX Designer", "ML Enthusiast"];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentRole = roles[roleIndex];
            if (isDeleting) {
                // Deleting text
                typingElement.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                // Typing text
                typingElement.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }

            // Check if word is fully typed or deleted
            if (!isDeleting && charIndex === currentRole.length) {
                // Pause at end of word
                setTimeout(() => { isDeleting = true; }, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }

            // Set typing speed
            const typingSpeed = isDeleting ? 100 : 200;
            setTimeout(type, typingSpeed);
        }

        type();
    }

    // --- Sticky Navbar ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Hamburger Menu for Mobile ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});
