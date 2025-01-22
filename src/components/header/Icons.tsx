"use client";
import React from "react";
import Link from "next/link";
import CartIcon from "./CartIcon";
import { Search, User } from "lucide-react";

interface IconsProps {
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Icons: React.FC<IconsProps> = ({ setIsSearchOpen, setIsDropdownOpen }) => (
  <div className="flex items-center gap-[6px] sm:gap-3">
    <button
      onClick={() => {
        setIsSearchOpen(true);
        setIsDropdownOpen(false);
      }}
      className="hover:scale-110"
      aria-label="Open Search"
    >
      <Search size={22} />
    </button>
    <Link href="/cart" aria-label="Go to Cart">
        <CartIcon />
      
    </Link>
    <Link href="/account" aria-label="Go to Account">
        <User size={21} className="hover:scale-110 transition-transform" />
     
    </Link>
  </div>
);

export default Icons;
