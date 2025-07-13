import React, { useState, useEffect } from 'react';

const DemoLoading = ({ onComplete }) => {
  const [loadingStage, setLoadingStage] = useState(0);
  const [dots, setDots] = useState('');

  useEffect(() => {
    // Animate dots
    const dotsInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    // Stage progression
    const stageTimer = setTimeout(() => {
      setLoadingStage(1);
    }, 4000);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 7000);

    return () => {
      clearInterval(dotsInterval);
      clearTimeout(stageTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo with Pulse Animation */}
        <div className="mb-8">
          <div className="text-8xl mb-4 animate-pulse">
            🧠
          </div>
          <h1 className="text-4xl font-display font-bold text-brain-gold mb-2">
            The Brain™
          </h1>
          <div className="text-sm text-gray-400 uppercase tracking-wider">
            Secure Strategic Defense Platform
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="space-y-4">
          {loadingStage === 0 ? (
            <div className="text-xl text-gray-300">
              Establishing secure link with <span className="text-brain-gold font-semibold">BrainSAT™</span>
              <span className="text-brain-gold">{dots}</span>
            </div>
          ) : (
            <div className="text-xl text-gray-300 animate-fadeIn">
              Secure orbital relay established. Proceeding to access portal
              <span className="text-brain-gold">{dots}</span>
            </div>
          )}
        </div>
        
        {/* Progress Bar */}
        <div className="mt-8 w-64 mx-auto">
          <div className="bg-gray-800 rounded-full h-2">
            <div 
              className="bg-brain-gold h-2 rounded-full transition-all duration-1000"
              style={{ 
                width: `${loadingStage === 0 ? 40 : 100}%` 
              }}
            ></div>
          </div>
        </div>
        
        {/* Status Indicators */}
        <div className="mt-8 flex justify-center space-x-4">
          <div className={`flex items-center space-x-2 ${loadingStage >= 0 ? 'text-brain-gold' : 'text-gray-600'}`}>
            <div className={`w-2 h-2 rounded-full ${loadingStage >= 0 ? 'bg-brain-gold' : 'bg-gray-600'}`}></div>
            <span className="text-sm">Connection</span>
          </div>
          <div className={`flex items-center space-x-2 ${loadingStage >= 1 ? 'text-brain-gold' : 'text-gray-600'}`}>
            <div className={`w-2 h-2 rounded-full ${loadingStage >= 1 ? 'bg-brain-gold' : 'bg-gray-600'}`}></div>
            <span className="text-sm">Authentication</span>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-brain-gold rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-brain-gold rounded-full animate-float opacity-40" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-brain-gold rounded-full animate-float opacity-80" style={{animationDelay: '4s'}}></div>
      
      {/* Scanning Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-brain-gold/30 animate-scan"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-brain-gold/20 animate-scan" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/4 left-0 w-full h-px bg-brain-gold/10 animate-scan" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-brain-gold/20 animate-scan" style={{animationDelay: '3s'}}></div>
      </div>
    </div>
  );
};

export default DemoLoading; 