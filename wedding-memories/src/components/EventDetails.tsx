import React from 'react';

const EventDetails: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 bg-roseveil/60">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto rounded-[32px] bg-white shadow-soft border border-roseveil/80 px-4 sm:px-10 lg:px-16 py-10 sm:py-14 reveal-on-scroll hover-lift">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 sm:mb-10 w-52 sm:w-64 md:w-72 aspect-[3/4] rounded-t-[60%] rounded-b-[32px] overflow-hidden bg-roseveil/80 border border-roseveil shadow-soft delay-200">
              <img loading="lazy" src="/timeline 9.avif" alt="Wedding ceremony" className="w-full h-full object-cover" />
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl tracking-[0.03em] text-deepred-700 reveal-on-scroll reveal-heading delay-100">Wedding Ceremony</h1>
            <p className="mt-2 text-xs sm:text-sm tracking-[0.16em] uppercase text-deepred-700/60 reveal-on-scroll delay-200">
              Rasi Mahal, Sivakasi
            </p>
            <p className="mt-3 text-[11px] sm:text-xs tracking-[0.26em] uppercase font-semibold text-deepred-700 reveal-on-scroll delay-300">
              At 09:00 AM
            </p>
            <div className="mt-10 w-full max-w-2xl reveal-on-scroll delay-400">
              <div className="flex items-center justify-between gap-4 text-[12px] sm:text-sm tracking-[0.18em] uppercase text-deepred-700/75">
                <div className="flex-1 flex items-center gap-3">
                  <span className="hidden sm:block h-px flex-1 bg-deepred-700/20"></span>
                  <span className="font-medium whitespace-nowrap">Friday</span>
                </div>
                <div className="flex items-baseline gap-2 mx-auto">
                  <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[0.12em] text-deepred-700">20</span>
                  <span className="font-serif text-2xl sm:text-3xl tracking-[0.4em] text-deepred-700/70">/</span>
                  <span className="font-serif text-3xl sm:text-4xl font-semibold tracking-[0.18em] text-deepred-700">02</span>
                </div>
                <div className="flex-1 flex items-center gap-3 justify-end">
                  <span className="font-medium whitespace-nowrap">2026</span>
                  <span className="hidden sm:block h-px flex-1 bg-deepred-700/20"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
