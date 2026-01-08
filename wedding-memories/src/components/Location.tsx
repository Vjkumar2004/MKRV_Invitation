import React from 'react';

const Location: React.FC = () => {
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3935.7535023762493!2d77.7779231!3d9.443002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cf1903fc0bc7%3A0xf4bdfa99feaeab48!2sDv%20Rasi%20Mahal!5e0!3m2!1sen!2sin!4v1767883560517!5m2!1sen!2sin";
    const directLink = "https://www.google.com/maps/place/Dv+Rasi+Mahal/@9.443002,77.7779231,692m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3b06cf1903fc0bc7:0xf4bdfa99feaeab48!8m2!3d9.443002!4d77.780498!16s%2Fg%2F11g9q146ff";

    return (
        <section className="location-section py-16 sm:py-24 bg-[#f9f7f4]">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <p className="text-[11px] tracking-[0.32em] uppercase text-[#8B4513]/70 reveal-on-scroll">The Venue</p>
                    <h2 className="mt-2 font-serif text-3xl sm:text-4xl tracking-[0.02em] text-[#8B4513] reveal-on-scroll reveal-heading delay-100">Location</h2>
                    <div className="mx-auto mt-4 h-px reveal-divider bg-gradient-to-r from-transparent via-[#DAA520] to-transparent"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white reveal-on-scroll delay-200 hover-lift">
                        <iframe
                            src={mapUrl}
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Venue Location Map"
                            className="grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                        ></iframe>
                    </div>

                    <div className="mt-10 text-center reveal-on-scroll delay-400">
                        <h3 className="font-serif text-2xl text-[#8B4513] mb-2">Dv Rasi Mahal</h3>
                        <p className="text-[#5D4037] mb-8 font-serif italic text-lg">Muneesh Nagar, Sivakasi</p>

                        <a
                            href={directLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-10 py-4 bg-[#8B0000] text-[#FFF8F3] font-serif tracking-widest uppercase text-sm rounded-full shadow-lg hover:bg-[#A52A2A] transition-all transform hover:-translate-y-1 hover:shadow-2xl active:translate-y-0"
                        >
                            <span className="mr-2">📍</span> View Location
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
                .location-section {
                    position: relative;
                    overflow: hidden;
                }
                
                .location-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 100px;
                    background: linear-gradient(to bottom, #ffffff, transparent);
                    pointer-events: none;
                }
            `}</style>
        </section>
    );
};

export default Location;
