import NavImage from '@/components/NavImage';
import Delivery from '@/components/ourDelivery';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const Cart = () => {
  return (
    <section className="w-[98%] md:w-full  md:space-y-16 ">
      <NavImage heading={"Cart"} path={"Home"} currentPage={"Cart"}/>
      <div className="flex flex-col lg:flex-row max-w-screen-xl   mx-auto justify-between gap-y-20 lg:gap-x-8">
        {/* Product List */}
        <div className="w-full lg:max-w-[817px] space-y-8">
          {/* Large Screen - Flex Layout */}
          <div className="hidden md:block bg-[#FFF9E5] py-4 rounded-lg">
            <ul className="flex items-center justify-around text-sm md:text-base font-medium">
              <li>Product</li>
              <li>Price</li>
              <li>Quantity</li>
              <li>Subtotal</li>
            </ul>
          </div>

          {/* Product Item for Small Screens */}
          <div className="md:hidden py-10 flex flex-col gap-y-8">
            <div className="flex items-center gap-4 border-b pb-4">
              <div className="relative w-24 h-20 bg-[#FBEBB5] rounded-lg">
                <Image
                  src="/table-2.jpg"
                  alt="cart-img"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="flex-grow">
                <p className="text-gray-500 text-sm truncate">
                  Asgaard sofa
                </p>
                <p className="text-gray-500 text-xs mt-2">Rs. 250,000.00</p>
                <div className="flex items-center gap-4 mt-4">
                  <span className="px-2 py-1 border border-gray-300 rounded-md text-xs sm:text-sm">
                    1
                  </span>
                  <p className="font-medium text-sm">Rs. 250,000.00</p>
                </div>
              </div>
              <AiFillDelete
                className="text-[#FBEBB5] cursor-pointer"
                size={24}
              />
            </div>
          </div>

          {/* Product Item for Medium and Large Screens */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative w-24 h-24 bg-[#FBEBB5] rounded-lg">
                <Image
                  src="/hero.png"
                  alt="cart-img"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="text-gray-500 text-sm md:text-base font-medium truncate max-w-[150px]">
                Asgaard sofa
              </p>
            </div>
            <p className="text-gray-500 text-sm md:text-base font-medium">Rs. 250,000.00</p>
            <span className="px-4 py-1 border border-gray-300 rounded-md text-sm md:text-base">
              1
            </span>
            <p className="text-sm md:text-base font-medium">Rs. 250,000.00</p>
            <AiFillDelete
              className="hover:text-[#c79c39] text-[#FBEBB5] cursor-pointer"
              size={30}
            />
          </div>
        </div>

        {/* Cart Totals */}
        <div className="bg-[#FFF9E5] flex flex-col items-center justify-between px-6 py-8 w-full md:w-96 lg:w-72 xl:w-96 h-auto md:h-96  rounded-md">
          <h4 className="text-2xl md:text-3xl font-semibold mb-6">Cart Totals</h4>
          <div className="flex flex-col gap-y-6 w-full">
            <div className="flex justify-between">
              <span className="font-medium text-base md:text-lg">Subtotal</span>
              <span className="text-gray-400 text-base md:text-lg">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-base md:text-lg">Total</span>
              <span className=" text-[#B88E2F] font-medium text-lg md:text-xl">
                Rs. 250,000.00
              </span>
            </div>
          </div>
          <Link href="/checkout">
            <button className="w-full mt-6 px-16 py-3 border-2 border-black text-black hover:text-white hover:bg-black  text-base md:text-lg rounded-xl">
              Check Out
            </button>
          </Link>
        </div>
      </div>
      <Delivery/>
    </section>
  );
};

export default Cart;
