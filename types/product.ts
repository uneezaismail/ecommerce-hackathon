
export interface Product {
    _id: string;
    productName: string;
    price: number;
    discountPercentage?: number;

    category?: string;
    description?: string;
    imageUrls: string[];
    slug: string;
  }