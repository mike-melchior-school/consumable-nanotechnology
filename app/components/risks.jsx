import Image from "next/image";

export default function Risks() {
    return (
        <main className="max-w-5xl mx-auto px-6 py-16 space-y-20">

            <section className="bg-white p-10 rounded-2xl shadow-md border border-gray-200 space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Primary Risk</h2>

                <p className="text-gray-700 leading-relaxed">
                    The main risk with nanotechnology right now is clearly illustrated in this image from the European
                    Commission which is a highly trusted authority in medical and regulatory science.
                </p>

                <div className="flex justify-center">
                    <Image
                        src="/images/risks-and-mitagation.JPG"
                        alt="Current risk involving nanomedicine"
                        width={800}
                        height={450}
                        className="rounded-xl max-w-full h-auto"
                    />
                </div>

                <p className="text-gray-700 leading-relaxed">
                    Essentially, we’re stuck in a situation where progress in nanotechnology is slowed because
                    regulators don’t yet have enough data needed to create strong, reliable safety guidelines. Without
                    clear regulatory expectations, product developers generate inconsistent or incomplete datasets. And
                    without high-quality datasets, regulators cannot refine or harmonize guidance. This creates a cycle
                    that slows down innovation in nano medicine.
                </p>
            </section>

            <section className="bg-white p-10 rounded-2xl shadow-md border border-gray-200 space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 text-right">Mitigation</h2>
                <p className="text-gray-700 leading-relaxed">The primary mitigation for this issue is increased
                    awareness and targeted funding.
                    As public and institutional awareness grows, funding for nanotechnology research increases. That
                    funding directly supports better studies, stronger datasets, and more standardized methods. With
                    higher-quality data available, regulators can create clearer, more effective regulations. In turn,
                    product developers can design better tools, tests, and nano medicines based on well-defined
                    requirements.</p>

                <p className="text-gray-700 leading-relaxed">Essentially, awareness and funding help reverse the cycle
                    shown here and accelerate safe innovation
                    and significantly advances the development of nano medicine.</p>

                <div className="flex justify-center">
                    <Image
                        src="/images/nanomedicine-market-2.jpg"
                        alt="Canadian funding into nanomedicine"
                        width={670}
                        height={350}
                        className="rounded-xl max-w-full h-auto"
                    />
                </div>

                <p className="text-gray-700 leading-relaxed">This image shows how the market is increasing the funding
                    into nano medicine. The funding has already exponentially increased since 2020 and is expected to
                    more than triple by 2031. This will result in the breaking of the cycle shown above and will
                    mitigate the risk</p>

            </section>


        </main>
    );
}
