import React, { useState } from 'react';
import Footer from './sections/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    isGovernment: false,
    organization: '',
    clearanceLevel: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon.');
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-brain-black hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Secure <span className="gradient-text">Contact</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with The Brain™ team through our encrypted communication channels
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-brain-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="glass-morphism rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-brain-gold mb-6">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-brain-black/50 border border-brain-gold/30 rounded-lg px-4 py-3 text-white focus:border-brain-gold focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-brain-black/50 border border-brain-gold/30 rounded-lg px-4 py-3 text-white focus:border-brain-gold focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Role/Position
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full bg-brain-black/50 border border-brain-gold/30 rounded-lg px-4 py-3 text-white focus:border-brain-gold focus:outline-none transition-colors"
                  >
                    <option value="">Select your role</option>
                    <option value="citizen">Concerned Citizen</option>
                    <option value="researcher">Researcher/Academic</option>
                    <option value="journalist">Journalist/Media</option>
                    <option value="tech">Technology Professional</option>
                    <option value="policy">Policy Maker</option>
                    <option value="defense">Defense Personnel</option>
                    <option value="government">Government Official</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="isGovernment"
                    name="isGovernment"
                    checked={formData.isGovernment}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-brain-gold bg-brain-black border-brain-gold rounded focus:ring-brain-gold focus:ring-2"
                  />
                  <label htmlFor="isGovernment" className="text-gray-300">
                    I represent a Government or Strategic Agency
                  </label>
                </div>

                {formData.isGovernment && (
                  <div className="space-y-4 p-4 bg-brain-gold/10 rounded-lg border border-brain-gold/30">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Organization *
                      </label>
                      <input
                        type="text"
                        name="organization"
                        required={formData.isGovernment}
                        value={formData.organization}
                        onChange={handleInputChange}
                        className="w-full bg-brain-black/50 border border-brain-gold/30 rounded-lg px-4 py-3 text-white focus:border-brain-gold focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Security Clearance Level
                      </label>
                      <select
                        name="clearanceLevel"
                        value={formData.clearanceLevel}
                        onChange={handleInputChange}
                        className="w-full bg-brain-black/50 border border-brain-gold/30 rounded-lg px-4 py-3 text-white focus:border-brain-gold focus:outline-none transition-colors"
                      >
                        <option value="">Select clearance level</option>
                        <option value="confidential">Confidential</option>
                        <option value="secret">Secret</option>
                        <option value="top-secret">Top Secret</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your inquiry, feedback, or how you'd like to collaborate with The Brain™ initiative..."
                    className="w-full bg-brain-black/50 border border-brain-gold/30 rounded-lg px-4 py-3 text-white focus:border-brain-gold focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brain-gold text-brain-black py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:bg-yellow-400 hover:scale-105"
                >
                  Send Secure Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glass-morphism rounded-xl p-6">
                <h3 className="text-xl font-bold text-brain-gold mb-4">Direct Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-brain-gold">📧</span>
                    <span className="text-gray-300">contact@thebraindefence.org</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-brain-gold">🔒</span>
                    <span className="text-gray-300">Encrypted communications available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-brain-gold">⏱️</span>
                    <span className="text-gray-300">Response within 24-48 hours</span>
                  </div>
                </div>
              </div>

              <div className="glass-morphism rounded-xl p-6">
                <h3 className="text-xl font-bold text-brain-gold mb-4">For Government Agencies</h3>
                <p className="text-gray-300 mb-4">
                  Government and strategic agencies can access dedicated communication channels 
                  with enhanced security protocols.
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>• Classified briefings available</p>
                  <p>• Direct stakeholder meetings</p>
                  <p>• Secure demonstration access</p>
                  <p>• Strategic partnership discussions</p>
                </div>
              </div>

              <div className="glass-morphism rounded-xl p-6">
                <h3 className="text-xl font-bold text-brain-gold mb-4">Media Inquiries</h3>
                <p className="text-gray-300 mb-4">
                  Press and media representatives can request interviews, statements, 
                  and background information.
                </p>
                <button className="bg-brain-gold/20 text-brain-gold px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-brain-gold/30">
                  Media Kit Download
                </button>
              </div>

              <div className="glass-morphism rounded-xl p-6">
                <h3 className="text-xl font-bold text-brain-gold mb-4">Security Notice</h3>
                <p className="text-sm text-gray-400">
                  All communications are monitored for security. Please avoid sharing 
                  sensitive information through this public form. Secure channels 
                  are available for authorized personnel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;