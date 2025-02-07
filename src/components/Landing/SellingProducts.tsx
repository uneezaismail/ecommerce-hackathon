"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import Card from "../Product/Card";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../types/product";
import Link from "next/link";
import { hotSellingQuery} from "@/sanity/schemaTypes/sanity_query";
import { ChevronLeft, ChevronRight } from "lucide-react"; 

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Fetch top picks data
  useEffect(() => {
    const fetchTopPicks = async () => {
      const data = await client.fetch(hotSellingQuery);
      setTopPicks(
        data.map((item: Product) => ({
          img: item.imageUrls[0],
          hoverImg: item.imageUrls[0],
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


  const scrollLeft = useCallback(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  }, []);

 
  const scrollRight = useCallback(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  }, []);

  return (
    <section className="w-full py-20  mx-auto px-2 lg:px-0 space-y-10 md:space-y-10 flex flex-col items-center justify-center relative">
      
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl text-custom-green font-bold font-poppins">
          Hot Selling Products
        </h2>
      </div>

     
      <div className="w-full max-w-screen-xl relative group">
       
        <button
          onClick={scrollLeft}
          className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-100 p-4 rounded-full shadow-lg z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-100 "
          aria-label="Scroll left"
        >
          <ChevronLeft size={30} className=" text-custom-green" />
        </button>

       
        <button
          onClick={scrollRight}
          className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-100 p-4 rounded-full shadow-lg z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-100"
          aria-label="Scroll right"
        >
          <ChevronRight size={30} className=" text-custom-green" />
        </button>

       
        <div
          ref={scrollContainerRef}
          className="flex gap-x-20 sm:gap-x-10 lg:gap-x-6 overflow-x-scroll snap-x snap-mandatory px-4 pb-4 scrollbar-hide"
          style={{
              scrollbarWidth: "none", 
               msOverflowStyle: "none", 
              }}
        >
          {topPicks.map((item,i) => (
            <div
              key={i}
              className="snap-center flex-shrink-0 w-[250px] sm:w-[300px]"
            >
              <Link href={`/product/${item.slug}`}>
                <Card
                  data={{
                    img: item.img,
                    hoverImg: item.hoverImg,
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

