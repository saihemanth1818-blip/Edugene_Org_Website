document.addEventListener('DOMContentLoaded', function () {
    // Set opacity to 1 to fade in the page
    // This is wrapped in a timeout to ensure it happens after the initial render
    setTimeout(() => document.body.style.opacity = '1', 50);

    const navbarHTML = `
    <header>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <a class="navbar-brand d-flex align-items-center" href="Home.html">
                    <img src="../IMAGES/news.jpeg" alt="EduGene Logo" class="logo">
                    <span class="brand-text">EDUGENE Technologies</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="Home.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about.html">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="courses.html">Courses</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                    <div id="auth-section" class="ms-lg-3">
                        <!-- This will be replaced dynamically -->
                        <a href="login.html" class="btn btn-primary login-btn">Login</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    `;

    const footerHTML = `
    <footer class="footer bg-dark text-white pt-5 pb-4">
        <div class="container">
            <div class="row">
                <!-- About Column -->
                <div class="col-lg-4 col-md-6 mb-4">
                    <h5 class="text-uppercase fw-bold mb-4">EDUGENE Technologies</h5>
                    <p class="text-white-50">
                        Bridging the gap between academia and the software industry with expert-led training programs designed for the tech world.
                    </p>
                </div>
                <!-- Quick Links Column -->
                <div class="col-lg-2 col-md-6 mb-4">
                    <h5 class="text-uppercase fw-bold mb-4">Links</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="Home.html" class="footer-link">Home</a></li>
                        <li class="mb-2"><a href="about.html" class="footer-link">About</a></li>
                        <li class="mb-2"><a href="courses.html" class="footer-link">Courses</a></li>
                        <li class="mb-2"><a href="contact.html" class="footer-link">Contact</a></li>
                        <li class="mb-2"><a href="student-details.html" class="footer-link text-white-50">Admin</a></li>
                    </ul>
                </div>
                <!-- Contact Column -->
                <div class="col-lg-3 col-md-6 mb-4">
                    <h5 class="text-uppercase fw-bold mb-4">Contact</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2 text-white-50"><i class="bi bi-geo-alt-fill me-2"></i>Madhapur,Ayyapa Society,Road no 9,Near Xenon Summit, Hyderabad, India</li>
                        <li class="mb-2">
                            <i class="bi bi-envelope-fill me-2 text-white-50"></i><a href="mailto:info@edugene.com" class="footer-link">edugene@gmail.com</a>
                        </li>
                        <li class="mb-2">
                            <i class="bi bi-telephone-fill me-2 text-white-50"></i><a href="tel:+917288024297" class="footer-link">+91 7288024297</a>
                        </li>
                    </ul>
                </div>
                <!-- Social Media Column -->
                <div class="col-lg-3 col-md-6 mb-4 text-center text-md-start">
                    <h5 class="text-uppercase fw-bold mb-4">Follow Us</h5>
                    <a href="#" class="social-icon me-2" aria-label="Follow us on Facebook"><i class="bi bi-facebook"></i></a>
                    <a href="https://www.linkedin.com/posts/edugene-technologies-4049a12a7_hiring-technicaltrainer-fullstackpython-share-7475503974016565248-KBEW/?utm_source=share&utm_medium=member_android&rcm=ACoAAEebQroBl9Ryn4kX4NVAyKUWE5yScwAodUk" target="_blank" rel="noopener noreferrer" class="social-icon me-2" aria-label="Follow us on LinkedIn"><i class="bi bi-linkedin"></i></a>
                    <a href="https://www.instagram.com/edugenetechnologies?igsh=M3J2eWg3b3BiY3px" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Follow us on Instagram"><i class="bi bi-instagram"></i></a>
                </div>
            </div>
            <hr class="my-4">
            <div class="text-center">
                <p class="mb-0">&copy; 2026 EDUGENE Technologies. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
    `;

    // Use a more specific placeholder if available, otherwise prepend to body
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = navbarHTML;
    } else {
        document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    }

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    } else {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }

    /**
     * Updates the navbar to show user info and a logout button if logged in.
     */
    const updateUserStatus = () => {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        const userEmail = sessionStorage.getItem('userEmail');
        const authSection = document.getElementById('auth-section');

        if (isLoggedIn === 'true' && userEmail && authSection) {
            authSection.innerHTML = `
                <div class="d-flex align-items-center">
                    <span id="loggedInUser" class="navbar-text me-3" title="${userEmail}">${userEmail}</span>
                    <button id="logout-button" class="btn btn-outline-danger logout-btn">Logout</button>
                </div>
            `;
        } else if (authSection) {
            authSection.innerHTML = '<a href="login.html" class="btn btn-primary login-btn">Login</a>';
        }
    };

    // Initial check
    updateUserStatus();

    // Add event listener for storage changes to handle login/logout in other tabs
    window.addEventListener('storage', updateUserStatus);

    /**
     * Sets the 'active' class on the correct navigation link based on the current page URL.
     */
    const setActiveNavLink = () => {
        const navLinks = document.querySelectorAll('#navbarNav .nav-link');
        const currentPage = window.location.pathname.split('/').pop();

        // A list of course detail pages. If the current page is one of these,
        // the main "Courses" link should be active.
        const coursePages = [
            'java-full-stack.html',
            'python-full-stack.html',
            'mern-stack.html',
            'frontend-development.html'
        ];

        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href');
            if (linkPage === currentPage || (linkPage === 'courses.html' && coursePages.includes(currentPage))) {
                link.classList.add('active');
            }
        });
    };

    setActiveNavLink();

    /**
     * Adds a 'scrolled' class to the navbar when the user scrolls down.
     */
    const handleScroll = () => {
        // The navbar is inside the header, which is what we need to select.
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Also call it on load to set the initial state

    /**
     * Adds a "Back to Top" button that appears on scroll.
     */
    const setupBackToTopButton = () => {
        const backToTopButtonHTML = `<a href="#" id="back-to-top" class="back-to-top-btn" aria-label="Back to top"><i class="bi bi-arrow-up-short"></i></a>`;
        document.body.insertAdjacentHTML('beforeend', backToTopButtonHTML);

        const backToTopButton = document.getElementById('back-to-top');

        if (backToTopButton) {
            // Show or hide the button based on scroll position
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    backToTopButton.classList.add('visible');
                } else {
                    backToTopButton.classList.remove('visible');
                }
            });

            // Scroll to top on click
            backToTopButton.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    };

    setupBackToTopButton();

    /**
     * Handles smooth page transitions.
     */
    const handlePageTransitions = () => {
        const internalLinks = document.querySelectorAll('a');

        internalLinks.forEach(link => {
            const href = link.getAttribute('href');

            // Check if it's a valid, internal, non-anchor link
            if (href && !href.startsWith('#') && !href.startsWith('http') && !href.startsWith('mailto') && !href.startsWith('tel') && link.target !== '_blank') {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    // Fade out the current page
                    document.body.style.opacity = '0';

                    // Navigate to the new page after the transition
                    setTimeout(() => {
                        window.location.href = href;
                    }, 400); // This duration should match the CSS transition
                });
            }
        });
    };

    handlePageTransitions();
});

window.addEventListener('pageshow', () => document.body.style.opacity = '1');