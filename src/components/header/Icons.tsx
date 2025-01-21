"use client";
import React from "react";
import { TbSearch, TbUserExclamation } from "react-icons/tb";
import Link from "next/link";
import CartIcon from "./CartIcon";

interface IconsProps {
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Icons: React.FC<IconsProps> = ({ setIsSearchOpen, setIsDropdownOpen }) => (
  <div className="flex items-center gap-[6px] sm:gap-6">
    <button
      onClick={() => {
        setIsSearchOpen(true);
        setIsDropdownOpen(false);
      }}
      className="hover:scale-110"
      aria-label="Open Search"
    >
      <TbSearch size={22} />
    </button>
    <Link href="/cart" aria-label="Go to Cart">
        <CartIcon />
      
    </Link>
    <Link href="/account" aria-label="Go to Account">
        <TbUserExclamation size={21} />
     
    </Link>
  </div>
);

export default Icons;
