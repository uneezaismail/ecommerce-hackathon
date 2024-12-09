import Product from '@/components/product'
import ProductData from '@/components/ProductData'
import ProductDescription from '@/components/ProductDescription'
import RelatedProducts from '@/components/RelatedProducts'
import React from 'react'

const ProductDetails = () => {
  return (
    <section className='space-y-12'>
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
    <Product
     />
    <ProductData />
  </div>
  <hr />
  <ProductDescription/>
    <hr />
    <RelatedProducts/>  
  </section>
  )
}

export default ProductDetails