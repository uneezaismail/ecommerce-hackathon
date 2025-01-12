
import Image from 'next/image'
import React from 'react'

const Product = () => {
    return (
        <div className="flex  flex-col-reverse lg:flex-row gap-2 sm:gap-4 lg:gap-9">
            {/* Thumbnails */}
            <div className="flex  lg:flex-col gap-4 md:gap-6 mx-auto lg:mx-0 lg:gap-6">
                <Image
                    src="/pdetail-1.png"
                    alt="Thumbnail 1"
                    width={120}
                    height={100}
                    className="rounded-xl shadow  w-20 h-20 sm:w-32 sm:h-28 md:w-40 md:h-36 lg:w-[120px] lg:h-[100px] cursor-pointer bg-[#FFF9E5]"
                />
                <Image
                    src="/pdetail-2.png"
                    alt="Thumbnail 2"
                    width={120}
                    height={100}
                    className="rounded-xl shadow w-20 h-20 sm:w-32 sm:h-28 md:w-40 md:h-36 lg:w-[120px] lg:h-[100px] cursor-pointer bg-[#FFF9E5]"
                />
                <Image
                    src="/pdetail-3.png"
                    alt="Thumbnail 3"
                    width={120}
                    height={100}
                    className="rounded-xl shadow w-20 h-20 sm:w-32 sm:h-28 md:w-40 md:h-36 lg:w-[120px] lg:h-[100px] cursor-pointer bg-[#FFF9E5]"
                />
                <Image
                   src="/pdetail-4.png"
                    alt="Thumbnail 4"
                    width={120}
                    height={100}
                    className="rounded-xl shadow w-20 h-20 sm:w-32 sm:h-28 md:w-40 md:h-36 lg:w-[120px] lg:h-[100px] cursor-pointer bg-[#FFF9E5]"
                />
            </div>

            {/* Main Product Image */}
            <div className="col-span-2 shadow rounded-xl bg-[#FFF9E5] w-full h-56 sm:h-72 md:h-96 lg:w-[423px] lg:h-[500px] p-4 sm:p-6 md:p-[154px_27px_131px_27px] flex justify-center items-center">
                <Image
                    src="/new-arrivals.png"
                    alt="Havic HV G-92 Gamepad"
                    width={300}
                    height={200}
                    className="rounded-xl  md:w-[400px] md:h-[500px] lg:h-[319px] lg:w-[481px] object-contain"
                />
            </div>
        </div>
    );
}

export default Product










