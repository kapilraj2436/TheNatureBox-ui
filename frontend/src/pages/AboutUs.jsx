export default function About() {
    return (
        <div className="w-full">

            {/* ================= HERO SECTION ================= */}
            <section className="bg-green-50">
                <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        About Us – <span className="text-green-700">TNB (TheNatureBox)</span>
                    </h1>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Unboxing nature’s purity to bring authentic Indian flavors to your kitchen.
                    </p>
                </div>
            </section>

            {/* ================= CONTENT SECTION ================= */}
            <section className="max-w-6xl mx-auto px-4 py-20 space-y-8 text-gray-700 leading-relaxed">

                <p>
                    At <strong>TNB (TheNatureBox)</strong>, we believe that the true taste of food
                    comes from the purity of nature. Founded with a vision to bring authentic,
                    high-quality spices to every kitchen, TheNatureBox is dedicated to delivering
                    rich, aromatic, and <strong>100% natural spice blends</strong> that enhance
                    everyday cooking.
                </p>

                <p>
                    We source our spices directly from trusted farms and carefully selected regions
                    known for their superior quality produce. Each product is processed, blended,
                    and packed with strict quality standards to preserve natural flavor, color, and
                    aroma — ensuring that you experience the real essence of Indian spices in every pack.
                </p>

                <p>
                    Our product range is crafted to suit modern households as well as traditional
                    cooking needs, offering premium masalas and spices that are fresh, hygienic,
                    and full of flavor. From meat masala to turmeric and other essential spices,
                    TNB focuses on <strong>purity, consistency, and taste</strong>.
                </p>

                {/* ================= COMMITMENT LIST ================= */}
                <div className="bg-green-50 rounded-2xl p-8">
                    <h2 className="text-2xl font-semibold mb-6 text-green-800">
                        Our Commitment
                    </h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc list-inside">
                        <li>100% natural ingredients</li>
                        <li>Rich aroma and authentic taste</li>
                        <li>Hygienic processing and packaging</li>
                        <li>Farm-to-kitchen freshness</li>
                    </ul>
                </div>

                {/* ================= MISSION ================= */}
                <p className="text-lg font-medium text-gray-800">
                    Our mission is simple — <span className="text-green-700 font-semibold">
                        “Unbox India’s Nature”</span> by delivering spices that reflect tradition,
                    quality, and trust. With TNB, every meal becomes more flavorful, natural,
                    and memorable.
                </p>

            </section>
        </div>
    );
}
