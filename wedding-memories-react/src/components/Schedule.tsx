import React from 'react';

interface ScheduleItem {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Schedule: React.FC = () => {
  const scheduleItems: ScheduleItem[] = [
    {
      date: '25/01/2026',
      title: 'Bride to be',
      description: 'Pre-wedding celebration for the bride.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-20 w-20 sm:h-24 sm:w-24"
          aria-label="Wedding rings" role="img">
          <g fill="none" stroke="#F4D78A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="16" r="5" />
            <circle cx="20" cy="12" r="5" />
            <path d="M18 7l1.4-2.4L22 4.5" />
          </g>
        </svg>
      )
    },
    {
      date: '25/01/2026',
      title: 'Halti',
      description: 'Traditional Halti ceremony with family and friends.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-20 w-20 sm:h-24 sm:w-24"
          aria-label="Camera icon" role="img">
          <g fill="none" stroke="#F4D78A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="11" width="18" height="12" rx="2" />
            <circle cx="14" cy="17" r="4" />
            <path d="M9 11l1.8-3H18l1.8 3" />
            <rect x="17" y="7" width="8" height="6" rx="1" />
          </g>
        </svg>
      )
    },
    {
      date: '19/02/2026',
      title: 'Engagment / sangeeth',
      description: 'Engagement and sangeeth night filled with music and joy.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-20 w-20 sm:h-24 sm:w-24"
          aria-label="Wedding cake" role="img">
          <g fill="none" stroke="#F4D78A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 13h10v4H11z" />
            <path d="M9 17h14v4H9z" />
            <path d="M7 21h18v4H7z" />
            <path d="M14 13v-3h4v3" />
            <path d="M15 8l1-1.5L17 8" />
          </g>
        </svg>
      )
    },
    {
      date: '20/02/2026',
      title: 'Marriage',
      description: 'The wedding ceremony where we begin our forever.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-20 w-20 sm:h-24 sm:w-24"
          aria-label="Wedding ceremony" role="img">
          <g fill="none" stroke="#F4D78A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 22h16v3H8z" />
            <path d="M11 22v-5a5 5 0 0 1 10 0v5" />
            <path d="M16 7l2 3h-4z" />
          </g>
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-20 sm:py-24 bg-[#3B2217] text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 reveal">
          <h2 className="font-serif text-[22px] sm:text-[24px] tracking-[0.32em] uppercase text-white/90 mb-3">
            Join our celebration of love
          </h2>
        </div>
        <div className="simple-timeline-line schedule-timeline reveal">
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 flex justify-center">
            <svg className="h-full" viewBox="0 0 2 100" preserveAspectRatio="none" aria-hidden="true">
              <line className="timeline-line-stroke" x1="1" y1="0" x2="1" y2="100" />
            </svg>
          </div>
          <div className="space-y-16 sm:space-y-20 relative">
            {scheduleItems.map((item, index) => (
              <article key={index}
                className="grid grid-cols-[1fr_auto_1fr] items-center gap-6 sm:gap-8 simple-timeline-item simple-timeline-card reveal">
                <div className="flex justify-end pr-4 sm:pr-6 simple-timeline-icon">
                  {item.icon}
                </div>
                <div className="flex flex-col items-center gap-3 simple-timeline-axis">
                  <span className="simple-timeline-dot"></span>
                </div>
                <div className="pl-2 sm:pl-4 text-left">
                  <time
                    className="timeline-time block font-serif text-[13px] sm:text-[14px] tracking-[0.2em] uppercase text-gold-400"
                    dateTime={item.date}>{item.date}</time>
                  <p className="timeline-title mt-1 text-[22px] sm:text-[28px] lg:text-[20px] font-serif font-bold text-white">
                    {item.title}</p>
                  <p className="timeline-desc mt-1 text-[14px] text-white/85">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
