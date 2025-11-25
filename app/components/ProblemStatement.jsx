export default function ProblemStatement() {
    return (
        <section className="w-full py-16">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-center text-3xl font-bold text-gray-900 mb-10">
                    Problem Statement
                </h2>

                <div className="relative bg-white p-10 rounded-2xl shadow-md border border-gray-200">
                    {/* Decorative opening quote */}
                    <span className="absolute -top-4 -left-4 text-7xl text-blue-200 font-serif select-none">
                        “
                    </span>

                    <p className="text-xl leading-relaxed text-gray-800 italic pl-4 border-l-4 border-blue-400">
                        Canada's healthcare sector is critically lagging in the clinical adoption of consumable
                        nanotechnology, preventing the development of advanced, precise treatments—such as targeted
                        anti-cancer drug delivery for conditions like pediatric brain tumors. Despite global clinical
                        progress, Canada's advancement remains stalled due to unclear regulatory frameworks and low
                        institutional awareness. Without strategic integration, Canada risks falling behind
                        internationally while delaying improved patient outcomes.
                    </p>
                </div>
            </div>
        </section>
    );
}
