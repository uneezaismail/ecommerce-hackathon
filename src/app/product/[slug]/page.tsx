import ProductData from "@/components/ProductData";
import RelatedProducts from "@/components/RelatedProducts";
import ProductImages from "@/components/ProductImages";
import { notFound } from "next/navigation";
import {
  fetchProductBySlug,
  fetchRelatedProducts,
} from "@/sanity/schemaTypes/dataFetchUtils";

interface ProductDetailsProps {
  params: Promise<{ slug: string }>;
}

const Product = async ({ params }: ProductDetailsProps) => {
  const { slug } = await params;
  const product = await fetchProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // console.log(product)
  const relatedProducts = await fetchRelatedProducts(product.category, slug);

  return (
    <section className="space-y-12 py-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-0">
        <ProductImages images={product.imageUrls} />
        <ProductData product={product} />
      </div>
      <hr />
      <RelatedProducts relatedProducts={relatedProducts} />
    </section>
  );
};

export default Product;
