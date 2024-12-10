




"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import { FaRegHeart, FaTimes } from "react-icons/fa";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { TbUserExclamation } from "react-icons/tb";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname()

  const backgroundColor = pathname === '/' ? 'bg-[#FBEBB5]' : 'bg-white'

  

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
    { name: "About", link: "/" },
    { name: "Contact", link: "/contact" },
  ];

  const icons = [
    { icon: <TbUserExclamation size={24} />, link: "/account" },
    { icon: <HiMiniMagnifyingGlass size={24} />, link: "/" },
    { icon: <FaRegHeart size={24} />, link: "/" },
    { icon: <AiOutlineShoppingCart size={24} />, link: "/cart" },
  ];

  return (
    <header className={`${backgroundColor} overflow-x-hidden`} >
      <div className="z-10 flex px-2 md:px-0 items-center mx-auto md:gap-20 lg:gap-x-40 justify-between md:justify-end py-6 md:p-8 lg:px-24">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <AiOutlineMenu size={28} />
      </button>

      {/* Navbar Links */}
      <ul className="hidden md:flex items-center gap-x-16">
        {menuItems.map((item, index) => (
          <Link key={index} href={item.link}>
            <li className="font-medium font-poppins hover:border-b hover:text-[#75601c] hover:border-b-black cursor-pointer">{item.name}</li>
          </Link>
        ))}
      </ul>

      {/* Desktop Icons */}
      <ul className="flex items-center gap-x-4 sm:gap-x-6">
        {icons.map((item, index) => (
          <Link key={index} href={item.link}>
            <li className="p-1 font-poppins cursor-pointer hover:text-[#75601c]">{item.icon}</li>
          </Link>
        ))}
      </ul>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className="fixed font-poppins top-0 left-0 h-full w-[70%] bg-white shadow-lg z-50 flex flex-col p-6">
          <button
            className="self-end mb-6"
            onClick={() => setIsSidebarOpen(false)}
          >
           <FaTimes/>
          </button>
          <ul className="flex flex-col items-start gap-y-4">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.link}>
                <li
                  className="text-lg font-medium cursor-pointer"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
      </div>
    </header>
  );
};

export default Header;
