"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// --------------------------------------------------
// CARDS — Overview + P1 + P2 + P3 + Summary
// --------------------------------------------------
const cards = [
  {
    title: "Overview",
    category: "Introduction",
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-6">
          The implementation plan consists of three major phases that move
          nanoparticle-based medical technologies from research and development
          to national clinical adoption. Each phase contains critical tasks,
          regulatory checkpoints, and technical milestones.
        </p>

        <div className="flex justify-center">
          <Image
            src="/images/stages_of_development.webp"
            alt="Nanotechnology development pipeline illustration"
            width={800}
            height={450}
            className="rounded-xl max-w-full h-auto border border-cyan-500/40"
          />
        </div>
      </>
    ),
  },

  {
    title: "Phase 1 — Development & Optimization",
    category: "Phase 1",
    content: (
      <>
        <ul className="space-y-3 text-gray-300 leading-relaxed list-disc pl-6">
          <li>Material selection & formulation prototyping</li>
          <li>Laboratory toxicity, cellular uptake, and release profile tests</li>
          <li>In vivo preclinical studies (biodistribution, safety, efficacy)</li>
          <li>Particle property optimization (size, charge, ligands)</li>
          <li>Defining critical quality attributes (CQAs)</li>
        </ul>

        <p className="mt-6 font-medium text-gray-300">
          <span className="font-bold text-cyan-300">Estimated timeline:</span> 12–24 months
        </p>

        <div className="flex justify-center">
          <Image
            src="/images/nanomedicine_translation_hub.jpg"
            width={900}
            height={500}
            alt="Nanomedicine translation development hub diagram"
            className="rounded-xl max-w-full h-auto mt-8 border border-cyan-500/40"
          />
        </div>
      </>
    ),
  },

  {
    title: "Phase 2 — Regulatory & Manufacturing Scale-Up",
    category: "Phase 2",
    content: (
      <>
        <ul className="space-y-3 text-gray-300 leading-relaxed list-disc pl-6">
          <li>Development of GMP-compliant manufacturing pipelines</li>
          <li>Stability, sterility, and batch comparability testing</li>
          <li>Regulatory submissions (FDA, EMA, Health Canada)</li>
          <li>Pilot manufacturing runs for clinical trial material</li>
          <li>National supply-chain and cost forecasting</li>
        </ul>

        <p className="mt-6 font-medium text-gray-300">
          <span className="font-bold text-cyan-300">Estimated timeline:</span> 12–18 months
        </p>

        <div className="flex justify-center">
          <Image
            src="/images/scientists.webp"
            width={900}
            height={500}
            alt="Scientists working on nanotechnology scale-up"
            className="rounded-xl border border-cyan-500/40 shadow-sm max-w-full h-auto mt-8"
          />
        </div>
      </>
    ),
  },

  {
    title: "Phase 3 — Clinical Adoption & Integration",
    category: "Phase 3",
    content: (
      <>
        <ul className="space-y-3 text-gray-300 leading-relaxed list-disc pl-6">
          <li>Phase I–III clinical trials</li>
          <li>Market authorization & regulatory approval</li>
          <li>Clinical workflow integration + training</li>
          <li>Post-market surveillance & long-term monitoring</li>
          <li>Full-scale manufacturing & distribution</li>
        </ul>

        <p className="mt-6 font-medium text-gray-300">
          <span className="font-bold text-cyan-300">Estimated timeline:</span> 24–36 months
        </p>

        <div className="flex justify-center">
          <Image
            src="/images/integration.jpg"
            width={900}
            height={500}
            alt="Clinical adoption and integration"
            className="rounded-xl border border-cyan-500/40 shadow-sm max-w-full h-auto mt-8"
          />
        </div>
      </>
    ),
  },

  {
    title: "Roadmap Summary",
    category: "Summary",
    content: (
      <>
        <div className="space-y-4 text-gray-300">
          <p><span className="font-semibold text-cyan-300">Phase 1:</span> 12–24 months</p>
          <p><span className="font-semibold text-cyan-300">Phase 2:</span> 12–18 months</p>
          <p><span className="font-semibold text-cyan-300">Phase 3:</span> 24–36 months</p>
        </div>

        <div className="w-full h-3 bg-slate-700 rounded-full mt-10 mb-10">
          <div className="h-full bg-blue-400 rounded-full" style={{ width: "28%" }}></div>
          <div className="h-full bg-amber-400 rounded-full" style={{ width: "21%", marginLeft: "28%" }}></div>
          <div className="h-full bg-green-400 rounded-full" style={{ width: "51%", marginLeft: "49%" }}></div>
        </div>

        <div className="flex justify-between text-sm text-gray-400 mt-3">
          <span>Start</span>
          <span>Phase 1</span>
          <span>Phase 2</span>
          <span>Phase 3</span>
          <span>End</span>
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/roadmap.png"
            width={900}
            height={500}
            alt="Timeline roadmap"
            className="rounded-xl border border-cyan-500/40 shadow-sm max-w-full h-auto mt-8"
          />
        </div>
      </>
    ),
  },
];

