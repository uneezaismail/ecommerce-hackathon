export interface CardProps {
  data: {
    img: string; 
    hoverImg: string; 
    heading: string; 
    inventory:number;
    price: number;
    discountPercentage?:number
    salePrice?: number;
    category?: string; 
  };
}