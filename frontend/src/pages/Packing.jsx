const companyName = "RML Agrifresh Pvt Ltd.";
const brandName = "TNB (TheNatureBox)";

const packingImages = [
    "/packing/Packaging at 1.04.53 AM.jpeg",
    "/packing/Packaging at 1.04.53 AM (1).jpeg",
    "/packing/Packaging at 1.04.53 AM (2).jpeg",
    "/packing/Packaging at 1.04.53 AM (3).jpeg",
    "/packing/Packaging at 1.04.53 AM (4).jpeg",
    "/packing/Packaging at 1.04.53 AM (5).jpeg",
    "/packing/Packaging at 1.04.54 AM.jpeg",
    "/packing/Packaging at 1.04.54 AM (1).jpeg",
];

const packSizeRows = [
    ["Chicken Masala", "50 Gms."],
    ["Chicken Masala", "100 Gms."],
    ["Coriander Powder", "100 Gms."],
    ["Garam Masala", "100 Gms."],
    ["Garam Masala", "50 Gms."],
    ["Kashmiri Chilli Powder", "50 Gms."],
    ["Meat Masala", "100 Gms."],
    ["Meat Masala", "50 Gms."],
    ["Red Chilli Powder", "100 Gms."],
    ["Sabji Masala", "50 Gms."],
    ["Sabji Masala", "100 Gms."],
    ["Turmeric Powder", "100 Gms."],
    ["Coriander Powder", "250 Gms."],
    ["Red Chilli Powder", "50 Gms."],
    ["Turmeric Powder", "50 Gms."],
    ["Red Chilli Powder", "500 Gms."],
    ["Turmeric Powder", "200 Gms."],
    ["Kasuri Methi", "100 Gms."],
    ["Chicken Masala (Rs 10)", "12 Gms."],
    ["Garam Masala (Rs 10)", "12 Gms."],
    ["Meat / Mutton Masala (Rs 10)", "12 Gms."],
    ["Chat Masala (Rs 10)", "12 Gms."],
    ["Chhole Masala (Rs 10)", "12 Gms."],
    ["Sabji Masala (Rs 10)", "12 Gms."],
    ["Turmeric Powder (Rs 10)", "18 Gms."],
    ["Red Chilli Powder (Rs 10)", "15 Gms."],
    ["Coriander Powder (Rs 10)", "20 Gms."],
    ["Compound Hing", "10 g"],
    ["Compound Hing", "20 g"],
    ["Compound Hing", "50 g"],
    ["Pink Salt", "100 Gms."],
    ["Black Salt", "100 Gms."],
    ["Garam Masala Whole", "100 Gms."],
    ["Jeera", "100 Gms."],
    ["Jeera", "200 g"],
    ["Black Pepper", "50 g"],
    ["Methi", "100 Gms."],
    ["Ajwain", "20 g"],
    ["Kalogi", "20 g"],
    ["Sauf", "50 g"],
    ["Lal Mirchi Whole", "50 G"],
    ["Tej Patta", "50 G"],
    ["Chhoti Elachi", "10 G"],
    ["Laung", "20 g"],
    ["Panchforan", "50 G"],
    ["Yellow Sarso", "50 g"],
    ["Black Sarso", "50 g"],
    ["Mixed Pickle", "200 G"],
    ["Green Chilli Pickle", "200 G"],
    ["Mango Pickle", "200 G"],
];

const packSizeGroups = packSizeRows.reduce((groups, [product, specification]) => {
    const existing = groups.find((item) => item.product === product);

    if (existing) {
        existing.specifications.push(specification);
        return groups;
    }

    return [
        ...groups,
        {
            product,
            specifications: [specification],
        },
    ];
}, []);

const categoryLabels = {
    masala: "Powders & Masalas",
    trial: "Rs 10 Trial Packs",
    whole: "Whole Spices",
    salt: "Salts & Hing",
    pickle: "Pickles",
};

const categoryDescriptions = {
    masala: "Core cooking blends and powdered spices for everyday retail packs.",
    trial: "Compact low-price sachet formats for sampling and quick purchase.",
    whole: "Whole spice packs for freshness, aroma, and traditional cooking.",
    salt: "Mineral salts and compound hing available in practical pack sizes.",
    pickle: "Ready pickle packs for retail shelves and household use.",
};

function getPackCategory(product) {
    if (product.includes("Rs 10")) {
        return "trial";
    }

    if (
        product.includes("Salt") ||
        product.includes("Hing")
    ) {
        return "salt";
    }

    if (product.includes("Pickle")) {
        return "pickle";
    }

    if (
        [
            "Garam Masala Whole",
            "Jeera",
            "Black Pepper",
            "Methi",
            "Ajwain",
            "Kalogi",
            "Sauf",
            "Lal Mirchi Whole",
            "Tej Patta",
            "Chhoti Elachi",
            "Laung",
            "Panchforan",
            "Yellow Sarso",
            "Black Sarso",
        ].includes(product)
    ) {
        return "whole";
    }

    return "masala";
}

const packCategories = Object.keys(categoryLabels)
    .map((key) => ({
        key,
        title: categoryLabels[key],
        description: categoryDescriptions[key],
        items: packSizeGroups.filter((item) => getPackCategory(item.product) === key),
    }))
    .filter((category) => category.items.length > 0);

