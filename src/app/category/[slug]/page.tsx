
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import Card from '@/components/Card';
import Delivery from '@/components/ourDelivery';
import { Product } from '../../../../types/product';
import { dynamicCategoryQuery } from '@/sanity/schemaTypes/sanity_query';

interface Params {
  slug: string;
}



const CategoryPage = async ({ params }: { params: Params }) => {
  const { slug } = params;

  // Fetch products directly in the server component
  const products = await client.fetch(dynamicCategoryQuery, { categorySlug: slug });

  if (products.length === 0) {
    return (
      <section className="space-y-10">
        <p>No products found in this category.</p>
      </section>
    );
  }

  return (
    <section className="space-y-10 pt-10">
      <div className="flex flex-col justify-center">
        <div className="my-16 grid mx-auto px-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-x-8">
          {products.map((item: Product) => (
            <Link href={`/product/${item.slug || item.slug}`} key={item._id}>
              <Card
                data={{
                  img: item.imageUrls?.[0] || '/placeholder.png',
                  hoverImg: item.imageUrls?.[1] || item.imageUrls?.[0] || '/placeholder.png',
                  heading: item.productName,
                  price: item.price,
                  inventory: item.inventory,
                  category: item.category,
                  discountPercentage: item.discountPercentage,
                }}
              />
            </Link>
          ))}
        </div>
        <div className="flex w-fit items-center gap-x-3 md:gap-x-9 mx-auto my-16">
          <button className="px-6 md:px-8 py-4 md:py-6 bg-[#FBEBB5] rounded-xl">1</button>
          <button className="px-6 md:px-8 py-4 md:py-6 bg-[#FFF9E5] rounded-xl">2</button>
          <button className="px-6 md:px-8 py-4 md:py-6 bg-[#FFF9E5] rounded-xl">3</button>
          <button className="px-6 md:px-8 py-4 md:py-6 bg-[#FFF9E5] rounded-xl">Next</button>
        </div>
      </div>
      <Delivery />
    </section>
  );
};

export default CategoryPage;
