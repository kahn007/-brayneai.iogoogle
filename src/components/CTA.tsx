import React from 'react';
import { Calendar, CheckCircle } from 'lucide-react';

const CTA = () => {
  const benefits = [
    "See exactly how this will work for your business",
    "Get a plan designed specifically for your industry",
    "Find out how many more customers you could get",
    "Start getting results in under 1 week"
  ];

  return (
    <section id="cta" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Let's Turn Your Database Into Revenue
          </h2>
        </div>

        {/* Benefits List */}
        <div className="grid md:grid-cols-2 gap-4 mb-12 text-left max-w-2xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <span className="text-slate-200">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 mb-8 border border-blue-500">
          <div className="flex items-center justify-center mb-6">
            <Calendar className="w-6 h-6 text-white mr-2" />
            <span className="text-lg font-medium text-white">SCHEDULE YOUR CONSULTATION</span>
          </div>
          
          <div className="min-h-[800px] rounded-xl overflow-hidden bg-black/20">
            <iframe 
              src="https://api.leadconnectorhq.com/widget/booking/xqwSvxDlit1P0lTnTrfx" 
              style={{width: '100%', border: 'none', overflow: 'hidden', height: '1000px'}} 
              scrolling="no" 
              id="xqwSvxDlit1P0lTnTrfx_1756390399291"
              title="Book Strategy Call"
            />
            <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
          </div>
        </div>

        {/* Trust Signals */}
      </div>
    </section>
  );
};

export default CTA;