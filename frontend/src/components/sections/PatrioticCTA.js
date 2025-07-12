import React from 'react';
import { Link } from 'react-router-dom';

const PatrioticCTA = () => {
  return (
    <section className="py-20 bg-brain-dark relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/6336408/pexels-photo-6336408.jpeg')`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brain-black/90 via-brain-black/70 to-brain-black/90"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Quote */}
        <div className="mb-12">
          <div className="text-6xl md:text-8xl text-brain-gold/30 font-serif leading-none mb-4">"</div>
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-display font-bold leading-tight text-white mb-6">
            We didn't just build a platform.
            <br />
            <span className="gradient-text">We built a promise:</span>
            <br />
            That India will never be caught off guard again.
          </blockquote>
          <div className="text-6xl md:text-8xl text-brain-gold/30 font-serif leading-none text-right">"</div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="glass-morphism rounded-xl p-6">
            <div className="text-3xl font-bold gradient-text mb-2">100%</div>
            <div className="text-gray-300">Sovereign Technology</div>
          </div>
          <div className="glass-morphism rounded-xl p-6">
            <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-gray-300">Continuous Vigilance</div>
          </div>
          <div className="glass-morphism rounded-xl p-6">
            <div className="text-3xl font-bold gradient-text mb-2">∞</div>
            <div className="text-gray-300">Adaptive Learning</div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/demo"
            className="bg-brain-gold text-brain-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-yellow-400 hover:scale-105 hover:shadow-lg hover:shadow-brain-gold/50"
          >
            Experience the Demo
          </Link>
          <Link 
            to="/citizen-brief"
            className="glass-morphism text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 border border-brain-gold/30 hover:border-brain-gold/70"
          >
            Learn More
          </Link>
        </div>
        
        {/* Patriotic Element */}
        <div className="mt-12 flex items-center justify-center space-x-4">
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-brain-gold to-transparent"></div>
          <span className="text-sm text-gray-400 uppercase tracking-wider">Jai Hind</span>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-brain-gold to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default PatrioticCTA;