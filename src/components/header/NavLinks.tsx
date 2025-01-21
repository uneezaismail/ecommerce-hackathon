"use client";
import React from "react";
import Link from "next/link";

const menuItems = [
  { name: "Home", link: "/" },
  { name: "Shop", link: "/shop" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

const NavLinks = () => (
  <nav className="hidden lg:flex gap-12">
    {menuItems.map((item) => (
      <Link key={item.name} href={item.link}
        className="font-medium font-poppins hover:text-gray-700">{item.name}
      </Link>
    ))}
  </nav>
);

export default NavLinks;
