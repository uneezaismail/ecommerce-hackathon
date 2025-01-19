
"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { client } from "@/sanity/lib/client";
import { Product } from "../../types/product";
import Link from "next/link";
import { topPicksQuery } from "@/sanity/schemaTypes/sanity_query";


export interface TopPickItem {
  _id:number
  img: string;
  hoverImg: string;
  heading: string;
  inventory:number;
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
    <section className="w-full bg-[#e9e9e3]  mx-auto py-28 px-2 md:px-0 space-y-10 md:space-y-20 flex flex-col items-center justify-center">
      {/* Heading Section */}
      <div className="flex flex-col items-center gap-y-6 text-center">
        <h4 className="text-3xl md:text-4xl text-custom-green font-bold font-poppins ">
          Top Picks For You
        </h4>
        <p className="font-medium text-gray-500 font-poppins">
          Find a bright idea to suit your taste with our great selection of
          suspension, floor, and table lights.
        </p>
      </div>

      {/* Swiper Section */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        pagination={{ clickable: true }}
        className="w-full max-w-screen-xl flex justify-center"
      >
        {topPicks.map((item, index) => (
          <SwiperSlide key={index} className="place-items-center">
            <Link  href={`/product/${item.slug}`} >
            <Card
              data={{
                img: item.img,
                hoverImg: item.img,
                heading: item.heading,
                inventory:item.inventory,
                price: item.price,
                discountPercentage: item.discountPercentage,
              }}
            />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default TopPicks;
