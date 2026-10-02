/**
 * Interactive Script for Abdul Rafiq Khan Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Copyright Year
    const yearSpan = document.getElementById('copyrightYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Top Scroll Progress Tracker
    const scrollTracker = document.getElementById('scrollTracker');
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progressPercentage = (scrollTop / scrollHeight) * 100;
        if (scrollTracker) {
            scrollTracker.style.width = `${progressPercentage}%`;
        }
    });

    // Mobile Hamburger Navigation Toggle
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const navItems = document.querySelectorAll('.nav-item');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            const isOpen = hamburgerBtn.classList.contains('active');
            hamburgerBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
            hamburgerBtn.setAttribute('aria-expanded', !isOpen);
        });

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                hamburgerBtn.classList.remove('active');
                navMenu.classList.remove('active');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Active Navigation Highlight on Scroll
    const sections = document.querySelectorAll('section[id]');
    function highlightNav() {
        const scrollPosition = window.scrollY + 120;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav-item[href*="#${sectionId}"]`);

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                if (navLink) {
                    navItems.forEach(link => link.classList.remove('active'));
                    navLink.classList.add('active');
                }
            }
        });
    }
    window.addEventListener('scroll', highlightNav);

    // Back to Top Button Control
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});