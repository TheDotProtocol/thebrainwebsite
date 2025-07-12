import React from 'react';

const Hero = () => {
  const scrollToFeatures = () => {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1640776349084-7643b6128fae?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxjb21tYW5kJTIwY2VudGVyfGVufDB8fHxibGFja3wxNzUyMjk1NDA1fDA&ixlib=rb-4.1.0&q=85')`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-brain-black/70" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
            <span className="gradient-text">India's Intelligence.</span>
            <br />
            <span className="text-white">Automated. Ethical.</span>
            <br />
            <span className="gradient-text">Unstoppable.</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The world's first sovereign AI-powered defense platform. 
            <br className="hidden md:block" />
            Built for Bharat. Ready for the world.
          </p>
          
          <button 
            onClick={scrollToFeatures}
            className="group bg-brain-gold text-brain-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-yellow-400 hover:scale-105 hover:shadow-lg hover:shadow-brain-gold/50"
          >
            Learn How It Works
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-brain-gold rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-brain-gold rounded-full animate-float opacity-40" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-brain-gold rounded-full animate-float opacity-80" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brain-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brain-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;