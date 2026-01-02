import React from 'react';

const EventDetails: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 bg-roseveil/60">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto rounded-[32px] bg-white shadow-soft border border-roseveil/80 px-4 sm:px-10 lg:px-16 py-10 sm:py-14 reveal">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 sm:mb-10 w-52 sm:w-64 md:w-72 aspect-[3/4] rounded-t-[60%] rounded-b-[32px] overflow-hidden bg-roseveil/80 border border-roseveil shadow-soft">
              <img loading="lazy" src="./assets/img2.png" alt="Wedding reception" className="w-full h-full object-cover" />
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl tracking-[0.03em] text-deepred-700">Wedding Reception</h1>
            <p className="mt-2 text-xs sm:text-sm tracking-[0.16em] uppercase text-deepred-700/60">
              Rasi Mahal, Sivakasi
            </p>
            <p className="mt-3 text-[11px] sm:text-xs tracking-[0.26em] uppercase font-semibold text-deepred-700">
              At 06:30 PM
            </p>
            <div className="mt-10 w-full max-w-2xl">
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
            <p className="mt-4 text-[11px] sm:text-xs text-deepred-700/70 font-serif italic">
              According to Tamil Calendar
            </p>
            <div className="mt-8 flex items-center justify-center gap-7">
              <button type="button"
                className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-deepred-700/15 bg-white shadow-[0_8px_22px_rgba(101,5,19,0.15)] hover:border-deepred-700/40 hover:shadow-[0_10px_26px_rgba(101,5,19,0.22)] transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 text-deepred-700/80">
                  <path fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.5 3.75h-1A1.75 1.75 0 0 0 3.75 5.5v1.87c0 6.67 5.41 12.38 12 12.38h1.75a1.75 1.75 0 0 0 1.75-1.75v-2.6a1 1 0 0 0-.72-.96l-3.4-1.03a1 1 0 0 0-1.02.26l-.96.98a.9.9 0 0 1-.96.23c-1.8-.63-3.4-2.2-4.07-4.03a.9.9 0 0 1 .2-.96l.92-.92a1 1 0 0 0 .25-1.02L9.7 4.47a1 1 0 0 0-.96-.72z" />
                </svg>
              </button>
              <button type="button"
                className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-deepred-700/15 bg-white shadow-[0_8px_22px_rgba(101,5,19,0.15)] hover:border-deepred-700/40 hover:shadow-[0_10px_26px_rgba(101,5,19,0.22)] transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 text-deepred-700/80">
                  <path fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3.25a6.5 6.5 0 0 0-6.5 6.5c0 4.06 3.37 7.86 5.62 9.83a1.4 1.4 0 0 0 1.76 0c2.25-1.97 5.62-5.77 5.62-9.83A6.5 6.5 0 0 0 12 3.25zm0 3.5a3 3 0 1 1 0 6.01a3 3 0 0 1 0-6.01z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
