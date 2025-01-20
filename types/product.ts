
export interface Product {
  _id: string;
  productName: string;
  price: number;
  discountPercentage?: number;
  inventory: number;
  category: string;
  description?: string;
  imageUrls: string[];
  slug: string;
  _createdAt: string; // added createdAt as a string (ISO date string)
}


export interface Productdetail {
  _id: string;
  imageUrls: string[];  
  productName: string;
  price: number;
  discountPercentage?: number;
  description: string;
  sizes: string[];
  material: string;
  dimensions: string;
  weight: string;
  colors: string[];
  inventory: number;
}


