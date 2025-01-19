"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";


export type IProduct ={
  image: string;
  category: string;
  categorySlug: string;
}


interface ProductCategoriesProps {
  products: IProduct[];
}

const ProductCategories = ({ products }: ProductCategoriesProps) => {
  const [uniqueCategories, setUniqueCategories] = useState<IProduct[]>([]);

  useEffect(() => {
    const filtered: IProduct[] = [];
    const categories = new Set<string>();

    products.forEach((product) => {
      if (!categories.has(product.category)) {
        categories.add(product.category);
        filtered.push(product);
      }
    });

    setUniqueCategories(filtered);
  }, [products]);

  return (
    <section className="max-w-screen-xl mx-auto space-y-8 py-24">
      <h2 className="flex items-center justify-center mx-auto text-3xl md:text-4xl text-custom-green font-bold">
        Shop By Category
      </h2>
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {uniqueCategories.map((product) => (
          <Link href={`/category/${product.categorySlug}`} key={product.categorySlug}>
            <div className="relative group">
              <Image
                src={product.image}
                alt={product.category}
                height={400}
                width={400}
                className="w-[400px] md:w-[400px] h-64 md:h-[400px] sm:h-80 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="absolute flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xl sm:text-2xl font-semibold text-white">
                  {product.category}
                </p>
              </div>
              <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg sm:text-xl lg:text-2xl transition-opacity duration-300">
                {product.category}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
