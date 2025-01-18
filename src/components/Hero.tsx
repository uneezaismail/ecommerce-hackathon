// import Image from 'next/image';
// import React from 'react';

// const Hero = () => {
//   return (
//     <section  className="bg-custom-green text-white  h-[85vh] md:h-screen">
//       <div  className="max-w-screen-xl mx-auto flex items-center justify-center  md:justify-center h-full flex-col-reverse md:flex-row">
//         {/* Text Section */}
//         <div  className="flex flex-col text-center  sm:text-start items-end h-fit justify-center gap-y-9 px-2 sm:px-8 w-[90%] sm:w-[60%] md:w-fit">
//           <h2  className="font-medium text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-poppins">
//             Rocket Single Seater
//           </h2>
//           <div className='w-full'>
//             <button  className="text-2xl font-medium pb-2 border-b-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:text-gray-800 border-b-black font-poppins">
//               Shop Now
//             </button>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="relative w-[350px] h-[300px] sm:w-[450px] sm:h-[400px] md:h-[550px] md:w-[550px] xl:w-[900px] xl:h-[600px]">
//         <Image
//             src='/hero.png'
//             alt="shop"
//             fill
//             className="object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;








// import React from 'react';

// const Hero = () => {
//   return (
//     <section
//       className="h-[85vh] md:h-screen bg-cover bg-no-repeat  bg-center flex items-center justify-center"
//       style={{
//         backgroundImage: "url('/homepage.PNG')",
//       }}
//     >
//       <div className="max-w-screen-xl mx-auto flex flex-col text-center sm:text-start items-center sm:items-start gap-y-9 px-2 sm:px-8 w-[90%] sm:w-[60%]">
//         {/* Text Section */}
//         <h2 className="font-medium text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-poppins text-white">
//           Rocket Single Seater
//         </h2>
//         <div>
//           <button className="text-2xl font-medium pb-2 border-b-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:text-gray-300 border-b-white text-white font-poppins">
//             Shop Now
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;










// "use cient"
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css";
// import SwiperCore from "swiper";
// import { Autoplay, Pagination } from "swiper/modules";

// SwiperCore.use([Autoplay, Pagination]);

// const Hero = () => {
//   const slides = [
//     { url: "/homepage.PNG", text: "Rocket Single Seater" },
//     { url: "/homepage.PNG", text: "Comfort for Everyone" },
//     { url: "/homepage.PNG", text: "Stylish & Affordable" },
//     { url: "/homepage.PNG", text: "Made for Your Home" },
//   ];

//   return (
//     <section className="relative h-[85vh] md:h-screen w-screen">
//       <Swiper
//         autoplay={{ delay: 3000 }}
//         pagination={{ clickable: true }}
//         loop={true}
//         className=" h-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="absolute h-full bg-contain bg-no-repeat bg-center flex items-center justify-center"
//               style={{ backgroundImage: `url(${slide.url})`}}
//             >
//               <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//               <div className="z-10 text-center">
//                 <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-white font-medium font-poppins">
//                   {slide.text}
//                 </h2>
//                 <button className="mt-6 text-xl sm:text-2xl font-medium pb-2 border-b-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:text-gray-300 border-b-white text-white font-poppins">
//                   Shop Now
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default Hero;










"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  const slide = { url: "/sofa.webp", text: "Timeless Designs, Modern Comfort" };

  return (
    <section className="relative h-screen   w-[100vw] ">
      
        <Image
          src={slide.url}
          alt={slide.text}
         width={1000}
         height={1000}
          objectFit="cover"
          className="relative bg-white w-[100vw] h-full"
        />
      <div className="absolute inset-0 bg-custom-green opacity-20"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
        <h2 className="relative  text-4xl z-40 sm:text-5xl  text-white font-medium font-poppins">
          {slide.text}
        </h2>
<button className="mt-6 text-xl sm:text-2xl font-medium pb-2 border-b-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:text-white border-b-white text-white font-poppins">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
