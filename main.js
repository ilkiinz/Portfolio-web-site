document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle navigation
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');

        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.9}s`;
            }
        });

        // Burger animation
        burger.classList.toggle('toggle');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For this example, we'll just log it to the console
        console.log('Form submitted');
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });

    // Intersection Observer for animations
    const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-slide-in, .animate-pop-in, .animate-slide-up');

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = entry.target.dataset.delay || '0s';
                entry.target.style.animationPlayState = 'running';
                animationObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        element.style.animationPlayState = 'paused';
        animationObserver.observe(element);
    });

    // Random color change for skill items
    const skillItems = document.querySelectorAll('.skill-item');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f7d794', '#786fa6', '#f3a683'];

    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            item.style.backgroundColor = randomColor;
        });

        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        });
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
});