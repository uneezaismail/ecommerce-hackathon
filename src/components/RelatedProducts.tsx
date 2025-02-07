import React from "react";
import Card from "./Product/Card";
import { Product } from "../../types/product";
import Link from "next/link";

const RelatedProducts = ({ relatedProducts }: { relatedProducts: Product[] }) => {
  return (
    <section className="py-14 px-2 mx-auto sm:px-6 md:px-8 lg:px-[20px] xl:px-[100px] space-y-6 lg:w-fit  bg-white">
   
      <div className="flex flex-col gap-y-3">
        <h4 className="text-3xl font-semibold font-poppins text-custom-green">You may also like</h4>
      </div>

      <div className="w-full max-w-screen-xl">
        <div  className="flex gap-x-20 sm:gap-x-10 lg:gap-x-6 overflow-x-scroll snap-x snap-mandatory px-4 pb-4"
  style={{
    scrollbarWidth: "none", 
    msOverflowStyle: "none",
  }}
>
      {relatedProducts.map((item:Product) => (
          <Link href={`/product/${item.slug}`} key={item._id} className="place-items-center snap-center  flex-shrink-0 w-[250px] sm:w-[300px]">
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
</div>
    </section>
  );
};

export default RelatedProducts;
