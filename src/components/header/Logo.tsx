"use client";
import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface LogoProps {
  isDropdownOpen: boolean;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Logo: React.FC<LogoProps> = ({ isDropdownOpen, setIsDropdownOpen }) => (
  <div className="flex items-center md:gap-2">
    <button
      aria-expanded={isDropdownOpen}
      aria-label="Toggle navigation menu"
      className="lg:hidden hover:scale-110 transition-transform"
      onClick={() => setIsDropdownOpen((prev) => !prev)}
    >
      {isDropdownOpen ? <X size={30} /> : <Menu size={30} />}
    </button>
    <Link href="/" className="hidden lg:flex items-center">
   <h1 className="text-3xl font-semibold font-playfair">OAK&TEAK</h1>
    </Link>
  </div>
);

export default Logo;
