import type { Product } from "../types";
import { ProductTag } from "./ProductTag";
import { formatPrice } from "../utils/formatPrice";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/cartContext.tsx";
import { ProductModal } from "./ProductModal";

export function ProductCard(product : Product){
    const { addItem } = useContext(CartContext)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)
    return (
        <>
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
                {/* Icono de lupa */}
                <button 
                    onClick={openModal}
                    className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 text-gray-700 hover:text-blue-600 hover:bg-white transition-all duration-200"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
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
                    <button 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        onClick={() => addItem(product)}
                    >
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
        
        {/* Modal de detalles del producto */}
        <ProductModal 
            product={product}
            isOpen={isModalOpen}
            onClose={closeModal}
        />
        </>
    )
}
