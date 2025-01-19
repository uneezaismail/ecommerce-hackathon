
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
