import React from 'react';
import Footer from './sections/Footer';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-brain-black hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            About <span className="gradient-text">The Brain™</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built by visionaries, powered by purpose, designed for India's future
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-brain-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <div className="space-y-6 text-gray-300 text-lg">
                <p>
                  To establish India as the global leader in ethical, sovereign AI defense technology. 
                  We believe that national security in the 21st century requires complete technological 
                  independence combined with uncompromising ethical standards.
                </p>
                <p>
                  <span className="text-brain-gold font-semibold">The Brain™</span> represents more than 
                  just advanced technology—it embodies India's commitment to protecting its people while 
                  maintaining the highest moral standards in defense operations.
                </p>
              </div>
            </div>
            <div className="glass-morphism rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-brain-gold mb-4">Core Principles</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-brain-gold">🛡️</span>
                  <span className="text-gray-300">Sovereign by design - no external dependencies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brain-gold">⚖️</span>
                  <span className="text-gray-300">Ethical AI with human oversight at every level</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brain-gold">🔒</span>
                  <span className="text-gray-300">Transparent operations with accountability</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brain-gold">🚀</span>
                  <span className="text-gray-300">Continuous innovation for emerging threats</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-brain-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Origin <span className="gradient-text">Story</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-morphism rounded-xl p-6">
              <div className="text-3xl mb-4">🏛️</div>
              <h3 className="text-xl font-bold text-brain-gold mb-3">Founded in Silicon Valley</h3>
              <p className="text-gray-300">
                Created by Indian-origin innovators who witnessed the gap between 
                global AI advancement and India's strategic needs.
              </p>
            </div>
            <div className="glass-morphism rounded-xl p-6">
              <div className="text-3xl mb-4">🇮🇳</div>
              <h3 className="text-xl font-bold text-brain-gold mb-3">Built for Bharat</h3>
              <p className="text-gray-300">
                Every algorithm, every protocol designed with India's unique 
                geopolitical landscape and cultural values in mind.
              </p>
            </div>
            <div className="glass-morphism rounded-xl p-6">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-brain-gold mb-3">Ready for the World</h3>
              <p className="text-gray-300">
                A platform that showcases India's capability to lead global 
                conversations on ethical AI in defense.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="py-20 bg-brain-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Strategic <span className="gradient-text">Objectives</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brain-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-brain-black font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Minimize Boots on Ground</h3>
                  <p className="text-gray-300">Reduce human exposure to dangerous situations through intelligent automation.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brain-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-brain-black font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Maximize National Control</h3>
                  <p className="text-gray-300">Ensure complete sovereignty over defense decision-making processes.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brain-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-brain-black font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Preserve Human Values</h3>
                  <p className="text-gray-300">Maintain ethical standards and human oversight in all operations.</p>
                </div>
              </div>
            </div>
            <div className="glass-morphism rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-brain-gold mb-6">Vision 2030</h3>
              <p className="text-gray-300 mb-6">
                By 2030, The Brain™ will serve as the cornerstone of India's defense infrastructure, 
                demonstrating to the world that ethical AI and national security are not just compatible—they're inseparable.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Threat Detection</span>
                  <span className="text-brain-gold font-bold">99.9%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Response Time</span>
                  <span className="text-brain-gold font-bold">&lt; 1sec</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Ethical Compliance</span>
                  <span className="text-brain-gold font-bold">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;