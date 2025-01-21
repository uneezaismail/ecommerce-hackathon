"use client"
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  discount?: number;
  quantity: number;
  images: string;
  size?: string;
  color?: string;
  inventory: number
};

type CartContextType = {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  incrementItem: (id: string) => void;
  decrementItem: (id: string) => void;
  totalPrice: number;
  totalItems: number;
  cartItemsNumber: number; 
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);


  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);



  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addItem = (item: CartItem) => {
    setCartItems((prev) => {
      const existingItemIndex = prev.findIndex((cartItem) => cartItem.id === item.id);
      if (existingItemIndex !== -1) {
        return prev.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        return [...prev, item];
      }
    });
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const incrementItem = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity < item.inventory 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementItem = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = item.price;
    return acc + price * item.quantity;
  }, 0);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const cartItemsNumber = cartItems.length;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        incrementItem,
        decrementItem,
        totalPrice,
        totalItems,
        cartItemsNumber,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
