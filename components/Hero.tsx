
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center relative">
      {/* Decorative pulse line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-[#39FF14]"></div>
      
      <div className="max-w-4xl mx-auto space-y-8 mt-12">
        <h1 className="font-tech text-5xl md:text-8xl font-extrabold tracking-tighter text-[#39FF14] neon-green-glow leading-tight">
          EL CUADERNO TIENE LOS DÍAS CONTADOS.
        </h1>
        
        <h2 className="font-tech text-2xl md:text-4xl font-medium text-[#00FFFF] neon-blue-glow">
          Vuelve la confianza, crece el negocio.
        </h2>
        
        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed font-light">
          En un mundo donde la palabra vale, pero el riesgo pesa, una nueva era amanece para quienes construyen su futuro día a día. <br className="hidden md:block" />
          <span className="text-white font-medium">¿Estás listo para recuperarlo todo?</span>
        </p>
      </div>

      <div className="mt-16 float-animation">
        <div className="w-6 h-10 border-2 border-[#00FFFF] rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-[#39FF14] rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
