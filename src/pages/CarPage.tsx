import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { CartItemDetails } from '../components/CartItemDetails'
import { CartItemActions } from '../components/CartItemActions'
import { formatPrice } from '../utils/formatPrice'

export default function CarPage() {
  const { items } = useCart()

  const isEmpty = items.length === 0
  const cartTotal = items.reduce((acc, ci) => {
    const unitPrice = ci.product.salePrice ?? ci.product.price
    return acc + unitPrice * ci.quantity
  }, 0)

  if (isEmpty) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Carrito de Compras</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🛒</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Tu carrito está vacío</h3>
            <p className="text-gray-500 mb-6">Agrega algunos productos para comenzar</p>
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
            >
              Continuar Comprando
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Carrito de Compras</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <ul className="divide-y divide-gray-200">
          {items.map((item) => (
            <li key={item.product.id} className="py-4 flex items-center justify-between">
              <CartItemDetails item={item} />
              <div className="flex flex-col items-end space-y-2">
                <p className="font-semibold text-gray-800">
                  {formatPrice(item.product.price * item.quantity)}
                </p>
                <CartItemActions item={item} />
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-gray-600">Total</span>
          <span className="text-xl font-bold text-gray-900">{formatPrice(cartTotal)}</span>
        </div>

        <div className="mt-6 text-right">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
          >
            Seguir comprando
          </Link>
        </div>
      </div>
    </div>
  )
}