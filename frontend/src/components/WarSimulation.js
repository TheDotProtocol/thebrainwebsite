import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './sections/Footer';

const WarSimulation = () => {
  return (
    <div className="min-h-screen bg-brain-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 hero-pattern opacity-30"></div>
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Icon */}
          <div className="text-8xl mb-8 animate-pulse">
            🎖️
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="gradient-text">Active War Simulation</span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl text-brain-gold mb-8 font-semibold">
            Coming Soon
          </h2>
          
          {/* Description */}
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the most advanced military simulation platform ever created. 
            Real-time battlefield scenarios, strategic decision-making, and immersive 
            command center operations are currently in development.
          </p>
          
          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="glass-morphism rounded-xl p-6">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold text-brain-gold mb-2">Real-time Strategy</h3>
              <p className="text-gray-400 text-sm">Live battlefield scenarios with dynamic AI opponents</p>
            </div>
            <div className="glass-morphism rounded-xl p-6">
              <div className="text-3xl mb-3">⚔️</div>
              <h3 className="text-lg font-semibold text-brain-gold mb-2">Command Center</h3>
              <p className="text-gray-400 text-sm">Full-scale military command interface simulation</p>
            </div>
            <div className="glass-morphism rounded-xl p-6">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="text-lg font-semibold text-brain-gold mb-2">Multi-Domain Ops</h3>
              <p className="text-gray-400 text-sm">Land, sea, air, and cyber warfare integration</p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">Development Progress</span>
              <span className="text-sm text-brain-gold font-semibold">65%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div className="bg-gradient-to-r from-brain-gold to-yellow-400 h-2 rounded-full animate-pulse" style={{width: '65%'}}></div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/demo"
              className="bg-brain-gold text-brain-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-yellow-400 hover:scale-105 hover:shadow-lg hover:shadow-brain-gold/50"
            >
              Try Current Demo
            </Link>
            <Link 
              to="/modules"
              className="glass-morphism text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 border border-brain-gold/30 hover:border-brain-gold/70"
            >
              Explore Modules
            </Link>
          </div>
          
          {/* Notification Signup */}
          <div className="mt-12 glass-morphism rounded-xl p-6 max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-brain-gold mb-3">Get Notified</h3>
            <p className="text-gray-400 text-sm mb-4">Be the first to know when the simulation launches</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-brain-gold focus:outline-none"
              />
              <button className="bg-brain-gold text-brain-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Notify
              </button>
            </div>
          </div>
          
          {/* Military Motto */}
          <div className="mt-12 flex items-center justify-center space-x-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-brain-gold to-transparent"></div>
            <span className="text-sm text-gray-400 uppercase tracking-wider">Victory Through Technology</span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-brain-gold to-transparent"></div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WarSimulation; 