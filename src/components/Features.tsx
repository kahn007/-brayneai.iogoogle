import React from 'react';
import { CheckCircle } from 'lucide-react';

const Features = () => {
  const features = [
    "AI contacts every lead in your database automatically",
    "Personalized messages via SMS and email",
    "Multiple follow-ups until they respond",
    "Works 24/7 while you focus on your business",
    "Simple dashboard shows what's working",
    "Get more appointments without hiring staff"
  ];

  return (
    <section id="features" className="py-20 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It Works
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/20 rounded-2xl p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-lg text-slate-200">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">Setup in Under 1 Week</div>
                <div className="text-slate-300">Start seeing results immediately</div>
              </div>
              <button 
                onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;