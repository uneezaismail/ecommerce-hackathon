import Image from "next/image";
import React from "react";
import { CardProps } from "../../../types/cardProps";

const Card: React.FC<CardProps & { isSmall?: boolean }> = ({ data, isSmall }) => {
  const salePrice = data.discountPercentage
    ? (data.price - (data.price * data.discountPercentage) / 100).toFixed(2)
    : undefined;

  const isSoldOut = data.inventory <= 0;

  return (
    <div
      className={`group text-custom-green ${
        isSmall ? "w-[180px] space-y-2" : "w-[300px] space-y-4"
      } relative`}
    >
      {/* Tags */}
      <div className={`absolute left-2 z-40 top-2 space-y-2 ${isSmall ? "text-xs" : "text-sm"}`}>
        {isSoldOut ? (
          <div
            className={`bg-gray-600 text-white ${
              isSmall ? "px-2 py-1" : "px-4 py-1"
            }`}
          >
            SOLD OUT
          </div>
        ) : (
          data.discountPercentage !== undefined &&
          data.discountPercentage > 0 && (
            <div
              className={`bg-[#c34d4d] text-white ${
                isSmall ? "px-2 py-1" : "px-4 py-1"
              }`}
            >
              {data.discountPercentage}% OFF
            </div>
          )
        )}
      </div>

      {/* Image Container */}
      <div
        className={`relative flex items-center justify-center bg-transparent ${
          isSmall ? "w-full bg-custom-green h-[160px]" : "w-full h-[280px] md:h-[300px]"
        }`}
      >
        {/* Default Image */}
        <Image
          src={data.img}
          alt={data.heading}
          fill
          style={{ objectFit: "cover" }}
          className="transition-opacity duration-300 opacity-100 group-hover:opacity-0"
          sizes={isSmall ? "(max-width: 768px) 50vw" : "(max-width: 768px) 100vw, 50vw"}
        />

        {/* Hover Image */}
        <Image
          src={data.hoverImg}
          alt={`${data.heading}-hover`}
          fill
          style={{ objectFit: "cover" }}
          className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          sizes={isSmall ? "(max-width: 768px) 50vw" : "(max-width: 768px) 100vw, 50vw"}
        />
      </div>

      {/* Card Text */}
      <div
        className={`text-center w-full ${
          isSmall ? "space-y-1" : "space-y-3"
        }`}
      >
        <h3
          className={`font-medium ${
            isSmall ? "text-sm truncate" : "text-xl"
          }`}
        >
          {data.heading}
        </h3>
        {salePrice ? (
          <div className={`${isSmall ? "text-xs" : "text-sm"}`}>
            <span
              className={`line-through text-gray-600 ${
                isSmall ? "text-xs" : "text-sm"
              }`}
            >
              {data.price}
            </span>
            <span
              className={`font-semibold ml-2 ${
                isSmall ? "text-xs" : "text-sm"
              }`}
            >
              {salePrice}
            </span>
          </div>
        ) : (
          <p className={`font-semibold ${isSmall ? "text-xs" : "text-sm"}`}>
            {data.price}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