// --------------------------------------------------
// MAIN COMPONENT — NOW HYDRATION-SAFE
// --------------------------------------------------
export default function ImplementationCarousel() {
  const [mounted, setMounted] = useState(false);

  // Fix hydration mismatch by rendering only on client
  useEffect(() => {
    setMounted(true);
  }, []);

  
  // Carousel state
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  

  const next = () => {
    if (animating) return;
    setAnimating(true);
    setIndex((i) => (i + 1) % cards.length);
  };

  const prev = () => {
    if (animating) return;
    setAnimating(true);
    setIndex((i) => (i - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setAnimating(false), 450);
    return () => clearTimeout(timer);
  }, [index]);

  if (!mounted) return null;

  // Position logic
  const getStyle = (i) => {
    const pos = (i - index + cards.length) % cards.length;

    if (pos === 0) {
      return {
        transform: "scale(0.92)",
        opacity: 1,
        zIndex: 50,
      };
    }

    const angle = pos * 60;
    const radius = 180;

    const x = Number(Math.cos((angle * Math.PI) / 180) * radius).toFixed(2);
    const y = Number(Math.sin((angle * Math.PI) / 180) * radius).toFixed(2);

    return {
      transform: `translate(${x}px, ${y}px) scale(${1 - pos * 0.15})`,
      opacity: Math.max(1 - pos * 0.25, 0.3),
      filter: `blur(${pos * 1}px)`,
      zIndex: 50 - pos,
    };
  };

  return (
    <main className="min-h-screen w-full bg-slate-900 py-12 px-6 flex flex-col items-center">

      <section className="text-center pt-8">
        <h1 className="text-4xl font-bold text-cyan-400 mb-4 leading-tight">
          Implementation Plan
        </h1>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-4"></div>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          A three-phase roadmap for developing, regulating, and deploying nanomedicine in Canada.
        </p>
      </section>

      {/* CAROUSEL */}
      <div className="relative w-full max-w-5xl min-h-[80vh] flex items-center justify-center overflow-visible">

        {cards.map((card, i) => (
          <div
            key={i}
            className="absolute w-full max-w-3xl transition-all duration-500 ease-out"
            style={getStyle(i)}
          >
            <div className="bg-slate-800 border-2 border-cyan-500 rounded-2xl shadow-2xl p-6 md:p-8 scale-95 overflow-visible">
              <span className="text-cyan-300 text-sm uppercase tracking-wider">{card.category}</span>
              <h2 className="text-3xl font-bold text-white mb-6">{card.title}</h2>
              {card.content}
            </div>
          </div>
        ))}

        {/* ARROWS */}
        <button
          onClick={prev}
          disabled={animating}
          className="absolute left-0 -translate-x-20 top-1/2 -translate-y-1/2 
            w-16 h-16 rounded-full bg-slate-700 border-2 border-cyan-400 
            text-white text-3xl flex items-center justify-center
            hover:bg-cyan-500 hover:scale-110 transition"
        >
          ‹
        </button>

        <button
          onClick={next}
          disabled={animating}
          className="absolute right-0 translate-x-20 top-1/2 -translate-y-1/2 
            w-16 h-16 rounded-full bg-slate-700 border-2 border-cyan-400 
            text-white text-3xl flex items-center justify-center
            hover:bg-cyan-500 hover:scale-110 transition"
        >
          ›
        </button>
      </div>

      {/* DOTS */}
      <div className="flex gap-3 mt-28">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-cyan-400 scale-125" : "bg-slate-600"
            }`}
          />
        ))}
      </div>

      <div className="text-slate-400 text-sm mt-2">
        {index + 1} / {cards.length}
      </div>
    </main>
  );
}
