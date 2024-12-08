"use client"

import React from "react";
import ProductImages from "./product";
import ProductDetails from "./Productdetail_1";

const ProductPage: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <ProductImages />
      <ProductDetails />
    </div>
  );
};

export default ProductPage;