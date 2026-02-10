document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelectorAll('.mobile-menu a');

    // Show menu toggle on small screens
    function handleResize() {
        if (window.innerWidth <= 768) {
            menuToggle.style.display = 'flex';
        } else {
            menuToggle.style.display = 'none';
            mobileMenu.style.display = 'none';
        }
    }
    handleResize();
    window.addEventListener('resize', handleResize);

    // Toggle mobile menu
    menuToggle.addEventListener('click', function() {
        if (mobileMenu.style.display === 'flex') {
            mobileMenu.style.display = 'none';
        } else {
            mobileMenu.style.display = 'flex';
        }
    });

    // Hide menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.style.display = 'none';
        });
    });
}); 