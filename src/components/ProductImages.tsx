

"use client"
import Image from "next/image";
import React, { useState } from "react";

interface ProductImages {  
      images: string[];  
  }

const ProductImages : React.FC<ProductImages> = ({ images } :ProductImages) => {
    const [selectedImage, setSelectedImage] = useState<string>(images[0]);
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-2 sm:gap-4 lg:gap-9">
      {/* Thumbnails */}
      <div className="flex lg:flex-col gap-4 md:gap-6 mx-auto lg:mx-0 lg:gap-6">
        {images.map((url:string, index:number) => (
          <Image
            key={index}
            src={url}
            alt={`Thumbnail ${index + 1}`}
            width={120}
            height={100}
            className={`rounded shadow w-20 h-20 sm:w-32 sm:h-28 md:w-40 md:h-36 lg:w-[120px] lg:h-[100px] cursor-pointer  ${
                selectedImage === url ? "border-2 border-black" : ""
              }`}
              onClick={() => setSelectedImage(url)} 
            />
        ))}
      </div>

      {/* Main Product Image */}
      <div className="col-span-2 shadow rounded w-full h-56 sm:h-72 md:h-96 lg:w-[500px] lg:h-[500px]  flex justify-center items-center">
        <Image
          src={selectedImage}
          alt="Main Product Image"
          width={300}
          height={200}
          className="rounded shadow-sm w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProductImages;

