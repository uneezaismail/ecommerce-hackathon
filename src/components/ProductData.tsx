"use client";

import React, { useState } from "react";
import { useCart } from "@/app/context/cartContext";
import { toast } from "react-hot-toast";
import { Productdetail } from "../../types/product";

export interface ProductDataProps {
  product: Productdetail;
}

const ProductData: React.FC<ProductDataProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeSize, setActiveSize] = useState<string>(product.sizes[0]);
  const [activeColor, setActiveColor] = useState<string>(product.colors[0]);

  const { addItem } = useCart();

  const salePrice = product.discountPercentage
    ? product.price - (product.price * product.discountPercentage) / 100
    : undefined;

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  console.log(product);

  const finalPrice = salePrice || product.price;

  const isOutOfStock = product.inventory === 0;

  const handleAddToCart = () => {
    if (!isOutOfStock) {
      addItem({
        id: product._id as string,
        name: product.productName,
        price: finalPrice,
        discount: product.discountPercentage,
        inventory: product.inventory,
        images: product.imageUrls[0],
        size: activeSize,
        color: activeColor,
        quantity: quantity
      });

      toast.success(`${product.productName} added to cart`);
    } else {
      toast.error(`Sorry, this product is out of stock.`);
    }
  };

  return (
    <>
      <div className="px-2 lg:px-4 space-y-10 md:space-y-12">
        <div className="flex flex-col lg:w-[500px] xl:w-[606px] sm:px-4 space-y-3 md:space-y-4">
          <h1 className="text-3xl mb-2 md:mb-0 text-custom-green font-medium">
            {product.productName}
          </h1>

          <div className="flex items-center gap-4">
            {salePrice ? (
              <div className="text-xl">
                <span className="line-through text-gray-600">
                  Rs. {product.price}
                </span>
                <span className="text-gray-950 font-semibold ml-2">
                  Rs. {salePrice}
                </span>
              </div>
            ) : (
              <p className="text-xl text-gray-950 font-semibold">
                Rs. {product.price}
              </p>
            )}

            {product.discountPercentage !== undefined &&
              product.discountPercentage > 0 && (
                <div className="bg-[#c34d4d] text-white text-xs px-4 py-1">
                  {product.discountPercentage}% OFF
                </div>
              )}
          </div>


          <p className="mb-4 md:mb-0 text-black">{product.description}</p>

          <div className="flex flex-col gap-y-1 py-2 md:gap-y-2">
            <p className="font-semibold text-custom-green">Sizes:</p>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setActiveSize(size)}
                  className={`px-6 rounded py-2 border hover:bg-custom-green active:bg-custom-green hover:text-white border-black ${
                    activeSize === size ? "bg-custom-green text-white" : ""
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-y-1 py-2 md:gap-y-2">
            <p className="font-semibold text-custom-green">Colors:</p>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setActiveColor(color)}
                  className={`px-6 rounded py-2 border hover:bg-custom-green active:bg-custom-green hover:text-white border-black ${
                    activeColor === color ? "bg-custom-green text-white" : ""
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-x-4">
            <div className="flex items-center text-custom-green gap-2 p-2 border rounded">
              <button className="md:px-3 md:py-1" onClick={decrementQuantity}>
                -
              </button>
              <span className="md:px-4 font-medium px-2 py-1">{quantity}</span>
              <button className="md:px-3 md:py-1" onClick={incrementQuantity}>
                +
              </button>
            </div>

            <button
              className={`md:py-4 px-6 md:px-12 w-full border font-semibold rounded relative overflow-hidden transition-all duration-300 ease-out ${
                isOutOfStock
                  ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                  : "bg-custom-green text-white hover:bg-emerald-950 border-black group"
              }`}
              onClick={handleAddToCart}
              disabled={isOutOfStock}
            >
              <span className="relative z-10">
                {isOutOfStock ? "OUT OF STOCK" : "ADD TO CART"}
              </span>
              {!isOutOfStock && (
                <span className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-all duration-500 ease-out group-hover:opacity-20 group-hover:shadow-[0_20px_50px_0_rgba(0,0,0,0.2)]"></span>
              )}
            </button>
          </div>

          <div className="flex flex-col flex-wrap gap-3 py-6">
            <h4 className="text-xl font-semibold pl-2 text-custom-green">
              Specifications
            </h4>
            <ul className="list-disc text-sm pl-6 text-custom-green space-y-2">
              <li>
                <span className="font-medium mr-2">Material:</span>{" "}
                <span>{product.material}</span>
              </li>
              <li>
                <span className="font-medium mr-2">Dimensions:</span>{" "}
                {product.dimensions}
              </li>
              <li>
                <span className="font-medium mr-2">Weight:</span>{" "}
                {product.weight}
              </li>
              <li>
                <span className="font-medium mr-2">Color:</span>{" "}
                {product.colors.join(", ")}
              </li>
            </ul>
          </div>
          <p className="pl-2 text-custom-green">
            <span className="font-semibold text-sm text-custom-green">
              Note:
            </span>{" "}
            Actual color may vary from image
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductData;
