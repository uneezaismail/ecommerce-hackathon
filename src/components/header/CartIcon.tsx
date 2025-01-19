"use client";
import { useCart } from "@/app/context/cartContext";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartIcon = () => {
  const { cartItemsNumber } = useCart();

  return (
    <div className="relative">
      <AiOutlineShoppingCart size={19} className="sm:size-6 hover:scale-110" />
      {cartItemsNumber > 0 && (
        <span className="absolute -top-2 -right-2 bg-[#c34d4d] text-white text-[10px] sm:text-xs w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center">
          {cartItemsNumber}  
        </span>
      )}
    </div>
  );
};

export default CartIcon;
