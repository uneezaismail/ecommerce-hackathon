"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { client } from "@/sanity/lib/client";
import { Product } from "../../types/product";
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

const TopPicks = () => {
  const [topPicks, setTopPicks] = useState<TopPickItem[]>([]);

  useEffect(() => {
    const fetchTopPicks = async () => {
      const data = await client.fetch(topPicksQuery);
      setTopPicks(
        data.map((item: Product) => ({
          img: item.imageUrls[0] || "/placeholder.png",
          hoverImg: item.imageUrls[1] || item.imageUrls[0] || "/placeholder.png",
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
    <section className="w-full bg-[#e9e9e3] mx-auto py-28 px-2 md:px-0 space-y-10 md:space-y-20 flex flex-col items-center justify-center">
      {/* Heading Section */}
      <div className="flex flex-col items-center gap-y-6 text-center">
        <h2 className="text-3xl md:text-4xl text-custom-green font-bold font-poppins">
          Top Picks For You
        </h2>
        <p className="font-medium text-gray-500 font-poppins">
          Find a bright idea to suit your taste with our great selection of
          suspension, floor, and table lights.
        </p>
      </div>

      {/* Card Section */}
      <div className="w-full max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {topPicks.map((item, index) => (
          <div key={index} className=" mx-auto">
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
    </section>
  );
};

export default TopPicks;
