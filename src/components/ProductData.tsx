"use client"

import React, { useState } from "react";
import { AiFillStar} from "react-icons/ai";
import {  FaStarHalfAlt } from "react-icons/fa";

import CartItemSheet from "./cart";


interface ProductDataProps {
  product: any;
}

const ProductData: React.FC<ProductDataProps> = ({product}) => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [activeSize, setActiveSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const toggleCart = () => setShowCart(!showCart);
  const salePrice = product.discountPercentage
  ? (product.price - (product.price * product.discountPercentage) / 100)
  : undefined;
  // console.log(product)


  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  }
  return (
    <>
      <div className="px-3 md:px-4 space-y-10 md:space-y-12">
        <div className="flex flex-col lg:w-[500px] xl:w-[606px] sm:px-4 space-y-3 md:space-y-4">
          <h1 className="text-3xl mb-2 md:mb-0 text-custom-green font-medium">{product.productName}</h1>
        
        <div className="flex items-center gap-4">


        {salePrice ? (
          <div className="text-xl">
            <span className="line-through text-gray-600">Rs. {product.price}</span>
            <span className="text-gray-950 font-semibold ml-2"> Rs. {salePrice}</span>
          </div>
        ) : (
          <p className="text-xl text-gray-950 font-semibold">Rs. {product.price}</p>
        )}


            <div className=" space-y-2">
          
{product.discountPercentage !== undefined && product.discountPercentage > 0   && (
  <div className="bg-[#c34d4d] text-white text-xs px-4 py-1">{product.discountPercentage}%OFF</div>
)}
</div>

</div>
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

          <p className="mb-4 md:mb-0 text-black">
           {product.description}
          </p>

        
          <div className="flex flex-col gap-y-1 py-2  md:gap-y-2">
            <p className=" font-semibold text-custom-green">Sizes:</p>
            <div className="flex gap-2">
              {product.sizes.map((size:any) => (
                <button key={size}  onClick={() => setActiveSize(size)}
                className={`px-6 rounded py-2 border hover:bg-custom-green active:bg-custom-green hover:text-white border-black ${
                  activeSize === size ? "bg-custom-green text-white" : ""
                }`}>
                  {size}
                </button>
              ))}
            </div>
          </div>         

          <div className="flex gap-x-4">
            <div className="flex items-center text-custom-green gap-2 p-2  border rounded">
              <button className="md:px-3 md:py-1" onClick={decrementQuantity}>-</button>
              <span className="md:px-4 font-medium px-2 py-1">{quantity}</span>
              <button className="md:px-3 md:py-1" onClick={incrementQuantity}>+</button>
            </div>

            <button
              className="md:py-4 px-6 md:px-12 w-full border bg-custom-green hover:bg-[#0c2a2a] hover:text-white border-black font-semibold rounded text-white"
              onClick={toggleCart}
            >
              ADD TO CART
            </button>
          </div>


       

        <div className="flex flex-col flex-wrap gap-3 py-6">
          <h4 className="text-xl font-semibold pl-2  text-custom-green">Specifications</h4>
        <ul className="list-disc text-sm pl-6 text-custom-green space-y-2 ">
            <li> <span className=" font-medium mr-2">Material:</span>  <span>{product.material}</span> </li>
            <li>  <span className=" font-medium mr-2">Dimensions:</span>  {product.dimensions}</li>
            <li>  <span className=" font-medium mr-2">Weight:</span>  {product.weight}</li>
            <li>  <span className=" font-medium mr-2">Color:</span>  {product.colors}</li>
          </ul>
        </div>
        <p className="pl-2 text-custom-green"><span className="font-semibold text-sm text-custom-green">Note:</span>  Actual color may vary from image</p>

        </div>
        <CartItemSheet open={showCart} setOpen={setShowCart} />
   

      </div>

     
    </>
  );
};

export default ProductData;



