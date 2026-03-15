// Navbar Scroll Effect and Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    if(navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                navbar.classList.add('shadow-md', 'backdrop-blur-lg', 'bg-white/90');
                navbar.classList.remove('bg-white/80', 'backdrop-blur-md', 'shadow-sm');
            } else {
                navbar.classList.add('bg-white/80', 'backdrop-blur-md', 'shadow-sm');
                navbar.classList.remove('shadow-md', 'backdrop-blur-lg', 'bg-white/90');
            }
        });
    }

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            
            // Change Icon
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                if (mobileMenu.classList.contains('hidden')) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                } else {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                }
            }
        });
    }

    // Set Active State for Navigation Items based on current URL
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentLocation.endsWith(linkPath) && linkPath !== '#') {
            link.classList.add('text-brand-600', 'border-b-2', 'border-brand-600');
            link.classList.remove('text-gray-600', 'border-transparent');
        } else if (currentLocation.endsWith('/') && linkPath === 'index.html') {
             link.classList.add('text-brand-600', 'border-b-2', 'border-brand-600');
             link.classList.remove('text-gray-600', 'border-transparent');
        }
    });

    // Image loading animation helper
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if(img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        }
    });
});
