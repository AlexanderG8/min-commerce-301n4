import type { Product } from "../types";
import { ProductTag } from "./ProductTag";
import { formatPrice } from "../utils/formatPrice";

export function ProductCard(product : Product){
    return (
        <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 hover:-translate-y-1">
            {/* Image Container */}
            <div className="relative overflow-hidden">
                <img 
                    src={product.imageURL} 
                    alt={product.name} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <ProductTag isOnSale={product.onSale || false} />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-gray-600">
                    {product.category}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {product.name}
                </h3>
                
                {/* Price Section */}
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        {product.salePrice ? (
                            <>
                                <span className="text-2xl font-bold text-green-600">
                                    {formatPrice(product.salePrice)}
                                </span>
                                <span className="text-sm text-gray-500 line-through">
                                    {formatPrice(product.price)}
                                </span>
                            </>
                        ) : (
                            <span className="text-2xl font-bold text-gray-800">
                                {formatPrice(product.price)}
                            </span>
                        )}
                    </div>
                    
                    {/* Add to Cart Button */}
                    <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Agregar
                    </button>
                </div>

                {/* Savings Badge */}
                {product.salePrice && (
                    <div className="mt-3 text-center">
                        <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                            Ahorras {formatPrice(product.price - product.salePrice)}
                        </span>
                    </div>
                )}
            </div>
        </div>
    )
}
