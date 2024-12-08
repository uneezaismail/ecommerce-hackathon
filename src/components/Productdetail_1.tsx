"use client"
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";

const ProductDetails: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <div className="w-[606px]  p-4 space-y-4">
      {/* Product Title */}
      <h1 className="text-4xl  mb-2">Asgaard Sofa</h1>
      <p className="text-2xl text-gray-500 font-medium">Rs. 250,000.00</p>

      {/* Product Description */}
      <p className="mb-4 text-gray-700">
      Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.


      </p>
      <div className="flex items-center gap-x-4 gap-y-6">
      <div className="flex  items-center">
      <AiFillStar className="text-[#FFAD33] text-md md:text-xl" />
      <AiFillStar className="text-[#FFAD33] text-md md:text-xl" />
      <AiFillStar className="text-[#FFAD33] text-md md:text-xl" />
      <AiFillStar className="text-[#FFAD33] text-md md:text-xl" />
      <FaStarHalfAlt  className="text-[#FFAD33] " />
      </div>
      <span>|</span>
      <span>5 Customer Review</span>
      </div>

      {/* Size Options */}
      <div className="mb-4">
        <p className="text-xl text-gray-300">Size:</p>
        <div className="flex gap-2">
          {["L", "XL","XS"].map((size) => (
            <button
              key={size}
              className="px-4 py-2 border border-gray-300 rounded hover:bg-[#FBEBB5]"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Options */}
      <div className="">
        <p className=" font-semibold">Color:</p>
        <div className="flex gap-2">
          {["bg-black", "bg-yellow-500", "bg-purple-500"].map((color, index) => (
            <button
              key={index}
              className={`w-8 h-8 rounded-full ${color} border border-gray-300`}
            />
          ))}
        </div>
      </div>

      {/* Quantity Selector */}
      <div className="flex gap-x-4">
      <div className="flex items-center gap-2 mb-4">
        <button
          className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
          onClick={decreaseQuantity}
        >
          -
        </button>
        <span className="px-4 py-1 border">{quantity}</span>
        <button
          className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
          onClick={increaseQuantity}
        >
          +
        </button>
      </div>

      
      <button className=" py-4 px-12 border border-black rounded-xl text-black ">
        Add to Cart
      </button>
      </div>
    </div>
  );
};

export default ProductDetails;