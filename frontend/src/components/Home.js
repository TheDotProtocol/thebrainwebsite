import React from 'react';
import Hero from './sections/Hero';
import Introduction from './sections/Introduction';
import Features from './sections/Features';
import PatrioticCTA from './sections/PatrioticCTA';
import Footer from './sections/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Introduction />
      <Features />
      <PatrioticCTA />
      <Footer />
    </div>
  );
};

export default Home;