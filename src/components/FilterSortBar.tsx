"use client";
import React, { useState } from "react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

type Filters = {
  search: string;
  category: string | null;
  minPrice: number;
  maxPrice: number;
  inStock: boolean | null;
  sortOption: string;
};

type FilterSortBarProps = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

const FilterSortBar: React.FC<FilterSortBarProps> = ({ filters, setFilters }) => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: keyof Filters, value: boolean | null) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      {/* Small Screen Filter */}
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

        <div
          className={`fixed inset-0 bg-white z-50 w-3/4 h-full overflow-y-scroll shadow-lg p-4 transition-transform duration-300 ease-in-out ${isFilterVisible ? "transform translate-x-0" : "transform -translate-x-full"}`}
        >
          <h2 className="text-xl font-bold mb-4">Filter and Sort</h2>
          <button
            onClick={() => setIsFilterVisible(false)}
            className="text-red-500 text-sm mb-4"
          >
            Close
          </button>
          {/* Small Screen Filters */}
          <div className="mb-6">
            <h3 className="text-base font-medium mb-2">Availability</h3>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={filters.inStock === true}
                onChange={() => handleCheckboxChange("inStock", true)}
              />
              In Stock
            </label>
            <label className="flex items-center gap-2 text-sm mt-2">
              <input
                type="checkbox"
                checked={filters.inStock === false}
                onChange={() => handleCheckboxChange("inStock", false)}
              />
              Out of Stock
            </label>
          </div>
          <div className="mb-6">
            <h3 className="text-base font-medium mb-2">Price</h3>
            <p className="text-sm text-gray-500 mb-2">The highest price is Rs.552,533</p>
            <input
              type="range"
              min="0"
              max="552533"
              className="w-full mb-4"
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, maxPrice: Number(e.target.value) }))
              }
            />
            <div className="flex items-center gap-2">
              <input
                type="number"
                name="minPrice"
                placeholder="Min Price"
                value={filters.minPrice}
                onChange={handleInputChange}
                className="w-1/2 border rounded-md p-2 text-sm"
              />
              <input
                type="number"
                name="maxPrice"
                placeholder="Max Price"
                value={filters.maxPrice}
                onChange={handleInputChange}
                className="w-1/2 border rounded-md p-2 text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Large Screen Filter */}
      <div className="hidden md:flex items-center justify-between bg-white">
        <div className="flex items-center gap-8">
          <span className="text-sm font-medium text-gray-400">Filter:</span>

          {/* Availability Dropdown */}
          <div className="relative">
            <button
              className="text-sm font-medium flex items-center gap-1"
              onClick={() => setIsAvailabilityOpen((prev) => !prev)}
            >
              Availability{" "}
              <span className={`transform ${isAvailabilityOpen ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>
            {isAvailabilityOpen && (
              <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg p-4 py-10 w-96 z-50">
                <label
                  onClick={() => setFilters((prev) => ({ ...prev, inStock: true }))}
                  className="flex items-center gap-2 text-base cursor-pointer"
                >
                  <input type="checkbox" className="rounded" />
                  In stock
                </label>
                <label
                  onClick={() => setFilters((prev) => ({ ...prev, inStock: false }))}
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
              onClick={() => {
                setIsPriceOpen((prev) => !prev);
                setIsAvailabilityOpen(false);
              }}
            >
              Price{" "}
              <span className={`transform ${isPriceOpen ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>
            {isPriceOpen && (
              <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg p-4 py-10 w-96 z-40">
                <p className="text-sm text-black mb-2">The highest price is Rs.552,533</p>
                <input
                  type="range"
                  min="0"
                  max="552533"
                  className="w-full text-custom-green mb-2"
                  onChange={(e) =>
                    setFilters((prev) => ({ ...prev, maxPrice: Number(e.target.value) }))
                  }
                />
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    name="minPrice"
                    placeholder="Min Price"
                    value={filters.minPrice}
                    onChange={handleInputChange}
                    className="w-1/2 border rounded-md text-sm p-1"
                  />
                  <input
                    type="number"
                    name="maxPrice"
                    placeholder="Max Price"
                    value={filters.maxPrice}
                    onChange={handleInputChange}
                    className="w-1/2 border rounded-md text-sm p-1"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sort */}
        <div className="relative flex items-center gap-4">
          <span className="text-sm text-gray-400">Sort by</span>
          <div className="flex z-30">
            <select
              name="sortOption"
              value={filters.sortOption}
              onChange={handleInputChange}
              className="border rounded-md p-2 w-[180px]"
            >
              <option value="featured">Featured</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
              <option value="a-to-z">Name: A to Z</option>
              <option value="z-to-a">Name: Z to A</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSortBar;
