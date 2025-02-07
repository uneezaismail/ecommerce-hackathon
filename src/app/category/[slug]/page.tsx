
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import Card from '@/components/Product/Card';
import { Product } from '../../../../types/product';
import { dynamicCategoryQuery } from '@/sanity/schemaTypes/sanity_query';

interface ProductDetailsProps {
  params: Promise<{ slug: string }>;
}

const CategoryPage = async ({ params }: ProductDetailsProps) => {
  const { slug } = await params;

  const products = await client.fetch(dynamicCategoryQuery, { categorySlug: slug });

  if (products.length === 0) {
    return (
      <section className="space-y-10 text-center min-h-[500px] flex flex-col items-center justify-center text-2xl md:text-3xl text-custom-green font-medium">
        <p>No products found in this category.</p>
      </section>
    );
  }

  return (
    <section className="space-y-10 py-16">
      <div className="flex flex-col justify-center">
        <div className="my-16 grid mx-auto px-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-x-8">
          {products.map((item: Product) => (
            <Link href={`/product/${item.slug || item.slug}`} key={item._id}>
              <Card
                data={{
                  img: item.imageUrls?.[0] ,
                  hoverImg: item.imageUrls?.[1] || item.imageUrls?.[0] ,
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
       
      </div>
  
    </section>
  );
};

export default CategoryPage;
