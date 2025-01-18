export interface CardProps {
  data: {
    img: string; 
    hoverImg: string; 
    heading: string; 
    price: number;
    discountPercentage?:number
    salePrice?: number;
    category?: string; 
  };
}