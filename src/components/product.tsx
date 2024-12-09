import Image from 'next/image'
import React from 'react'

const Product = () => {
     
  return (
    <div>  <div className=" flex flex-col-reverse lg:flex-row gap-4  lg:gap-x-9">
    {/* Thumbnails */}
    <div className=" flex lg:flex-col gap-x-2 md:gap-x-6 mx-auto lg:mx-0 lg:gap-y-4">
      <Image
        src="/pdetail-1.png"
        alt="Thumbnail 1"
        width={120}
        height={100}
        className="rounded-xl  md:w-48 lg:w-[120px] lg:h-[100px] cursor-pointer bg-[#FFF9E5] "
      />
      <Image
        src="/pdetail-2.png"
        alt="Thumbnail 2"
        width={120}
        height={100}
        className="rounded-xl  md:w-48 lg:w-[120px] lg:h-[100px] cursor-pointer bg-[#FFF9E5] "
      />
      <Image
        src="/pdetail-3.png"
        alt="Thumbnail 3"
        width={120}
        height={100}
        className="rounded-xl  md:w-48 lg:w-[120px] lg:h-[100px] cursor-pointer bg-[#FFF9E5] "
      />
      <Image
        src="/pdetail-4.png"
        alt="Thumbnail 4"
        width={120}
        height={100}
        className="rounded-xl md:w-48 lg:w-[120px] lg:h-[100px] cursor-pointer bg-[#FFF9E5] "
      />
    </div>
    <div className="col-span-2 rounded-xl  bg-[#FFF9E5] w-full h-32 md:h-56 lg:w-[423px] lg:h-[500px] p-[154px_27px_131px_27px] flex justify-center items-center">
      <Image
        src="/new-arrivals.png"
        alt="Havic HV G-92 Gamepad"
        width={250}
        height={200}
        className="rounded-xl md:h-[250]  lg:h-[319px] lg:w-[481px]"
      />
    </div>
  </div></div>
  )
}

export default Product