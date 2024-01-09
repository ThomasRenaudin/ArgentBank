import React from 'react';
import Footer from '../components/footer';
import Features from '../components/features';
import Hero from '../components/hero';
import Navbar from '../components/navbar';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default Homepage;
