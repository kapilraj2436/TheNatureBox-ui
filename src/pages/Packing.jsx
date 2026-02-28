export default function Packing() {
    return (

        <div className="w-full">
            <div className="max-w-7xl mx-auto px-4 py-16">

                {/* ================= PACKING HERO ================= */}
                <section className="relative h-[260px] sm:h-[320px] md:h-[380px] w-full overflow-hidden">

                    {/* Background Image */}
                    <img
                        src="/packing/packing-collage.jpg"
                        alt="TNB Packing"
                        className="absolute inset-0 w-full h-full object-cover scale-105 animate-slowZoom"
                    />

                    {/* Gray Overlay */}
                    <div className="absolute inset-0 bg-gray-900/60" />

                    {/* Text Content */}
                    <div className="relative z-10 h-full flex items-center justify-center">
                        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide">
                            Packing
                        </h1>
                    </div>
                </section>
                {/* Page Header */}
                <br />
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">
                        Product Pack Sizes
                    </h1>
                    <p className="text-gray-600 text-lg">
                        The Nature Box (TNB) – Available Packaging Options
                    </p>
                </div>

                {/* Table Wrapper */}
                <div className="overflow-x-auto rounded-xl border shadow-sm">
                    <table className="min-w-full border-collapse">

                        {/* Table Head */}
                        <thead className="bg-green-900 text-white">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm font-semibold">
                                    Product
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">
                                    Box Pack Size
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">
                                    Pouch Pack Size
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">
                                    Other / Notes
                                </th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="bg-white divide-y">
                            {packingData.map((item, index) => (
                                <tr
                                    key={index}
                                    className="hover:bg-green-50 transition"
                                >
                                    <td className="px-4 py-3 font-medium">
                                        {item.product}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-700">
                                        {item.box || "—"}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-700">
                                        {item.pouch || "—"}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-600">
                                        {item.notes || "—"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

                {/* Footer Note */}
                <div className="mt-10 text-sm text-gray-600 text-center">
                    For bulk orders, custom packaging, or distributor enquiries,
                    please contact our support team.
                </div>
            </div>
        </div>
    );
}

/* ================= PACKING DATA ================= */

const packingData = [
    {
        product: "Sabji Masala",
        box: "50g, 100g",
        pouch: "200g, 500g",
        notes: "Super Sabji: 5KG Bag",
    },
    {
        product: "Meat Masala",
        box: "50g, 100g",
        pouch: "50g, 200g, 500g",
        notes: "Meat Jar, Meat Masala 4g (Bag & Pouch)",
    },
    {
        product: "Mix Garam Masala",
        box: "50g, 100g",
        pouch: "4g, 200g, 500g",
    },
    {
        product: "Super Garam Masala",
        box: "50g, 100g",
        pouch: "200g, 1KG",
    },
    { product: "Chola Masala", box: "50g, 100g" },
    { product: "Chat Masala", box: "50g, 100g" },
    { product: "Jaljira", box: "50g, 100g", pouch: "4g" },
    { product: "Kachauri Masala", box: "100g" },
    { product: "Kitchen King", box: "50g, 100g" },
    { product: "Bharva Kalonji", box: "50g, 100g" },
    { product: "Fish Masala", box: "50g, 100g" },
    { product: "Sambhar Masala", box: "50g, 100g" },
    { product: "Pav Bhaji Masala", box: "50g" },
    { product: "Shahi Paneer Masala", box: "50g, 100g" },
    { product: "Pouch Achar Masala", pouch: "200g" },
    { product: "Samosa Masala", pouch: "50g, 200g, 1KG" },
    { product: "Dam Aloo", pouch: "12g" },
    {
        product: "Pisi Kali Mirch",
        box: "50g",
        pouch: "50g, 100g",
    },
    { product: "Bhuna Jeera", box: "50g, 100g" },
    { product: "Kasoori Methi", box: "25g" },
    { product: "Gulab Jamun Mix", pouch: "400g, 500g" },
    { product: "TNB Papad", pouch: "200g" },
    {
        product: "Haldi",
        box: "50g, 100g",
        pouch: "4g, 20g, 50g, 100g, 200g, 500g",
        notes: "Haldi 1KG Pouch",
    },
    {
        product: "Red Mirch",
        box: "50g, 100g",
        pouch: "20g, 50g, 100g, 200g, 500g",
        notes: "Mirch 1KG Pouch",
    },
    {
        product: "Dhania",
        box: "50g, 100g",
        pouch: "20g, 50g, 100g, 200g, 500g",
        notes: "Dhania 1KG Pouch",
    },
];