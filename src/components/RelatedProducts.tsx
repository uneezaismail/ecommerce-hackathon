import React from "react";
import { topPick } from "./data";
import Card from "./Card";
import { TopPickItem } from "./TopPicks";

const RelatedProducts = () => {
  return (
    <section className="py-14 px-2 sm:px-6 md:px-8 lg:px-[20px] xl:px-[100px] space-y-16 lg:w-fit  bg-white">
      {/* Heading Section */}
      <div className="flex flex-col items-center gap-y-3 text-center">
        <h4 className="text-4xl font-medium font-poppins">Related Products</h4>
      </div>

      {/* Grid Section */}
      <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
      {topPick.map((item:TopPickItem, index:number) => (
          <div key={index} className=" place-items-center">
            <Card
              data={{
                img: item.img,
                hoverImg: item.hoverImg,
                heading: item.heading,
                price: item.price,
                salePrice: item.salePrice,
                isOnSale: item.isOnSale,
                isNew: item.isNew,
              }}            />
            </div>
        ))}
        
      </div>

      {/* View More Button */}
      <div className="flex items-center justify-center">
        <button className="font-poppins text-xl font-medium border-b-2 border-black pb-2 md:pb-5">
          View More
        </button>
      </div>
    </section>
  );
};

export default RelatedProducts;
