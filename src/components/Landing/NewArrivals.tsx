"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type Product = {
  _id: string;
  productName: string;
  image: string;
  slug: string;
};

type NewArrivalsProps = {
  product: Product;
};

const NewArrivals: React.FC<NewArrivalsProps> = ({ product }) => {
  return (
    <section className="relative bg-custom-green flex md:flex-row flex-col pb-10 md:pb-0 gap-8 lg:gap-x-0 xl:gap-x-16 w-full h-fit text-white items-center">
      <Image
        src={product.image}
        alt={product.productName}
        width={800}
        height={800}
        className="lg:w-[100vw] xl:w-[65%] h-[400px] xl:h-[600px]"
      />

      
      <div className="gap-y-8  items-center flex flex-col">
        <div className="flex flex-col items-center">
          <p className="text-lg md:text-2xl mb-4 font-medium font-poppins">New Arrivals</p>
          <h3 className="text-4xl lg:text-5xl font-bold font-poppins">{product.productName}</h3>
        </div>
        <div>
        <Link href={`/product/${product.slug}`} key={product._id} className="mx-auto">
        <button className="px-6 text-lg py-3 lg:px-16 w-fit lg:py-5 hover:bg-white hover:text-black sm:text-xl border font-poppins border-white">
            Order Now
          </button></Link>
        </div>
      </div>
      
    </section>
  );
};

export default NewArrivals;
