import Image from 'next/image'
import React from 'react'




const Product = () => {
      <div className="w-[553px] flex flex-col-reverse lg:flex-row gap-4  lg:gap-x-4">
              {/* Thumbnails */}
              <div className=" flex lg:flex-col gap-x-2 md:gap-x-6 mx-auto lg:mx-0 lg:gap-y-4">
                <Image
                  src="/new-arrivals.png"
                  alt="Thumbnail 1"
                  width={150}
                  height={100}
                  className="rounded-sm  md:w-48 lg:h-[170px] lg:h[138px] cursor-pointer bg-[#F5F5F5] "
                />
                <Image
                  src="/pdetail-1.png"
                  alt="Thumbnail 2"
                  width={150}
                  height={100}
                  className="rounded-sm  md:w-48 lg:w-[170px] lg:h-[138px] cursor-pointer bg-[#F5F5F5] "
                />
                <Image
                  src="/pdetail-2.png"
                  alt="Thumbnail 3"
                  width={150}
                  height={100}
                  className="rounded-sm  md:w-48 lg:w-[170px] lg:h-[138px] cursor-pointer bg-[#F5F5F5] "
                />
                <Image
                  src="/pdetail-3.png"
                  alt="Thumbnail 4"
                  width={150}
                  height={100}
                  className="rounded-sm md:w-48 lg:w-[170px] lg:h-[138px] cursor-pointer bg-[#F5F5F5] "
                />
              </div>
              <div className="col-span-2 rounded-sm  bg-[#F5F5F5] w-full h-32 md:h-56 lg:w-[500px] lg:h-[600px] p-[154px_27px_131px_27px] flex justify-center items-center">
                <Image
                  src="/pdetail-4.png"
                  alt="Havic HV G-92 Gamepad"
                  width={250}
                  height={200}
                  className="rounded-sm md:h-[250]  lg:w-[446px] lg:h-[315px]"
                />
              </div>
            </div>
  return (
    <div>  <div className=" flex flex-col-reverse lg:flex-row gap-4  lg:gap-x-16">
    {/* Thumbnails */}
    <div className=" flex lg:flex-col gap-x-2 md:gap-x-6 mx-auto lg:mx-0 lg:gap-y-4">
      <Image
        src="/pdetails/image-1.png"
        alt="Thumbnail 1"
        width={150}
        height={100}
        className="rounded-sm  md:w-48 lg:h-[170px] lg:h[138px] cursor-pointer bg-[#F5F5F5] "
      />
      <Image
        src="/pdetails/image-2.png"
        alt="Thumbnail 2"
        width={150}
        height={100}
        className="rounded-sm  md:w-48 lg:w-[170px] lg:h-[138px] cursor-pointer bg-[#F5F5F5] "
      />
      <Image
        src="/pdetails/image-3.png"
        alt="Thumbnail 3"
        width={150}
        height={100}
        className="rounded-sm  md:w-48 lg:w-[170px] lg:h-[138px] cursor-pointer bg-[#F5F5F5] "
      />
      <Image
        src="/pdetails/image-4.png"
        alt="Thumbnail 4"
        width={150}
        height={100}
        className="rounded-sm md:w-48 lg:w-[170px] lg:h-[138px] cursor-pointer bg-[#F5F5F5] "
      />
    </div>
    <div className="col-span-2 rounded-sm  bg-[#F5F5F5] w-full h-32 md:h-56 lg:w-[500px] lg:h-[600px] p-[154px_27px_131px_27px] flex justify-center items-center">
      <Image
        src="/pdetails/image-5.png"
        alt="Havic HV G-92 Gamepad"
        width={250}
        height={200}
        className="rounded-sm md:h-[250]  lg:w-[446px] lg:h-[315px]"
      />
    </div>
  </div></div>
  )
}

export default Product