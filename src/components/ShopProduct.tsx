// components/ShopPage.tsx
"use client"
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { client } from "@/sanity/lib/client";
import { shopQuery } from "@/sanity/schemaTypes/sanity_query";
import Card from "@/components/Card";
import FilterSortBar from "@/components/FilterSortBar";
import PaginationComponent from "@/components/Pagination";
import Link from "next/link";
import Delivery from "@/components/ourDelivery";
import { FilterX } from "lucide-react";

const ITEMS_PER_PAGE = 12;

type Product = {
  _id: string;
  productName: string;
  category: string;
  price: number;
  inventory: number;
  [key: string]: any;
};

type Filters = {
  search: string;
  category: string | null;
  minPrice: number;
  maxPrice: number;
  inStock: boolean | null;
  sortOption: string;
};

const ShopPage = ({ searchQuery }: { searchQuery: string }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<Filters>({
    search: "",
    category: null,
    minPrice: 0,
    maxPrice: 480315,
    inStock: null,
    sortOption: "",
  });
  const [currentPage, setCurrentPage] = useState(1);

  const fetchProducts = useCallback(async () => {
    const productData = await client.fetch(shopQuery);
    setProducts(productData);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const applyFilters = useMemo(() => {
    const query = (filters.search || searchQuery || "").toLowerCase();

    return products.filter((product) => {
      const matchesSearch = product.productName?.toLowerCase().includes(query) || false;
      const matchesStock = filters.inStock === null || filters.inStock === (product.inventory > 0);
      const matchesPrice = product.price >= filters.minPrice && product.price <= filters.maxPrice;

      return matchesSearch && matchesStock && matchesPrice;
    });
  }, [filters, searchQuery, products]);

  const sortedProducts = useMemo(() => {
    const sorted = [...applyFilters];
    switch (filters.sortOption) {
      case "low-to-high":
        return sorted.sort((a, b) => a.price - b.price);
      case "high-to-low":
        return sorted.sort((a, b) => b.price - a.price);
      case "a-to-z":
        return sorted.sort((a, b) => a.productName.localeCompare(b.productName));
      case "z-to-a":
        return sorted.sort((a, b) => b.productName.localeCompare(a.productName));
      default:
        return sorted;
    }
  }, [filters.sortOption, applyFilters]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage, sortedProducts]);

  const resetFilters = () => {
    setFilters({
      search: "",
      category: null,
      minPrice: 0,
      maxPrice: 480315,
      inStock: null,
      sortOption: "",
    });
  };

  return (
    <section>
      <div className="max-w-screen-xl my-10 mx-auto flex flex-col space-y-10">
        <FilterSortBar filters={filters} setFilters={setFilters} />
        
        {sortedProducts.length === 0 ? (
          <div className="text-custom-green min-h-96 flex flex-col items-center justify-center gap-6">
            <FilterX className="size-28"/>
            <div className="text-xl text-center font-medium">No Product found</div>
            <button
              onClick={resetFilters}
              className="px-6 py-2 bg-white text-custom-green border border-custom-green rounded-lg hover:bg-custom-green hover:text-white"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginatedProducts.map((product) => (
                <Link href={`/product/${product.slug}`} key={product._id} className="mx-auto">
                  <Card
                    data={{
                      img: product.imageUrls[0] || "/placeholder.png",
                      hoverImg: product.imageUrls[1] || product.imageUrls[0] || "/placeholder.png",
                      heading: product.productName,
                      inventory: product.inventory,
                      price: product.price,
                      discountPercentage: product.discountPercentage,
                    }}
                  />
                </Link>
              ))}
            </div>
            <PaginationComponent
              currentPage={currentPage}
              totalPages={Math.ceil(sortedProducts.length / ITEMS_PER_PAGE)}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>
      <Delivery />
    </section>
  );
};

export default ShopPage;
