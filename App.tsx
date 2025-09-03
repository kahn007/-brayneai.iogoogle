import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import CTA from './components/CTA';

function App() {
  return (
    <div className="bg-slate-900 text-white font-sans">
      <Header />
      <Hero />
      <Problem />
      <Features />
      <SocialProof />
      <CTA />
    </div>
  );
}

export default App;