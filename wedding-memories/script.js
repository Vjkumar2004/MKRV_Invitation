// ===================================
// Wedding Memories - Vanilla JavaScript
// ===================================

(function () {
    const ease = 'cubic-bezier(.22,.61,.36,1)';

    // GSAP ScrollTrigger - Windmill Animation for Love Story Section
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        const windmillElement = document.querySelector("#pin-windmill-svg");
        const pinElement = document.querySelector("#pin-windmill");
        const pinWrapElement = document.querySelector("#pin-windmill-wrap");

        if (windmillElement && pinElement && pinWrapElement) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    scrub: 1,
                    pin: pinElement,
                    trigger: pinElement,
                    start: "50% 50%",
                    endTrigger: pinWrapElement,
                    end: "bottom 50%",
                    markers: false // Set to true for debugging
                },
            });

            tl.to(windmillElement, {
                rotateZ: 900,
                ease: "none"
            });
        }
    }

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const el = entry.target;
            if (entry.isIntersecting) {
                el.classList.add('in-view');
                const kids = el.querySelectorAll('[data-stagger]');
                kids.forEach((k, i) => {
                    k.style.transitionDelay = (100 + i * 120) + 'ms';
                    k.style.transitionTimingFunction = ease;
                });
            } else {
                // For Our Love Story timeline, keep items in-view once triggered
                if (el.closest && el.closest('.love-story-timeline')) return;
                el.classList.remove('in-view');
            }
        })
    }, { threshold: 0.2 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Countdown to 20 Feb 2026 06:30 PM local time
    const targetDate = new Date('2026-02-20T18:30:00');
    const daysEl = document.querySelector('[data-countdown-days]');
    const hoursEl = document.querySelector('[data-countdown-hours]');
    const minutesEl = document.querySelector('[data-countdown-minutes]');
    const secondsEl = document.querySelector('[data-countdown-seconds]');

    if (daysEl && hoursEl && minutesEl && secondsEl) {
        const updateCountdown = () => {
            const now = new Date();
            const diff = targetDate.getTime() - now.getTime();
            if (diff <= 0) {
                daysEl.textContent = '00';
                hoursEl.textContent = '00';
                minutesEl.textContent = '00';
                secondsEl.textContent = '00';
                return;
            }
            const totalSeconds = Math.floor(diff / 1000);
            const days = Math.floor(totalSeconds / (60 * 60 * 24));
            const hours = Math.floor((totalSeconds / (60 * 60)) % 24);
            const minutes = Math.floor((totalSeconds / 60) % 60);
            const seconds = Math.floor(totalSeconds % 60);

            const pad = (n) => String(n).padStart(2, '0');
            daysEl.textContent = pad(days);
            hoursEl.textContent = pad(hours);
            minutesEl.textContent = pad(minutes);
            secondsEl.textContent = pad(seconds);
        };

        updateCountdown();
        setInterval(updateCountdown, 1000);
    }

    // Premium horizontal gallery: highlight center card on scroll
    const simpleTrack = document.querySelector('[data-album-simple-track]');
    const simpleCards = simpleTrack ? Array.from(simpleTrack.querySelectorAll('[data-album-simple-card]')) : [];
    const simpleViewport = document.querySelector('.album-simple-viewport');

    const updateSimpleAlbum = () => {
        if (!simpleViewport || !simpleCards.length) return;
        const viewportRect = simpleViewport.getBoundingClientRect();
        const viewportCenter = viewportRect.left + viewportRect.width / 2;

        simpleCards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const cardCenter = rect.left + rect.width / 2;
            const distance = (cardCenter - viewportCenter) / rect.width;

            const isCenter = Math.abs(distance) < 0.4;
            const isSide = Math.abs(distance) >= 0.4 && Math.abs(distance) < 1.4;

            card.classList.toggle('album-simple-card--center', isCenter);
            card.classList.toggle('album-simple-card--side', isSide);

            const tilt = distance < 0 ? -10 : 10;
            card.style.setProperty('--tilt', isSide ? `${tilt}deg` : '0deg');
        });
    };

    if (simpleViewport && simpleCards.length) {
        let rafId = null;
        const onScroll = () => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                updateSimpleAlbum();
                rafId = null;
            });
        };

        simpleViewport.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', updateSimpleAlbum);
        updateSimpleAlbum();

        // Auto-scroll album
        let currentAlbumIndex = 0;
        const scrollToAlbumIndex = (index) => {
            const card = simpleCards[index];
            if (!card) return;
            const left = card.offsetLeft - (simpleTrack ? simpleTrack.offsetLeft : 0);
            simpleViewport.scrollTo({ left, behavior: 'smooth' });
        };

        setInterval(() => {
            currentAlbumIndex = (currentAlbumIndex + 1) % simpleCards.length;
            scrollToAlbumIndex(currentAlbumIndex);
        }, 3000);

        // Mobile nav buttons
        const prevBtn = document.querySelector('[data-album-prev]');
        const nextBtn = document.querySelector('[data-album-next]');

        const goToPrev = () => {
            currentAlbumIndex = (currentAlbumIndex - 1 + simpleCards.length) % simpleCards.length;
            scrollToAlbumIndex(currentAlbumIndex);
        };

        const goToNext = () => {
            currentAlbumIndex = (currentAlbumIndex + 1) % simpleCards.length;
            scrollToAlbumIndex(currentAlbumIndex);
        };

        if (prevBtn) prevBtn.addEventListener('click', goToPrev);
        if (nextBtn) nextBtn.addEventListener('click', goToNext);
    }
})();
