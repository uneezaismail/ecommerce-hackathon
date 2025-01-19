// File: utils/dataFetchUtils.ts
import { client } from '@/sanity/lib/client';
import { productBySlugQuery, relatedProductsQuery } from '@/sanity/schemaTypes/sanity_query';

export const fetchProductBySlug = async (slug: string) => {
  const product = await client.fetch(productBySlugQuery, { slug });
  return product;
};

export const fetchRelatedProducts = async (category: string, slug: string) => {
  const relatedProducts = await client.fetch(relatedProductsQuery, { category, slug });
  return relatedProducts;
};
