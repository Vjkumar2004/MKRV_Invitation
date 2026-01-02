import React, { useState } from 'react';

const PhotoAlbum: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    './assets/img2.png',
    './assets/img2.png',
    './assets/img2.png',
    './assets/img2.png',
    './assets/img2.png',
    './assets/img2.png'
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="relative py-16 sm:py-24 album-simple-section">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14 reveal">
          <p className="text-[11px] tracking-[0.32em] uppercase text-deepred-700/70">Our Sweet Moments</p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl tracking-[0.04em] text-deepred-700">
            Album Pre wedding</h2>
        </div>
        <div className="album-simple-carousel reveal relative">
          {/* Mobile-only navigation buttons */}
          <button type="button"
            onClick={prevSlide}
            className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-white shadow-soft border border-deepred-700/10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 text-deepred-700">
              <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
                d="M15 18l-6-6l6-6" />
            </svg>
          </button>
          <button type="button"
            onClick={nextSlide}
            className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-white shadow-soft border border-deepred-700/10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 text-deepred-700">
              <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
                d="M9 6l6 6l-6 6" />
            </svg>
          </button>
          <div className="album-simple-viewport overflow-hidden">
            <div 
              className="album-simple-track flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <figure 
                  key={index}
                  className={`album-simple-card w-full flex-shrink-0 ${index === currentIndex ? 'album-simple-card--active' : ''}`}
                >
                  <img loading="lazy" src={image} alt={`Album moment ${index + 1}`} className="w-full h-auto object-cover" />
                </figure>
              ))}
            </div>
          </div>
          
          {/* Desktop navigation dots */}
          <div className="hidden md:flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-deepred-700' : 'bg-deepred-700/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoAlbum;
