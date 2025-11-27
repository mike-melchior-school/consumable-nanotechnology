export default function Benefits() {
    return (
        <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">

            {/* BENEFITS & IMPACT - Tighter layout */}
            <section>
                <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-cyan-400 mb-2">Benefits & Impact</h2>
                <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-600 hover:border-cyan-500 transition-colors">
                    <h3 className="text-lg font-bold text-cyan-400 mb-3">Targeted Drug Delivery</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                    Direct delivery to specific cells, crossing biological barriers like the blood-brain 
                    barrier to maximize impact and minimize damage to healthy tissue.
                    </p>
                </div>

                <div className="bg-slate-800 p-6 rounded-xl border border-slate-600 hover:border-cyan-500 transition-colors">
                    <h3 className="text-lg font-bold text-cyan-400 mb-3">Improved Treatment Efficacy</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                    Sustained drug release and deeper tissue penetration result in enhanced therapeutic 
                    performance and higher success rates.
                    </p>
                </div>

                <div className="bg-slate-800 p-6 rounded-xl border border-slate-600 hover:border-cyan-500 transition-colors">
                    <h3 className="text-lg font-bold text-cyan-400 mb-3">Reduced Side Effects</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                    Lower systemic exposure to toxic drugs reduces adverse reactions and improves 
                    quality of life for vulnerable patients.
                    </p>
                </div>
                </div>
            </section>

            {/* TARGETED DELIVERY CASE STUDY - More scannable */}
            <section className="bg-slate-800 p-8 rounded-xl border border-slate-600">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                Case Study: Pediatric Brain Tumors
                </h2>
                <div className="space-y-4 text-gray-300">
                <p>
                    Researchers engineered drug-loaded nanoparticles using sugar-based molecules that 
                    bind to proteins on activated blood vessels—natural "homing signals" from tumors.
                </p>
                <p>
                    These nanoparticles "trick" the body into transporting them across the blood-brain 
                    barrier directly to tumors, enabling precise treatment using natural biological pathways.
                </p>
                <p className="font-medium text-cyan-300">
                    Result: Improved therapeutic impact and reduced toxicity in medulloblastoma models.
                </p>
                </div>
            </section>

            {/* MARKET OVERVIEW - Concise */}
            <section className="bg-gradient-to-r from-slate-800 to-cyan-900 p-8 rounded-xl border border-cyan-700">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Market Outlook</h2>
                <p className="text-gray-200">
                Global nanomedicine market projected to grow by <strong>$200+ billion USD by 2030</strong>. 
                Canada must accelerate adoption to maintain competitive position.
                </p>
            </section>

            {/* CANADA'S POSITION - Clean list */}
            <section className="bg-slate-800 p-8 rounded-xl border border-slate-600">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Canada's Current Standing</h2>
                <ul className="space-y-2 text-gray-300 mb-4">
                <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    $10M CAD joint investment between NRC and University of Alberta
                </li>
                <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    $1M CAD federal support for U of Alberta nanoFAB facility
                </li>
                <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    $230M CAD for Next Gen Manufacturing Canada nanomanufacturing
                </li>
                </ul>
                <p className="text-gray-300 text-sm">
                Strong foundation exists, but coordinated implementation is needed to capture global market share.
                </p>
            </section>
        </main>
    )
}
