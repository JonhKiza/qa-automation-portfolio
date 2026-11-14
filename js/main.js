

/* ==============================
   PORTFOLIO INTERACTIONS
============================== */

document.addEventListener("DOMContentLoaded", () => {

    // 1. SCROLL REVEAL ANIMATIONS

    const animatedElements = document.querySelectorAll(
        ".section, .project-card, .hero-tag, .hero h1, .hero-description, .hero-actions"
    );

    animatedElements.forEach(element => {
        element.classList.add("reveal");
    });

    const revealObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    animatedElements.forEach(element => {
        revealObserver.observe(element);
    });


    // 2. ACTIVE NAVIGATION

    const sections = document.querySelectorAll("main section");
    const navLinks = document.querySelectorAll(".nav-links a");

    function updateActiveLink() {

        let currentSection = "";

        const scrollPosition = window.scrollY + 150;

        sections.forEach(section => {

            const sectionTop =
                section.getBoundingClientRect().top + window.scrollY;

            if (scrollPosition >= sectionTop) {
                currentSection = section.getAttribute("id");
            }

        });

        // Ensure Contact becomes active at the bottom of the page
        const pageBottom =
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 5;

        if (pageBottom && sections.length > 0) {
            currentSection = sections[sections.length - 1].id;
        }

        navLinks.forEach(link => {

            const isActive =
                link.getAttribute("href") === `#${currentSection}`;

            link.classList.toggle("active", isActive);

        });
    }

    // Update when scrolling
    window.addEventListener("scroll", updateActiveLink, {
        passive: true
    });

    // Update when the page loads
    updateActiveLink();

});
