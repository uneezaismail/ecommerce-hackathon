"use client";
import React, { useEffect, useState } from "react";
import Card from "../Product/Card";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../types/product";
import Link from "next/link";
import { topPicksQuery } from "@/sanity/schemaTypes/sanity_query";

export interface TopPickItem {
  _id: number;
  img: string;
  hoverImg: string;
  heading: string;
  inventory: number;
  price: number;
  discountPercentage?: number;
  category?: string;
  slug: string;
}

const SellingProducts = () => {
  const [topPicks, setTopPicks] = useState<TopPickItem[]>([]);

  useEffect(() => {
    const fetchTopPicks = async () => {
      const data = await client.fetch(topPicksQuery);
      setTopPicks(
        data.map((item: Product) => ({
          img: item.imageUrls[0] ,
          hoverImg: item.imageUrls[1] || item.imageUrls[0] ,
          heading: item.productName,
          price: item.price,
          discountPercentage: item.discountPercentage,
          category: item.category,
          slug: item.slug,
        }))
      );
    };
    fetchTopPicks();
  }, []);

  return (
    <section className="w-full  py-10 mx-auto  px-2 md:px-0 space-y-10 md:space-y-10 flex flex-col items-center justify-center">
      {/* Heading Section */}
      <div className="flex flex-col items-center   text-center">
        <h2 className="text-3xl md:text-4xl text-custom-green font-bold font-poppins">
          Hot Seling Products
        </h2>

      </div>

      {/* Card Section */}
      <div className="w-full max-w-screen-xl">
        <div  className="flex gap-x-20 sm:gap-x-10 lg:gap-x-6 overflow-x-scroll snap-x snap-mandatory px-4 pb-4"
  style={{
    scrollbarWidth: "none", 
    msOverflowStyle: "none", 
  }}
>
  <div style={{ display: "none" }} />
          {topPicks.map((item, index) => (
            <div
            key={index}
            className="snap-center  flex-shrink-0 w-[250px] sm:w-[300px]"
          >
              <Link href={`/product/${item.slug}`}>
                <Card
                  data={{
                    img: item.img,
                    hoverImg: item.img,
                    heading: item.heading,
                    inventory: item.inventory,
                    price: item.price,
                    discountPercentage: item.discountPercentage,
                  }}
                />
              </Link>
            </div>
          ))}
        </div>

 
      </div>
    </section>
  );
};

export default SellingProducts;
