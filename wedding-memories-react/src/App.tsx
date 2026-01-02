import React from 'react';
import './App.css';
import Countdown from './components/Countdown';
import EventDetails from './components/EventDetails';
import LoveStory from './components/LoveStory';
import Schedule from './components/Schedule';
import PhotoAlbum from './components/PhotoAlbum';
import LazySection from './components/LazySection';
import heroBg from './assets/MKRV_016.avif';
import brideImg from './assets/MKRV_025.avif';
import groomImg from './assets/groom-pic.png';

function App() {
  return (
    <div className="antialiased text-deepred-700 bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image */}
        <div 
          className="absolute inset-0 fade-in-slow bg-zoom" 
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        {/* Vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_50%,rgba(0,0,0,0),transparent_60%)] fade-in-slow" 
             style={{animationDelay: '150ms'}} />
        
        {/* Names Container */}
        <div className="absolute inset-x-0 bottom-12 z-10 container mx-auto px-4 sm:px-6 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2">
          <div className="mx-auto max-w-3xl text-center reveal">
            <h1 className="font-serif text-white tracking-[0.06em] font-bold leading-tight text-4xl sm:text-6xl md:text-7xl" 
                style={{textShadow: '0 6px 32px rgba(0,0,0,0.48)'}}>
              <span className="block text-3xl sm:text-5xl md:text-6xl">MUTHUKUMAR</span>
              <span className="block leading-none text-5xl sm:text-7xl md:text-8xl">&</span>
              <span className="block text-3xl sm:text-5xl md:text-6xl">RAJAVALLI</span>
            </h1>
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
              <div className="mb-12 sm:mb-16 text-center reveal">
                <p className="text-[11px] tracking-[0.32em] uppercase text-deepred-700/70">About Us</p>
                <h2 className="mt-2 font-serif text-3xl sm:text-4xl tracking-[0.02em] text-deepred-700">Bride & Groom</h2>
                <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-roseveil via-gold-400/70 to-roseveil"></div>
              </div>
              <div className="hidden md:block pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-gold-400/0 via-gold-400/70 to-gold-400/0"></div>
              <div className="grid items-stretch gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
                <div className="relative">
                  <div className="absolute -inset-6 rounded-3xl blur-3xl bg-[radial-gradient(60%_50%_at_50%_50%,rgba(255,182,193,0.28),transparent_70%)]"></div>
                  <div className="relative rounded-3xl border border-white/30 bg-white shadow-soft overflow-hidden reveal">
                    <img 
                      loading="lazy"
                      src={brideImg}
                      alt="Bride portrait" 
                      className="w-full h-80 sm:h-96 object-cover fade-in-slow" 
                    />
                    <div className="p-6 sm:p-8 text-center">
                      <h3 className="font-serif text-2xl sm:text-3xl tracking-[0.02em] text-deepred-700">Rajavalli K</h3>
                      <p className="mt-1 text-xs tracking-[0.28em] uppercase text-deepred-700/70">The Bride</p>
                      <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-roseveil via-gold-400/60 to-roseveil"></div>
                      <p className="mt-4 text-sm sm:text-base text-deepred-700/90 font-serif">Grace in every glance, warmth in every smile.</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -inset-6 rounded-3xl blur-3xl bg-[radial-gradient(60%_50%_at_50%_50%,rgba(207,164,62,0.20),transparent_70%)]"></div>
                  <div className="relative rounded-3xl border border-white/30 bg-white shadow-soft overflow-hidden reveal">
                    <img 
                      loading="lazy"
                      src={groomImg}
                      alt="Groom portrait" 
                      className="w-full h-80 sm:h-96 object-cover fade-in-slow" 
                    />
                    <div className="p-6 sm:p-8 text-center">
                      <h3 className="font-serif text-2xl sm:text-3xl tracking-[0.02em] text-deepred-700">Muthukumar M</h3>
                      <p className="mt-1 text-xs tracking-[0.28em] uppercase text-deepred-700/70">The Groom</p>
                      <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-roseveil via-gold-400/60 to-roseveil"></div>
                      <p className="mt-4 text-sm sm:text-base text-deepred-700/90 font-serif">Strength in his heart, kindness in his soul.</p>
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

      {/* Love Story Section */}
      <LazySection minHeight="900px">
        <LoveStory />
      </LazySection>

      {/* Schedule Section */}
      <LazySection minHeight="850px">
        <Schedule />
      </LazySection>

      {/* Photo Album Section */}
      <LazySection minHeight="650px">
        <PhotoAlbum />
      </LazySection>
    </div>
  );
}

export default App;
