import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer-section relative py-20 px-4 bg-[#FFF8F3] overflow-hidden">
      {/* Decorative Ornaments */}
      <div className="footer-ornament f-orn-l"></div>
      <div className="footer-ornament f-orn-r"></div>

      <div className="container mx-auto max-w-2xl text-center relative z-10">
        <div className="heart-shimmer mb-6">❤️</div>

        <h2 className="quote-text mb-8">
          "We can't wait to celebrate our journey of love with you!"
        </h2>

        <div className="gold-seal-container mb-10">
          <div className="seal-line"></div>
          <p className="see-you-text">See You Soon!</p>
          <div className="seal-line"></div>
        </div>

        <div className="footer-names">
          <p className="signature-text">Muthukumar & Rajavalli</p>
          <div className="date-badge">20 • 02 • 2026</div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4">
          <p className="copyright-text opacity-50">
            Presented by Invite2gather
          </p>
          <a
            href="https://invite2gather.site"
            target="_blank"
            rel="noopener noreferrer"
            className="create-own-btn"
          >
            Create your own <span>✨</span>
          </a>
        </div>
      </div>

      <style>{`
        .create-own-btn {
          font-family: 'Outfit', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          color: #BF953F;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          padding: 0.6rem 1.5rem;
          border: 1px solid rgba(191, 149, 63, 0.4);
          border-radius: 99px;
          transition: all 0.3s ease;
          background: white;
          box-shadow: 0 4px 15px rgba(191, 149, 63, 0.05);
        }

        .create-own-btn:hover {
          background: #BF953F;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(191, 149, 63, 0.2);
        }

        .create-own-btn span {
          margin-left: 4px;
          font-size: 0.9rem;
        }
        .footer-section {
          border-top: 1px solid rgba(218, 165, 32, 0.2);
          background-image: 
            radial-gradient(circle at 10% 20%, rgba(218, 165, 32, 0.03) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(139, 0, 0, 0.02) 0%, transparent 40%);
        }

        .footer-ornament {
          position: absolute;
          width: 150px;
          height: 150px;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 Q 50 10, 50 50 Q 50 90, 90 90' fill='none' stroke='%23DAA520' stroke-width='0.5' opacity='0.3'/%3E%3Ccircle cx='50' cy='50' r='2' fill='%23DAA520' opacity='0.2'/%3E%3C/svg%3E");
          background-size: contain;
          opacity: 0.5;
        }
        .f-orn-l { bottom: -20px; left: -20px; transform: rotate(0deg); }
        .f-orn-r { top: -20px; right: -20px; transform: rotate(180deg); }

        .heart-shimmer {
          font-size: 2rem;
          display: inline-block;
          animation: pulse-glow 3s infinite ease-in-out;
        }

        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(139, 0, 0, 0)); }
          50% { transform: scale(1.2); filter: drop-shadow(0 0 10px rgba(139, 0, 0, 0.3)); }
        }

        .quote-text {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 1.5rem;
          line-height: 1.8;
          color: #5D4037;
          letter-spacing: 0.01em;
        }

        .gold-seal-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
        }

        .seal-line {
          height: 1px;
          flex-grow: 1;
          max-width: 60px;
          background: linear-gradient(to right, transparent, #DAA520, transparent);
        }

        .see-you-text {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          color: #BF953F;
          text-transform: uppercase;
          letter-spacing: 0.4em;
        }

        .signature-text {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: #8B0000;
          margin-bottom: 0.5rem;
        }

        .date-badge {
          display: inline-block;
          padding: 0.3rem 1.2rem;
          background: rgba(218, 165, 32, 0.1);
          border: 1px solid rgba(218, 165, 32, 0.3);
          border-radius: 99px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          color: #BF953F;
          letter-spacing: 0.2em;
        }

        .copyright-text {
          font-family: 'Outfit', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
        }

        @media (max-width: 640px) {
          .quote-text {
            font-size: 1.2rem;
          }
          .signature-text {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
