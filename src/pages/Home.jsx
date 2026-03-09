// src/pages/Home.js
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <FAQ />
    </div>
  );
};

export default Home;