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
      year: '2015',
      title: 'Where It All Began',
      description: 'Two strangers, one unexpected connection. Our story quietly began here.',
      image: '/timeline 1.avif',
      imageFirst: true
    },
    {
      year: '2015',
      title: 'First Conversations',
      description: 'From simple talks to endless conversations… without knowing, hearts started connecting.',
      image: '/timeline 2.avif'
    },
    {
      year: '2016',
      title: 'First Photo Together',
      description: 'Our first captured memory – shy smiles, real feelings, and a lot of hope.',
      image: '/timeline 3.avif',
      imageFirst: true
    },
    {
      year: '2017',
      title: 'Growing Closer',
      description: 'Days turned into years, and friendship slowly bloomed into love.',
      image: '/timeline 5.avif'
    },
    {
      year: '2018',
      title: 'Long Talks & Laughter',
      description: 'Late-night talks, silly laughs, and memories we\'ll cherish forever.',
      image: '/timeline 6.avif',
      imageFirst: true
    },
    {
      year: '2019',
      title: 'Through Ups & Downs',
      description: 'Not every chapter was easy, but every challenge made us stronger together.',
      image: '/timeline 7.png'
    },
    {
      year: '2020',
      title: 'Choosing Each Other',
      description: 'Through changes and time, we chose each other again and again.',
      image: '/timeline 8.avif',
      imageFirst: true
    },
    {
      year: '2021',
      title: 'Love That Stayed',
      description: 'Years passed, but our love stayed constant — deeper, stronger, and truer.',
      image: '/timeline 9.avif'
    },
    {
      year: '2022',
      title: 'Almost Forever',
      description: 'From 2015 to forever — our love story is now ready for its next chapter.',
      image: '/timeline 10.avif',
      imageFirst: true
    },
    {
      year: '2026',
      title: 'The Beginning of Forever',
      description: 'This is not the end of our story… it\'s just the beginning of forever.',
      image: '/timeline 1.avif'
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/MKRV_008_compressed.avif')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.7)'
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/10"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-[11px] tracking-[0.32em] uppercase text-white/80 mb-2">
            Our Journey
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-[0.04em] text-white">
            Love Story
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-roseveil via-gold-400/70 to-roseveil"></div>
        </div>
        
        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line - Desktop Only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-400/30 via-gold-400/50 to-gold-400/30 -translate-x-1/2"></div>
          
          <div className="space-y-12 sm:space-y-16">
            {storyItems.map((item, index) => (
              <div key={index} className="relative">
                {/* Mobile Layout */}
                <div className="md:hidden">
                  <div className="flex flex-col space-y-4">
                    {/* Timeline Dot - Mobile */}
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 rounded-full bg-gold-400 border-4 border-white shadow-lg"></div>
                      <span className="font-serif text-lg text-white">{item.year}</span>
                    </div>
                    
                    {/* Content - Mobile */}
                    <div className="ml-7">
                      <h3 className="font-serif text-2xl text-white mb-2">{item.title}</h3>
                      <p className="text-white/90 mb-4">{item.description}</p>
                      
                      {/* Image - Mobile */}
                      <div className="w-full max-w-sm mx-auto">
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-white/30">
                          <img 
                            loading="lazy" 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-48 sm:h-56 object-cover"
                            style={{ willChange: 'transform' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:block">
                  <div className="grid grid-cols-2 gap-8 items-center">
                    {item.imageFirst ? (
                      <>
                        {/* Image Left */}
                        <div className="text-right">
                          <div className="inline-block rounded-2xl overflow-hidden shadow-xl border border-white/30">
                            <img 
                              loading="lazy" 
                              src={item.image} 
                              alt={item.title} 
                              className="w-64 h-80 object-cover"
                              style={{ willChange: 'transform' }}
                            />
                          </div>
                        </div>
                        
                        {/* Content Right */}
                        <div className="text-left pl-8">
                          <div className="flex items-center mb-3">
                            <div className="w-4 h-4 rounded-full bg-gold-400 border-4 border-white shadow-lg mr-4"></div>
                            <span className="font-serif text-xl text-white">{item.year}</span>
                          </div>
                          <h3 className="font-serif text-3xl text-white mb-2">{item.title}</h3>
                          <p className="text-white/90">{item.description}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Content Left */}
                        <div className="text-right pr-8">
                          <div className="flex items-center justify-end mb-3">
                            <span className="font-serif text-xl text-white mr-4">{item.year}</span>
                            <div className="w-4 h-4 rounded-full bg-gold-400 border-4 border-white shadow-lg"></div>
                          </div>
                          <h3 className="font-serif text-3xl text-white mb-2">{item.title}</h3>
                          <p className="text-white/90">{item.description}</p>
                        </div>
                        
                        {/* Image Right */}
                        <div className="text-left">
                          <div className="inline-block rounded-2xl overflow-hidden shadow-xl border border-white/30">
                            <img 
                              loading="lazy" 
                              src={item.image} 
                              alt={item.title} 
                              className="w-64 h-80 object-cover"
                              style={{ willChange: 'transform' }}
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveStory;
