import Image from "next/image";
import React from "react";
import { CardProps } from "../../types/cardProps";

const Card: React.FC<CardProps> = ({ data }) => {
  const salePrice = data.discountPercentage
    ? (data.price - (data.price * data.discountPercentage) / 100).toFixed(2)
    : undefined;

  const isSoldOut = data.inventory <= 0;

  return (
    <div className="group text-custom-green w-[300px] space-y-4 relative">
      {/* Tags */}
      <div className="absolute left-2 z-40 top-2 space-y-2">
        {isSoldOut ? (
          <div className="bg-gray-600 text-white text-xs px-4 py-1">
            SOLD OUT
          </div>
        ) : (
        data.discountPercentage !== undefined &&
          data.discountPercentage > 0 && (
            <div className="bg-[#c34d4d] text-white text-xs px-4 py-1">
              {data.discountPercentage}%OFF
            </div>
          )
        )}
      </div>

      {/* Image Container */}
      <div className="relative w-full h-[280px] md:h-[300px] flex items-center justify-center bg-transparent">
        {/* Default Image */}
        <Image
          src={data.img}
          alt={data.heading}
          fill
          style={{ objectFit: "cover" }}
          className="transition-opacity duration-300 opacity-100 group-hover:opacity-0"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Hover Image */}
        <Image
          src={data.hoverImg}
          alt={`${data.heading}-hover`}
          fill
          style={{ objectFit: "cover" }}
          className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>


      {/* Card Text */}
      <div className="space-y-3 text-center w-full">
        <h3 className="font-medium text-xl">{data.heading}</h3>
        {salePrice ? (
          <div className="text-sm">
            <span className="line-through text-gray-600">{data.price}</span>
            <span className="font-semibold ml-2">{salePrice}</span>
          </div>
        ) : (
          <p className="text-sm font-semibold">{data.price}</p>
        )}
      </div>
    </div>
  );
};

export default Card;
