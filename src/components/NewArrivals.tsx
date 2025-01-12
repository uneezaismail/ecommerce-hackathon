
import Image from "next/image";
import React from "react";

const NewArrivals = () => {
  return (
    <section className="relative justify-center flex  md:flex-row flex-col gap-x-8 lg:gap-x-0 xl:gap-x-16 py-10 md:py-6 w-full h-fit  bg-[#FFF9E6] items-center">
      {/* Image Section */}
     
        <Image
          src={"/new-arrivals.png"}
          alt="New Arrivals"
          width={700}
          height={800}
          className="sm:w-[70%] md:w-[60%]  lg:w-[60%] xl:w-[60%] h-full xl:h-[600px]"
        />
   

      {/* Text Section */}
      <div className="gap-y-8 items-center flex flex-col ">
        <div className="flex flex-col items-center">
          <p className="text-lg md:text-2xl text-black mb-4 font-medium font-poppins">New Arrivals</p>
          <h3 className="text-4xl lg:text-5xl font-bold font-poppins">Assgard Sofa</h3>
        </div>
        <div>
          <button className="px-6 text-lg py-3 lg:px-16 w-fit lg:py-5 hover:bg-black hover:text-white text-black sm:text-xl border font-poppins border-black">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
