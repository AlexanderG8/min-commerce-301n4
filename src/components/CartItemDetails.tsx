import React from 'react'
import type { CartItem } from '../types'

interface CartItemDetailsProps {
  item: CartItem
}

export const CartItemDetails: React.FC<CartItemDetailsProps> = ({ item }) => {
  return (
    <div className="flex items-center space-x-4">
      <img 
        src={item.product.imageURL} 
        alt={item.product.name} 
        className="w-16 h-16 rounded object-cover"
      />
      <div>
        <h3 className="font-semibold text-gray-800">{item.product.name}</h3>
        <p className="text-sm text-gray-500">Categoría: {item.product.category}</p>
        <p className="text-sm text-gray-500">
          Precio: ${item.product.salePrice ?? item.product.price}
        </p>
      </div>
    </div>
  )
}