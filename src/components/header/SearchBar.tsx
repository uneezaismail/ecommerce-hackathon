"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { X, Search } from "lucide-react";
import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  productName: string;
  slug: {
    current: string;
  };
}

const query = `*[_type == "product"]{
  _id,
  productName,
  "slug": slug.current
}`;

interface SearchBarProps {
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setIsSearchOpen }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await client.fetch(query);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = products.filter((product) =>
        product.productName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
      setIsDropdownVisible(true);
    } else {
      setFilteredProducts([]);
      setIsDropdownVisible(false);
    }
  }, [searchQuery, products]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div
      className="absolute inset-0 bg-white border-b flex items-center justify-center px-4 z-50"
      ref={searchRef}
    >
      <div className="flex items-center w-full max-w-screen-md relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="text-gray-400" />
        </div>
        <div className="w-full flex items-center">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            aria-label="Search Products"
            className="w-full flex-grow py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
          />
          <button
            aria-label="Close Search"
            onClick={() => setIsSearchOpen(false)}
            className="p-2 hover:scale-110 transition-transform"
          >
            <X size={20} />
          </button>
          {isDropdownVisible && filteredProducts.length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-2 bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
              {filteredProducts.map((product) => (
                <Link
                  key={product._id}
                  href={`/product/${product.slug}`}
                  className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-50 block"
                  onClick={() => {
                    setIsDropdownVisible(false);
                    setIsSearchOpen(false); 
                  }}
                >
                  {product.productName}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
