import React from 'react'
import { useCart } from '../hooks/useCart'
import type { CartItem } from '../types'

interface CartItemActionsProps {
  item: CartItem
}

export const CartItemActions: React.FC<CartItemActionsProps> = ({ item }) => {
  const { updateItem, removeItem } = useCart()
  
  const handleIncrement = () => {
    updateItem(item.product.id, item.quantity + 1)
  }
   
  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateItem(item.product.id, item.quantity - 1)
    } else {
      removeItem(item.product.id)
    }
  }
  
  const handleRemove = () => {
    removeItem(item.product.id)
  }
  
  return (
    <div className="flex flex-col items-end space-y-2">
      <div className="flex items-center space-x-2">
        <button 
          onClick={handleDecrement}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-gray-800"
        >
          -
        </button>
        <span className="mx-2 font-medium text-gray-500">{item.quantity}</span>
        <button 
          onClick={handleIncrement}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-gray-800"
        >
          +
        </button>
      </div>
      <button 
        onClick={handleRemove}
        className="text-sm text-red-500 hover:text-red-700"
      >
        Eliminar
      </button>
    </div>
  )
}