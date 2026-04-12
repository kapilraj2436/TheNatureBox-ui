export default function ProductCard({ product }) {
    return (
        <div className="border rounded-2xl p-5 shadow-sm hover:shadow-xl transition duration-300 bg-white flex flex-col">

            {/* Image container */}
            <div className="w-full h-64 flex items-center justify-center mb-4">
                <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain rounded-lg"
                />
            </div>

            {/* Content */}
            <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
            <p className="text-sm text-gray-600 flex-grow">
                {product.description}
            </p>

            <p className="text-sm font-medium mt-3">
                Net Weight: {product.weight}
            </p>
        </div>
    );
}
