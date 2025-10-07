import { createContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import type { CartItem, Product } from '../types'

export interface CartContextType {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  updateItem: (productId: string, quantity: number) => void
  clearCart: () => void
}

export const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateItem: () => {},
  clearCart: () => {},
})

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    // Cargar datos del localStorage al inicializar
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  // Guardar en localStorage cuando cambia el carrito
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items))
  }, [items])

  const addItem = (product: Product) => {
    setItems(prev => {
      const exists = prev.find(ci => ci.product.id === product.id)
      if (exists) {
        return prev.map(ci =>
          ci.product.id === product.id
            ? { ...ci, quantity: ci.quantity + 1 }
            : ci
        )
      }
      return [...prev, { product, quantity: 1 }]
    })
  }

  const removeItem = (productId: string) => {
    setItems(prev => prev.filter(ci => ci.product.id !== productId))
  }

  const updateItem = (productId: string, quantity: number) => {
    setItems(prev =>
      prev.map(ci =>
        ci.product.id === productId
          ? { ...ci, quantity: Math.max(1, quantity) }
          : ci
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateItem, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}