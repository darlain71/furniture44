// Hide/Show Navbar on Scroll
document.addEventListener('DOMContentLoaded', () => {
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');
    const hamburger = document.getElementById('hamburger-btn');
    
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Check if mobile/tablet navigation menu is open/active
        const isMenuOpen = hamburger && (
            hamburger.classList.contains('open') || 
            hamburger.classList.contains('active') ||
            document.getElementById('nav-links')?.classList.contains('show')
        );

        // Hide navbar if scrolling down and scrolled more than 100px
        if (currentScrollY > lastScrollY && currentScrollY > 100 && !isMenuOpen) {
            navbar.classList.add('nav-hidden');
        } else {
            navbar.classList.remove('nav-hidden');
        }
        
        lastScrollY = currentScrollY;
    });
});
