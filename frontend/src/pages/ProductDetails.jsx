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
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-20 grid md:grid-cols-2 gap-8 md:gap-12 items-start">

            {/* Image */}
            <div className="bg-gray-50 rounded-lg border p-3 sm:p-4">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full max-h-[520px] md:max-h-[720px] object-contain rounded-lg"
                />
            </div>

            {/* Details */}
            <div>
                <h1 className="text-2xl sm:text-3xl font-bold mb-4">
                    {product.name}
                </h1>

                <p className="text-gray-700 mb-4">
                    {product.description}
                </p>

                <p className="mb-2">
                    <strong>Weight:</strong> {product.weight}
                </p>

                {product.features?.length > 0 && (
                    <div className="mt-8">
                        <h2 className="text-lg font-semibold mb-3">
                            Product Highlights
                        </h2>
                        <ul className="grid gap-3 text-gray-700">
                            {product.features.map((feature) => (
                                <li
                                    key={feature}
                                    className="border border-green-100 bg-green-50 rounded-lg px-4 py-3"
                                >
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

        </div>
    );
}
