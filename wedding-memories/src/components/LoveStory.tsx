import React, { useState, useEffect, useCallback } from 'react';

const LoveStory: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [flipDirection, setFlipDirection] = useState<'next' | 'prev' | null>(null);
    const isFlipping = flipDirection !== null;
    const totalPages = 11;

    const storyPages = [
        {
            image: '/timeline 1.avif',
            title: '💕 A Decade ago',
            description: '“Two strangers, one unexpected connection. Our story quietly began here.”'
        },
        {
            image: '/timeline 2.avif',
            title: '💕 First Conversation',
            description: '“From simple talks to endless conversations… without knowing, hearts started connecting.”'
        },
        {
            image: '/timeline 3.avif',
            title: '💕 First Photo Together',
            description: '“Our first captured memory – shy smiles, real feelings, and a lot of hope.”'
        },
        {
            image: '/timeline 5.avif',
            title: '💕 Growing Closer',
            description: '“Days turned into years, and friendship slowly bloomed into love.”'
        },
        {
            image: '/timeline 6.avif',
            title: '💕 Long Talks & Laughter',
            description: '“Late-night talks, silly laughs, and memories we’ll cherish forever.”'
        },
        {
            image: '/timeline-7-replace.jpeg',
            title: '💕 Through Ups & Downs',
            description: '“Not every chapter was easy, but every challenge made us stronger together.”'
        },
        {
            image: '/timeline 8.avif',
            title: '💕 Choosing Each Other',
            description: '“Through changes and time, we chose each other again and again.”'
        },
        {
            image: '/timeline-9-replace.jpeg',
            title: '💕 Love That Stayed',
            description: '“Years passed, but our love stayed constant — deeper, stronger, and truer.”'
        },
        {
            image: '/timeline 10.avif',
            title: '💍 Almost Forever',
            description: '“From 2015 to forever — our love story is now ready for its next chapter.”'
        }
    ];

    const flipToNextPage = useCallback(() => {
        if (currentPage < totalPages - 1 && !isFlipping) {
            setFlipDirection('next');
            setTimeout(() => {
                setCurrentPage(prev => prev + 1);
                setFlipDirection(null);
            }, 600);
        }
    }, [currentPage, isFlipping]);

    const flipToPrevPage = useCallback(() => {
        if (currentPage > 0 && !isFlipping) {
            setFlipDirection('prev');
            setTimeout(() => {
                setCurrentPage(prev => prev - 1);
                setFlipDirection(null);
            }, 600);
        }
    }, [currentPage, isFlipping]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') {
                flipToNextPage();
            } else if (e.key === 'ArrowLeft') {
                flipToPrevPage();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [flipToNextPage, flipToPrevPage]);

    // Touch handling
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            flipToNextPage();
        }
        if (isRightSwipe) {
            flipToPrevPage();
        }

        setTouchStart(0);
        setTouchEnd(0);
    };

    const renderPage = (pageIndex: number) => {
        if (pageIndex === 0) {
            return (
                <div className="book-page book-cover p-0">
                    <div className="book-spine"></div>
                    <div className="relative w-full h-full overflow-hidden">
                        <img
                            src="/book-cover.jpeg"
                            alt="MKRV Wedding Book Cover"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
                    </div>
                </div>
            );
        }

        // Timeline image pages
        const pageData = storyPages[pageIndex - 1];
        if (pageData) {
            return (
                <div className="book-page">
                    <div className="ornament-small ornament-tl"></div>
                    <div className="ornament-small ornament-br"></div>
                    <div className="page-content story-page">
                        <div className="image-container">
                            <img
                                src={pageData.image}
                                alt={pageData.title}
                                className="timeline-image"
                                loading="lazy"
                            />
                        </div>
                        <div className="page-divider"></div>
                        <div className="text-container">
                            <h3 className="story-title">{pageData.title}</h3>
                            <p className="story-description">{pageData.description}</p>
                        </div>
                    </div>
                </div>
            );
        }

        // Final Page - Enhanced Luxury Design
        if (pageIndex === 10) {
            return (
                <div className="book-page final-page">
                    <div className="floating-hearts">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className={`float-heart fh-${i}`}>❤️</span>
                        ))}
                    </div>

                    <div className="page-content story-page final-content items-center justify-center">
                        <div className="final-header-design flex flex-col items-center">
                            <h3 className="story-title luxury-gold-title">The Beginning of Forever</h3>
                            <div className="ornate-separator mt-4"></div>
                        </div>
                    </div>
                </div>
            );
        }

        // Fallback empty page
        return (
            <div className="book-page">
                <div className="page-content">
                    {/* Empty placeholder */}
                </div>
            </div>
        );
    };

    return (
        <section className="love-story-section">
            <div className="section-header">
                <p className="section-subtitle reveal-on-scroll">Our Journey</p>
                <h2 className="section-title reveal-on-scroll reveal-heading delay-100">Love Album</h2>
                <div className="section-divider reveal-divider"></div>
            </div>

            <div
                className="book-container reveal-on-scroll delay-300"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className={`book ${flipDirection ? 'flipping-' + flipDirection : ''}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        if (isFlipping) return;

                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const clickPercent = (x / rect.width) * 100;

                        if (clickPercent < 30) {
                            flipToPrevPage();
                        } else {
                            flipToNextPage();
                        }
                    }}
                    style={{ pointerEvents: isFlipping ? 'none' : 'auto' }}
                >
                    {/* Previous Page (revealed during backward flip) */}
                    {flipDirection === 'prev' && currentPage > 0 && (
                        <div className="page-wrapper prev-page-reveal flip-prev-animation">
                            {renderPage(currentPage - 1)}
                            <div className="page-shadow shadow-active"></div>
                        </div>
                    )}

                    {/* Underneath Page (revealed during forward flip) */}
                    {flipDirection === 'next' && currentPage < totalPages - 1 && (
                        <div className="page-wrapper next-page-under">
                            {renderPage(currentPage + 1)}
                        </div>
                    )}

                    {/* Current Page */}
                    <div className={`page-wrapper current-page ${flipDirection === 'next' ? 'flip-next-animation' : ''}`}>
                        {renderPage(currentPage)}
                        <div className={`page-shadow ${flipDirection === 'next' ? 'shadow-active' : ''}`}></div>
                    </div>
                </div>
            </div>

            <style>{`
        .love-story-section {
          position: relative;
          padding: 4rem 1rem;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(to bottom, #f9f7f4, #ffffff);
          overflow: hidden;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
          z-index: 10;
        }

        .section-subtitle {
          font-size: 0.6875rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(139, 69, 19, 0.7);
          margin-bottom: 0.5rem;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 3rem);
          letter-spacing: 0.04em;
          color: #8B4513;
          margin: 0;
        }

        .section-divider {
          margin: 1rem auto 0;
          height: 1px;
          width: 6rem;
          background: linear-gradient(to right, transparent, rgba(218, 165, 32, 0.7), transparent);
        }

        .book-container {
          perspective: 2500px;
          perspective-origin: center;
          width: 100%;
          max-width: 420px;
          height: 60vh;
          max-height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 20px;
        }

        /* Physical Book Stack Effect */
        .book-container::after {
          content: '';
          position: absolute;
          width: 90%;
          height: 90%;
          background: white;
          border-radius: 8px;
          box-shadow: 
            5px 5px 20px rgba(0,0,0,0.1),
            10px 10px 0px -2px #f9f7f4,
            10px 10px 20px rgba(0,0,0,0.05);
          z-index: -1;
        }

        .book {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          cursor: pointer;
          user-select: none;
        }

        .page-wrapper {
          position: absolute;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transform-origin: left center;
        }

        .current-page {
          z-index: 3;
        }

        .next-page-under {
          z-index: 2;
        }

        .prev-page-reveal {
          z-index: 4;
          transform: rotateY(-180deg);
        }

        .flip-next-animation {
          animation: pageFlipNext 600ms cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
        }

        .flip-prev-animation {
          animation: pageFlipPrev 600ms cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
        }

        @keyframes pageFlipNext {
          0% {
            transform: rotateY(0deg) translateZ(0px) scale(1);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          }
          30% {
            transform: rotateY(-40deg) translateZ(50px) scale(1.02);
            box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.25);
          }
          100% {
            transform: rotateY(-180deg) translateZ(0px) scale(1);
            opacity: 0;
          }
        }

        @keyframes pageFlipPrev {
          0% {
            transform: rotateY(-180deg) translateZ(0px) scale(1);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          }
          30% {
            transform: rotateY(-140deg) translateZ(50px) scale(1.02);
            box-shadow: -20px 20px 40px rgba(0, 0, 0, 0.25);
          }
          100% {
            transform: rotateY(0deg) translateZ(0px) scale(1);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          }
        }

        .book-page {
          width: 100%;
          height: 100%;
          background: #FFF8F3;
          border-radius: 0 8px 8px 0;
          box-shadow: 
            inset -2px 0 8px rgba(184, 134, 11, 0.1),
            2px 2px 12px rgba(184, 134, 11, 0.2);
          position: relative;
          overflow: hidden;
          border-right: 4px solid #BF953F; /* Golden Bar Edge */
        }

        /* Paper texture effect - more subtle and realistic */
        .book-page::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
          opacity: 0.1;
          pointer-events: none;
          z-index: 0;
        }

        .book-cover {
          background: linear-gradient(135deg, #fdf4ea 0%, #ecd6bc 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          border-left: 15px solid #BF953F; /* Golden Spine Border */
        }

        .book-spine {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 15px;
          background: linear-gradient(to right, #8A6E2F, #BF953F, #FBF5B7, #BF953F);
          z-index: 10;
          box-shadow: 2px 0 10px rgba(0,0,0,0.1);
        }

        /* Gold Foil Effect */
        .gold-text {
          background: linear-gradient(
            to bottom,
            #BF953F 0%,
            #FCF6BA 20%,
            #B38728 40%,
            #FBF5B7 60%,
            #AA771C 80%,
            #BF953F 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.2));
        }

        /* Ornaments */
        .ornament {
          position: absolute;
          width: 80px;
          height: 80px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M10 10 Q 50 10 50 50 Q 10 50 10 10' fill='none' stroke='%23B38728' stroke-width='2'/%3E%3Cpath d='M20 20 Q 40 20 40 40 Q 20 40 20 20' fill='none' stroke='%23B38728' stroke-width='1'/%3E%3C/svg%3E");
          background-size: contain;
          opacity: 0.6;
        }
        .ornament-tl { top: 20px; left: 30px; }
        .ornament-tr { top: 20px; right: 20px; transform: rotate(90deg); }
        .ornament-bl { bottom: 20px; left: 30px; transform: rotate(-90deg); }
        .ornament-br { bottom: 20px; right: 20px; transform: rotate(180deg); }

        .ornament-small {
          position: absolute;
          width: 50px;
          height: 50px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M10 10 Q 50 10 50 50' fill='none' stroke='%23B38728' stroke-width='1.5' opacity='0.4'/%3E%3C/svg%3E");
          background-size: contain;
          z-index: 1;
        }

        /* Ribbon */
        .book-ribbon {
          position: absolute;
          top: -5px;
          right: 40px;
          width: 25px;
          height: 60px;
          background: #8B0000;
          box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
          z-index: 5;
        }
        .book-ribbon::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          border-left: 12.5px solid transparent;
          border-right: 12.5px solid transparent;
          border-top: 10px solid #8B0000;
        }

        .cover-content {
          text-align: center;
          z-index: 5;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-left: 15px; /* Accounting for spine */
        }

        .main-heart-container {
          position: relative;
          width: 180px;
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 10px 20px rgba(139, 69, 19, 0.3));
          margin-bottom: 2rem;
        }

        .large-cover-heart {
          position: relative;
          width: 100%;
          height: 100%;
          background: #8B0000; /* Deep Burgundy */
          transform: rotate(-45deg);
          border: 4px solid #DAA520; /* Gold Border */
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.5s ease;
        }

        .large-cover-heart::before,
        .large-cover-heart::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: #8B0000;
          border-radius: 50%;
          border: 4px solid #DAA520;
          box-sizing: border-box;
        }

        .large-cover-heart::before {
          top: -50%;
          left: 0;
          border-bottom: none;
        }

        .large-cover-heart::after {
          top: 0;
          left: 50%;
          border-left: none;
        }

        /* Fix border overlap */
        .large-cover-heart {
           border-top: none;
           border-right: none;
        }

        .heart-text {
          transform: rotate(45deg);
          color: #FFF8F3; /* Soft Cream Text */
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 6vw, 3rem);
          font-weight: 800;
          letter-spacing: 0.1em;
          margin: 0;
          z-index: 10;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .cover-title {
          margin: 0;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .page-content {
          padding: 2rem;
          height: 100%;
          position: relative;
        }

        .page-shadow {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.2);
          opacity: 0;
          pointer-events: none;
          transition: opacity 600ms;
          z-index: 10;
          border-radius: 0 8px 8px 0;
        }

        .shadow-active {
          opacity: 1;
          background: linear-gradient(to right, rgba(184, 134, 11, 0) 0%, rgba(184, 134, 11, 0.3) 100%);
        }

        /* Luxury Ornaments */
        .luxury-ornament {
          position: absolute;
          width: 100px;
          height: 100px;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 C 10 30, 30 10, 50 10 C 70 10, 90 30, 90 50 C 90 70, 70 90, 50 90 C 30 90, 10 70, 10 50' fill='none' stroke='%23BF953F' stroke-width='1.5'/%3E%3Cpath d='M20 20 L40 40 M20 40 L40 20' stroke='%23FCF6BA' stroke-width='0.5'/%3E%3Ccircle cx='10' cy='10' r='3' fill='%23DAA520'/%3E%3Cpath d='M0 0 L15 0 L0 15 Z' fill='%23BF953F'/%3E%3C/svg%3E");
          background-size: contain;
          z-index: 10;
          opacity: 0.8;
        }
        .l-orn-tl { top: 15px; left: 25px; }
        .l-orn-tr { top: 15px; right: 15px; transform: rotate(90deg); }
        .l-orn-bl { bottom: 15px; left: 25px; transform: rotate(-90deg); }
        .l-orn-br { bottom: 15px; right: 15px; transform: rotate(180deg); }

        .luxury-gold-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
          background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine-text 3s infinite linear;
          background-size: 200% auto;
        }

        @keyframes shine-text {
          to { background-position: 200% center; }
        }

        .ornate-separator {
          width: 120px;
          height: 12px;
          margin: 0.5rem auto 1.5rem;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 5 Q 25 0, 50 5 Q 75 10, 100 5' fill='none' stroke='%23BF953F' stroke-width='1'/%3E%3C/svg%3E");
          background-size: cover;
        }

        .premium-quote {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          color: #8B4513;
          font-size: 1.1rem;
          line-height: 1.6;
          margin: 1rem 0;
          opacity: 0.9;
        }

        .ornate-invitation-frame {
          position: relative;
          padding: 2rem 1.5rem;
          margin-top: 1rem;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 12px;
        }

        .frame-border {
          position: absolute;
          inset: 0;
          border: 1px solid #DAA520;
          border-radius: 12px;
          mask: radial-gradient(circle at center, transparent 30%, black 100%);
        }
        
        .ornate-invitation-frame::after {
          content: '';
          position: absolute;
          inset: 4px;
          border: 2px solid rgba(191, 149, 63, 0.3);
          border-radius: 8px;
          pointer-events: none;
        }

        .invitation-message-v2 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.1rem;
          color: #5D4037;
          font-weight: 500;
          line-height: 1.6;
          margin: 0;
          position: relative;
          z-index: 1;
        }

        .final-footer {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          padding-bottom: 1rem;
        }

        .couple-names {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          font-weight: 700;
        }

        .floating-hearts {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 5;
        }

        .float-heart {
          position: absolute;
          left: var(--left, 50%);
          bottom: -50px;
          font-size: var(--size, 20px);
          opacity: 0;
          animation: float-up-fade var(--duration, 4s) var(--delay, 0s) infinite ease-in-out;
        }

        @keyframes float-up-fade {
          0% { 
            transform: translateY(0) scale(0.5) rotate(var(--rotate, 0deg)); 
            opacity: 0; 
          }
          20% { 
            opacity: 0.6; 
          }
          100% { 
            transform: translateY(-600px) scale(1.5) rotate(var(--rotate-end, 45deg)); 
            opacity: 0; 
          }
        }

        .fh-0 { --left: 10%; --duration: 5s; --delay: 0s; --size: 18px; --rotate: -15deg; --rotate-end: 20deg; }
        .fh-1 { --left: 30%; --duration: 4.5s; --delay: 1.2s; --size: 24px; --rotate: 10deg; --rotate-end: -25deg; }
        .fh-2 { --left: 50%; --duration: 6s; --delay: 0.5s; --size: 20px; --rotate: -20deg; --rotate-end: 15deg; }
        .fh-3 { --left: 70%; --duration: 5.5s; --delay: 2s; --size: 22px; --rotate: 25deg; --rotate-end: -10deg; }
        .fh-4 { --left: 90%; --duration: 4s; --delay: 0.1s; --size: 16px; --rotate: -5deg; --rotate-end: 35deg; }
        .fh-5 { --left: 40%; --duration: 5.2s; --delay: 3s; --size: 26px; --rotate: 15deg; --rotate-end: -30deg; }

        .pulse-once {
          animation: pulse-grow 2s ease-out infinite;
        }

        @keyframes pulse-grow {
           0%, 100% { transform: scale(1) rotate(45deg); }
           50% { transform: scale(1.05) rotate(45deg); }
        }

        .cover-footer {
          margin-top: 2rem;
        }

        .tiny-divider {
           width: 30px;
           height: 1px;
           background: #DAA520;
           margin: 0.5rem auto;
        }

        .tap-instruction {
          font-family: 'Outfit', sans-serif;
          font-size: 0.7rem;
          color: #FFF8F3;
          background: #8B0000;
          padding: 0.5rem 1.2rem;
          border-radius: 99px;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          margin-top: 2rem;
          font-weight: 700;
          box-shadow: 0 4px 12px rgba(139, 0, 0, 0.3);
          animation: tap-pulse 2s infinite ease-in-out;
        }

        @keyframes tap-pulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }

        .page-with-image {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .story-page {
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          gap: 1rem;
          height: 100%;
          z-index: 2;
        }

        .image-container {
          flex: 1;
          width: 100%;
          min-height: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
        }

        .page-divider {
          height: 1px;
          width: 40px;
          background: #DAA520;
          margin: 0 auto;
          opacity: 0.5;
        }

        .section-divider {
          height: 1px;
          width: 0;
          opacity: 0;
          background: linear-gradient(to right, transparent, #8B4513, transparent);
          margin: 1.5rem auto 0;
          transition: width 0.6s var(--reveal-easing), opacity 0.6s ease;
          transition-delay: 200ms;
        }
        .animate-active .section-divider {
          width: 80px;
          opacity: 1;
        }

        .gold-divider {
          height: 1px;
          width: 80px;
          background: linear-gradient(to right, transparent, #BF953F, transparent);
          margin: 1rem auto;
        }

        .text-container {
          text-align: center;
          padding: 0.5rem;
        }

        .story-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1rem, 4.5vw, 1.2rem);
          color: #8B4513;
          margin: 0 0 0.5rem 0;
          font-weight: 700;
        }

        .story-description {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(0.8rem, 3.8vw, 0.95rem);
          line-height: 1.6;
          color: #5D4037;
          margin: 0;
          font-style: italic;
        }

        .final-content {
          justify-content: center;
          background: linear-gradient(to bottom, #FFF8F3, #fdf4ea);
        }

        .final-heart-wrap {
          margin-bottom: 2rem;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .heart-icon {
          font-size: 3rem;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
        }
        .heart-icon-small {
          font-size: 1.5rem;
          position: absolute;
          bottom: -10px;
          right: -10px;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.1); }
        }

        .invitation-box {
          margin-top: 2rem;
          padding: 1.5rem;
          border: 1px double #DAA520;
          border-radius: 8px;
          position: relative;
        }

        .invitation-message {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          color: #8B4513;
          font-weight: 600;
          line-height: 1.5;
          margin: 0;
        }

        .timeline-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 6px;
          border: 4px solid white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .next-page.flip-animation {
            animation-duration: 0ms;
          }
          
          .cover-heart {
            animation: none;
          }
        }

        /* Responsive adjustments */
        @media (min-width: 768px) {
          .book-container {
            max-width: 500px;
            max-height: 700px;
          }
        }

        @media (max-width: 480px) {
          .love-story-section {
            padding: 2rem 0.5rem;
          }
          
          .book-container {
             width: 85%;
             max-width: 300px;
             height: auto;
             aspect-ratio: 10/14;
             max-height: none;
          }
        }
      `}</style>
        </section>
    );
};

export default LoveStory;
