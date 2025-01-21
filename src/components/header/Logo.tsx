"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiBars3, HiXMark } from "react-icons/hi2";

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
      {isDropdownOpen ? <HiXMark size={30} /> : <HiBars3 size={30} />}
    </button>
    <Link href="/" className="hidden lg:flex items-center">
      <Image src="/meubal.png" alt="Oak & Teak Logo" width={50} height={30} priority />
      <h1 className="text-[26px] font-semibold font-playfair">Oak&Teak</h1>
    </Link>
  </div>
);

export default Logo;
