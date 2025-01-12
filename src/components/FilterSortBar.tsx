"use client";

import { useState } from "react";
import {  HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { BiGridSmall } from "react-icons/bi";
import { RxDividerVertical } from "react-icons/rx";

const FilterSortBar = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="relative w-full bg-[#FAF4F4]">
      {/* Filter & Sort Bar */}
      <div className="flex max-w-screen-xl mx-auto items-center justify-between py-4 px-4  border-b">
        {/* Left Section: Filter and View Icons */}
        <div className="flex items-center gap-x-6">
          {/* Filter Button */}
          <div
            className="flex items-center gap-x-2 cursor-pointer"
            onClick={toggleFilter}
          >
            <HiOutlineAdjustmentsHorizontal size={20} />
            <span className="text-sm sm:text-base">Filter</span>
          </div>
          {/* View Switch Icons */}
          <div className="hidden md:flex items-center gap-x-4">
            <BiGridSmall className="cursor-pointer" size={20} />
            <span><RxDividerVertical size={30}/></span>
            <p>Showing 1-16 of 32 results</p>
          </div>
        </div>

        {/* Middle Section: Showing Results */}
       

        {/* Right Section: Show and Sort */}
        <div className="flex items-center gap-x-4">
          {/* Show Dropdown */}
          <div className="hidden lg:flex items-center gap-x-2">
            <span className="text-sm sm:text-base">Show</span>
            <select
              className="bg-white border border-gray-300 rounded-md w-[60px] h-[40px] p-2 focus:outline-none"
              defaultValue="16"
            >
              <option value="8">8</option>
              <option value="16">16</option>
              <option value="32">32</option>
            </select>
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-x-2">
            <span className="text-sm sm:text-base">Sort by</span>
            <select
              className="bg-white border border-gray-300 rounded-md w-[150px] h-[40px] p-2 focus:outline-none"
              defaultValue="Default"
            >
              <option value="Default">Default</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
              <option value="Newest">Newest</option>
            </select>
          </div>
        </div>
      </div>

      {/* Sliding Filter Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-96 bg-white shadow-lg z-50 transform ${
          isFilterOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Filter and Sort</h2>
          <button
            className="text-gray-600 hover:text-black"
            onClick={toggleFilter}
          >
            ✕
          </button>
        </div>
        <div className="p-4 space-y-6">
          {/* Availability Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">AVAILABILITY</h3>
            <div className="flex items-center gap-x-2">
              <input type="checkbox" id="in-stock" />
              <label htmlFor="in-stock" className="text-sm">
                In Stock (12)
              </label>
            </div>
            <div className="flex items-center gap-x-2">
              <input type="checkbox" id="out-stock" />
              <label htmlFor="out-stock" className="text-sm">
                Out of Stock (1)
              </label>
            </div>
          </div>

          {/* Price Filter Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">PRICE</h3>
            <p className="text-sm text-gray-600">
              The highest price is Rs.480,315
            </p>
            <div className="flex items-center gap-x-2">
              <input
                type="number"
                placeholder="Rs. 0.00"
                className="bg-gray-100 border border-gray-300 rounded-md w-[100px] h-[40px] p-2 text-sm focus:outline-none"
              />
              <span>-</span>
              <input
                type="number"
                placeholder="Rs. 480,315"
                className="bg-gray-100 border border-gray-300 rounded-md w-[100px] h-[40px] p-2 text-sm focus:outline-none"
              />
            </div>
          </div>

          {/* Category Filter Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">CATEGORY</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-gray-700">Bed</li>
              <li className="cursor-pointer hover:text-gray-700">Table</li>
              <li className="cursor-pointer hover:text-gray-700">Chair</li>
              <li className="cursor-pointer hover:text-gray-700">Sofa</li>
              <li className="cursor-pointer hover:text-gray-700">Cabinet</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isFilterOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleFilter}
        />
      )}
    </div>
  );
};

export default FilterSortBar;
