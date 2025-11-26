"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const cards = [
  {
    title: "Nanoscale Engineering",
    description: "Precision manipulation at 1-100 nanometer scale enabling revolutionary material properties and advanced applications across industries.",
    image: "/images/nano_intro.jpg", 
    category: "Innovation"
  },
  {
    title: "Scientific Foundations",
    description: "Pioneered by visionaries like Richard Feynman, establishing the fundamental principles that drive modern nanotechnology innovation.",
    image: "/images/nano_intro2.jpg",
    category: "Research"
  },
  {
    title: "Medical Breakthroughs",
    description: "Targeted therapeutic delivery systems and advanced diagnostic platforms revolutionizing patient care and treatment outcomes.",
    image: "/images/nano_medicine1.jpg",
    category: "Medical"
  },
  {
    title: "Precision Therapeutics",
    description: "Lipid-based nanocarriers and smart delivery mechanisms ensuring optimal biodistribution and minimal systemic toxicity.",
    image: "/images/nano_medicine2.jpg",
    category: "Therapeutics"
  },
  {
    title: "Advanced Diagnostics",
    description: "Next-generation imaging contrast agents and biosensor technologies enabling early detection and personalized treatment strategies.",
    image: "/images/nano_medicine.jpg",
    category: "Diagnostics"
  },
];

export default function NanoIntro() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextCard = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 400);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') prevCard();
      if (e.key === 'ArrowRight') nextCard();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isAnimating]);

  const getCardPosition = (index) => {
    const position = (index - currentIndex + cards.length) % cards.length;
    const angle = position * 60;
    const radius = position === 0 ? 0 : 200; 
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    
    if (position === 0) {
      return {
        transform: `scale(1)`,
        opacity: 1,
        zIndex: 30,
        filter: "none"
      };
    }
    
    const opacity = Math.max(1 - position * 0.25, 0.3);
    const scale = 1 - position * 0.15;
    
    return {
      transform: `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px) scale(${scale.toFixed(2)})`,
      opacity: opacity,
      zIndex: 20 - position,
      filter: `blur(${position * 0.8}px)`
    };
  };

  return (
    <main className="relative w-full min-h-screen flex flex-col justify-center items-center bg-slate-900 py-8">
      
      {/* Compact Header */}
      <div className="text-center mb-8 z-10 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          THE FUTURE OF MEDICINE
        </h1>
        <div className="w-20 h-0.5 bg-cyan-400 mx-auto mb-2"></div>
        <p className="text-cyan-200 text-sm font-light">
         Targeted Therapies & Diagnostic Solutions
        </p>
      </div>

      {/* Spiral Cards Container - Perfect size maintained */}
      <div className="relative w-full max-w-6xl h-[70vh] flex items-center justify-center mb-8 px-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="absolute w-full max-w-4xl transition-all duration-500 ease-out transform-gpu"
            style={getCardPosition(index)}
          >
            {/* Main Card */}
            <div className="bg-slate-800 border-2 border-cyan-500 rounded-2xl shadow-2xl overflow-hidden">
              {/* Image Section */}
              <div className="relative">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={800}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-sm font-medium px-4 py-2 rounded-lg">
                    {card.category}
                  </span>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
                  {card.title}
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed text-center max-w-3xl mx-auto">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevCard}
          disabled={isAnimating}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40 w-14 h-14 flex items-center justify-center rounded-full bg-slate-700 border-2 border-cyan-400 hover:bg-cyan-500 hover:scale-110 transition-all duration-200"
        >
          <span className="text-white text-2xl font-bold">‹</span>
        </button>

        <button
          onClick={nextCard}
          disabled={isAnimating}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 w-14 h-14 flex items-center justify-center rounded-full bg-slate-700 border-2 border-cyan-400 hover:bg-cyan-500 hover:scale-110 transition-all duration-200"
        >
          <span className="text-white text-2xl font-bold">›</span>
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="flex flex-col items-center gap-4 z-10">
        {/* Progress Dots */}
        <div className="flex gap-3">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => !isAnimating && setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-cyan-400 scale-125' 
                  : 'bg-slate-600 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        {/* Progress Text */}
        <div className="text-slate-400 text-sm">
          {currentIndex + 1} / {cards.length}
        </div>
      </div>
    </main>
  );
}