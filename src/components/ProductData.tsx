// "use client";
// import React, { useState } from "react";
// import { AiFillStar, AiFillTwitterCircle } from "react-icons/ai";
// import { FaFacebook, FaStarHalfAlt } from "react-icons/fa";
// import { IoLogoLinkedin } from "react-icons/io5";

// const ProductData: React.FC = () => {
//   const [quantity, setQuantity] = useState<number>(1);

//   const increaseQuantity = () => setQuantity(quantity + 1);
//   const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

//   return (
//     <div className="space-y-10 md:space-y-16">
//       {/* Product Title */}
//       <div className="w-[330px] md:w-[500px]  xl:w-[606px]  sm:p-4 space-y-4">

//       <h1 className="text-4xl  mb-2">Asgaard Sofa</h1>
//       <p className="text-2xl text-gray-500 font-medium">Rs. 250,000.00</p>
//       <div className="flex items-center gap-x-4 gap-y-6">
//         <div className="flex  items-center">
//           <AiFillStar className="text-[#f2e385] text-md md:text-xl" />
//           <AiFillStar className="text-[#f2e385] text-md md:text-xl" />
//           <AiFillStar className="text-[#f2e385] text-md md:text-xl" />
//           <AiFillStar className="text-[#f2e385] text-md md:text-xl" />
//           <FaStarHalfAlt className="text-[#f2e385] " />
//         </div>
//         <span>|</span>
//         <span>5 Customer Review</span>
//       </div>
//       {/* Product Description */}
//       <p className="mb-4 text-black">
//         Setting the bar as one of the loudest speakers in its class, the Kilburn
//         is a compact, stout-hearted hero with a well-balanced audio which boasts
//         a clear midrange and extended highs for a sound.
//       </p>

//       {/* Size Options */}
//       <div className="flex flex-col gap-y-4">
//         <p className="text-xl text-gray-300">Size:</p>
//         <div className="flex gap-2">
//           {["L", "XL", "XS"].map((size) => (
//             <button key={size} className="px-6 rounded-xl py-2 bg-[#FBEBB5]">
//               {size}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Color Options */}
//       <div className="flex flex-col gap-y-4">
//         <p className=" font-semibold text-gray-300">Color:</p>
//         <div className="flex gap-2">
//           {["bg-[#816DFA]", "bg-black", "bg-[#CDBA7B]"].map((color, index) => (
//             <button
//               key={index}
//               className={`w-8 h-8 rounded-full ${color} border border-gray-300`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Quantity Selector */}
//       <div className="flex gap-x-4">
//         <div className="flex items-center gap-2 p-4 border rounded-xl">
//           <button className="md:px-3 md:py-1" onClick={decreaseQuantity}>
//             -
//           </button>
//           <span className="md:px-4 px-2 py-1">{quantity}</span>
//           <button className="md:px-3 md:py-1 " onClick={increaseQuantity}>
//             +
//           </button>
//         </div>

//         <button className=" md:py-4 px-6 md:px-12 border border-black rounded-xl text-black ">
//           Add to Cart
//         </button>
//       </div>
//       </div>

//       <div className="space-y-6 md:space-y-14">
//       <hr />
// <div className="flex flex-col justify-between gap-y-3">
//         <div className="flex items-center gap-x-16">
//           <span>SKU</span>
//           <span>:SS001</span>
//         </div>
//         <div className="flex items-center gap-x-16">
//           <span>Category</span>
//           <span>:Sofas</span>
//         </div>
//         <div className="flex items-center gap-x-16">
//           <span>Tags</span>
//           <span>:Sofa, Chair, Home, Shop</span>
//         </div>
//         <div className="flex items-center gap-x-16">
//           <span>Share</span>
//           <span className="flex items-center gap-x-6">
//             :{" "}
//             <span>
//               <FaFacebook size={25}/>
//             </span>{" "}
//             <span>
//               <IoLogoLinkedin size={25}/>
//             </span>{" "}
//             <span>
//               <AiFillTwitterCircle size={25}/>
//             </span>
//           </span>
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductData;












"use client";
import React, { useState } from "react";
import { AiFillStar, AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaStarHalfAlt } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import CartItem from "./cart";

const ProductData: React.FC = () => {
  const [showCart, setShowCart] = useState<boolean>(false);

  const toggleCart = () => setShowCart(!showCart);

  return (
    <>
      {/* Main Product Details */}
      <div className="space-y-10 md:space-y-16">
        <div className="w-[330px] md:w-[500px] xl:w-[606px] sm:p-4 space-y-4">
          <h1 className="text-4xl mb-2">Asgaard Sofa</h1>
          <p className="text-2xl text-gray-500 font-medium">Rs. 250,000.00</p>
          <div className="flex items-center gap-x-4 gap-y-6">
            <div className="flex items-center">
              <AiFillStar className="text-[#f2e385] text-md md:text-xl" />
              <AiFillStar className="text-[#f2e385] text-md md:text-xl" />
              <AiFillStar className="text-[#f2e385] text-md md:text-xl" />
              <AiFillStar className="text-[#f2e385] text-md md:text-xl" />
              <FaStarHalfAlt className="text-[#f2e385]" />
            </div>
            <span>|</span>
            <span>5 Customer Review</span>
          </div>

          <p className="mb-4 text-black">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>

          <div className="flex flex-col gap-y-4">
            <p className="text-xl text-gray-300">Size:</p>
            <div className="flex gap-2">
              {["L", "XL", "XS"].map((size) => (
                <button key={size} className="px-6 rounded-xl py-2 bg-[#FBEBB5]">
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-y-4">
            <p className="font-semibold text-gray-300">Color:</p>
            <div className="flex gap-2">
              {["bg-[#816DFA]", "bg-black", "bg-[#CDBA7B]"].map(
                (color, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 rounded-full ${color} border border-gray-300`}
                  />
                )
              )}
            </div>
          </div>

          <div className="flex gap-x-4">
            <div className="flex items-center gap-2 p-4 border rounded-xl">
              <button className="md:px-3 md:py-1">-</button>
              <span className="md:px-4 px-2 py-1">1</span>
              <button className="md:px-3 md:py-1 ">+</button>
            </div>

            <button
              className="md:py-4 px-6 md:px-12 border border-black rounded-xl text-black"
              onClick={toggleCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed top-0 right-4 w-[471px] h-[746px] bg-white shadow-lg border rounded-lg z-50">
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={toggleCart}
              className="absolute top-1 right-2 text-black bg-gray-200 rounded-full p-2"
            >
              ✕
            </button>

            {/* Cart Content */}
            <CartItem />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductData;
