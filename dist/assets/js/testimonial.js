// Intersection Observer for performance
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        } else {
            entry.target.style.animationPlayState = 'paused';
        }
    });
}, observerOptions);

// Observe all marquee columns
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.marquee-column').forEach(column => {
        observer.observe(column);
    });

    // Add smooth hover effects
    // document.querySelectorAll('.testimonial-card').forEach(card => {
    //     card.addEventListener('mouseenter', () => {
    //         card.style.transition = 'transform 0.3s cubic-bezier(0.4,0,0.2,1)';
    //         card.style.transform = 'translateY(-5px) scale(1.02)';
    //         card.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
    //     }, { passive: true });

    //     card.addEventListener('mouseleave', () => {
    //         card.style.transform = 'translateY(0) scale(1)';
    //         card.style.boxShadow = '';
    //     }, { passive: true });
    // });
});