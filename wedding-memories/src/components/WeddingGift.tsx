import React, { useState } from 'react';

const WeddingGift: React.FC = () => {
    const [showCelebration, setShowCelebration] = useState(false);
    const [copied, setCopied] = useState(false);

    const upiId = "muthu16571@ybl";
    const payeeName = "Muthukumar M";

    const upiParams = `pa=${upiId}&pn=${encodeURIComponent(payeeName)}&cu=INR`;
    const upiData = `upi://pay?${upiParams}`;
    const qrCodeUrl = `https://quickchart.io/qr?text=${encodeURIComponent(upiData)}&size=300&margin=1`;

    const getUpiUris = () => {
        const ua = navigator.userAgent || navigator.vendor;
        const isAndroid = /Android/i.test(ua);
        const gpayScheme = isAndroid ? "tez" : "gpay";

        return {
            upi: `upi://pay?${upiParams}`,
            gpay: `${gpayScheme}://upi/pay?${upiParams}`
        };
    };

    const handlePay = (e: React.MouseEvent) => {
        e.preventDefault();
        const uris = getUpiUris();
        window.location.href = uris.gpay;

        // Fallback for all browsers after a small delay
        setTimeout(() => {
            if (document.hasFocus()) {
                window.location.href = uris.upi;
            }
        }, 1000);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(upiId).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <section className="wedding-gift-section py-24 sm:py-32 bg-[#FFF8F3] relative overflow-hidden">
            {/* Animated Mandala Backgrounds */}
            <div className="mandala mandala-tl opacity-20 hidden md:block"></div>
            <div className="mandala mandala-br opacity-20 hidden md:block"></div>

            {/* Floating Petals/Hearts */}
            <div className="floating-elements pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className={`floating-item item-${i}`}>🌸</div>
                ))}
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-16">
                    <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B4513]/70 font-semibold reveal-on-scroll">Blessings & Gift</p>
                    <h2 className="mt-3 font-serif text-4xl sm:text-5xl tracking-[0.02em] text-[#8B4513] reveal-on-scroll reveal-heading delay-100">Wedding Gift</h2>
                    <div className="mx-auto mt-6 h-px reveal-divider bg-gradient-to-r from-transparent via-[#DAA520] to-transparent"></div>
                </div>

                <div className="max-w-3xl mx-auto relative group">
                    {/* Decorative Card Shadow/Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#DAA520] to-[#8B4513] rounded-[48px] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>

                    {/* The Premium Card */}
                    <div className="relative bg-white/70 backdrop-blur-2xl rounded-[48px] border border-white/80 shadow-[0_32px_64px_-16px_rgba(139,69,19,0.12)] p-10 sm:p-16 text-center reveal-on-scroll delay-200">
                        {/* Gold Corner Ornaments (SVG) */}
                        <div className="corner-ornament ornament-tl"></div>
                        <div className="corner-ornament ornament-tr"></div>
                        <div className="corner-ornament ornament-bl"></div>
                        <div className="corner-ornament ornament-br"></div>

                        <div className="mb-14 relative z-10">
                            <div className="gift-icon-container mb-8 scale-150">
                                <span className="text-7xl filter drop-shadow-xl">🎁</span>
                                {showCelebration && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="celebration-particles">
                                            {[...Array(12)].map((_, i) => (
                                                <span key={i} className={`particle p-${i}`}>❤️</span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <h3 className="font-serif text-3xl text-[#8B4513] mb-6 tracking-tight">Send Your Gift</h3>
                            <p className="text-[#5D4037] font-serif italic text-lg leading-relaxed max-w-lg mx-auto opacity-80">
                                "Your presence is our greatest joy, but if you wish to bless us with a gift, your gift would be cherished."
                            </p>
                        </div>

                        {/* QR Code Section - Centered */}
                        <div className="mb-14 flex flex-col items-center relative z-10">
                            <div className="relative p-6 bg-white rounded-[2.5rem] shadow-2xl border-4 border-[#DAA520]/20 group/qr">
                                <div className="absolute -inset-3 border-2 border-[#DAA520]/10 rounded-[3rem] animate-pulse"></div>
                                <img
                                    src={qrCodeUrl}
                                    alt="UPI QR Code"
                                    className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl"
                                />
                                <div className="mt-6 text-[11px] uppercase tracking-[.3em] text-[#8B4513]/60 font-bold">
                                    Scan to Pay
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Payment Button */}
                        <div className="reveal-on-scroll delay-400 space-y-10 relative z-10">
                            <button
                                onClick={handlePay}
                                className="gift-pay-button group relative inline-flex items-center justify-center w-full sm:w-auto px-20 py-6 bg-[#8B0000] text-[#FFF8F3] rounded-full overflow-hidden shadow-[0_20px_40px_-10px_rgba(139,0,0,0.5)] transition-all hover:scale-[1.03] active:scale-95"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                                <div className="flex items-center gap-4">
                                    <span className="font-serif tracking-[0.25em] uppercase text-sm font-bold">
                                        Open GPay / UPI App
                                    </span>
                                </div>
                            </button>

                            {/* Simple Fallback */}
                            <div className="flex flex-col items-center gap-4">
                                <button
                                    onClick={copyToClipboard}
                                    className="text-[11px] uppercase tracking-[0.2em] bg-white/50 hover:bg-white/80 text-[#8B4513]/70 px-6 py-3 rounded-full transition-all border border-[#8B4513]/10 font-bold flex items-center gap-2"
                                >
                                    {copied ? "✨ UPI ID Copied!" : `Copy UPI ID: ${upiId}`}
                                </button>
                            </div>

                            <p className="mt-10 text-[10px] uppercase tracking-[0.4em] text-[#8B4513]/40 font-bold">
                                🔒 Secure Gift • Direct Transfer
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .wedding-gift-section {
                    background: radial-gradient(circle at 50% 50%, #FFF8F3 0%, #FDF4EA 100%);
                }

                .mandala {
                    position: absolute;
                    width: 600px;
                    height: 600px;
                    background-image: url("data:image/svg+xml,%3Csvg width='500' height='500' viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M250 10c-5 0-10 5-10 10s5 10 10 10 10-5 10-10-5-10-10-10zm0 480c5 0 10-5 10-10s-5-10-10-10-10 5-10 10 5 10 10 10zM10 250c0 5 5 10 10 10s10-5 10-10-5-10-10-10-10 5-10 10zm480 0c0-5-5-10-10-10s-10 5-10 10 5 10 10 10 10-5 10-10zM80 80c-4-4-10-4-14 0s-4 10 0 14l120 120c4 4 10 4 14 0s4-10 0-14L80 80zm340 340c4 4 10 4 14 0s4-10 0-14L314 286c-4-4-10-4-14 0s-4 10 0 14l120 120z' fill='%238B4513' fill-opacity='0.2'/%3E%3C/svg%3E");
                    background-size: contain;
                    animation: rotate-slow 60s infinite linear;
                    z-index: 0;
                }

                .mandala-tl { top: -200px; left: -200px; }
                .mandala-br { bottom: -200px; right: -200px; }

                @keyframes rotate-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                .corner-ornament {
                    position: absolute;
                    width: 80px;
                    height: 80px;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L100 0 L100 10 L40 10 C20 10 10 20 10 40 L10 100 L0 100 Z' fill='%23DAA520'/%3E%3C/svg%3E");
                    background-size: contain;
                    opacity: 0.6;
                    transition: all 0.5s ease;
                }
                .ornament-tl { top: 20px; left: 20px; }
                .ornament-tr { top: 20px; right: 20px; transform: rotate(90deg); }
                .ornament-bl { bottom: 20px; left: 20px; transform: rotate(-90deg); }
                .ornament-br { bottom: 20px; right: 20px; transform: rotate(180deg); }

                .floating-item {
                    position: absolute;
                    font-size: 1.5rem;
                    animation: float-around 15s infinite ease-in-out;
                    z-index: 1;
                    opacity: 0.4;
                }
                
                @keyframes float-around {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    33% { transform: translate(30px, -50px) rotate(120deg); }
                    66% { transform: translate(-20px, 20px) rotate(240deg); }
                }

                .item-0 { top: 10%; left: 10%; animation-delay: 0s; }
                .item-1 { top: 20%; right: 15%; animation-delay: -2s; }
                .item-2 { bottom: 20%; left: 15%; animation-delay: -4s; }
                .item-3 { bottom: 10%; right: 10%; animation-delay: -6s; }
                .item-4 { top: 40%; left: 5%; animation-delay: -8s; }
                .item-5 { top: 60%; right: 5%; animation-delay: -10s; }

                .gift-pay-button {
                    animation: pulse-soft 2s infinite;
                }

                @keyframes pulse-soft {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.02); box-shadow: 0 25px 50px -12px rgba(139, 0, 0, 0.6); }
                }

                .particle {
                    position: absolute;
                    animation: particle-fly 2s forwards ease-out;
                }

                @keyframes particle-fly {
                    0% { transform: translate(0, 0) scale(0); opacity: 1; }
                    100% { transform: translate(var(--tw-translate-x), var(--tw-translate-y)) scale(1.5); opacity: 0; }
                }

                .p-0 { --tw-translate-x: -80px; --tw-translate-y: -80px; animation-delay: 0s; }
                .p-1 { --tw-translate-x: 80px; --tw-translate-y: -80px; animation-delay: 0.1s; }
                .p-2 { --tw-translate-x: -80px; --tw-translate-y: 80px; animation-delay: 0.2s; }
                .p-3 { --tw-translate-x: 80px; --tw-translate-y: 80px; animation-delay: 0.3s; }
                .p-4 { --tw-translate-x: 0px; --tw-translate-y: -110px; animation-delay: 0.05s; }
                .p-5 { --tw-translate-x: 0px; --tw-translate-y: 110px; animation-delay: 0.15s; }
                .p-6 { --tw-translate-x: -110px; --tw-translate-y: 0px; animation-delay: 0.25s; }
                .p-7 { --tw-translate-x: 110px; --tw-translate-y: 0px; animation-delay: 0.35s; }
                .p-8 { --tw-translate-x: -60px; --tw-translate-y: -40px; }
                .p-9 { --tw-translate-x: 60px; --tw-translate-y: -40px; }
                .p-10 { --tw-translate-x: -40px; --tw-translate-y: 60px; }
                .p-11 { --tw-translate-x: 40px; --tw-translate-y: 60px; }
            `}</style>
        </section>
    );
};

export default WeddingGift;
