"use client";
import React from "react";
import Link from "next/link";

interface DropdownMenuProps {
  isDropdownOpen: boolean;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const menuItems = [
  { name: "Home", link: "/" },
  { name: "Shop", link: "/shop" },
  { name: "About", link: "/Product" },
  { name: "Contact", link: "/contact" },
];

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isDropdownOpen, setIsDropdownOpen }) => {
  return (
    <div
      className={`lg:hidden absolute left-0 right-0 bg-white shadow-md transition-all duration-300 overflow-hidden ${
        isDropdownOpen ? "max-h-48" : "max-h-0"
      }`}
      style={{ top: "100%" }}
    >
      <div className="flex flex-col py-4 px-4">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.link}>
            <span
              className="block py-2 text-lg font-medium hover:text-gray-700"
              onClick={() => setIsDropdownOpen(false)}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
