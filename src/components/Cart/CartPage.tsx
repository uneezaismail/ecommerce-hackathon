"use client"
import React, { useCallback } from 'react';
import Link from 'next/link';
import OrderSummary from './OrderSummary';
import { useCart } from '@/app/context/cartContext';
import CartItem from './CartItems';
import { ShoppingBasket } from 'lucide-react';

const CartPage = () => {
  const { cartItems, removeItem, incrementItem, decrementItem, totalPrice, totalItems } = useCart();

  const handleDecrement = useCallback((id:string) => {
    decrementItem(id);
  }, [decrementItem]);

  const handleIncrement = useCallback((id:string) => {
    incrementItem(id);
  }, [incrementItem]);

  const handleRemove = useCallback((id:string) => {
    removeItem(id);
  }, [removeItem]);

  const handleCheckout = () => {
 
    console.log('Proceed to checkout');
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center gap-6 h-[80vh]  flex flex-col items-center justify-center">
      <div className='flex flex-col items-center '> 
        <span><ShoppingBasket className='size-36 text-custom-green'/></span>
        <p className="text-3xl md:text-4xl font-semibold text-custom-green"> Your cart is empty.</p>
        </div> 
        <Link href="/shop" className="text-white bg-[#C25b41] rounded px-6 md:px-10 py-4 hover:hover:bg-[#9e442e]">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <section className="w-full min-h-svh py-16 sm:px-6 md:space-y-16">
      <div className="px-2 max-w-screen-xl md:mx-auto">
        <h1 className="text-2xl md:text-3xl text-custom-green font-bold mb-6">Your Cart</h1>
        <div className="flex flex-col lg:flex-row justify-between gap-y-20 lg:gap-x-8">
          <div className="w-full lg:max-w-[700px] xl:max-w-[817px] space-y-2">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                onDecrement={() => handleDecrement(item.id)}
                onIncrement={() => handleIncrement(item.id)}
                onRemove={() => handleRemove(item.id)}
              />
            ))}
          </div>
          <OrderSummary subtotal={totalPrice} totalItems={totalItems} onCheckout={handleCheckout} />
        </div>
      </div>
    </section>
  );
};

export default CartPage;
