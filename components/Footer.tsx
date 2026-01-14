
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-zinc-900 text-center px-6">
      <p className="text-zinc-600 font-tech text-sm tracking-widest uppercase">
        © 2026. Todos los derechos reservados. El Futuro del Comercio.
      </p>
      
      <div className="mt-8 flex justify-center gap-1">
        <div className="w-1 h-1 rounded-full bg-zinc-800"></div>
        <div className="w-1 h-1 rounded-full bg-zinc-700"></div>
        <div className="w-1 h-1 rounded-full bg-zinc-800"></div>
      </div>
    </footer>
  );
};
