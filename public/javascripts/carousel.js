/**
 * Project Horizontal Carousel Module
 * Handles drag/swipe gestures, arrow navigation, indicator dots, responsive visible cards, and autoplay.
 */

document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.carousel-wrapper');
    const viewport = document.getElementById('projects-carousel-viewport');
    const track = document.getElementById('projects-carousel-track');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const dotsContainer = document.getElementById('carousel-dots');

    if (!viewport || !track) return;

    const slides = Array.from(track.children);
    if (slides.length === 0) return;

    let currentIndex = 0;
    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationId = 0;
    let hasDragged = false;
    let autoplayTimer = null;
    const AUTOPLAY_INTERVAL = 3500; // 3.5 seconds

    // Helper: Determine visible slides based on viewport width
    const getVisibleSlides = () => {
        const width = window.innerWidth;
        if (width < 768) return 1;
        if (width <= 1024) return 2;
        return 3;
    };

    // Calculate maximum slide index
    const getMaxIndex = () => {
        const visible = getVisibleSlides();
        return Math.max(0, slides.length - visible);
    };

    // Update CSS custom property for visible slides
    const updateVisibleSlidesProperty = () => {
        const visible = getVisibleSlides();
        document.documentElement.style.setProperty('--visible-slides', visible);
    };

    // Autoplay Controls
    const startAutoplay = () => {
        stopAutoplay();
        autoplayTimer = setInterval(() => {
            const maxIndex = getMaxIndex();
            if (currentIndex >= maxIndex) {
                goToSlide(0);
            } else {
                goToSlide(currentIndex + 1);
            }
        }, AUTOPLAY_INTERVAL);
    };

    const stopAutoplay = () => {
        if (autoplayTimer) {
            clearInterval(autoplayTimer);
            autoplayTimer = null;
        }
    };

    const resetAutoplay = () => {
        stopAutoplay();
        startAutoplay();
    };

    // Render Indicator Dots
    const renderDots = () => {
        if (!dotsContainer) return;
        dotsContainer.innerHTML = '';
        const maxIndex = getMaxIndex();
        
        for (let i = 0; i <= maxIndex; i++) {
            const dot = document.createElement('button');
            dot.className = `carousel-dot ${i === currentIndex ? 'active' : ''}`;
            dot.setAttribute('aria-label', `Ir a la diapositiva ${i + 1}`);
            dot.addEventListener('click', () => {
                goToSlide(i);
                resetAutoplay();
            });
            dotsContainer.appendChild(dot);
        }
    };

    // Go to specific slide
    const goToSlide = (index) => {
        const maxIndex = getMaxIndex();
        currentIndex = Math.max(0, Math.min(index, maxIndex));
        
        const slideWidth = slides[0].getBoundingClientRect().width;
        const gap = 24; // Gap defined in CSS
        
        currentTranslate = -currentIndex * (slideWidth + gap);
        prevTranslate = currentTranslate;
        
        track.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
        track.style.transform = `translateX(${currentTranslate}px)`;
        
        updateControls();
    };

    // Update arrow buttons and active dots
    const updateControls = () => {
        const maxIndex = getMaxIndex();
        if (prevBtn) prevBtn.disabled = currentIndex <= 0;
        if (nextBtn) nextBtn.disabled = currentIndex >= maxIndex;

        if (dotsContainer) {
            const dots = Array.from(dotsContainer.children);
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === currentIndex);
            });
        }
    };

    // Event Handlers for Arrows
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            goToSlide(currentIndex - 1);
            resetAutoplay();
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            goToSlide(currentIndex + 1);
            resetAutoplay();
        });
    }

    // Touch & Drag Handling
    const getPositionX = (event) => {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    };

    const dragStart = (event) => {
        stopAutoplay();
        isDragging = true;
        hasDragged = false;
        startX = getPositionX(event);
        viewport.classList.add('is-dragging');
        track.style.transition = 'none';
        animationId = requestAnimationFrame(animation);
    };

    const dragMove = (event) => {
        if (!isDragging) return;
        const currentPosition = getPositionX(event);
        const diff = currentPosition - startX;
        
        if (Math.abs(diff) > 6) {
            hasDragged = true;
        }
        
        currentTranslate = prevTranslate + diff;
    };

    const dragEnd = () => {
        if (!isDragging) return;
        isDragging = false;
        cancelAnimationFrame(animationId);
        viewport.classList.remove('is-dragging');

        const movedBy = currentTranslate - prevTranslate;
        const threshold = 60; // minimum drag distance to switch slide

        if (movedBy < -threshold && currentIndex < getMaxIndex()) {
            currentIndex += 1;
        } else if (movedBy > threshold && currentIndex > 0) {
            currentIndex -= 1;
        }

        goToSlide(currentIndex);
        startAutoplay();
    };

    const animation = () => {
        if (isDragging) {
            track.style.transform = `translateX(${currentTranslate}px)`;
            requestAnimationFrame(animation);
        }
    };

    // Attach Touch and Mouse Listeners
    viewport.addEventListener('mousedown', dragStart);
    viewport.addEventListener('touchstart', dragStart, { passive: true });

    window.addEventListener('mousemove', dragMove);
    window.addEventListener('touchmove', dragMove, { passive: true });

    window.addEventListener('mouseup', dragEnd);
    window.addEventListener('touchend', dragEnd);

    // Pause Autoplay on Hover & Focus
    if (wrapper) {
        wrapper.addEventListener('mouseenter', stopAutoplay);
        wrapper.addEventListener('mouseleave', startAutoplay);
    }

    // Prevent click event on buttons if user was dragging
    viewport.addEventListener('click', (e) => {
        if (hasDragged) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, true);

    // Keyboard navigation when focused inside carousel
    viewport.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            goToSlide(currentIndex - 1);
            resetAutoplay();
        } else if (e.key === 'ArrowRight') {
            goToSlide(currentIndex + 1);
            resetAutoplay();
        }
    });

    // Handle Window Resize
    let resizeTimer = null;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            updateVisibleSlidesProperty();
            renderDots();
            goToSlide(Math.min(currentIndex, getMaxIndex()));
        }, 100);
    });

    // Initialize Carousel & Start Autoplay
    updateVisibleSlidesProperty();
    renderDots();
    goToSlide(0);
    startAutoplay();
});
