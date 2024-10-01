document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const header = document.querySelector('header');
    const skillLevels = document.querySelectorAll('.skill-level');
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    const skillsSection = document.querySelector('#about');
    const form = document.querySelector('.contact-form');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        navLinks.forEach((link, index) => link.style.animation = link.style.animation ? '' : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 100);
        let current = '';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - section.clientHeight / 3) current = section.id;
        });
        navItems.forEach(item => {
            item.classList.toggle('active', item.getAttribute('href').slice(1) === current);
        });
    });

    new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillLevels.forEach(skill => {
                    const targetWidth = skill.getAttribute('style').match(/width: (\d+)%/)[1];
                    skill.style.width = '0%';
                    setTimeout(() => skill.style.width = `${targetWidth}%`, 100);
                });
            }
        });
    }, { threshold: 0.5 }).observe(skillsSection);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted! (This is a placeholder action)');
    });
});
