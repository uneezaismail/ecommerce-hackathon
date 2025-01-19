import React from "react";
import Card from "./Card";
import { Product } from "../../types/product";
import Link from "next/link";

const RelatedProducts = ({ relatedProducts }: { relatedProducts: Product[] }) => {
  return (
    <section className="py-14 px-2 mx-auto sm:px-6 md:px-8 lg:px-[20px] xl:px-[100px] space-y-6 lg:w-fit  bg-white">
      {/* Heading Section */}
      <div className="flex flex-col gap-y-3">
        <h4 className="text-3xl font-semibold font-poppins text-custom-green">You may also like</h4>
      </div>

      {/* Grid Section */}
      <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-10">
      {relatedProducts.map((item:Product) => (
          <Link href={`/product/${item.slug}`} key={item._id} className="place-items-center">
            <Card
              data={{
                img: item.imageUrls[0] || '/placeholder.png',
                hoverImg: item.imageUrls[1] || item.imageUrls[0] || '/placeholder.png',
                heading: item.productName,
                price: item.price,
                inventory:item.inventory,
                category: item.category,
                discountPercentage:item.discountPercentage
              }}            />
           </Link>
        ))}
        
      </div>

    </section>
  );
};

export default RelatedProducts;
