import ProductData from '@/components/ProductData'
import RelatedProducts from '@/components/RelatedProducts'
import React from 'react'
import ProductImages from '@/components/ProductImages'
import { productBySlugQuery, relatedProductsQuery } from '@/sanity/schemaTypes/sanity_query'
import { client } from '@/sanity/lib/client'
import { notFound } from 'next/navigation'


interface ProductDetailsProps {
  params: Promise<{ slug: string }>; // params is a promise
}


export const fetchProductBySlug = async (slug:any) => {
  const product = await client.fetch(productBySlugQuery, { slug });
  return product;
};

const product = await fetchProductBySlug('wooden-dining-table');
console.log("Fetched Product:", product);


export const fetchRelatedProducts = async (category: string, slug: string) => {
  const relatedProducts = await client.fetch(relatedProductsQuery, { category, slug });
  return relatedProducts;
};



const Product = async ( { params }: ProductDetailsProps) => {
  const { slug } = await params; // Unwrap the promise to get slug
  const product = await fetchProductBySlug(slug);
// console.log(product) 
  if (!product) {
    notFound(); 
  }

console.log(product)

const relatedProducts = await fetchRelatedProducts(product.category, slug);
  return (
    <section className='space-y-12 py-10'>
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-0">
    <ProductImages images={product.imageUrls}
     />
    <ProductData product={product}/>
  </div>
    <hr />
    <RelatedProducts relatedProducts={relatedProducts}/>  
  </section>
  )
}

export default Product