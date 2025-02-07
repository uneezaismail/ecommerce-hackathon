import { groq } from "next-sanity";

export const shopQuery = groq`*[_type == "product"] | order(_createdAt desc) {
    _id,
    productName,
    price,
    discountPercentage,
    inventory,
    category,
    description,
    "imageUrls": images[].asset->url,
    "slug": slug.current,
    _createdAt
}`;

  
   export const productBySlugQuery = groq`*[_type == "product" && slug.current == $slug][0]{
    _id,
    productName,
    product_id,
    price,
    inventory,
    category,
    tags,
    rating,
    description,
    discountPercentage,
    material,
    dimensions,
    weight,
    sizes,
    colors,
    "imageUrls": images[].asset->url,
    "slug": slug.current
  }`;




  

  export const topPicksQuery = groq`*[_type == "product" && "Top Picks" in tags]{
    _id,
    productName,
    price,
    discountPercentage,
    inventory,
    category,
    description,
    "imageUrls": images[].asset->url,
    "slug": slug.current
  }`;

  
  
  export const hotSellingQuery = groq`*[_type == "product" && "Hot Selling" in tags]{
    _id,
    productName,
    price,
    discountPercentage,
    inventory,
    category,
    description,
    "imageUrls": images[].asset->url,
    "slug": slug.current
  }`;

  

 export const relatedProductsQuery = groq`
  *[_type == "product"  && slug.current != $slug][0...4]{
    _id,
    productName,
    price,
    discountPercentage,
    inventory,
    category,
    description,
    "imageUrls": images[].asset->url,
    "slug": slug.current
  }
`;



export const newArrivalsQuery = `*[_type == "product" && "New Arrivals" in tags]{
  _id,
  productName,
  "image": images[0].asset->url,
  "slug": slug.current
}`;




 export const categoryQuery = `*[_type == "product"]{
      "image": images[0].asset->url, 
      "category": category->name,
      "categorySlug": category->slug.current
    }
`
 

export const fetchByCategory = `*[_type == "product" && category->slug.current == $slug]{
  "image": images[0].asset->url, 
  "category": category->name,
  "categorySlug": category->slug.current,
  "productName": productName,
  "price": price,
  "discountPercentage": discountPercentage,
  "tags": tags,
  "slug": slug.current
}`;


export const dynamicCategoryQuery = groq`
  *[_type == "product" && category->slug.current == $categorySlug] {
    _id,
    productName,
    price,
    "slug":slug.current,
    "imageUrls": images[].asset->url,
    category,
    discountPercentage
  }
`;