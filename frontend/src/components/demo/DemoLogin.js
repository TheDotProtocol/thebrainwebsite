import React, { useState } from 'react';

const DemoLogin = ({ onSuccess }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication delay
    setTimeout(() => {
      if (credentials.username === 'admin' && credentials.password === 'admin') {
        onSuccess();
      } else {
        setError(true);
        setIsLoading(false);
        // Reset error after 2 seconds
        setTimeout(() => setError(false), 2000);
      }
    }, 1000);
  };

  const handleInputChange = (field, value) => {
    setCredentials(prev => ({ ...prev, [field]: value }));
    if (error) setError(false);
  };

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      {/* Main Content */}
      <div className={`relative z-10 max-w-md w-full ${error ? 'animate-shake' : ''}`}>
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">🔐</div>
          <h1 className="text-2xl font-display font-bold text-white mb-2">
            Secure Access Portal
          </h1>
          <p className="text-gray-400 text-sm">
            The Brain™ – SIGMA Grid Authentication
          </p>
        </div>
        
        {/* Login Form */}
        <div className="glass-morphism rounded-2xl p-8 border border-brain-gold/30">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div>
              <label className="block text-sm font-semibold text-brain-gold mb-2">
                Username
              </label>
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => handleInputChange('username', e.target.value)}
                className="w-full bg-brain-black/50 border border-brain-gold/30 rounded-lg px-4 py-3 text-white focus:border-brain-gold focus:outline-none transition-colors"
                placeholder="Enter username"
                required
              />
            </div>
            
            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-brain-gold mb-2">
                Password
              </label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="w-full bg-brain-black/50 border border-brain-gold/30 rounded-lg px-4 py-3 text-white focus:border-brain-gold focus:outline-none transition-colors"
                placeholder="Enter password"
                required
              />
            </div>
            
            {/* Error Message */}
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-400 text-sm">
                ⚠️ Access Denied. Invalid credentials.
              </div>
            )}
            
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`
                w-full py-3 rounded-lg font-semibold transition-all duration-300
                ${isLoading 
                  ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                  : 'bg-brain-gold text-brain-black hover:bg-yellow-400 hover:scale-105'
                }
              `}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-brain-black mr-2"></div>
                  Authenticating...
                </div>
              ) : (
                'Access System'
              )}
            </button>
          </form>
          
          {/* Demo Credentials Hint */}
          <div className="mt-6 p-4 bg-brain-black/30 rounded-lg border border-gray-600/30">
            <p className="text-xs text-gray-400 text-center">
              <strong className="text-brain-gold">Demo Credentials:</strong><br />
              Username: <span className="text-gray-300">admin</span><br />
              Password: <span className="text-gray-300">admin</span>
            </p>
          </div>
        </div>
        
        {/* Security Notice */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            This is a simulation environment. All access logs are monitored.
          </p>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-brain-gold rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-brain-gold rounded-full animate-float opacity-40" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-brain-gold rounded-full animate-float opacity-80" style={{animationDelay: '4s'}}></div>
      
      {/* Scanning Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-full h-px bg-brain-gold/20 animate-scan"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-brain-gold/10 animate-scan" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  );
};

export default DemoLogin; 