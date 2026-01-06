import React, { useState, useEffect } from 'react';
import './OpeningScreen.css';

interface OpeningScreenProps {
  onOpen: () => void;
  isPlaying?: boolean;
  onToggleMusic?: () => void;
}

const OpeningScreen: React.FC<OpeningScreenProps> = ({ onOpen, isPlaying = false, onToggleMusic }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleOpenInvitation = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsVisible(false);
      onOpen();
    }, 800);
  };

  useEffect(() => {
    // Add entrance animation after component mounts
    const timer = setTimeout(() => {
      document.body.classList.add('opening-loaded');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`opening-screen ${isTransitioning ? 'transitioning-out' : ''}`}>
      {/* Background Image */}
      <div className="background-container">
        <img 
          src="/opening-bg.jpg" 
          alt="Floral Background" 
          className="background-image"
        />
        {/* Gradient Overlay */}
        <div className="gradient-overlay" />
      </div>

      {/* Music Control Button */}
      {onToggleMusic && (
        <button 
          className="music-control"
          onClick={onToggleMusic}
          aria-label={isPlaying ? "Pause Music" : "Play Music"}
        >
          {isPlaying ? '🔇' : '🔊'}
        </button>
      )}

      {/* Content */}
      <div className="content-container">
        <div className="names-container">
          <h1 className="couple-names">
            Muthukumar & Rajavali
          </h1>
          <p className="romantic-text">We are tying the knot and would love for you to be part of our special day.</p>
          <p className="subtitle">Wedding Invitation</p>
        </div>
        
        <button 
          className="open-button"
          onClick={handleOpenInvitation}
          aria-label="Open Wedding Invitation"
        >
          Open Invitation
        </button>
      </div>
    </div>
  );
};

export default OpeningScreen;
