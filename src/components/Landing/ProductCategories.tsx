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
    <section className="max-w-screen-xl  mx-auto space-y-10 pt-20  px-4 lg:px-0">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-custom-green">
        Shop By Category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link href={`/category/${product.categorySlug}`} key={product.categorySlug}>
            <div className="group relative max-w-sm overflow-hidden rounded-lg">
              <div className="relative w-full  h-80 lg:h-96">
              <Image
  src={product.image}
  alt={product.category} 
  width={400}
  height={400}
  loading="lazy"
  sizes="(max-width: 640px) 300px, (max-width: 768px) 350px, 400px"
  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
/>
              </div>
              {/* Category Name Below the Image */}
              <div className="p-4 ">
                <p className="text-center text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-custom-green transition-colors duration-300">
                  {product.category}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;