import Image from "next/image";

export default function ImplementationPlan() {
    return (
        <main className="max-w-5xl mx-auto px-6 py-16 space-y-20">
            {/* PAGE HEADER */}
            <section className="text-center">
                <h1 className="text-4xl font-bold mb-4 text-gray-900">Implementation Plan</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    A three-phase strategic roadmap for the development, regulation, and clinical adoption of consumable
                    nanotechnology therapies in Canada.
                </p>
            </section>

            {/* OVERVIEW CARD */}
            <section className="bg-white p-10 rounded-2xl shadow-md border border-gray-200 space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Overview</h2>

                <p className="text-gray-700 leading-relaxed">
                    The implementation plan consists of three major phases that move nanoparticle-based medical
                    technologies from research and development to national clinical adoption. Each phase contains
                    critical tasks, regulatory checkpoints, and technical milestones.
                </p>

                {/* IMAGE */}
                <div className="flex justify-center">
                    <Image
                        src="/images/stages_of_development.webp"
                        alt="Nanotechnology development pipeline illustration"
                        width={800}
                        height={450}
                        className="rounded-xl max-w-full h-auto"
                    />
                </div>
            </section>

            {/* PHASE 1 */}
            <section className="relative bg-blue-50 border border-blue-200 p-10 rounded-2xl">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Phase 1 — Development & Optimization</h2>

                <ul className="space-y-3 text-gray-800 leading-relaxed list-disc pl-6">
                    <li>Material selection & formulation prototyping</li>
                    <li>Laboratory testing of toxicity, cellular uptake, and release profiles</li>
                    <li>In vivo preclinical studies (biodistribution, efficacy, safety)</li>
                    <li>Iterative optimization of particle size, charge, and targeting ligands</li>
                    <li>Defining critical quality attributes (CQAs) and process controls</li>
                </ul>

                <p className="mt-6 font-medium text-gray-700">
                    <span className="font-bold text-blue-900">Estimated timeline:</span> 12–24 months
                </p>

                {/* IMAGE */}
                <div className="flex justify-center">
                    <Image
                        src="/images/nanomedicine_translation_hub.jpg"
                        width={900}
                        height={500}
                        alt="Nanomedicine translation development hub diagram"
                        className="rounded-xl max-w-full h-auto mt-8"
                    />
                </div>
            </section>

            {/* PHASE 2 */}
            <section className="relative bg-amber-50 border border-amber-200 p-10 rounded-2xl">
                <h2 className="text-2xl font-bold text-amber-900 mb-6">
                    Phase 2 — Regulatory & Manufacturing Scale-Up
                </h2>

                <ul className="space-y-3 text-gray-800 leading-relaxed list-disc pl-6">
                    <li>Development of a GMP-compliant manufacturing process</li>
                    <li>Stability, sterility/pyrogenicity, and batch-to-batch comparability testing</li>
                    <li>Regulatory submissions and communication with agencies (FDA, EMA, Health Canada)</li>
                    <li>Pilot manufacturing runs for early clinical trial material</li>
                    <li>Cost analysis and supply-chain planning for national scale</li>
                </ul>

                <p className="mt-6 font-medium text-gray-700">
                    <span className="font-bold text-amber-900">Estimated timeline:</span> 12–18 months
                </p>

                {/* IMAGE */}
                <div className="flex justify-center">
                    <Image
                        src="/images/scientists.webp"
                        width={900}
                        height={500}
                        alt="Scientists working on nanotechnology scale-up and regulatory processes"
                        className="rounded-xl border border-amber-200 shadow-sm max-w-full h-auto mt-8"
                    />
                </div>
            </section>

            {/* PHASE 3 */}
            <section className="relative bg-green-50 border border-green-200 p-10 rounded-2xl">
                <h2 className="text-2xl font-bold text-green-900 mb-6">Phase 3 — Clinical Adoption & Integration</h2>

                <ul className="space-y-3 text-gray-800 leading-relaxed list-disc pl-6">
                    <li>Phase I/II/III clinical trials to define safety, efficacy, and dosage</li>
                    <li>Regulatory approval for full market access</li>
                    <li>Training clinicians and integrating workflows in hospitals</li>
                    <li>Post-market surveillance and long-term safety monitoring</li>
                    <li>Scaling distribution, logistics, and manufacturing capacity</li>
                </ul>

                <p className="mt-6 font-medium text-gray-700">
                    <span className="font-bold text-green-900">Estimated timeline:</span> 24–36 months
                </p>

                {/* IMAGE */}
                <div className="flex justify-center">
                    <Image
                        src="/images/integration.jpg"
                        width={900}
                        height={500}
                        alt="Clinical integration and adoption of nanotechnology"
                        className="rounded-xl border border-green-200 shadow-sm max-w-full h-auto mt-8"
                    />
                </div>
            </section>

            {/* SUMMARY TIMELINE */}
            <section className="bg-white p-10 rounded-2xl shadow-md border border-gray-200 space-y-8">
                <h2 className="text-2xl font-bold text-gray-900">Roadmap Summary</h2>

                <div className="space-y-4 text-gray-700">
                    <p>
                        <span className="font-semibold">Phase 1:</span> 12–24 months — Development & Optimization
                    </p>
                    <p>
                        <span className="font-semibold">Phase 2:</span> 12–18 months — Regulatory & Manufacturing
                        Scale-Up
                    </p>
                    <p>
                        <span className="font-semibold">Phase 3:</span> 24–36 months — Clinical Adoption & Integration
                    </p>
                </div>

                {/* Visual timeline bar (optional, you can keep or delete) */}
                <div className="mt-10">
                    <div className="w-full h-3 bg-gray-200 rounded-full relative">
                        <div className="absolute top-0 h-3 bg-blue-400 rounded-full" style={{ width: "28%" }}></div>
                        <div
                            className="absolute top-0 h-3 bg-amber-400 rounded-full left-[28%]"
                            style={{ width: "21%" }}
                        ></div>
                        <div
                            className="absolute top-0 h-3 bg-green-400 rounded-full left-[49%]"
                            style={{ width: "51%" }}
                        ></div>
                    </div>

                    <div className="flex justify-between text-sm text-gray-600 mt-3">
                        <span>Start</span>
                        <span>Phase 1</span>
                        <span>Phase 2</span>
                        <span>Phase 3</span>
                        <span>End</span>
                    </div>
                </div>

                {/* IMAGE */}
                <div className="flex justify-center">
                    <Image
                        src="/images/roadmap.png"
                        width={900}
                        height={500}
                        alt="Timeline roadmap for nanotechnology implementation"
                        className="rounded-xl border border-gray-300 shadow-sm max-w-full h-auto mt-8"
                    />
                </div>
            </section>
        </main>
    );
}
