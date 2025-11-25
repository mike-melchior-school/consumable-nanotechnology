import ProblemStatement from "./components/ProblemStatement";

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-24">

      {/* HERO SECTION */}
      <section className="text-center pt-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Medical Applications of Nanotechnology
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Exploring how consumable nanotechnology can reshape modern medicine,
          improve treatment outcomes, and strengthen Canada’s global competitiveness.
        </p>
      </section>

      {/* PROBLEM STATEMENT */}
      <ProblemStatement />

      {/* WHAT IS NANOTECHNOLOGY */}
      <section className="bg-white p-10 rounded-2xl shadow-md border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          What Is Nanotechnology?
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Nanotechnology involves manipulating materials at the nanoscale (1–100 nanometers),
          allowing scientists to design ultra-small particles with specific biological functions.
          These nanoparticles can interact precisely with cells, tissues, and biological systems.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          In the context of <span className="font-semibold">consumable nanotechnology</span>,
          nanoparticles can deliver drugs directly to disease sites, improve treatment accuracy,
          reduce side effects, and enable controlled release inside the body. This is especially
          important for difficult-to-treat conditions, such as pediatric brain tumors.
        </p>
      </section>

      {/* CONTEXTUAL BACKGROUND */}
      <section className="bg-blue-50 p-10 rounded-2xl border border-blue-200">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Contextual Background</h2>
        <p className="text-gray-800 leading-relaxed">
          Nanotechnology is transforming global healthcare innovation. Countries around the world
          are rapidly advancing consumable nanotech for precision medicine—yet Canada’s progress has
          been noticeably slower. This gap threatens future innovation and patient outcomes.
          Understanding why this slowdown exists is essential for effective national adoption.
        </p>
      </section>

      {/* BENEFITS & IMPACT — THREE CRITICAL BENEFITS */}
      <section className="space-y-10">
        <h2 className="text-3xl font-bold text-gray-900">Benefits & Impact</h2>

        {/* GRID OF THREE BENEFITS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* 1 — Targeted Drug Delivery */}
          <div className="bg-white p-8 rounded-2xl shadow border">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Highly Targeted Drug Delivery</h3>
            <p className="text-gray-700 leading-relaxed">
              Direct delivery to specific cells or tissues, including the ability to cross
              biological barriers such as the blood–brain barrier. This maximizes treatment
              impact and minimizes damage to healthy tissue.
            </p>
          </div>

          {/* 2 — Improved Treatment Efficacy */}
          <div className="bg-white p-8 rounded-2xl shadow border">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Improved Treatment Efficacy</h3>
            <p className="text-gray-700 leading-relaxed">
              Nanoparticles enable sustained drug release and deeper penetration into diseased
              tissues. This results in enhanced therapeutic performance and higher success rates.
            </p>
          </div>

          {/* 3 — Reduced Side Effects */}
          <div className="bg-white p-8 rounded-2xl shadow border">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Reduced Side Effects</h3>
            <p className="text-gray-700 leading-relaxed">
              By lowering systemic exposure to toxic drugs, nanotechnology reduces adverse
              reactions, hospitalizations, and improves overall quality of life—especially
              for vulnerable patients.
            </p>
          </div>
        </div>
      </section>

      {/* TARGETED DELIVERY CASE STUDY */}
      <section className="bg-white p-10 rounded-2xl shadow-md border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Example: Targeted Delivery in Pediatric Brain Tumors
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Researchers at Mount Sinai Health System and Memorial Sloan Kettering Cancer Center
          engineered drug-loaded nanoparticles using sugar-based molecules (fucoidan). These bind
          to proteins expressed on activated blood vessels—natural “homing signals” created by
          inflammation or tumor sites.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Because the brain naturally allows these sugar-based molecules to cross the
          blood–brain barrier, the nanoparticles “trick” the body into transporting them directly
          to the tumor. This enables isolated, highly precise treatment using natural biological
          pathways.
        </p>

        <p className="text-gray-700 leading-relaxed font-medium">
          <span className="font-semibold">The result:</span> In mouse models of medulloblastoma,
          this approach improved therapeutic impact and reduced toxicity—including bone toxicity
          commonly seen in children undergoing traditional treatment.
        </p>
      </section>

      {/* MARKET OVERVIEW */}
      <section className="bg-gray-50 p-10 rounded-2xl border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Nanomedicine Market Outlook
        </h2>

        <p className="text-gray-700 leading-relaxed">
          The global nanomedicine market is expected to grow by over <strong>$200 billion USD</strong>
          by 2030. North America holds the majority market share—yet Canada is at risk of falling
          behind without coordinated investment and clinical adoption strategies.
        </p>
      </section>

      {/* CANADA'S NATIONAL POSITION */}
      <section className="bg-green-50 p-10 rounded-2xl border border-green-200">
        <h2 className="text-3xl font-bold text-green-900 mb-6">
          Canada’s Current Standing
        </h2>

        <ul className="space-y-3 text-gray-800 leading-relaxed list-disc pl-6">
          <li>National Research Council of Canada has partnered with University of Alberta in a new $10M CAD joint investment.</li>
          <li>Federal government contributed $1M CAD to support the U of Alberta nanoFAB facility.</li>
          <li>Next Gen Manufacturing Canada received $230M CAD to support nanomanufacturing initiatives.</li>
        </ul>

        <p className="mt-6 text-gray-800 leading-relaxed">
          These investments position Canada for growth, but much stronger coordination and
          implementation planning is needed to fully capture the rapidly expanding global
          nanomedicine market.
        </p>
      </section>

    </main>
  );
}
