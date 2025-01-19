import React from "react";
import { LiaTimesSolid } from "react-icons/lia";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery, setIsSearchOpen }) => {
  return (
    <div className="absolute inset-0 border-b md:border-none bg-white flex items-center justify-center px-4">
      <div className="flex items-center w-full max-w-screen-md">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow py-1 sm:py-2 px-4 border border-black focus:outline-none"
        />
        <button
          onClick={() => setIsSearchOpen(false)}
          className="mr-2 p-2 hover:scale-110 transition-transform"
        >
          <LiaTimesSolid size={20} className="sm:size-06" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

