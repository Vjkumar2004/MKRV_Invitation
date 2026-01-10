import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Countdown from './components/Countdown';
import EventDetails from './components/EventDetails';
import Schedule from './components/Schedule';
import LoveStory from './components/LoveStory';
import WeddingGift from './components/WeddingGift';
import LazySection from './components/LazySection';
import OpeningScreen from './components/OpeningScreen';
import Footer from './components/Footer';
import Location from './components/Location';

const isIPhone = () => {
  return /iPhone|iPod/.test(navigator.userAgent);
};

const isAndroid = () => {
  return /Android/i.test(navigator.userAgent);
};

function App() {
  const [showMainContent, setShowMainContent] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [hasUserPaused, setHasUserPaused] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpenInvitation = () => {
    // Attempt play on click for Android/Windows if not paused
    if (!isIPhone() && audioRef.current && !isPlaying && !hasUserPaused) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setMusicEnabled(true);
      }).catch(err => console.log("Play on open failed", err));
    }
    setShowMainContent(true);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setHasUserPaused(true);
      } else {
        audioRef.current.play().then(() => {
          setHasUserPaused(false);
        }).catch(error => {
          console.log('Audio play failed:', error);
        });
        if (!musicEnabled) {
          setMusicEnabled(true);
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Autoplay logic for Android/Windows on first interaction
  useEffect(() => {
    if (!isIPhone() && !isPlaying && !hasUserPaused) {
      const startMusic = () => {
        if (audioRef.current && !isPlaying && !hasUserPaused) {
          audioRef.current.play().then(() => {
            setIsPlaying(true);
            setMusicEnabled(true);
          }).catch(err => console.log("Autoplay blocked", err));
        }
        window.removeEventListener('click', startMusic);
        window.removeEventListener('touchstart', startMusic);
      };

      window.addEventListener('click', startMusic);
      window.addEventListener('touchstart', startMusic);

      return () => {
        window.removeEventListener('click', startMusic);
        window.removeEventListener('touchstart', startMusic);
      };
    }
  }, [isPlaying, hasUserPaused]);

  return (
    <>
      {/* Global Audio Element */}
      <audio
        ref={audioRef}
        src="/bg-music.mp3"
        loop
        playsInline
        preload="auto"
      />

      {/* Opening Screen - Shows first */}
      {!showMainContent && (
        <OpeningScreen
          onOpen={handleOpenInvitation}
          isPlaying={isPlaying}
          onToggleMusic={toggleMusic}
          isIPhone={isIPhone()}
          musicEnabled={musicEnabled}
        />
      )}

      {/* Main Content - Shows after opening */}
      {showMainContent && (
        <>
          {/* Music Control Button - Always visible in main invitation */}
          <button
            className="music-control"
            onClick={toggleMusic}
            aria-label={isPlaying ? "Pause Music" : "Play Music"}
          >
            {isPlaying ? '🔊' : '🔇'}
          </button>

          <div className="antialiased text-deepred-700 bg-white">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
              {/* Background Image */}
              <div
                className="absolute inset-0 fade-in-slow bg-zoom"
                style={{
                  backgroundImage: 'url(/coverimage.avif)',
                  backgroundSize: 'cover',
                  backgroundPosition: '30% 65%'
                }}
              />
              {/* Vignette */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_50%,rgba(0,0,0,0),transparent_60%)] fade-in-slow"
                style={{ animationDelay: '150ms' }} />

              {/* Names Container */}
              <div className="absolute inset-x-0 bottom-12 z-10 container mx-auto px-4 sm:px-6 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
                <div className="mx-auto max-w-3xl text-center reveal">
                  <h1 className="font-serif text-white tracking-[0.06em] font-bold leading-tight text-4xl sm:text-6xl md:text-7xl"
                    style={{ textShadow: '0 6px 32px rgba(0,0,0,0.48)' }}>
                    <span className="block text-3xl sm:text-5xl md:text-6xl">MUTHUKUMAR</span>
                    <span className="block leading-none text-5xl sm:text-7xl md:text-8xl">&</span>
                    <span className="block text-3xl sm:text-5xl md:text-6xl">RAJAVALLI</span>
                  </h1>
                  <p className="mt-4 text-white/90 text-center font-serif text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto"
                    style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
                    We are tying the knot and would love for you to be part of our special day.
                  </p>
                  <div className="mx-auto mt-5 flex w-full max-w-[220px] items-center justify-center gap-2">
                    <span className="h-px flex-1 bg-gradient-to-r from-white/0 via-white/80 to-white/0"></span>
                  </div>
                  <div className="mx-auto mt-1 flex w-full max-w-[160px] items-center justify-center">
                    <span className="h-[1px] w-2/3 bg-gold-400/70"></span>
                  </div>
                </div>
              </div>
            </section>

            {/* About Us Section */}
            <LazySection minHeight="900px">
              <section className="relative py-16 sm:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6">
                  <div className="relative">
                    <div className="mb-12 sm:mb-16 text-center">
                      <p className="text-[11px] tracking-[0.32em] uppercase text-deepred-700/70 reveal-on-scroll">About Us</p>
                      <h2 className="mt-2 font-serif text-3xl sm:text-4xl tracking-[0.02em] text-deepred-700 reveal-on-scroll reveal-heading delay-100">Groom & Bride</h2>
                      <div className="mx-auto mt-4 h-px reveal-divider bg-gradient-to-r from-roseveil via-gold-400/70 to-roseveil"></div>
                    </div>
                    <div className="hidden md:block pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-gold-400/0 via-gold-400/70 to-gold-400/0"></div>
                    <div className="grid items-stretch gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
                      {/* Groom Card */}
                      <div className="relative reveal-on-scroll reveal-left delay-200">
                        <div className="absolute -inset-6 rounded-3xl blur-3xl bg-[radial-gradient(60%_50%_at_50%_50%,rgba(207,164,62,0.20),transparent_70%)]"></div>
                        <div className="relative rounded-3xl border border-white/30 bg-white shadow-soft overflow-hidden hover-lift">
                          <img
                            loading="lazy"
                            src="/groom-pic.png"
                            alt="Groom portrait"
                            className="w-full h-80 sm:h-96 object-cover"
                          />
                          <div className="p-6 sm:p-8 text-center">
                            <h3 className="font-serif text-2xl sm:text-3xl tracking-[0.02em] text-deepred-700">Muthukumar M</h3>
                            <p className="mt-1 text-xs tracking-[0.28em] uppercase text-deepred-700/70">The Groom</p>
                            <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-roseveil via-gold-400/60 to-roseveil"></div>
                            <p className="mt-4 text-sm sm:text-base text-deepred-700/90 font-serif">Strength in his heart, kindness in his soul.</p>
                          </div>
                        </div>
                      </div>

                      {/* Bride Card */}
                      <div className="relative reveal-on-scroll reveal-right delay-400">
                        <div className="absolute -inset-6 rounded-3xl blur-3xl bg-[radial-gradient(60%_50%_at_50%_50%,rgba(255,182,193,0.28),transparent_70%)]"></div>
                        <div className="relative rounded-3xl border border-white/30 bg-white shadow-soft overflow-hidden hover-lift">
                          <img
                            loading="lazy"
                            src="/bride.avif"
                            alt="Bride portrait"
                            className="w-full h-80 sm:h-96 object-cover"
                          />
                          <div className="p-6 sm:p-8 text-center">
                            <h3 className="font-serif text-2xl sm:text-3xl tracking-[0.02em] text-deepred-700">Rajavalli K</h3>
                            <p className="mt-1 text-xs tracking-[0.28em] uppercase text-deepred-700/70">The Bride</p>
                            <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-roseveil via-gold-400/60 to-roseveil"></div>
                            <p className="mt-4 text-sm sm:text-base text-deepred-700/90 font-serif">Grace in every glance, warmth in every smile.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </LazySection>

            {/* Countdown Section */}
            <LazySection minHeight="520px">
              <Countdown />
            </LazySection>

            {/* Event Details Section */}
            <LazySection minHeight="720px">
              <EventDetails />
            </LazySection>

            {/* Schedule Section */}
            <LazySection minHeight="850px">
              <Schedule />
            </LazySection>

            {/* Love Story Section */}
            <LazySection minHeight="100vh">
              <LoveStory />
            </LazySection>

            {/* Location Section */}
            <LazySection minHeight="600px">
              <Location />
            </LazySection>

            <div className="h-24 bg-gradient-to-b from-[#f9f7f4] to-[#FFF8F3]"></div>

            <LazySection minHeight="600px">
              <WeddingGift />
            </LazySection>

            <LazySection minHeight="400px">
              <Footer />
            </LazySection>


          </div>
        </>
      )}
    </>
  );
}

export default App;
