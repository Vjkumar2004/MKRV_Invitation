import React, { useState, useCallback, useRef } from 'react';

const PhotoAlbum: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Start with middle image
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  
  const images = [
    '/gallery 1.png',
    '/gallery 2.avif',
    '/gallery 3 (2).avif',
    '/gallery 4.avif',
    '/gallery.avif'
  ];

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe && activeIndex < images.length - 1) {
      nextSlide();
    }
    if (isRightSwipe && activeIndex > 0) {
      prevSlide();
    }
  };

  const getImageStyle = (index: number): React.CSSProperties => {
    const isActive = index === activeIndex;
    const isLeft = index === activeIndex - 1;
    const isRight = index === activeIndex + 1;
    
    // Edge cases
    const isFirstActive = activeIndex === 0 && index === 0;
    const isLastActive = activeIndex === images.length - 1 && index === images.length - 1;
    
    // Base positioning - center all images
    let baseStyle: React.CSSProperties = {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      width: '220px',
      height: '280px',
      borderRadius: '12px',
      overflow: 'hidden',
      transition: 'transform 300ms ease-out, opacity 300ms ease-out, filter 300ms ease-out',
      cursor: 'pointer',
      willChange: 'transform, opacity, filter'
    };

    if (isActive) {
      // Active image - centered and zoomed
      return {
        ...baseStyle,
        transform: 'translate(-50%, -50%) scale(1.15)',
        filter: 'blur(0px)',
        opacity: 1,
        zIndex: 20
      };
    }
    
    if (isLeft && !isFirstActive) {
      // Left image - blurred and scaled down
      return {
        ...baseStyle,
        transform: 'translate(-150%, -50%) scale(0.85)',
        filter: 'blur(8px)',
        opacity: 0.6,
        zIndex: 10
      };
    }
    
    if (isRight && !isLastActive) {
      // Right image - blurred and scaled down
      return {
        ...baseStyle,
        transform: 'translate(50%, -50%) scale(0.85)',
        filter: 'blur(8px)',
        opacity: 0.6,
        zIndex: 10
      };
    }
    
    // Hide all other images
    return {
      ...baseStyle,
      opacity: 0,
      pointerEvents: 'none' as const,
      zIndex: 1
    };
  };

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex(prev => Math.min(prev + 1, images.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex(prev => Math.max(prev - 1, 0));
  }, []);

  return (
    <section className="relative py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-[11px] tracking-[0.32em] uppercase text-red-800/70 mb-2">
            Our Sweet Moments
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-[0.04em] text-red-800">
            Album Pre wedding
          </h2>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative mx-auto max-w-4xl sm:max-w-5xl h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Images */}
          {images.map((image, index) => (
            <div
              key={index}
              style={getImageStyle(index)}
              onClick={() => goToSlide(index)}
              className="bg-white shadow-2xl"
            >
              <img 
                src={image} 
                alt={`Album moment ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-red-800 scale-125' 
                  : 'bg-red-800/30 hover:bg-red-800/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoAlbum;
