"use client"
import type React from "react"
import { createContext, useContext, useReducer, useEffect, type ReactNode, useMemo } from "react"

type CartItem = {
  id: string
  name: string
  price: number
  discount?: number
  discountedPrice: number
  quantity: number
  images: string
  size?: string
  color?: string
  inventory: number
}

interface CartContextType {
  cartItems: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  incrementItem: (id: string) => void
  decrementItem: (id: string) => void
  totalPrice: number
  totalItems: number
  cartItemsNumber: number
  clearCart: () => void
  cartItemsCount: number
  subtotal: number
  discountedSubtotal: number
  totalSavings: number
}

const CartContext = createContext<CartContextType | null>(null)

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "INCREMENT_ITEM"; payload: string }
  | { type: "DECREMENT_ITEM"; payload: string }
  | { type: "CLEAR_CART" }

const reducer = (state: CartItem[], action: CartAction): CartItem[] => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItem = state.find((item) => item.id === action.payload.id)
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + action.payload.quantity } : item,
        )
      }
      return [
        ...state,
        {
          ...action.payload,
          discountedPrice: action.payload.discount
            ? action.payload.price - (action.payload.price * action.payload.discount) / 100
            : action.payload.price,
        },
      ]
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload)
    case "INCREMENT_ITEM":
      return state.map((item) =>
        item.id === action.payload && item.quantity < item.inventory ? { ...item, quantity: item.quantity + 1 } : item,
      )
    case "DECREMENT_ITEM":
      return state.map((item) =>
        item.id === action.payload && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item,
      )
    case "CLEAR_CART":
      return []
    default:
      return state
  }
}

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, dispatch] = useReducer(reducer, [])

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems")
    if (storedCart) {
      JSON.parse(storedCart).forEach((item: CartItem) => dispatch({ type: "ADD_ITEM", payload: item }))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems])

  const addItem = (item: CartItem) => {
    dispatch({ type: "ADD_ITEM", payload: item })
  }

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const incrementItem = (id: string) => {
    dispatch({ type: "INCREMENT_ITEM", payload: id })
  }

  const decrementItem = (id: string) => {
    dispatch({ type: "DECREMENT_ITEM", payload: id })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  }, [cartItems])

  const discountedSubtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.discountedPrice * item.quantity, 0)
  }, [cartItems])

  const totalSavings = useMemo(() => {
    return subtotal - discountedSubtotal
  }, [subtotal, discountedSubtotal])

  const totalItems = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0)
  }, [cartItems])

  const cartItemsNumber = cartItems.length

  const value: CartContextType = {
    cartItems,
    addItem,
    removeItem,
    incrementItem,
    decrementItem,
    totalPrice: discountedSubtotal,
    totalItems,
    cartItemsNumber,
    clearCart,
    cartItemsCount: totalItems,
    subtotal,
    discountedSubtotal,
    totalSavings,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

const useCart = () => {
  const context = useContext(CartContext)
  if (context === null) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

export { CartProvider, useCart }

