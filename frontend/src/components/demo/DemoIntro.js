import React, { useState } from 'react';

const DemoIntro = ({ onContinue }) => {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Warning Icon */}
        <div className="text-6xl mb-6 animate-pulse">⚠️</div>
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
          The Brain™ – Secure Strategic Defense Simulation Demo
        </h1>
        
        {/* Warning Message */}
        <div className="glass-morphism rounded-2xl p-8 mb-8 border border-red-500/30">
          <div className="text-left space-y-4 text-gray-300">
            <p className="text-lg">
              This is a <span className="text-red-400 font-bold">100% fictional simulation</span> of The Brain™.
            </p>
            <p>
              No live military, cyber, or satellite data is used.
            </p>
            <p>
              This demo is for educational and stakeholder preview purposes only.
            </p>
          </div>
        </div>
        
        {/* Checkbox */}
        <div className="flex items-center justify-center mb-8">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="w-5 h-5 text-brain-gold bg-brain-black border-2 border-brain-gold rounded focus:ring-brain-gold focus:ring-2"
            />
            <span className="text-gray-300 text-lg">
              I understand and accept the terms.
            </span>
          </label>
        </div>
        
        {/* Begin Demo Button */}
        <button
          onClick={onContinue}
          disabled={!accepted}
          className={`
            px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300
            ${accepted 
              ? 'bg-brain-gold text-brain-black hover:bg-yellow-400 hover:scale-105 hover:shadow-lg hover:shadow-brain-gold/50' 
              : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }
          `}
        >
          Begin Demo
        </button>
        
        {/* Additional Info */}
        <div className="mt-8 text-sm text-gray-500">
          <p>Demo Duration: ~5-7 minutes</p>
          <p>Recommended: Fullscreen experience</p>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-brain-gold rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-brain-gold rounded-full animate-float opacity-40" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-brain-gold rounded-full animate-float opacity-80" style={{animationDelay: '4s'}}></div>
    </div>
  );
};

export default DemoIntro; 