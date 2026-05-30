import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const productFilters = ["All", "Blended", "Grounded", "Grocery"];

const packagingShowcase = [
    "/packing/Packaging at 1.04.53 AM.jpeg",
    "/packing/Packaging at 1.04.53 AM (2).jpeg",
    "/packing/Packaging at 1.04.54 AM.jpeg",
    "/packing/Packaging at 1.04.54 AM (1).jpeg",
];

const spiceRibbonItems = [
    "Haldi",
    "Lal Mirch",
    "Dhania",
    "Garam Masala",
    "Jeera",
    "Ajwain",
    "Kasuri Methi",
    "Fresh aroma",
];

function PackagingShowcase() {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                <div className="relative overflow-hidden rounded-lg bg-[#142217] text-white shadow-xl">
                    <div className="grid lg:grid-cols-[0.72fr_1.28fr] items-center">
                        <div className="px-5 sm:px-8 md:px-10 py-8 md:py-10">
                            <p className="text-sm uppercase tracking-[0.24em] text-green-200 font-semibold mb-4">
                                TNB Special Surprises
                            </p>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                                Shelf-ready packs with a fresh spice identity.
                            </h2>
                            <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed">
                                From carefully sourced spices to thoughtfully packed
                                blends, The Nature Box brings purity, aroma, and
                                everyday Indian flavour closer to every kitchen.
                            </p>
                        </div>

                        <div className="relative h-72 sm:h-96 md:h-[460px] lg:h-[520px] overflow-hidden bg-white/5">
                            {packagingShowcase.map((image, index) => (
                                <img
                                    key={image}
                                    src={image}
                                    alt={`The Nature Box packaging ${index + 1}`}
                                    className="home-pack-fade absolute inset-0 h-full w-full object-contain p-3 sm:p-5"
                                    style={{ animationDelay: `${index * 4}s` }}
                                />
                            ))}
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#142217]/35" />
                        </div>
                    </div>

                    <div className="masala-boundary relative h-16 overflow-hidden border-t border-amber-200/20">
                        <div className="spice-ribbon-track flex h-full w-max items-center">
                            {[...spiceRibbonItems, ...spiceRibbonItems, ...spiceRibbonItems].map((item, index) => (
                                <div
                                    key={`${item}-${index}`}
                                    className="relative z-10 flex h-full items-center gap-3 px-5 text-sm font-bold uppercase tracking-[0.16em] text-amber-50"
                                >
                                    <span className="h-8 w-8 rounded-full border border-amber-200/60 bg-amber-100/15 shadow-inner shadow-black/20 flex items-center justify-center">
                                        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                                    </span>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    const [activeFilter, setActiveFilter] = useState("All");
    const filteredProducts = activeFilter === "All"
        ? products
        : products.filter((product) => product.category === activeFilter);

    return (
        <div className="w-full">

            <PackagingShowcase />

            {/* HERO SECTION */}
            <section className="bg-green-50">
                <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

                    <div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Pure Natural <br /> Authentic Indian Spices
                        </h1>

                        <p className="text-gray-700 text-base sm:text-lg mb-6">
                            Premium quality spices and masalas sourced directly from trusted
                            farmers across India.
                        </p>

                        <a
                            href="#products"
                            className="inline-block bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg hover:bg-green-800"
                        >
                            Explore Products
                        </a>
                    </div>

                    <img
                        src="/products/hero_collage.png"
                        alt="Spices Collection"
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>
            </section>

            {/* PRODUCTS */}
            <section id="products" className="max-w-7xl mx-auto px-4 py-14 md:py-20">
                <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <h2 className="text-3xl font-bold">
                        Our Products
                    </h2>

                    <div className="flex w-full gap-2 overflow-x-auto rounded-lg border bg-white p-1 shadow-sm md:w-auto">
                        {productFilters.map((filter) => {
                            const isActive = activeFilter === filter;

                            return (
                                <button
                                    key={filter}
                                    type="button"
                                    onClick={() => setActiveFilter(filter)}
                                    className={`shrink-0 rounded-md px-4 py-2 text-sm font-semibold transition ${
                                        isActive
                                            ? "bg-green-800 text-white shadow-sm"
                                            : "text-gray-700 hover:bg-green-50 hover:text-green-900"
                                    }`}
                                >
                                    {filter}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
                    {filteredProducts.map((product) => (
                        <Link
                            key={product.id}
                            to={`/product/${product.id}`}
                            className="block no-underline text-inherit"
                        >
                            <ProductCard product={product} />
                        </Link>
                    ))}
                </div>
            </section>

        </div>
    );
}
