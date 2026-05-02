// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.review-card, .about-content, .newsletter-section');
    cards.forEach(card => {
        observer.observe(card);
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        hamburger.classList.remove('active');
                    }
                }
            }
        });
    });

    // Newsletter Form
    const form = document.querySelector('.newsletter-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]');
            if (email.value) {
                // Simple validation
                if (isValidEmail(email.value)) {
                    alert('Thank you for subscribing! Check your email soon.');
                    email.value = '';
                } else {
                    alert('Please enter a valid email address.');
                }
            }
        });
    }

    // Parallax effect on hero
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function () {
            if (window.scrollY < 600) {
                hero.style.backgroundPosition = `center ${window.scrollY * 0.5}px`;
            }
        });
    }

    // Header shadow on scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 8px 24px rgba(0, 52, 204, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 8px rgba(0, 52, 204, 0.06)';
        }
    });
});

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Fade in animations on page load
window.addEventListener('load', function () {
    document.body.style.opacity = '1';
});

// Performance optimization: Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}
