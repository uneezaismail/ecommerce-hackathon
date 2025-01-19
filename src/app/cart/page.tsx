"use client";
import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/cartContext";


type CartItem = {
  id: string;
  name: string;
  price: number;
  discount?: number;
  quantity: number;
  images: string;
  size?: string;
  color?: string;
};


const Cart = () => {
  const {
    cartItems,
    removeItem,
    incrementItem,
    decrementItem,
    totalPrice,
    totalItems,
  } = useCart();

  console.log(cartItems)

  return (
    <section className="w-full min-h-svh py-16 sm:px-6 md:space-y-16">
      <div className="px-2 max-w-screen-xl md:mx-auto">
        {cartItems.length > 0 ? (
          <>
            <h1 className="text-2xl md:text-3xl text-custom-green font-bold mb-6">
              Your Cart
            </h1>
            <div className="flex flex-col lg:flex-row justify-between gap-y-20 lg:gap-x-8">
              {/* Cart Items */}
              <div className="w-full lg:max-w-[700px] xl:max-w-[817px] space-y-2">
                <div className="hidden md:block py-4 rounded-lg">
                  <ul className="flex items-center justify-around text-sm md:text-base font-medium">
                    <li>Product</li>
                    <li>Subtotal</li>
                    <li>Quantity</li>
                  </ul>
                </div>

                {cartItems.map((item:CartItem) => (
                  <div
                    key={item.id}
                    className="flex flex-row border-t pt-4 items-center justify-between md:p-4 rounded-lg gap-y-4 md:gap-y-0"
                  >
                    <div className="flex flex-row items-center gap-4">
                      <Image
                        src={item.images}
                        alt={item.name}
                        height={70}
                        width={80}
                        className="w-20 h-20 md:w-28 md:h-28 object-cover border border-black bg-red-200"
                      />
                      <div className="space-y-6">
                        <div className="text-custom-green">
                          <p className="text-[15px] md:text-base font-medium">
                            {item.name}
                          </p>
                          <div className="flex items-center gap-2">
                            <p className="text-xs">{item.color}</p>
                            <span>|</span>
                            <p className="text-xs">{item.size}</p>
                          </div>
                        </div>
                        <p className="md:hidden text-custom-green font-semibold text-sm md:text-base">
                          Rs. {item.quantity * item.price}
                        </p>
                      </div>
                    </div>

                    <p className="hidden text-custom-green md:block text-sm md:text-base font-medium">
                      Rs. {item.quantity * item.price}
                    </p>

                    <div className="flex-col-reverse md:flex-row flex gap-4">
                      <div className="flex items-center border border-gray-400 gap-2">
                        <button
                          onClick={() => decrementItem(item.id)}
                          className="px-2 py-1 rounded-md"
                        >
                          -
                        </button>
                        <span className="px-2 sm:px-4 py-1 rounded-md">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => incrementItem(item.id)}
                          className="px-2 py-1 rounded-md"
                        >
                          +
                        </button>
                      </div>
                      <div className="flex justify-end w-full">
                        <RiDeleteBinLine
                          onClick={() => removeItem(item.id)}
                          className="hover:text-red-900 text-red-700 cursor-pointer"
                          size={20}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Totals */}
              <div className="flex border-black border-2 flex-col items-center px-6 py-16 w-80 mx-auto md:w-96 lg:w-72 xl:w-96 rounded-md">
                <h4 className="text-2xl md:text-3xl text-custom-green font-semibold mb-6">
                  Cart Totals
                </h4>
                <div className="flex flex-col gap-y-6 w-full">
                  <div className="flex justify-between">
                    <span className="font-medium text-base md:text-lg">
                      Subtotal
                    </span>
                    <span className="text-gray-600 text-base md:text-lg">
                      Rs. {totalPrice}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-base md:text-lg">
                      Total Items
                    </span>
                    <span className="text-custom-green font-medium text-lg md:text-xl">
                      {totalItems}
                    </span>
                  </div>
                </div>
                <Link
  href="/checkout"
  className="w-full text-center mt-10 cursor-pointer py-4 border-2 bg-custom-green text-white hover:bg-emerald-950 rounded font-medium relative overflow-hidden transition-all duration-300 ease-out group"
>
  <span className="relative z-10">Proceed to Checkout</span>
  <span className="absolute top-0 left-0 w-full h-full transition-all duration-500 ease-out group-hover:shadow-[0_20px_50px_0_rgba(0,0,0,0.2)]"></span>
</Link>

              </div>
            </div>
          </>
        ) : (
          <div className="text-center gap-6  min-h-80 h-full flex flex-col items-center justify-center ">
            <p className="text-3xl md:text-4xl font-semibold text-custom-green ">Your cart is empty.</p>
            <Link
              href="/shop"
              className="text-white bg-[#C25b41] rounded  px-6 md:px-10 py-4  hover:bg-[#9e442e] "
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
