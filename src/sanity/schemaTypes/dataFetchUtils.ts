// File: utils/dataFetchUtils.ts
import { client } from '@/sanity/lib/client';
import { groq } from "next-sanity"

import { productBySlugQuery, relatedProductsQuery } from '@/sanity/schemaTypes/sanity_query';

export const fetchProductBySlug = async (slug: string) => {
  const product = await client.fetch(productBySlugQuery, { slug });
  return product;
};

export const fetchRelatedProducts = async (category: string, slug: string) => {
  const relatedProducts = await client.fetch(relatedProductsQuery, { category, slug });
  return relatedProducts;
};





export const fetchProductReviews = async (productId: string) => {
  const query = groq`
    *[_type == "review" && product._ref == $productId] {
      _id,
      rating,
      reviewText,
      createdAt,
      customer->{
        firstName,
        lastName,
        email
      }
    }
  `

  const reviews = await client.fetch(query, { productId })
  return reviews
}

