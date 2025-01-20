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
          <div className="bg-gray-400 text-white text-xs px-4 py-1">
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
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300 opacity-100 group-hover:opacity-0"
        />

        {/* Hover Image */}
        <Image
          src={data.hoverImg}
          alt={`${data.heading}-hover`}
          layout="fill"
          objectFit="cover"
          className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        />
      </div>

      {/* Card Text */}
      <div className="space-y-3 text-center w-full">
        <h3 className="font-medium text-xl">{data.heading}</h3>
        {salePrice ? (
          <div className="text-sm">
            <span className="line-through text-gray-400">{data.price}</span>
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
