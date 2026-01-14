
import React from 'react';

export const CTA: React.FC = () => {
  const WHATSAPP_URL = "https://whatsapp.com/channel/0029VbCZZQi9xVJpJZBAr42r";

  return (
    <section className="py-32 px-6 text-center relative overflow-hidden">
      {/* Glow effect under CTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#39FF14]/20 to-[#00FFFF]/20 blur-[100px] rounded-full -z-10"></div>
      
      <div className="max-w-3xl mx-auto space-y-12">
        <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
          Únete al futuro del comercio y sé parte de un movimiento que transformará tu negocio.
        </p>
        
        <div className="flex flex-col items-center space-y-6">
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-10 py-5 font-tech text-lg md:text-xl font-bold tracking-wide text-black uppercase transition-all duration-300 rounded-lg bg-gradient-to-r from-[#39FF14] to-[#00FFFF] button-glow overflow-hidden active:scale-95"
          >
            {/* Animated shimmer */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
            <span className="relative">
              QUIERO SABER CÓMO CRECER MI NEGOCIO
            </span>
          </a>
          
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#39FF14]"></span>
            </span>
            <p className="text-gray-400 font-medium">
              Entérate antes que nadie. Cupos limitados.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};
