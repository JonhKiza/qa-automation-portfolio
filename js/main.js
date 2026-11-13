
/* ==============================
   PORTFOLIO INTERACTIONS
============================== */

document.addEventListener("DOMContentLoaded", () => {

    // Elements that will appear on scroll
    const animatedElements = document.querySelectorAll(
        ".section, .project-card, .hero-tag, .hero h1, .hero-description, .hero-actions"
    );

    // Add reveal class
    animatedElements.forEach(element => {
        element.classList.add("reveal");
    });

    // Scroll reveal animation
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

    // Highlight active navigation link
    const sections = document.querySelectorAll("main section");
    const navLinks = document.querySelectorAll(".nav-links a");

    const sectionObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const currentId = entry.target.getAttribute("id");

                    navLinks.forEach(link => {
                        link.classList.toggle(
                            "active",
                            link.getAttribute("href") === `#${currentId}`
                        );
                    });
                }
            });
        },
        {
            threshold: 0.35
        }
    );

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

});
