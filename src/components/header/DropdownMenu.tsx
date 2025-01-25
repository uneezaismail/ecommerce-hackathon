"use client";
import React from "react";
import { Sheet, SheetTrigger, SheetContent} from "@/components/ui/sheet";
import Link from "next/link";
import { Menu } from "lucide-react";

const menuItems = [
  { name: "Home", link: "/" },
  { name: "Shop", link: "/shop" },
  { name: "About", link: "/Product" },
  { name: "Contact", link: "/contact" },
];

const DropdownMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden px-4 py-2 text-lg font-semibold bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-300">
      <Menu size={30} />
      </SheetTrigger>
      
      <SheetContent className="w-[250px] p-4 bg-white shadow-md">

        <div className="flex flex-col space-y-4">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.link}>
              <span className="block py-2 text-lg font-medium hover:text-gray-700">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default DropdownMenu;
