"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiXMark } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

const CartItemSheet = ({ open, setOpen }: { open: boolean; setOpen: (value: boolean) => void }) => {
  return (
    <Sheet open={open} onOpenChange={setOpen} >
      <SheetContent className="sm:max-w-lg bg-white pb-6 w-[90vw] p-6">
        {/* Header */}
        <SheetHeader>
          <SheetTitle className="text-xl md:text-2xl text-left  font-semibold">Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col justify-between h-full">
          {/* Cart Item */}
          <div className="mt-6 space-y-8">
            <hr className="w-full border-gray-300" />

            <div className="flex  items-center gap-4 sm:gap-6">
              {/* Image Section */}
              <div className="w-20 h-16 sm:w-[108px] sm:h-[108px] bg-[#FBEBB5] rounded-xl overflow-hidden">
                <Image
                  src="/hero.png"
                  alt="Product Image"
                  width={108}
                  height={108}
                  objectFit="contain"
                />
              </div>

              {/* Product Info */}
              <div className="flex  justify-between items-center  w-full ">
                <div  className="flex flex-col gap-2 md:gap-y-4">
                <h4 className="text-sm md:text-xl font-medium">Asgaard Sofa</h4>
                <p className="text-[#B88E2F] flex items-center gap-2 space-2 text-sm md:text-lg">
                  <span className="text-black">1</span> <span> <HiXMark/> </span> <span>Rs 250,000.00</span> 
                </p>
                </div>
                <IoClose size={24} className="md:size-6  text-white p-1 rounded-full bg-zinc-300 hover:bg-zinc-500"/>
              </div>
            </div>
          </div>

          {/* Subtotal and Actions */}
          <div className="flex flex-col gap-4 mt-6">
            {/* Subtotal */}
            <p className="flex justify-between text-sm sm:text-lg font-medium">
              <span>Subtotal</span>
              <span className="text-[#B88E2F] text-sm sm:text-md md:text-xl font-medium">Rs 250,000.00</span>
            </p>

            {/* Horizontal Rule */}
            <hr className="border-gray-300" />

            {/* Action Buttons */}
            <div className="flex justify-between gap-x-8 mt-2 mb-6">
              <Link href="/cart">
                <button className="px-4 md:px-12 hover:bg-black hover:text-white py-2 border-2 border-black  rounded-full text-black text-md md:text-lg">
                  View Cart
                </button>
              </Link>
              <Link href="/checkout">
                <button className="px-4 md:px-12 py-2 bg-black hover:bg-white text-white hover:border-2 hover:border-black hover:text-black rounded-full text-md md:text-lg">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartItemSheet;



















// "use client";

// import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { HiXMark } from "react-icons/hi2";
// import { IoClose } from "react-icons/io5";

// const CartItemSheet = ({ open, setOpen }: { open: boolean; setOpen: (value: boolean) => void }) => {
//   return (
//     <Sheet open={open} onOpenChange={setOpen} >
//       <SheetContent className="sm:max-w-lg bg-white pb-6 w-[90vw] p-6">
//         {/* Header */}
//         <SheetHeader>
//           <SheetTitle className="text-xl md:text-2xl text-left  font-semibold">Shopping Cart</SheetTitle>
//         </SheetHeader>

//         <div className="flex flex-col justify-between h-full">
//           {/* Cart Item */}
//           <div className="mt-6 space-y-8">
//             <hr className="w-full border-gray-300" />

//             <div className="flex  items-center gap-4 sm:gap-6">
//               {/* Image Section */}
//               <div className="w-20 h-16 sm:w-[108px] sm:h-[108px] bg-[#FBEBB5] rounded-xl overflow-hidden">
//                 <Image
//                   src="/hero.png"
//                   alt="Product Image"
//                   width={108}
//                   height={108}
//                   objectFit="contain"
//                 />
//               </div>

//               {/* Product Info */}
//               <div className="flex  justify-between items-center  w-full ">
//                 <div  className="flex flex-col gap-2 md:gap-y-4">
//                 <h4 className="text-sm md:text-xl font-medium">Asgaard Sofa</h4>
//                 <p className="text-[#B88E2F] flex items-center gap-2 space-2 text-sm md:text-lg">
//                   <span className="text-black">1</span> <span> <HiXMark/> </span> <span>Rs 250,000.00</span> 
//                 </p>
//                 </div>
//                 <IoClose size={24} className="md:size-6  text-white p-1 rounded-full bg-zinc-300 hover:bg-zinc-500"/>
//               </div>
//             </div>
//           </div>

//           {/* Subtotal and Actions */}
//           <div className="flex flex-col gap-4 mt-6">
//             {/* Subtotal */}
//             <p className="flex justify-between text-sm sm:text-lg font-medium">
//               <span>Subtotal</span>
//               <span className="text-[#B88E2F] text-sm sm:text-md md:text-xl font-medium">Rs 250,000.00</span>
//             </p>

//             {/* Horizontal Rule */}
//             <hr className="border-gray-300" />

//             {/* Action Buttons */}
//             <div className="flex justify-between gap-x-8 mt-2 mb-6">
//               <Link href="/cart">
//                 <button className="px-4 md:px-12 hover:bg-black hover:text-white py-2 border-2 border-black  rounded-full text-black text-md md:text-lg">
//                   View Cart
//                 </button>
//               </Link>
//               <Link href="/checkout">
//                 <button className="px-4 md:px-12 py-2 bg-black hover:bg-white text-white hover:border-2 hover:border-black hover:text-black rounded-full text-md md:text-lg">
//                   Checkout
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </SheetContent>
//     </Sheet>
//   );
// };

// export default CartItemSheet;
