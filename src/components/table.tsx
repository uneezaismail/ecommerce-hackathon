import Image from 'next/image';
import React from 'react';

const Table = () => {
  return (
    <section className="bg-[#FAF4F4] flex w-full h-fit lg:h-[700px] xl:h-[672px] box-border">
      <div className="flex flex-col py-16 lg:py-0 md:flex-row md:justify-center w-full h-full items-center gap-8">
        {/* First Column */}
        <div className="relative xl:w-[605px] xl:h-[562px] sm:w-[48%] w-full h-[400px]">
          <Image
            src="/home-table.png"
            alt="home-table"
            fill
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute bottom-4 left-4 text-black">
            <h4 className="text-[2rem] font-medium font-poppins">Side Table</h4>
            <button className="text-2xl font-medium">View more</button>
          </div>
        </div>

        {/* Second Column */}
        <div className="relative xl:w-[605px] xl:h-[562px] sm:w-[40%] w-full h-[400px]">
          <Image
            src="/sofa-home.png"
            alt="home-sofa"
            fill
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute bottom-4 left-4 text-black">
            <h4 className="text-[2rem] font-medium font-poppins">Sofa</h4>
            <button className="text-2xl font-medium font-poppins">View more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
