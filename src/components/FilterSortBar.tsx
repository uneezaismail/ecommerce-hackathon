
"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { shopQuery } from "@/sanity/schemaTypes/sanity_query";
import Card from "@/components/Card"; 
import { useSearchParams } from "next/navigation"; 
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"; 
import Link from "next/link";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import PaginationComponent from "./Pagination";


interface Product {
  _id: string;
  productName: string;
  price: number;
  inventory: number;
  category: string;
  imageUrls: string[];
  discountPercentage: number;
  slug: string;
}

const ITEMS_PER_PAGE = 12;


const ShopPage = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";

  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(480315);
  const [inStock, setInStock] = useState<boolean | null>(null);
  const [sortOption, setSortOption] = useState<string>(""); 
  const [isFilterVisible, setIsFilterVisible] = useState<boolean>(false);
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);



  const paginatedProducts = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, endIndex);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Fetch all products
  const fetchProducts = async () => {
    const productData = await client.fetch(shopQuery);
    setProducts(productData);
    setFilteredProducts(productData);
  };

  // Filter products based on search and other filters
  const filterProducts = () => {
    let filtered = [...products];

    // Filter by search query
    if (search) {
      filtered = filtered.filter((product) =>
        product.productName.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by availability (in stock/out of stock)
    if (inStock !== null) {
      filtered = filtered.filter((product) =>
        inStock ? product.inventory > 0 : product.inventory === 0
      );
    }

    // Filter by price range
    filtered = filtered.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );

    // Apply sorting
    if (sortOption === "low-to-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high-to-low") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === "a-to-z") {
      filtered.sort((a, b) =>
        a.productName.localeCompare(b.productName, undefined, {
          sensitivity: "base",
        })
      );
    } else if (sortOption === "z-to-a") {
      filtered.sort((a, b) =>
        b.productName.localeCompare(a.productName, undefined, {
          sensitivity: "base",
        })
      );
    }

    setFilteredProducts(filtered);
  };

  // Initialize fetching data
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [ inStock, minPrice, maxPrice, search, sortOption]);

  const handleAvailabilityClick = () => {
    setIsAvailabilityOpen((prev) => !prev);
  };

  const handlePriceClick = () => {
    setIsPriceOpen((prev) => !prev);
  };

  return (
    <div className="max-w-screen-xl flex flex-col justify-around mx-auto">
      {/* Mobile filter button */}
      <div className="block md:hidden mb-6">
  <button
    onClick={() => setIsFilterVisible((prev) => !prev)}
    className="text-custom-green py-2 px-4 rounded-lg"
  >
    {!isFilterVisible && (
      <div className="flex gap-2 items-center">
        <HiOutlineAdjustmentsHorizontal />
        <span>Filter</span>
      </div>
    )}
  </button>

  {/* Side Filter Drawer */}
  <div
    className={`fixed inset-0 bg-white z-50 w-3/4 h-full overflow-y-scroll shadow-lg p-4 transition-transform duration-300 ease-in-out ${
      isFilterVisible ? "transform translate-x-0" : "transform -translate-x-full"
    }`}
  >
    <h2 className="text-xl font-bold mb-4">Filter and Sort</h2>
    <button
      onClick={() => setIsFilterVisible(false)}
      className="text-red-500 text-sm mb-4"
    >
      Close
    </button>

    {/* Availability Filter */}
    <div className="mb-6">
      <h3 className="text-base font-medium mb-2">Availability</h3>
      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={inStock === true}
          onChange={() => setInStock(true)}
        />
        In stock
      </label>
      <label className="flex items-center gap-2 text-sm mt-2">
        <input
          type="checkbox"
          checked={inStock === false}
          onChange={() => setInStock(false)}
        />
        Out of stock
      </label>
    </div>

    {/* Price Filter */}
    <div className="mb-6">
      <h3 className="text-base font-medium mb-2">Price</h3>
      <p className="text-sm text-gray-500 mb-2">
        The highest price is Rs.552,533
      </p>
      <input
        type="range"
        min="0"
        max="552533"
        className="w-full mb-4"
        onChange={(e) => setMaxPrice(Number(e.target.value))}
      />
      <div className="flex items-center gap-2">
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          className="w-1/2 border rounded-md p-2 text-sm"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-1/2 border rounded-md p-2 text-sm"
        />
      </div>
    </div>
  </div>
</div>




      {/* Desktop Filter Bar */}
      <div className="hidden md:flex items-center justify-between bg-white">
        <div className="flex items-center gap-8">
          <span className="text-sm font-medium text-gray-400">Filter:</span>

          {/* Availability Dropdown */}
          <div className="relative">
            <button
              className="text-sm font-medium flex items-center gap-1"
              onClick={handleAvailabilityClick}
            >
              Availability{" "}
              <span
                className={`transform ${isAvailabilityOpen ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </button>
            {isAvailabilityOpen && (
              <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg p-4 py-10 w-96 z-50">
                <label
                  onClick={() => setInStock(true)}
                  className="flex items-center gap-2 text-base cursor-pointer"
                >
                  <input type="checkbox" className="rounded" />
                  In stock
                </label>
                <label
                  onClick={() => setInStock(false)}
                  className="flex items-center gap-2 text-base cursor-pointer"
                >
                  <input type="checkbox" className="rounded" />
                  Out of stock
                </label>
              </div>
            )}
          </div>

          {/* Price Dropdown */}
          <div className="relative z-40">
            <button
              className="text-sm font-medium flex items-center gap-1"
              onClick={handlePriceClick}
            >
              Price{" "}
              <span className={`transform ${isPriceOpen ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>
            {isPriceOpen && (
              <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg p-4 py-10 w-96 z-40">
                <p className="text-sm text-black mb-2">
                  The highest price is Rs.552,533
                </p>
                <input
                  type="range"
                  min="0"
                  max="552533"
                  className="w-full text-custom-green mb-2"
                />
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="min price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                    className="w-1/2 border rounded-md text-sm p-1"
                  />
                  <input
                    type="number"
                    placeholder="max price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-1/2 border rounded-md text-sm p-1"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="relative flex items-center gap-4">
          {/* Sort By */}
          <span className="text-sm text-gray-400">Sort by</span>
          <div className="flex z-30">
            <Select onValueChange={(value) => setSortOption(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent className="bg-white z-20">
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="low-to-high">Price: Low to High</SelectItem>
                <SelectItem value="high-to-low">Price: High to Low</SelectItem>
                <SelectItem value="a-to-z">Name: A to Z</SelectItem>
                <SelectItem value="z-to-a">Name: Z to A</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Product Listing */}
      <div className="my-16  grid mx-auto px-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-10">
      {paginatedProducts().map((product) => (
         <Link href={`/product/${product.slug}`} key={product._id}>
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
        totalPages={Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ShopPage;
