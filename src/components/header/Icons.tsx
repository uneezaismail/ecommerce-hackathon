"use client";
import React from "react";
import Link from "next/link";
import CartIcon from "./CartIcon";
import { Search, User } from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'


interface IconsProps {
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Icons: React.FC<IconsProps> = ({ setIsSearchOpen, setIsDropdownOpen }) => (
  <div className="flex items-center gap-[6px] sm:gap-4">
    <button
      onClick={() => {
        setIsSearchOpen(true);
        setIsDropdownOpen(false);
      }}
      className="hover:scale-110"
      aria-label="Open Search"
    >
      <Search size={22} className="md:size-6"/>
    </button>
    <Link href="/cart" aria-label="Go to Cart">
        <CartIcon />     
    </Link>

        {/* <User size={21} className="hover:scale-110 md:size-6 transition-transform" /> */}
        <SignedOut>
            <SignInButton >
            <User className="w-[21px] h-[21px] cursor-pointer hover:scale-110 md:size-6 transition-transform" />
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton appearance={{
    elements: {
      avatarBox: "w-5 h-5 md:w-7 md:h-7",
    },
  }}/>
          </SignedIn>
    
  </div>
);

export default Icons;
