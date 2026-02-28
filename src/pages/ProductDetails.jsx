import { useParams } from "react-router-dom";
import products from "../data/products";

export default function ProductDetails() {
    const { id } = useParams();
    const product = products.find((p) => p.id === id);

    if (!product) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-20">
                <h2 className="text-xl font-semibold">Product not found</h2>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12">

            {/* Image */}
            <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-2xl shadow-md"
            />

            {/* Details */}
            <div>
                <h1 className="text-3xl font-bold mb-4">
                    {product.name}
                </h1>

                <p className="text-gray-700 mb-4">
                    {product.description}
                </p>

                <p className="mb-2">
                    <strong>Weight:</strong> {product.weight}
                </p>

                <p className="text-2xl font-bold mb-6">
                    ₹{product.price}
                </p>

                <button className="bg-green-700 text-white px-8 py-4 rounded-xl hover:bg-green-800">
                    Login to Order
                </button>
            </div>

        </div>
    );
}
