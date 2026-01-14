
import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#39FF14] selection:text-black overflow-x-hidden relative">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 bg-grid pointer-events-none z-0"></div>
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#39FF14]/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#00FFFF]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <main className="relative z-10">
        <Hero />
        <Problem />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </div>
  );
};

export default App;
