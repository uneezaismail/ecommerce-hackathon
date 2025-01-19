import ProductCategories from '@/components/ProductCategories';
import { client } from '@/sanity/lib/client';
import { categoryQuery } from '@/sanity/schemaTypes/sanity_query';
import React from 'react'

const ProductCategory = async() => {
    const products = await client.fetch(categoryQuery); 
  return (
    <div>    
        <ProductCategories products={products} /> 
        </div>
  )
}

export default ProductCategory