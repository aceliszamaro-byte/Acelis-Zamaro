
import React, { useState } from 'react';

interface AccordionProps {
  question: string;
  answer: string;
}

const AccordionItem: React.FC<AccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800 last:border-0 transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
      >
        <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${isOpen ? 'text-[#00FFFF]' : 'text-gray-300 group-hover:text-white'}`}>
          {question}
        </span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45 text-[#00FFFF]' : 'text-gray-500'}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-400 text-lg leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "¿Es un préstamo o microcrédito?",
      answer: "No, es algo mejor. Es el inicio de una nueva forma de valorar la confianza y el esfuerzo de cada transacción."
    },
    {
      question: "¿Tengo que pagar para saber más?",
      answer: "No. La información sobre esta revolución estará disponible primero para un grupo selecto de visionarios. Sin costos ocultos, solo el valor de tu interés."
    },
    {
      question: "¿Cómo funciona este nuevo sistema?",
      answer: "Es un mecanismo inteligente, diseñado para potenciar tu negocio, basado en la reputación y el control. Una herramienta que pone el poder de tu palabra a trabajar para ti."
    }
  ];

  return (
    <section className="py-24 px-6 bg-black/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <h3 className="font-tech text-3xl md:text-4xl font-bold text-[#00FFFF] mb-12 tracking-tight uppercase">
          TU PALABRA ES TU MEJOR GARANTÍA. PERO, ¿CÓMO?
        </h3>
        
        <div className="bg-zinc-900/30 rounded-2xl p-4 md:p-8 border border-zinc-800">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};
