import React from 'react';
import { Clock, TrendingDown, Users } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: <Clock className="w-8 h-8 text-blue-400" />,
      title: "Speed Kills Deals",
      description: "The first business to respond wins 78% of the time. Every hour you wait, your chances drop by 10%."
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-cyan-400" />,
      title: "Leads Go Cold Fast",
      description: "After 24 hours without contact, your lead conversion rate drops from 30% to just 3%."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-300" />,
      title: "Manual Follow-up Fails",
      description: "You're busy running your business. Meanwhile, competitors with automated systems are stealing your prospects."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The Hidden Cost of
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent block">
              Slow Follow-Up
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            While you're focused on delivering great service, your competitors are winning your leads with faster response times.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/20 rounded-xl p-8 hover:border-blue-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                {problem.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Central Statistic */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 border border-blue-500/30 rounded-2xl p-12 max-w-2xl mx-auto">
            <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              87%
            </div>
            <div className="text-xl text-slate-200 mb-2">
              of leads never receive any follow-up
            </div>
            <div className="text-slate-400">
              Don't let your prospects become someone else's customers
            </div>
          </div>
          <button 
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Fix This Problem Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Problem;