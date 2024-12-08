import Image from "next/image";
import React from "react";

const NewArrivals = () => {
  return (
    <section className="relative flex md:flex-row flex-col gap-x-8 lg:gap-x-12 xl:gap-x-16 py-10 md:py-6 w-full h-fit lg:max-h-[639px] bg-[#FFF9E6] items-center">
      {/* Image Section */}

      <Image  src="/new-arrivals.png"
          alt="New Arrivals" width={700} height={800} className=" lg:w-[65%] xl:w-[70%] h-full xl:h-[630px]">
        
        </Image>

      {/* Text Section */}
      <div className="gap-y-8 items-center flex flex-col lg:text-left ">
        <div className="flex flex-col items-center">
        <p className="text-lg text-gray-500 font-poppins">New Arrivals</p>
        <h3 className="text-4xl lg:text-5xl font-bold font-poppins">Asgaard Sofa</h3>
        </div>
        <div>
        <button className="px-10 py-4 lg:px-16 w-fit lg:py-5 text-black text-xl border font-poppins border-black">
          Order Now
        </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;

