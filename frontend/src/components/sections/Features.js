import React, { useState } from 'react';

const Features = () => {
  const [modalFeature, setModalFeature] = useState(null);

  const features = [
    {
      id: 'shiva',
      name: 'SHIVA',
      subtitle: 'Supreme High-Intensity Vigilance & Autonomy',
      description: 'The Battlefield Doesn\'t Wait. Neither Does SHIVA.',
      details: {
        what: 'SHIVA is the autonomous combat core of The Brain™. It sees, predicts, and neutralizes hostile actions across land, air, and sea — in real-time, with surgical precision.',
        why: 'No delay. No collateral. No compromise. From drone incursions to missile launches, SHIVA integrates radar, satellite, thermal, and field intelligence to orchestrate strategic responses faster than human command chains ever could.',
        how: 'It doesn\'t just defend India. It outthinks our adversaries — before they move.'
      },
      icon: '🔱',
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'shakti',
      name: 'SHAKTI',
      subtitle: 'Sovereign Humanitarian Autonomous Kinetic Threat Intelligence',
      description: 'War is never just war. SHAKTI protects the people.',
      details: {
        what: 'While others prepare for battle, SHAKTI safeguards civilians, borders, and disaster zones. It monitors cross-border biometrics, tracks humanitarian threats, and dispatches autonomous UAVs for rescue and relief — all without human delays.',
        why: 'SHAKTI is the beating heart of The Brain™ — the module that ensures sovereignty never comes at the cost of innocence.',
        how: 'When floods strike, borders heat up, or cities fall under threat… SHAKTI is already in the sky.'
      },
      icon: '🌊',
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 'arjuna',
      name: 'ARJUNA',
      subtitle: 'Autonomous Real-Time Judgement & Neutralization Algorithm',
      description: 'The sword that thinks. The strike that speaks truth.',
      details: {
        what: 'ARJUNA is not just a targeting system — it is an ethical intelligence engine. It evaluates every strike request using Geneva-compliant logic, civilian proximity algorithms, and escalation thresholds — ensuring no action is taken without legal and moral clearance.',
        why: 'When human commanders hesitate in chaos, ARJUNA calculates clarity. When the battlefield blurs, ARJUNA sees with conscience.',
        how: 'This is how India fights: With strength, precision, and unshakable dharma.'
      },
      icon: '🧠',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'sigma',
      name: 'SIGMA GRID',
      subtitle: 'Strategic Intelligence Grid & Military Autonomy',
      description: 'India\'s digital nervous system — everywhere, all at once.',
      details: {
        what: 'SIGMA GRID is the real-time command mesh connecting every drone, radar station, satellite node, and ground unit. It learns from battlefield data, balances edge load, reroutes command flows during attacks, and ensures no threat ever goes unseen.',
        why: 'When satellites speak to soldiers and AI to generals, SIGMA is the language they use.',
        how: 'It is the invisible web that binds The Brain™ into a singular, unstoppable defense entity — a sovereign neural grid pulsing across the nation.'
      },
      icon: '🌐',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-brain-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 hero-pattern opacity-30"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Core <span className="gradient-text">Defense Modules</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Four integrated systems working in harmony to protect India's interests
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`relative card-hover glass-morphism rounded-2xl p-6 transition-all duration-500`}
            >
              {/* Icon */}
              <div className="text-4xl mb-4">
                {feature.icon}
              </div>
              {/* Header */}
              <h3 className="text-xl font-bold text-brain-gold mb-2">{feature.name}</h3>
              <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-3">{feature.subtitle}</h4>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <button
                className="mt-2 w-full bg-brain-gold text-brain-black py-2 px-4 rounded-lg font-semibold transition-all duration-300 hover:bg-yellow-400"
                onClick={() => setModalFeature(feature)}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Modal for module details */}
      {modalFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-brain-black p-8 rounded-2xl shadow-lg max-w-lg w-full relative">
            <button
              className="absolute top-2 right-4 text-gray-400 hover:text-brain-gold text-2xl"
              onClick={() => setModalFeature(null)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="text-4xl mb-4 text-center">{modalFeature.icon}</div>
            <h3 className="text-2xl font-bold text-brain-gold mb-2 text-center">{modalFeature.name}</h3>
            <h4 className="text-md text-gray-400 uppercase tracking-wider mb-4 text-center">{modalFeature.subtitle}</h4>
            <p className="text-gray-300 mb-6 text-center">{modalFeature.description}</p>
            <div className="space-y-4 pt-4 border-t border-brain-gold/30">
              <div>
                <h5 className="font-semibold text-brain-gold mb-2">What it is</h5>
                <p className="text-white text-base leading-relaxed">{modalFeature.details.what}</p>
              </div>
              <div>
                <h5 className="font-semibold text-brain-gold mb-2">Why it matters</h5>
                <p className="text-white text-base leading-relaxed">{modalFeature.details.why}</p>
              </div>
              <div>
                <h5 className="font-semibold text-brain-gold mb-2">How it works</h5>
                <p className="text-white text-base leading-relaxed">{modalFeature.details.how}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Features;