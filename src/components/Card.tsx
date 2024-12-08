import Image from "next/image";
import React from "react";

interface CardProps {
  data: {
    img: string;
    heading: string;
    price: string;
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="md:w-[372px] lg:w-[250px] xl:w-[287px] h-[372px] space-y-4">
      {/* Image Container */}
      <div className="w-full h-[250px] flex items-center justify-center bg-transparent">
        <div className="w-full h-[220px] relative">
          <Image
            src={data.img}
            alt={data.heading}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Card Text */}
      <div className="space-y-3">
        <h3 className="font-medium text-base">{data.heading}</h3>
        <p className="text-2xl font-medium">{data.price}</p>
      </div>
    </div>
  );
};

export default Card;
