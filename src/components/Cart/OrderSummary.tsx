import Link from 'next/link';
import React from 'react';

interface OrderSummaryProps {
  subtotal: number;
  totalItems: number;
  onCheckout: () => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ subtotal, totalItems, onCheckout }) => {
  return (
    <div className="flex border-black border-2 flex-col items-center px-6 py-16 w-80 mx-auto md:w-96 lg:w-72 xl:w-96 rounded-md">
      <h2 className="text-2xl md:text-3xl text-custom-green font-semibold mb-6">Cart Totals</h2>
      <div className="flex flex-col gap-y-6 w-full">
        <div className="flex justify-between">
          <span className="font-medium text-base md:text-lg">Subtotal</span>
          <span className="text-gray-600 text-base md:text-lg">Rs. {subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-base md:text-lg">Total Items</span>
          <span className="text-custom-green font-medium text-lg md:text-xl">{totalItems}</span>
        </div>
      </div>
     <Link href={"/checkout"}> <button
        onClick={onCheckout}
        className="w-full text-center mt-10 cursor-pointer p-10 py-4 border-2 bg-custom-green  text-white hover:bg-emerald-950 rounded font-medium relative overflow-hidden transition-all duration-300 ease-out"
      >
        Proceed to Checkout
      </button>
      </Link>
    </div>
  );
};

export default OrderSummary;
