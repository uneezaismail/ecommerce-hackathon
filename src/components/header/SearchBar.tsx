"use client";
import React from "react";
import { LiaTimesSolid } from "react-icons/lia";

interface SearchBarProps {
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setIsSearchOpen }) => (
  <div className="absolute inset-0 bg-white border-b flex items-center justify-center px-4">
    <div className="flex items-center w-full max-w-screen-md">
      <input
        type="text"
        placeholder="Search..."
        aria-label="Search Products"
        className="flex-grow py-1 sm:py-2 px-4 border border-black focus:outline-none"
      />
      <button
        aria-label="Close Search"
        onClick={() => setIsSearchOpen(false)}
        className="p-2 hover:scale-110 transition-transform"
      >
        <LiaTimesSolid size={20} />
      </button>
    </div>
  </div>
);

export default SearchBar;
