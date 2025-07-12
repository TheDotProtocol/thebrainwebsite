import React, { useState } from 'react';
import Footer from './sections/Footer';

const Modules = () => {
  const [selectedModule, setSelectedModule] = useState(null);

  const modules = [
    {
      id: 'shiva',
      name: 'SHIVA',
      subtitle: 'Strategic Threat Intelligence',
      icon: '🔍',
      description: 'Advanced AI-powered threat detection and analysis system that processes global intelligence feeds in real-time.',
      features: [
        'Real-time threat assessment',
        'Predictive analytics for emerging risks',
        'Global intelligence correlation',
        'Automated briefing generation'
      ],
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'shakti',
      name: 'SHAKTI',
      subtitle: 'Autonomous Response System',
      icon: '⚡',
      description: 'Automated defense mechanisms with built-in ethical AI protocols ensuring responsible autonomous operations.',
      features: [
        'Ethical decision-making frameworks',
        'Automated response protocols',
        'Human oversight integration',
        'Collateral damage minimization'
      ],
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 'arjuna',
      name: 'ARJUNA',
      subtitle: 'Precision Operations',
      icon: '🎯',
      description: 'Surgical precision in defense operations with minimal collateral impact through advanced targeting algorithms.',
      features: [
        'Precision targeting systems',
        'Real-time collateral assessment',
        'Surgical strike capabilities',
        'Civilian protection protocols'
      ],
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'chakra',
      name: 'CHAKRA OS',
      subtitle: 'Unified Command Interface',
      icon: '💫',
      description: 'Central operating system that coordinates all modules with intuitive command and control interfaces.',
      features: [
        'Unified dashboard interface',
        'Real-time system monitoring',
        'Inter-module communication',
        'Command hierarchy management'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'sigma',
      name: 'SIGMA GRID',
      subtitle: 'Distributed Intelligence Network',
      icon: '🌐',
      description: 'Decentralized network ensuring resilience and redundancy with quantum-encrypted communications.',
      features: [
        'Distributed processing power',
        'Quantum-encrypted communications',
        'Network resilience protocols',
        'Autonomous node management'
      ],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'brainsat',
      name: 'BRAIN SAT',
      subtitle: 'Orbital Intelligence Platform',
      icon: '🛰️',
      description: 'Satellite constellation providing global surveillance and communication capabilities.',
      features: [
        'Global surveillance coverage',
        'Secure satellite communications',
        'Earth observation systems',
        'Space-based threat detection'
      ],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-brain-black hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Defense <span className="gradient-text">Modules</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Six integrated systems working in perfect harmony to protect India's interests
          </p>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-20 bg-brain-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <div 
                key={module.id}
                className="group glass-morphism rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 card-hover"
                onClick={() => setSelectedModule(module)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {module.icon}
                </div>
                
                {/* Header */}
                <h3 className="text-2xl font-bold text-brain-gold mb-2">{module.name}</h3>
                <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-4">{module.subtitle}</h4>
                
                {/* Description */}
                <p className="text-gray-300 mb-6">{module.description}</p>
                
                {/* Features Preview */}
                <ul className="space-y-2 mb-6">
                  {module.features.slice(0, 2).map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                      <span className="w-1 h-1 bg-brain-gold rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                  <li className="text-sm text-brain-gold">+ {module.features.length - 2} more features</li>
                </ul>
                
                {/* Learn More Button */}
                <button className="w-full bg-brain-gold/10 text-brain-gold py-2 px-4 rounded-lg font-semibold transition-all duration-300 hover:bg-brain-gold hover:text-brain-black">
                  Learn More
                </button>
                
                {/* Gradient Border */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${module.color} p-0.5 -z-10`}>
                  <div className="w-full h-full bg-brain-dark rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedModule && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-brain-dark border border-brain-gold/30 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-4xl mb-2">{selectedModule.icon}</div>
                <h2 className="text-3xl font-bold text-brain-gold">{selectedModule.name}</h2>
                <p className="text-gray-400 uppercase tracking-wider">{selectedModule.subtitle}</p>
              </div>
              <button 
                onClick={() => setSelectedModule(null)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            
            <p className="text-gray-300 mb-6 text-lg">{selectedModule.description}</p>
            
            <h3 className="text-xl font-bold text-brain-gold mb-4">Key Features</h3>
            <ul className="space-y-3 mb-6">
              {selectedModule.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-brain-gold rounded-full"></span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="glass-morphism rounded-lg p-4">
              <p className="text-sm text-gray-400">
                <strong className="text-brain-gold">Status:</strong> Simulation-ready module. 
                Full deployment pending strategic authorization.
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Modules;