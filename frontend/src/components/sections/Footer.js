import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brain-black border-t border-brain-gold/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-[70px] h-[70px] bg-brain-gold rounded-full flex items-center justify-center">
                <img 
                  src="/images/logo.png" 
                  alt="The Brain Logo" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="text-xl font-display font-bold gradient-text">The Brain™</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              India's first sovereign AI defense platform. Protecting the nation through 
              ethical artificial intelligence and strategic automation.
            </p>
            <p className="text-xs text-gray-500">
              Simulation-only content. All rights reserved.
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-brain-gold font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-brain-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-brain-gold transition-colors">About</Link></li>
              <li><Link to="/modules" className="text-gray-400 hover:text-brain-gold transition-colors">Modules</Link></li>
              <li><Link to="/citizen-brief" className="text-gray-400 hover:text-brain-gold transition-colors">Citizen Brief</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-brain-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div>
            <h3 className="text-brain-gold font-semibold mb-4">Connect</h3>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">contact@thebraindefence.org</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-brain-gold transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-brain-gold transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-brain-gold transition-colors">
                  <span className="sr-only">YouTube</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2 4.75C2 3.784 2.784 3 3.75 3h12.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0116.25 17H3.75A1.75 1.75 0 012 15.25V4.75zm6.75 8.75v-6l4.5 3-4.5 3z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-brain-gold/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 The Brain™. All rights reserved. Built for Bharat.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-brain-gold text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-brain-gold text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-brain-gold text-sm transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;