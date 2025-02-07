// import React from "react";
// import { Truck, RotateCw, Lock } from "lucide-react";

// const Delivery = () => {
//   const DeliveryDetails = [
//     {
//       icon: <Truck size={40} className="text-custom-green" />,
//       heading: "Free & Fast Delivery",
//       para: "Enjoy free delivery on all orders above Rs.1,000,00 We ensure timely and efficient delivery.",
//     },
//     {
//       icon: <RotateCw size={40} className="text-custom-green" />,
//       heading: "Hassle-Free Returns",
//       para: "Easily return your items within 30 days if they don't meet your expectations.",
//     },
//     {
//       icon: <Lock size={40} className="text-custom-green" />,
//       heading: "100% Secure Payment",
//       para: "Shop with confidence—our payment system is fully secure and encrypted.",
//     },
//   ];

//   return (
//     <section className="bg-[#F6F6F0] text-custom-green mt-20 flex items-center justify-center py-16 md:py-16 lg:py-24">
//       <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
//         {DeliveryDetails.map((detail, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center text-center md:items-start md:text-start mx-auto bg-white shadow-lg p-6 rounded-lg hover:scale-105 transform transition-all duration-300 space-y-4"
//           >
//             <div className="bg-[#E8F5E9] p-4 rounded-full">{detail.icon}</div>
//             <h4 className="font-semibold text-2xl lg:text-3xl">{detail.heading}</h4>
//             <p className="text-gray-600">{detail.para}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Delivery;
