"use client";

import { useCart } from "@/app/context/cartContext";
import React from "react";


const Subtotal = () => {
  const { cartItems, totalPrice } = useCart();

  return (
    <div className="w-[90%] mx:2 text-custom-green md:mx-auto sm:w-[400px] md:w-[500px] mx-auto lg:w-[508px] h-fit xl:w-[608px] py-9 lg:pb-14 lg:py-20 lg:px-9 space-y-9">
      <div className="xl:w-[533px] space-y-9">


        {/* Cart Summary */}
        <div className="flex flex-col gap-y-5 border-b pb-4">
          <div className="flex items-center justify-between">
            <span className="text-3xl font-medium">Product</span>
            <span className="text-3xl font-medium">Subtotal</span>
          </div>

          {/* Display Cart Items */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between text-gray-600"
            >
              <span>
              {item.name} <span className="text-black">*</span>{" "}
                <span className="text-black">{item.quantity}</span>
              </span>
              <span>
                Rs.{" "}
                {item.price * item.quantity}
              </span>
            </div>
          ))}

          {/* Subtotal and Total */}
          <div className="flex items-center justify-between">
            <span>Subtotal</span>
            <span>Rs. {totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex items-center justify-between">
            <span>Total</span>
            <span className="text-2xl font-bold text-custom-green">
              Rs. {totalPrice.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="space-y-6">
          <p className="font-medium text-black">Select Payment Method</p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="easypaisa"
                name="paymentMethod"
                value="easypaisa"
                className="mr-2 transform w-6 h-6"
              />
              <label htmlFor="easypaisa" className="text-black">
                Easypaisa
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="jazzcash"
                name="paymentMethod"
                value="jazzcash"
                className="mr-2 transform w-6 h-6"
              />
              <label htmlFor="jazzcash" className="text-black">
                JazzCash
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="bankTransfer"
                name="paymentMethod"
                value="bankTransfer"
                className="mr-2 transform w-6 h-6"
              />
              <label htmlFor="bankTransfer" className="text-black">
                Bank Transfer
              </label>
            </div>
          </div>
          <p className="font-light text-gray-600">
            The selected method will guide you to securely complete the payment. Please use your Order ID as the payment reference.
          </p>
        </div>

        {/* Privacy Policy */}
        <div>
          <p>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span className="font-semibold">privacy policy.</span>{" "}
          </p>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="border border-black text-xl py-4 px-10 lg:px-28 bg-custom-green text-white hover:bg-emerald-950 rounded font-medium relative overflow-hidden transition-all duration-300 ease-out group"
          >
            Place Order
          </button>
          <span className="absolute top-0 left-0 w-full h-full transition-all duration-500 ease-out group-hover:shadow-[0_20px_50px_0_rgba(0,0,0,0.2)]"></span>
        </div>
      </div>
    </div>
  );
};

export default Subtotal;
