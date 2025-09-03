import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Problem from './Problem';
import Features from './Features';
import SocialProof from './SocialProof';
import CTA from './CTA';

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