{/* <div className=" space-y-6 md:space-y-14">
<hr />
<div className="flex flex-col justify-between md:gap-x-16 gap-y-2">
 
  <div className="flex items-center gap-x-4 md:gap-x-8">
    <span className="font-semibold">SKU</span>
    <span>:</span>
    <span>SS001</span>
  </div>
  
 
  <div className="flex items-center gap-x-4 md:gap-x-8">
    <span className="font-semibold">Category</span>
    <span>:</span>

    <span>Sofas</span>
  </div>

  <div className="flex items-center gap-x-4 md:gap-x-8">
    <span className="font-semibold">Tags</span>
    <span>:</span>

    <span>Sofa, Chair, Home, Shop</span>
  </div>

 
  <div className="flex  items-center gap-x-4 md:gap-x-8">
    <span className="font-semibold">Share</span>
    <span>:</span>

    <span className="flex items-center gap-x-6">
      <FaFacebook size={25} />
      <IoLogoLinkedin size={25} />
      <AiFillTwitterCircle size={25} />
    </span>
  </div>
</div>
</div> */}



          {/* <div className="flex flex-col gap-y-2 pb-4 md:pb-0 md:gap-y-4">
            <p className="font-semibold text-gray-400">Color:</p>
            <div className="flex gap-2">
              {["bg-[#816DFA]", "bg-black", "bg-[#CDBA7B]"].map(
                (color, index) => (
                  <button
                    key={index}
                    className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${color} border border-gray-300`}
                  />
                )
              )}
            </div>
          </div> */}
















// "use client";
// import React, { useState } from "react";
// import { AiFillStar, AiFillTwitterCircle } from "react-icons/ai";
// import { FaFacebook, FaStarHalfAlt } from "react-icons/fa";
// import { IoLogoLinkedin } from "react-icons/io5";
// import CartItem from "./cart";

// const ProductData: React.FC = () => {
//   const [showCart, setShowCart] = useState<boolean>(false);

//   const toggleCart = () => setShowCart(!showCart);

//   return (
//     <>
//       {/* Main Product Details */}
//       <div className="space-y-10  md:space-y-16">
//         <div className="w-[350px] px-4 md:w-[500px] xl:w-[606px] sm:p-4 space-y-4">
//           <h1 className="text-4xl mb-2">Asgaard Sofa</h1>
//           <p className="text-2xl text-gray-500 font-medium">Rs. 250,000.00</p>
//           <div className="flex items-center gap-x-4 gap-y-6">
//             <div className="flex items-center">
//               <AiFillStar className="text-[#f2e385] text-md md:text-xl" />
//               <AiFillStar className="text-[#f2e385] text-md md:text-xl" />
//               <AiFillStar className="text-[#f2e385] text-md md:text-xl" />
//               <AiFillStar className="text-[#f2e385] text-md md:text-xl" />
//               <FaStarHalfAlt className="text-[#f2e385]" />
//             </div>
//             <span>|</span>
//             <span>5 Customer Review</span>
//           </div>

//           <p className="mb-4 text-black">
//             Setting the bar as one of the loudest speakers in its class, the
//             Kilburn is a compact, stout-hearted hero with a well-balanced audio
//             which boasts a clear midrange and extended highs for a sound.
//           </p>

//           <div className="flex flex-col gap-y-4">
//             <p className="text-xl text-gray-300">Size:</p>
//             <div className="flex gap-2">
//               {["L", "XL", "XS"].map((size) => (
//                 <button key={size} className="px-6 rounded-xl py-2 bg-[#FBEBB5]">
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="flex flex-col gap-y-4">
//             <p className="font-semibold text-gray-300">Color:</p>
//             <div className="flex gap-2">
//               {["bg-[#816DFA]", "bg-black", "bg-[#CDBA7B]"].map(
//                 (color, index) => (
//                   <button
//                     key={index}
//                     className={`w-8 h-8 rounded-full ${color} border border-gray-300`}
//                   />
//                 )
//               )}
//             </div>
//           </div>

//           <div className="flex gap-x-4">
//             <div className="flex items-center gap-2 p-4 border rounded-xl">
//               <button className="md:px-3 md:py-1">-</button>
//               <span className="md:px-4 px-2 py-1">1</span>
//               <button className="md:px-3 md:py-1 ">+</button>
//             </div>

//             <button
//               className="md:py-4 px-6 md:px-12 border border-black rounded-xl text-black"
//               onClick={toggleCart}
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//         <div className="space-y-6 md:space-y-14">
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
//       </div>

      
//       {/* Cart Modal */}
//       {showCart && (
//         <div className="fixed top-0 right-4 lg:w-[471px] md:h-[746px] bg-white shadow-lg border rounded-lg z-50">
//           <div className="relative">
//             {/* Close Button */}
//             <button
//               onClick={toggleCart}
//               className="absolute top-1 right-2 text-black bg-gray-200 rounded-full p-2"
//             >
//               ✕
//             </button>

//             {/* Cart Content */}
//             <CartItem />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ProductData;
