const commitments = [
    "100% natural ingredients",
    "Rich aroma and authentic taste",
    "Hygienic processing and packaging",
    "Farm-to-kitchen freshness",
];

export default function About() {
    return (
        <div className="w-full bg-white">
            <section className="bg-green-50">
                <div className="max-w-7xl mx-auto px-4 py-8 md:py-14">
                    <img
                        src="/about-us/about-us.jpeg"
                        alt="About The Nature Box"
                        className="w-full rounded-lg shadow-xl border border-green-100"
                    />
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-start">
                <div>
                    <p className="text-sm uppercase tracking-[0.18em] sm:tracking-[0.25em] text-green-700 font-semibold mb-4">
                        About Us
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                        TNB (TheNatureBox)
                    </h1>
                    <p className="text-lg font-semibold text-green-800 mb-8">
                        Unboxing nature's purity to bring authentic Indian flavours
                        to your kitchen.
                    </p>

                    <div className="space-y-5 text-gray-700 leading-relaxed">
                        <p>
                            At TNB (The Nature Box), we believe that the true taste
                            of food comes from the purity of nature. Founded with a
                            vision to bring authentic, high-quality spices to every
                            kitchen, The Nature Box is dedicated to delivering rich,
                            aromatic, and 100% natural spice blends that enhance
                            everyday cooking.
                        </p>

                        <p>
                            We source our spices directly from trusted farms and
                            carefully selected regions known for their superior
                            quality produce. Each product is processed, blended, and
                            packed with strict quality standards to preserve natural
                            flavour, colour, and aroma.
                        </p>

                        <p>
                            Our product range is crafted to suit modern households
                            as well as traditional cooking needs, offering premium
                            masalas and spices that are fresh, hygienic, and full
                            of flavour.
                        </p>
                    </div>
                </div>

                <div className="bg-[#d7efd3] border border-green-100 rounded-lg p-5 sm:p-6 md:p-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">
                        Our Commitment
                    </h2>
                    <div className="grid gap-4">
                        {commitments.map((commitment) => (
                            <div
                                key={commitment}
                                className="flex items-center gap-4 bg-white/70 rounded-lg px-4 py-4"
                            >
                                <span className="h-10 w-10 shrink-0 rounded-full bg-white border border-green-200 flex items-center justify-center">
                                    <span className="h-3 w-3 rounded-full bg-green-700" />
                                </span>
                                <p className="text-base sm:text-lg font-semibold text-gray-900">
                                    {commitment}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-green-200">
                        <p className="text-gray-800 leading-relaxed">
                            Our mission is simple: Unbox India's Nature by delivering
                            spices that reflect tradition, quality, and trust.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
