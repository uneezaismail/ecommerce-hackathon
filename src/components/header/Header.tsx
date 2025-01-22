"use client";
import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import SearchBar from "./SearchBar";
import Icons from "./Icons";
import Logo from "./Logo";
import NavLinks from "./NavLinks";


const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
 


  return (
    <header className={`bg-white shadow-md sticky top-0 z-50`}>
      <div className="max-w-7xl md:mx-auto flex items-center justify-between px-3 sm:px-4 py-3 sm:py-5">
        <Logo isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen} />
        <NavLinks />
        <Icons setIsSearchOpen={setIsSearchOpen} setIsDropdownOpen={setIsDropdownOpen} />
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <SearchBar
          setIsSearchOpen={setIsSearchOpen}
        />
      )}

      {/* Dropdown Menu */}
      <DropdownMenu isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen} />
    </header>
  );
};

export default Header;
