"use client";

import ProblemStatement from "./components/ProblemStatement";

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">

      {/* HERO SECTION - More compact and impactful */}
      <section className="text-center pt-8">
        <h1 className="text-4xl font-bold text-cyan-400 mb-4 leading-tight">
          Medical Applications of Nanotechnology
        </h1>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-4"></div>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Transforming healthcare through consumable nanotechnology—improving treatment outcomes 
          and strengthening Canada's global competitiveness.
        </p>
      </section>

      {/* PROBLEM STATEMENT */}
      <ProblemStatement />

      {/* WHAT IS NANOTECHNOLOGY - Compact card */}
      <section className="bg-slate-800 p-8 rounded-xl border border-slate-600">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">
          What Is Nanotechnology?
        </h2>
        <div className="space-y-3 text-gray-300">
          <p>
            Nanotechnology involves manipulating materials at the nanoscale (1–100 nanometers),
            enabling the design of ultra-small particles with specific biological functions that
            interact precisely with cells and tissues.
          </p>
          <p>
            In <span className="font-semibold text-cyan-300">consumable nanotechnology</span>,
            nanoparticles deliver drugs directly to disease sites, improve treatment accuracy,
            reduce side effects, and enable controlled release—especially crucial for 
            difficult-to-treat conditions like pediatric brain tumors.
          </p>
        </div>
      </section>

      {/* CONTEXTUAL BACKGROUND - More concise */}
      <section className="bg-gradient-to-r from-cyan-900 to-slate-800 p-8 rounded-xl border border-cyan-700">
        <h2 className="text-2xl font-bold text-white mb-4">Contextual Background</h2>
        <p className="text-gray-200 leading-relaxed">
          While countries worldwide rapidly advance consumable nanotech for precision medicine, 
          Canada's progress has slowed. This innovation gap threatens future patient outcomes 
          and requires strategic national adoption.
        </p>
      </section>

      {/* LEARN MORE */}
      <section className="flex justify-center">
        <button className="rounded-xl border-2 p-4 bg-slate-800 border-cyan-700 hover:bg-slate-700 text-white font-bold">        
          <a href="/nanotechnology">Learn more</a>
        </button>
      </section>
    </main>
  );
}