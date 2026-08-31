/**
 * Scroll Velocity & Reveal Animation Module
 * Adjusts entry reveal speed, easing, and distance dynamically based on user scroll velocity.
 */

document.addEventListener('DOMContentLoaded', () => {
    let lastScrollY = window.scrollY;
    let lastTimestamp = performance.now();
    let currentVelocity = 0; // px / ms
    let scrollTimeout = null;

    // Track scroll velocity on window scroll
    window.addEventListener('scroll', () => {
        const now = performance.now();
        const deltaY = Math.abs(window.scrollY - lastScrollY);
        const deltaTime = Math.max(now - lastTimestamp, 8); // avoid division by zero or sub-millisecond spikes

        const instantVelocity = deltaY / deltaTime; // px/ms
        
        // Exponential moving average for velocity smooth curve
        currentVelocity = currentVelocity * 0.4 + instantVelocity * 0.6;

        lastScrollY = window.scrollY;
        lastTimestamp = now;

        // Reset velocity after scrolling stops
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            currentVelocity = 0;
        }, 150);
    }, { passive: true });

    // IntersectionObserver for elements with .reveal-on-scroll
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const el = entry.target;

                // Determine velocity factor (0 to 1+)
                // Moderate scroll ~0.5 - 1 px/ms, Fast scroll >= 2 px/ms
                const v = Math.min(currentVelocity, 3.5);

                let duration = 0.65; // default smooth slow scroll duration (seconds)
                let translateY = 35; // default slide distance (px)
                let scale = 0.96;

                if (v > 1.8) {
                    // Fast scroll: snap fast, larger initial offset
                    duration = 0.22;
                    translateY = 55;
                    scale = 0.92;
                } else if (v > 0.6) {
                    // Medium scroll: responsive fluid entry
                    duration = 0.45;
                    translateY = 40;
                    scale = 0.94;
                } else {
                    // Slow / smooth scroll: progressive graceful reveal
                    duration = 0.7;
                    translateY = 30;
                    scale = 0.97;
                }

                // Apply inline CSS variable overrides for custom transition
                el.style.setProperty('--reveal-duration', `${duration}s`);
                el.style.setProperty('--reveal-translate', `${translateY}px`);
                el.style.setProperty('--reveal-scale', `${scale}`);

                // Trigger visibility class
                el.classList.add('is-visible');

                // Optional: unobserve once revealed
                revealObserver.unobserve(el);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    // Automatically attach reveal observer to section elements and cards
    const revealTargets = document.querySelectorAll(
        '.hero-content, .skills-summary-box, .skill-category-block, .carousel-wrapper, .inspiration-quote-section, .contact-section, .section-header'
    );

    revealTargets.forEach((target, index) => {
        target.classList.add('reveal-on-scroll');
        // Add a slight stagger offset if multiple elements enter simultaneously
        target.style.transitionDelay = `${(index % 3) * 0.08}s`;
        revealObserver.observe(target);
    });
});