function PackingMarquee({ images, reverse = false }) {
    return (
        <div className="relative overflow-hidden">
            <div
                className={`flex w-max gap-3 sm:gap-4 py-2 ${
                    reverse ? "packing-marquee-right" : "packing-marquee-left"
                }`}
            >
                {[...images, ...images].map((image, index) => (
                    <div
                        key={`${image}-${index}`}
                        className="w-[210px] sm:w-[300px] md:w-[340px] lg:w-[380px] shrink-0 overflow-hidden rounded-lg border border-white/15 bg-white/10 shadow-2xl shadow-black/20"
                    >
                        <img
                            src={image}
                            alt={`The Nature Box packaging visual ${index + 1}`}
                            className="h-36 sm:h-48 md:h-56 lg:h-60 w-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Packing() {
    const firstRowImages = packingImages.slice(0, 4);
    const secondRowImages = packingImages.slice(4);

    return (
        <div className="w-full bg-white">
            <section className="relative overflow-hidden bg-[#122216] text-white">
                <div className="absolute inset-0">
                    <img
                        src="/packing/packing-collage.jpg"
                        alt="The Nature Box packaging"
                        className="h-full w-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#122216]/90 via-[#122216]/75 to-[#122216]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 pt-14 pb-8 sm:pt-16 md:pt-24 md:pb-12">
                    <div className="max-w-3xl mb-8 md:mb-12">
                        <p className="text-sm uppercase tracking-[0.28em] font-semibold text-green-200 mb-4">
                            Packaging Portfolio
                        </p>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
                            Premium packs for authentic Indian flavours.
                        </h1>
                        <p className="mt-5 text-base sm:text-lg text-white/80">
                            A moving showcase of TNB packaging formats, catalog
                            creatives, and shelf-ready spice presentations.
                        </p>
                    </div>
                </div>

                <div className="relative pb-10 md:pb-16 space-y-2">
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-20 bg-gradient-to-r from-[#122216] to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-20 bg-gradient-to-l from-[#122216] to-transparent" />
                    <PackingMarquee images={firstRowImages} />
                    <PackingMarquee images={secondRowImages} reverse />
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
                <div className="mb-10 md:mb-12">
                    <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-10 items-end">
                        <div>
                            <p className="text-sm uppercase tracking-[0.25em] text-green-700 font-semibold mb-4">
                                Pack Details
                            </p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
                                Product Pack Sizes
                            </h2>
                            <p className="text-gray-600 leading-relaxed max-w-3xl">
                                Complete packaging details for {brandName}, grouped
                                by product type so customers and distributors can
                                scan available pack sizes quickly.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            <div className="rounded-lg border bg-green-50 px-5 py-4 min-w-32">
                                <p className="text-2xl sm:text-3xl font-bold text-green-900">
                                    {packSizeGroups.length}
                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                    Products
                                </p>
                            </div>
                            <div className="rounded-lg border bg-red-50 px-5 py-4 min-w-32">
                                <p className="text-2xl sm:text-3xl font-bold text-red-900">
                                    {packSizeRows.length}
                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                    Pack sizes
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-0 rounded-lg border overflow-hidden bg-white">
                        <div className="p-5 border-b sm:border-b-0 sm:border-r bg-gray-50">
                            <p className="text-xs uppercase tracking-[0.18em] text-gray-500 mb-1">
                                Company
                            </p>
                            <p className="font-semibold text-gray-900">
                                {companyName}
                            </p>
                        </div>
                        <div className="p-5 bg-gray-50">
                            <p className="text-xs uppercase tracking-[0.18em] text-gray-500 mb-1">
                                Brand
                            </p>
                            <p className="font-semibold text-gray-900">
                                {brandName}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    {packCategories.map((category) => (
                        <section
                            key={category.key}
                            className="rounded-lg border bg-white shadow-sm overflow-hidden"
                        >
                            <div className="bg-green-900 text-white px-5 sm:px-6 py-5">
                                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-bold">
                                            {category.title}
                                        </h3>
                                        <p className="text-sm text-green-100 mt-1 max-w-2xl">
                                            {category.description}
                                        </p>
                                    </div>
                                    <p className="text-sm font-semibold text-green-100">
                                        {category.items.length} products
                                    </p>
                                </div>
                            </div>

                            <div className="divide-y">
                                {category.items.map((item) => (
                                    <div
                                        key={item.product}
                                        className="grid md:grid-cols-[minmax(0,1fr)_minmax(260px,0.9fr)] gap-4 px-5 sm:px-6 py-5 hover:bg-green-50 transition"
                                    >
                                        <div className="min-w-0">
                                            <p className="text-lg font-semibold text-gray-950">
                                                {item.product}
                                            </p>
                                            <p className="text-sm text-gray-500 mt-1">
                                                {brandName}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-xs uppercase tracking-[0.16em] text-gray-500 mb-2">
                                                Available sizes
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {item.specifications.map((specification) => (
                                                    <span
                                                        key={specification}
                                                        className="rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm font-semibold text-green-950 whitespace-nowrap"
                                                    >
                                                        {specification}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </section>
        </div>
    );
}
