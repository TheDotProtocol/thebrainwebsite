import React, { useState } from 'react';
import Footer from './sections/Footer';

const CitizenBrief = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [showSubscribe, setShowSubscribe] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const faqs = [
    {
      question: "Is The Brain™ real or just a simulation?",
      answer: "The Brain™ is currently in advanced simulation phase. The technology frameworks, ethical protocols, and strategic concepts are real and being developed. This public interface demonstrates capabilities and gathers citizen feedback."
    },
    {
      question: "Is this technology dangerous?",
      answer: "Safety is our primary concern. The Brain™ is designed with multiple ethical safeguards, human oversight requirements, and fail-safe mechanisms. Every autonomous action requires human authorization for critical decisions."
    },
    {
      question: "What makes this specifically Indian?",
      answer: "Built on principles of Atmanirbhar Bharat, The Brain™ is sovereign by design—no foreign dependencies, culturally aware algorithms, and aligned with India's strategic interests and ethical values."
    },
    {
      question: "How can citizens support this initiative?",
      answer: "Share awareness, engage in discussions about ethical AI, connect with relevant stakeholders, and participate in public consultations about AI governance in defense."
    },
    {
      question: "Who oversees the ethical aspects?",
      answer: "A multi-tier oversight system including defense ethics boards, civilian oversight committees, and international ethical AI compliance frameworks ensures responsible development."
    },
    {
      question: "Will this replace human soldiers?",
      answer: "No. The Brain™ augments human capabilities and reduces exposure to dangerous situations. Human judgment, ethics, and oversight remain central to all operations."
    }
  ];

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubscribed(true);
      } else {
        setError('There was a problem subscribing. Please try again.');
      }
    } catch (err) {
      setError('There was a problem subscribing. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-brain-black hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Citizen <span className="gradient-text">Brief</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Understanding AI defense technology and how you can contribute to India's secure future
          </p>
        </div>
      </section>

      {/* Why You Should Care */}
      <section className="py-20 bg-brain-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Why <span className="gradient-text">AI Defense</span> Matters to You
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="glass-morphism rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-brain-gold mb-3">National Security</h3>
              <p className="text-gray-300">
                Modern threats require modern solutions. AI defense systems can respond to 
                cyber attacks and emerging threats faster than humanly possible.
              </p>
            </div>
            
            <div className="glass-morphism rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-brain-gold mb-3">Protecting Lives</h3>
              <p className="text-gray-300">
                Intelligent systems reduce the need for human soldiers in dangerous situations, 
                bringing our heroes home safely.
              </p>
            </div>
            
            <div className="glass-morphism rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🇮🇳</div>
              <h3 className="text-xl font-bold text-brain-gold mb-3">Atmanirbhar Bharat</h3>
              <p className="text-gray-300">
                Sovereign AI technology means India controls its own defense capabilities 
                without foreign dependencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Support */}
      <section className="py-20 bg-brain-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            How You Can <span className="gradient-text">Support</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brain-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-brain-black font-bold text-sm">📢</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Share & Educate</h3>
                  <p className="text-gray-300">
                    Help others understand the importance of ethical AI in defense. 
                    Share this platform with friends, family, and colleagues.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brain-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-brain-black font-bold text-sm">🤝</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Connect Stakeholders</h3>
                  <p className="text-gray-300">
                    Know someone in defense, technology, or policy? Help them discover 
                    The Brain™ and its potential for India's security.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brain-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-brain-black font-bold text-sm">💭</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Join the Conversation</h3>
                  <p className="text-gray-300">
                    Participate in discussions about AI ethics, national security, 
                    and the future of defense technology.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brain-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-brain-black font-bold text-sm">🎓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Stay Informed</h3>
                  <p className="text-gray-300">
                    Follow developments in AI defense technology and contribute to 
                    public discourse on responsible AI development.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-morphism rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-brain-gold mb-6">Take Action Today</h3>
              <div className="space-y-4">
                <button className="w-full bg-brain-gold text-brain-black py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:bg-yellow-400">
                  Share on Social Media
                </button>
                <a
                  href="/downloads/whitepaper.pdf"
                  download
                  className="w-full block border border-brain-gold text-brain-gold py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:bg-brain-gold hover:text-brain-black"
                >
                  Download Whitepaper
                </a>
                <a
                  href="/downloads/faq.pdf"
                  download
                  className="w-full block border border-brain-gold text-brain-gold py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:bg-brain-gold hover:text-brain-black mt-2"
                >
                  Download FAQ
                </a>
                <button
                  className="w-full glass-morphism text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10"
                  onClick={() => setShowSubscribe(true)}
                >
                  Subscribe to Updates
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-brain-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-morphism rounded-xl overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="font-semibold text-white">{faq.question}</span>
                  <span className={`text-brain-gold text-xl transition-transform duration-300 ${
                    openFAQ === index ? 'rotate-45' : ''
                  }`}>
                    +
                  </span>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${
                  openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-4">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Modal */}
      {showSubscribe && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-brain-black p-8 rounded-2xl shadow-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-4 text-gray-400 hover:text-brain-gold text-2xl"
              onClick={() => { setShowSubscribe(false); setSubscribed(false); setEmail(''); setError(''); }}
              aria-label="Close"
            >
              ×
            </button>
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-6">
                <h3 className="text-2xl font-bold text-brain-gold mb-2 text-center">Subscribe to Updates</h3>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full bg-brain-dark border border-brain-gold/30 rounded-lg px-4 py-3 text-white focus:border-brain-gold focus:outline-none transition-colors"
                />
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                <button
                  type="submit"
                  className="w-full bg-brain-gold text-brain-black py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:bg-yellow-400"
                  disabled={loading}
                >
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            ) : (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-brain-gold mb-4">Thank You!</h3>
                <p className="text-white mb-2">You are now a recipient of constant updates from The Brain, thanks for your support in helping us push forward.</p>
                <button
                  className="mt-4 bg-brain-gold text-brain-black py-2 px-6 rounded-lg font-semibold transition-all duration-300 hover:bg-yellow-400"
                  onClick={() => { setShowSubscribe(false); setSubscribed(false); setEmail(''); setError(''); }}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default CitizenBrief;