import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-02-20T00:00:00+05:30');

    const tick = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return false;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });

      return true;
    };

    tick();

    const interval = setInterval(() => {
      const keepGoing = tick();
      if (!keepGoing) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden bg-gradient-to-b from-roseveil/70 via-roseveil/40 to-white">
      <div className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(244,215,138,0.55),transparent_65%)] blur-2xl"></div>
      <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_60%_40%,rgba(255,182,193,0.45),transparent_65%)] blur-2xl"></div>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative max-w-4xl mx-auto rounded-[44px] border border-white/50 bg-white/80 shadow-soft overflow-hidden fade-up backdrop-blur">
          <div className="absolute -inset-12 pointer-events-none bg-[radial-gradient(70%_120%_at_50%_0%,rgba(244,215,138,0.35),transparent_70%)]"></div>
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(120deg,rgba(255,255,255,0.65),rgba(255,255,255,0.35),rgba(255,255,255,0.65))] opacity-60"></div>
          <div className="relative px-6 sm:px-10 py-10 sm:py-12 text-center text-deepred-700">
            <div className="pointer-events-none absolute inset-0 -z-10"></div>
            <h2 className="font-serif text-xl sm:text-2xl tracking-[0.04em] text-deepred-700 mb-2">
              Counting Down to Forever
            </h2>
            <p className="text-[11px] sm:text-xs tracking-[0.4em] uppercase text-deepred-700/70 mb-4 font-sans">
              20 February 2026 • 12:00 AM
            </p>
            <div className="flex items-center justify-center mb-8">
              <div className="h-8 w-8 rounded-full bg-roseveil flex items-center justify-center shadow-soft heart-pulse border border-deepred-700/15">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 text-deepred-600">
                  <path fill="currentColor"
                    d="M12 20.25s-1.39-1.08-2.77-2.35C6.4 15.36 4 13.16 4 9.97 4 7.74 5.68 6 7.82 6c1.3 0 2.4.67 3.03 1.7C11.78 6.67 12.88 6 14.18 6C16.32 6 18 7.74 18 9.97c0 3.19-2.4 5.39-5.23 7.93C13.39 19.17 12 20.25 12 20.25z" />
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              <div className="countdown-card rounded-2xl bg-white/90 border border-roseveil px-4 py-4 sm:px-5 sm:py-5 shadow-soft">
                <div className="font-serif text-3xl sm:text-4xl font-semibold tracking-[0.22em] text-deepred-700">
                  <span key={timeLeft.days} className="countdown-digit">{String(timeLeft.days).padStart(2, '0')}</span>
                </div>
                <div className="mt-1 text-[11px] sm:text-xs tracking-[0.32em] uppercase text-deepred-700/65">Days</div>
              </div>
              <div className="countdown-card rounded-2xl bg-white/90 border border-roseveil px-4 py-4 sm:px-5 sm:py-5 shadow-soft">
                <div className="font-serif text-3xl sm:text-4xl font-semibold tracking-[0.22em] text-deepred-700">
                  <span key={timeLeft.hours} className="countdown-digit">{String(timeLeft.hours).padStart(2, '0')}</span>
                </div>
                <div className="mt-1 text-[11px] sm:text-xs tracking-[0.32em] uppercase text-deepred-700/65">Hours</div>
              </div>
              <div className="countdown-card rounded-2xl bg-white/90 border border-roseveil px-4 py-4 sm:px-5 sm:py-5 shadow-soft">
                <div className="font-serif text-3xl sm:text-4xl font-semibold tracking-[0.22em] text-deepred-700">
                  <span key={timeLeft.minutes} className="countdown-digit">{String(timeLeft.minutes).padStart(2, '0')}</span>
                </div>
                <div className="mt-1 text-[11px] sm:text-xs tracking-[0.32em] uppercase text-deepred-700/65">Minutes</div>
              </div>
              <div className="countdown-card rounded-2xl bg-white/90 border border-roseveil px-4 py-4 sm:px-5 sm:py-5 shadow-soft">
                <div className="font-serif text-3xl sm:text-4xl font-semibold tracking-[0.22em] text-deepred-700">
                  <span key={timeLeft.seconds} className="countdown-digit">{String(timeLeft.seconds).padStart(2, '0')}</span>
                </div>
                <div className="mt-1 text-[11px] sm:text-xs tracking-[0.32em] uppercase text-deepred-700/65">Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
