import React from 'react';

interface StoryItem {
  year: string;
  title: string;
  description: string;
  image: string;
  imageFirst?: boolean;
}

const LoveStory: React.FC = () => {
  const storyItems: StoryItem[] = [
    {
      year: '2020',
      title: 'First Meeting',
      description: 'Met through a shared best friend and felt an instant connection.',
      image: '/MKRV_038.avif',
      imageFirst: true
    },
    {
      year: '2020',
      title: 'First Date',
      description: 'Coffee turned into long conversations and endless laughter.',
      image: '/MKRV_022.avif'
    },
    {
      year: '2021',
      title: 'Officially Together',
      description: 'Promises were made and the journey of us truly began.',
      image: '/MKRV_019.avif',
      imageFirst: true
    },
    {
      year: '2021',
      title: 'Families United',
      description: 'Two families came together with blessings and happy tears.',
      image: '/MKRV_035.avif'
    },
    {
      year: '2022',
      title: 'First Getaway',
      description: 'A memorable trip filled with sunsets, photos and shared dreams.',
      image: '/MKRV_013.avif',
      imageFirst: true
    },
    {
      year: '2022',
      title: 'The Proposal',
      description: 'A heartfelt question, a joyful yes and happy tears all around.',
      image: '/MKRV_006.avif'
    },
    {
      year: '2023',
      title: 'Ring Ceremony',
      description: 'Exchanging rings in front of people who mean the most.',
      image: '/MKRV_038.avif',
      imageFirst: true
    },
    {
      year: '2024',
      title: 'Planning Together',
      description: 'Late-night calls, checklists and excitement for the big day.',
      image: '/MKRV_022.avif'
    },
    {
      year: '2025',
      title: 'Pre-Wedding Shoot',
      description: 'Capturing laughter, stolen glances and quiet moments together.',
      image: '/MKRV_019.avif',
      imageFirst: true
    },
    {
      year: '2026',
      title: 'Wedding Day',
      description: 'The day two hearts, two families and countless memories became one.',
      image: '/MKRV_035.avif'
    }
  ];

  return (
    <section className="relative py-20 sm:py-24 bg-black/5 overflow-hidden">
      <div className="absolute inset-0 bg-zoom"
        style={{
          backgroundImage: "url('/MKRV_039.avif')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          filter: 'blur(4px)'
        }}></div>
      <div className="absolute inset-0 bg-black/55"></div>
      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14 reveal">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-[0.08em] text-white">Our Love Story</h2>
          <p className="mt-3 text-xs sm:text-sm tracking-[0.28em] uppercase text-white/70">Moments that led us to forever</p>
        </div>
        <div className="simple-timeline-line love-story-timeline reveal">
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 flex justify-center">
            <svg className="h-full" viewBox="0 0 0.2 100" preserveAspectRatio="none" aria-hidden="true">
              <line className="timeline-line-stroke" x1="0.1" y1="0" x2="0.1" y2="100" strokeWidth="0.1" />
            </svg>
          </div>
          <div className="space-y-20 sm:space-y-24 relative">
            {storyItems.map((item, index) => (
              <article key={index} className="grid grid-cols-[1fr_auto_1fr] items-center gap-6 sm:gap-8 simple-timeline-item reveal">
                {item.imageFirst ? (
                  <>
                    <div className="flex justify-end pr-0 sm:pr-4">
                      <div className="glass rounded-3xl border border-white/20 bg-white/10 shadow-soft backdrop-saturate-150 overflow-hidden w-full max-w-md">
                        <div className="h-60 sm:h-72 md:h-80 overflow-hidden">
                          <img loading="lazy" src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-3 simple-timeline-axis">
                      <span className="simple-timeline-dot"></span>
                    </div>
                    <div className="pl-0 sm:pl-4">
                      <p className="font-serif text-xl sm:text-2xl tracking-[0.18em] mb-1 text-white">{item.year}</p>
                      <h3 className="font-serif text-2xl sm:text-3xl tracking-[0.04em] mb-1 text-white">{item.title}</h3>
                      <p className="text-sm sm:text-base text-white/80">{item.description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="pr-0 sm:pr-4">
                      <p className="font-serif text-xl sm:text-2xl tracking-[0.18em] mb-1 text-white">{item.year}</p>
                      <h3 className="font-serif text-2xl sm:text-3xl tracking-[0.04em] mb-1 text-white">{item.title}</h3>
                      <p className="text-sm sm:text-base text-white/80">{item.description}</p>
                    </div>
                    <div className="flex flex-col items-center gap-3 simple-timeline-axis">
                      <span className="simple-timeline-dot"></span>
                    </div>
                    <div className="pl-0 sm:pl-4 flex justify-start">
                      <div className="glass rounded-3xl border border-white/20 bg-white/10 shadow-soft backdrop-saturate-150 overflow-hidden w-full max-w-md">
                        <div className="h-60 sm:h-72 md:h-80 overflow-hidden">
                          <img loading="lazy" src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveStory;
