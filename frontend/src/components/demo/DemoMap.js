import React, { useState, useEffect } from 'react';

const DemoMap = ({ onEnter }) => {
  const [mapVisible, setMapVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  useEffect(() => {
    // Show map after a short delay
    const mapTimer = setTimeout(() => setMapVisible(true), 500);
    
    // Show overlay after map is visible
    const overlayTimer = setTimeout(() => setOverlayVisible(true), 2500);
    
    return () => {
      clearTimeout(mapTimer);
      clearTimeout(overlayTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      
      {/* Map Container */}
      <div className="relative w-full h-full">
        {/* India Map - Thermal Satellite View */}
        <div className={`absolute inset-0 transition-all duration-2000 ${mapVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Map Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-blue-900/30 to-purple-900/20"></div>
          
          {/* India Outline - Simplified SVG */}
          <svg 
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1000 1000" 
            preserveAspectRatio="xMidYMid meet"
          >
            {/* India Outline */}
            <path
              d="M 200 300 Q 250 280 300 290 Q 350 300 400 320 Q 450 340 500 350 Q 550 360 600 370 Q 650 380 700 390 Q 750 400 800 410 Q 850 420 900 430 L 900 500 L 850 520 L 800 540 L 750 560 L 700 580 L 650 600 L 600 620 L 550 640 L 500 660 L 450 680 L 400 700 L 350 720 L 300 740 L 250 760 L 200 780 L 150 760 L 100 740 L 50 720 L 0 700 L 0 500 L 50 480 L 100 460 L 150 440 L 200 420 L 250 400 L 300 380 L 350 360 L 400 340 L 450 320 L 500 300 Z"
              fill="url(#thermalGradient)"
              stroke="#FFD700"
              strokeWidth="2"
              className="animate-pulse"
            />
            
            {/* Thermal Gradient Definition */}
            <defs>
              <linearGradient id="thermalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00FF00" stopOpacity="0.3">
                  <animate attributeName="stop-opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite"/>
                </stop>
                <stop offset="50%" stopColor="#FFFF00" stopOpacity="0.5">
                  <animate attributeName="stop-opacity" values="0.5;0.8;0.5" dur="3s" repeatCount="indefinite"/>
                </stop>
                <stop offset="100%" stopColor="#FF0000" stopOpacity="0.4">
                  <animate attributeName="stop-opacity" values="0.4;0.7;0.4" dur="3s" repeatCount="indefinite"/>
                </stop>
              </linearGradient>
            </defs>
            
            {/* Border Hotspots */}
            <circle cx="150" cy="300" r="8" fill="#FFD700" className="animate-ping">
              <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="800" cy="400" r="6" fill="#FFD700" className="animate-ping" style={{animationDelay: '0.5s'}}>
              <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="400" cy="600" r="7" fill="#FFD700" className="animate-ping" style={{animationDelay: '1s'}}>
              <animate attributeName="r" values="7;11;7" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="600" cy="500" r="5" fill="#FFD700" className="animate-ping" style={{animationDelay: '1.5s'}}>
              <animate attributeName="r" values="5;9;5" dur="2s" repeatCount="indefinite"/>
            </circle>
          </svg>
          
          {/* Scanning Lines */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-px bg-brain-gold/40 animate-scan"></div>
            <div className="absolute top-1/4 left-0 w-full h-px bg-brain-gold/30 animate-scan" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-2/4 left-0 w-full h-px bg-brain-gold/20 animate-scan" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-3/4 left-0 w-full h-px bg-brain-gold/30 animate-scan" style={{animationDelay: '1.5s'}}></div>
          </div>
        </div>
        
        {/* Overlay with Enter Button */}
        {overlayVisible && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-1000">
            <div className="text-center">
              <h2 className="text-3xl font-display font-bold text-white mb-4">
                Territory Secured
              </h2>
              <p className="text-gray-300 mb-8 max-w-md">
                All strategic points monitored. Ready to access command dashboard.
              </p>
              <button
                onClick={onEnter}
                className="bg-brain-gold text-brain-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-yellow-400 hover:scale-105 hover:shadow-lg hover:shadow-brain-gold/50"
              >
                Enter Command Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Status Text */}
      <div className="absolute top-8 left-8 text-brain-gold font-mono text-sm">
        <div>BRAINSAT™ - Live Feed</div>
        <div className="text-gray-400">Thermal Scan Active</div>
      </div>
      
      {/* Coordinates Display */}
      <div className="absolute bottom-8 right-8 text-brain-gold font-mono text-sm">
        <div>LAT: 20.5937° N</div>
        <div>LON: 78.9629° E</div>
        <div className="text-gray-400">Resolution: 1km</div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-brain-gold rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-brain-gold rounded-full animate-float opacity-40" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-brain-gold rounded-full animate-float opacity-80" style={{animationDelay: '4s'}}></div>
    </div>
  );
};

export default DemoMap; 