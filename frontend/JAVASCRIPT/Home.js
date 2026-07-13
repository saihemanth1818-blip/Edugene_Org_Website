document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');

    // Function to handle scroll event
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for animations
    const animatedElements = document.querySelectorAll('.animatable');

    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of an element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing the element once it's visible
            }
        });
    }, observerOptions);

    animatedElements.forEach((el, index) => {
        // Apply a staggered delay
        el.style.transitionDelay = `${index * 100}ms`;
        observer.observe(el);
    });
});