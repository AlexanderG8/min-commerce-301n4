import type { Product } from '../types'
import { formatPrice } from '../utils/formatPrice'

interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!isOpen || !product) return null

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              &times;
            </button>
          </div>
          
          <div className="mt-4 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <img 
                src={product.imageURL} 
                alt={product.name} 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            
            <div className="md:w-1/2">
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                  {product.category}
                </span>
              </div>
              
              <p className="text-3xl font-bold text-gray-900 mb-4">
                {formatPrice(product.price)}
              </p>
              
              <div className="prose prose-sm text-gray-600 mb-6">
                <p>{product.description || 'No hay descripción disponible para este producto.'}</p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Características:</h3>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>ID: {product.id}</li>
                  <li>Categoría: {product.category}</li>
                  <li>Stock: Disponible</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}