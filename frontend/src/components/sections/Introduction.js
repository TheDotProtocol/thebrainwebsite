import React from 'react';

const Introduction = () => {
  return (
    <section className="py-20 bg-brain-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid-pattern h-full w-full"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative animate-slideInLeft">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1572224104782-91a08d296390?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxyYWRhciUyMHNhdGVsbGl0ZXxlbnwwfHx8YmxhY2t8MTc1MjI5NTQxMXww&ixlib=rb-4.1.0&q=85"
                alt="Advanced Radar System"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brain-gold/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 glass-morphism rounded-xl p-4">
              <div className="text-2xl font-bold gradient-text">24/7</div>
              <div className="text-sm text-gray-300">Vigilance</div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              From the <span className="gradient-text">Cholas</span> to the <span className="gradient-text">Cloud</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                India's strength has always evolved with the times. From ancient maritime trade routes 
                to digital highways, our nation has protected what matters most through innovation 
                and strategic foresight.
              </p>
              
              <p>
                Today, as threats transcend borders and emerge from the digital realm, 
                <span className="text-brain-gold font-semibold"> The Brain™</span> represents 
                the next chapter in our defense evolution.
              </p>
              
              <p>
                Built on the foundation of <span className="text-brain-gold font-semibold">Atmanirbhar Bharat</span>, 
                our platform ensures that India's defense capabilities remain sovereign, 
                ethical, and uncompromising.
              </p>
            </div>
            
            <div className="mt-8 flex items-center space-x-4">
              <div className="w-12 h-0.5 bg-brain-gold"></div>
              <span className="text-sm text-gray-400 uppercase tracking-wider">Sovereign by Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;