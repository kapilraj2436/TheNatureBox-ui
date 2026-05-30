export default function ProductCard({ product }) {
    return (
        <div className="border rounded-lg p-4 sm:p-5 shadow-sm hover:shadow-xl hover:border-green-300 transition duration-300 bg-white flex flex-col group h-full">

            {/* Image container */}
            <div className="w-full aspect-[4/5] sm:aspect-[3/4] flex items-center justify-center mb-4 bg-gray-50 rounded-lg overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain"
                />
            </div>

            {/* Content */}
            <h3 className="font-semibold text-lg sm:text-xl mb-2 transition-colors duration-300 group-hover:text-green-700">
                {product.name}
            </h3>
            <p className="text-sm text-gray-600 flex-grow">
                {product.description}
            </p>

            <p className="text-sm font-medium mt-3 transition-colors duration-300 group-hover:text-green-700">
                Net Weight: {product.weight}
            </p>
        </div>
    );
}
