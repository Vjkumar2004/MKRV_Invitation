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
    <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-roseveil/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-12 text-center">
          <p className="text-[11px] tracking-[0.32em] uppercase text-deepred-700/70 reveal-on-scroll">The Big Day</p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl tracking-[0.02em] text-deepred-700 reveal-on-scroll reveal-heading delay-100">Countdown</h2>
          <div className="mx-auto mt-4 h-px reveal-divider bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 max-w-4xl mx-auto">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <div
              key={unit}
              className="countdown-card reveal-on-scroll delay-200"
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="relative glass bg-white/40 border border-white/60 p-6 sm:p-10 rounded-3xl w-28 sm:w-40 text-center shadow-soft hover-lift">
                <div className="text-4xl sm:text-6xl font-serif text-deepred-700 mb-2 countdown-digit">
                  {value.toString().padStart(2, '0')}
                </div>
                <div className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-deepred-700/50">
                  {unit}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;
