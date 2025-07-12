import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './sections/Footer';

const Demo = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-brain-black hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Live <span className="gradient-text">Simulation</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience The Brain™ in action through our secure simulation environment
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-brain-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Coming Soon */}
          <div className="glass-morphism rounded-2xl p-12 mb-12">
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Simulation <span className="gradient-text">Launching Soon</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our interactive war room simulation is currently undergoing final security audits 
              and strategic authorization protocols.
            </p>
            
            {/* Features Preview */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="glass-morphism rounded-xl p-6">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-lg font-bold text-brain-gold mb-2">Threat Scenarios</h3>
                <p className="text-gray-400 text-sm">
                  Experience realistic threat detection and response scenarios
                </p>
              </div>
              <div className="glass-morphism rounded-xl p-6">
                <div className="text-3xl mb-3">🔄</div>
                <h3 className="text-lg font-bold text-brain-gold mb-2">Real-time Analytics</h3>
                <p className="text-gray-400 text-sm">
                  See how AI processes and responds to emerging situations
                </p>
              </div>
              <div className="glass-morphism rounded-xl p-6">
                <div className="text-3xl mb-3">⚖️</div>
                <h3 className="text-lg font-bold text-brain-gold mb-2">Ethical Decision Trees</h3>
                <p className="text-gray-400 text-sm">
                  Understand how ethical protocols guide AI decision-making
                </p>
              </div>
              <div className="glass-morphism rounded-xl p-6">
                <div className="text-3xl mb-3">🌐</div>
                <h3 className="text-lg font-bold text-brain-gold mb-2">Global Intelligence</h3>
                <p className="text-gray-400 text-sm">
                  See how distributed systems coordinate information
                </p>
              </div>
            </div>
          </div>

          {/* Access Levels */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="glass-morphism rounded-xl p-6">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-brain-gold mb-3">Public Access</h3>
              <p className="text-gray-300 mb-4">
                Basic simulation with educational scenarios and public threat awareness
              </p>
              <ul className="text-sm text-gray-400 space-y-1 mb-6">
                <li>• General threat scenarios</li>
                <li>• Educational interface</li>
                <li>• Basic AI interactions</li>
                <li>• Public safety demonstrations</li>
              </ul>
              <button className="w-full bg-brain-gold/20 text-brain-gold py-2 px-4 rounded-lg font-semibold">
                Notify When Available
              </button>
            </div>

            <div className="glass-morphism rounded-xl p-6 border border-brain-gold/50">
              <div className="text-3xl mb-4">🏛️</div>
              <h3 className="text-xl font-bold text-brain-gold mb-3">Government Access</h3>
              <p className="text-gray-300 mb-4">
                Enhanced simulation with strategic scenarios and policy implications
              </p>
              <ul className="text-sm text-gray-400 space-y-1 mb-6">
                <li>• Strategic threat simulations</li>
                <li>• Policy impact modeling</li>
                <li>• Multi-agency coordination</li>
                <li>• Classified scenario access</li>
              </ul>
              <Link 
                to="/contact"
                className="block w-full bg-brain-gold text-brain-black py-2 px-4 rounded-lg font-semibold text-center hover:bg-yellow-400 transition-colors"
              >
                Request Access
              </Link>
            </div>

            <div className="glass-morphism rounded-xl p-6">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-brain-gold mb-3">Strategic Access</h3>
              <p className="text-gray-300 mb-4">
                Full war room simulation with complete system capabilities
              </p>
              <ul className="text-sm text-gray-400 space-y-1 mb-6">
                <li>• Complete system access</li>
                <li>• Real-time threat modeling</li>
                <li>• Advanced AI capabilities</li>
                <li>• Strategic planning tools</li>
              </ul>
              <button className="w-full bg-brain-gray text-gray-400 py-2 px-4 rounded-lg font-semibold cursor-not-allowed">
                Invitation Only
              </button>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="glass-morphism rounded-xl p-6 border border-red-500/30">
            <h3 className="text-lg font-bold text-red-400 mb-3">⚠️ Important Disclaimer</h3>
            <div className="text-left text-gray-300 space-y-3">
              <p>
                This simulation environment contains hypothetical scenarios designed for 
                educational and strategic planning purposes only.
              </p>
              <p>
                All data, scenarios, and responses within the simulation are fictional 
                and do not represent actual threats, operations, or capabilities.
              </p>
              <p>
                Access to certain simulation levels requires appropriate security clearances 
                and authorization from relevant authorities.
              </p>
              <p className="text-brain-gold font-semibold">
                No classified information is displayed or accessible through this platform.
              </p>
            </div>
          </div>

          {/* Interest Form */}
          <div className="mt-12 glass-morphism rounded-xl p-8">
            <h3 className="text-2xl font-bold text-brain-gold mb-4">Early Access Interest</h3>
            <p className="text-gray-300 mb-6">
              Be among the first to experience The Brain™ simulation when it launches
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-brain-black/50 border border-brain-gold/30 rounded-lg px-4 py-3 text-white focus:border-brain-gold focus:outline-none"
              />
              <button className="bg-brain-gold text-brain-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Demo;