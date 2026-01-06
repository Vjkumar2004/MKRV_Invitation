import React from 'react';

const SaveTheDate: React.FC = () => {
  return (
    <section className="relative py-8 sm:py-12 save-the-date-section bg-gradient-to-b from-transparent to-deepred-900/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center reveal">
          <p className="text-[11px] tracking-[0.32em] uppercase text-deepred-700/70 mb-2">
            Video Invitation
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-[0.04em] text-deepred-700 mb-4">
            Save The Date
          </h2>
          
          {/* Date Display */}
          <div className="mb-8">
            <div className="inline-block">
              <div className="text-5xl sm:text-6xl md:text-7xl font-serif text-deepred-700 leading-none">
                20
              </div>
              <div className="text-lg sm:text-xl md:text-2xl text-deepred-600 mt-1">
                February 2026
              </div>
            </div>
          </div>
          
          {/* Video Placeholder */}
          <div className="relative mx-auto max-w-4xl">
            <div className="relative aspect-video bg-white rounded-2xl shadow-2xl overflow-hidden group cursor-pointer">
              {/* Video Thumbnail Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-roseveil to-deepred-700/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 text-deepred-700 ml-1">
                        <path fill="currentColor" d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-deepred-700 font-medium text-lg sm:text-xl">
                      Click to Play Video
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-12 h-12 sm:w-16 sm:h-16 border-2 border-gold-400/30 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 sm:w-12 sm:h-12 border-2 border-gold-400/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaveTheDate;
