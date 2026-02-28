import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Home() {
    return (
        <div className="w-full">

            {/* HERO SECTION */}
            <section className="bg-green-50">
                <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Pure Natural <br /> Authentic Indian Spices
                        </h1>

                        <p className="text-gray-700 text-lg mb-6">
                            Premium quality spices and masalas sourced directly from trusted
                            farmers across India.
                        </p>

                        <a
                            href="#products"
                            className="inline-block bg-green-700 text-white px-8 py-4 rounded-xl text-lg hover:bg-green-800"
                        >
                            Explore Products
                        </a>
                    </div>

                    <img
                        src="/products/hero_collage.png"
                        alt="Spices Collection"
                        className="rounded-2xl shadow-lg"
                    />
                </div>
            </section>

            {/* PRODUCTS */}
            <section id="products" className="max-w-7xl mx-auto px-4 py-20">
                <h2 className="text-3xl font-bold mb-10 text-center">
                    Our Products
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <Link key={product.id} to={`/product/${product.id}`}>
                            <ProductCard product={product} />
                        </Link>
                    ))}
                </div>
            </section>

        </div>
    );
}
