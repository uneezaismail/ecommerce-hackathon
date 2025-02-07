import ProductData from "@/components/Product/ProductData"
import RelatedProducts from "@/components/RelatedProducts"
import ProductImages from "@/components/Product/ProductImages"
import { notFound } from "next/navigation"
import { fetchProductBySlug, fetchRelatedProducts, fetchProductReviews } from "@/sanity/schemaTypes/dataFetchUtils"
import ReviewSection from "@/components/review"


interface ProductDetailsProps {
    params: Promise<{ slug: string }>;
   }

const Product = async ({ params }: ProductDetailsProps) => {
  const { slug } = await params
  const product = await fetchProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = await fetchRelatedProducts(product.category, slug)
  const reviews = await fetchProductReviews(product._id)

  return (
    <section className="space-y-12 py-6 md:py-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-0">
        <ProductImages images={product.imageUrls} />
        <ProductData product={product} />
      </div>
      <hr />
      <ReviewSection productId={product._id} reviews={reviews} />
      <hr />
      <RelatedProducts relatedProducts={relatedProducts} />
    </section>
  )
}

export default Product

