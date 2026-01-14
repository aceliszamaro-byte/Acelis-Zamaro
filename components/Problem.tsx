
import React from 'react';

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#39FF14] drop-shadow-[0_0_5px_rgba(57,255,20,0.8)]">
    <path d="M7 13L10 16L17 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
  </svg>
);

export const Problem: React.FC = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="border-l-2 border-[#39FF14]/30 pl-8 md:pl-12">
          <h3 className="font-tech text-3xl md:text-5xl font-bold text-[#39FF14] mb-12 tracking-tight uppercase">
            ¿CUÁNTO DINERO TIENES HOY EN LA CALLE?
          </h3>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4 group">
              <div className="mt-1 transition-transform group-hover:scale-110">
                <CheckIcon />
              </div>
              <p className="text-xl md:text-2xl text-gray-300 font-light">
                Sabemos que <span className="text-white font-semibold">fiar</span> es necesario para vender.
              </p>
            </div>
            
            <div className="flex items-start gap-4 group">
              <div className="mt-1 transition-transform group-hover:scale-110">
                <CheckIcon />
              </div>
              <p className="text-xl md:text-2xl text-gray-300 font-light">
                Sabemos que <span className="text-white font-semibold">cobrar</span> no debería ser una batalla.
              </p>
            </div>
            
            <div className="flex items-start gap-4 group">
              <div className="mt-1 transition-transform group-hover:scale-110">
                <CheckIcon />
              </div>
              <p className="text-xl md:text-2xl text-gray-300 font-light">
                Sabemos que tu <span className="text-white font-semibold">esfuerzo</span> merece ser recompensado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
