import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CartItem = () => {
  return (
    <div className="w-[471px] h-[746px] py-[28px] px-[28px] bg-white border rounded-lg justify-between flex flex-col gap-6">
      {/* Heading */}
      <div className='space-y-8'>
      <div>
      <h2 className="text-2xl font-semibold">Shopping Cart</h2>
      </div>
      <hr className="w-full border-gray-300" />

      {/* Product Info in Flex Row */}
      <div className="flex flex-row items-center gap-6">
        {/* Image Section */}
        <div className="w-[108px] h-[108px] bg-[#FBEBB5] rounded-xl overflow-hidden">
          <Image src="/new-arrivals.png" alt="Product Image" width={108} height={108} objectFit="contain" />
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-y-4">
          <h4 className="text-xl font-medium">Asgaard Sofa</h4>
          <p className="text-[#B88E2F] text-lg"><span className='text-black'>1 x </span> Rs 250,000.00</p>
        </div>
      </div>
      </div>
      {/* Data Below the Main Div */}
      <div className="flex flex-col gap-4 mt-6">
        {/* Subtotal */}
        <p className="flex justify-between text-lg font-medium">
          <span>Subtotal</span>
          <span className='text-[#B88E2F] text-xl font-medium'>Rs 250,000.00</span>
        </p>

        {/* Horizontal Rule */}
        <hr className="border-gray-300" />

        {/* Buttons */}
        <div className="flex gap-x-8 mt-4">
         <Link href={"/cart"}> <button className="px-6 hover:bg-black hover:text-white py-2 border-2 border-black rounded-xl  text-black  text-lg">
           View Cart
          </button></Link>
         <Link href={"/checkout"} > <button className="px-6 py-2  hover:bg-black hover:text-white border-2 border-black text-black rounded-xl text-lg">
            Checkout
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
