import Image from "next/image";
import Link from "next/link";
import React from "react";

export type IProduct = {
  image: string;
  category: string;
  categorySlug: string;
};

interface ProductCategoriesProps {
  products: IProduct[];
}

const ProductCategories = ({ products }: ProductCategoriesProps) => {
  return (
    <section className="max-w-screen-xl mx-auto space-y-8 py-24">
      <h2 className="flex items-center justify-center mx-auto text-3xl md:text-4xl text-custom-green font-bold">
        Shop By Category
      </h2>
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <Link href={`/category/${product.categorySlug}`} key={product.categorySlug}>
            <div className="relative mx-auto group w-[350px] sm:w-[300px] md:w-[350px] xl:w-[400px] h-64 md:h-[400px]">
              <Image
                src={product.image}
                alt={product.category}
                width={400}
                height={400}
                priority
                sizes="(max-width: 640px) 300px, (max-width: 768px) 350px, 400px"
                className="relative w-full h-full object-cover rounded-lg"
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
