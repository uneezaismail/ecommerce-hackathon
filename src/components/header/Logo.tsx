"use client";
import React, { useState } from "react";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Menu, Twitter } from "lucide-react";

const menuItems = [
  { name: "Home", link: "/" },
  { name: "Shop", link: "/shop" },
  { name: "About", link: "/Product" },
  { name: "Contact", link: "/contact" },
];

const Logo: React.FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleCloseSheet = () => {
    setIsSheetOpen(false);
  };

  return (
    <div className="flex md:hidden items-center md:gap-4">
      {/* Mobile Menu Sheet */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger className="lg:hidden text-gray-700 hover:bg-gray-100 rounded-md transition duration-300">
          <Menu size={30} />
        </SheetTrigger>

        <SheetContent
          side="left"
          className="w-[300px] h-full px-0 bg-gray-50 shadow-xl border-r border-gray-200 flex flex-col justify-between"
        >
          {/* Sheet Header */}
          <div>
            <SheetHeader className="mb-10 px-6">
              <SheetTitle className="text-2xl text-gray-800 font-bold tracking-wide flex items-center gap-2">
              <Link href="/" className="flex">
        <h1 className="text-2xl md:text-4xl font-bold font-playfair  text-custom-green tracking-wider">
          OAK<span className="text-custom-green">&</span>TEAK
        </h1>
      </Link>
              </SheetTitle>
            </SheetHeader>

            {/* Navigation Links */}
            <nav className="flex flex-col border-t">
              {menuItems.map((item) => (
                <Link key={item.name} href={item.link} onClick={handleCloseSheet}>
                  <span className="block px-6 w-full py-3 text-lg font-medium text-gray-700 border-b border-gray-200 hover:text-custom-green hover:pl-2 transition-all duration-300">
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Media Icons at the Bottom */}
          <div className="border-t border-gray-300 mt-4 pt-4 px-10">
            <div className="flex justify-between">
              <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                <Facebook size={20} className="text-custom-green hover:scale-110 transition transform duration-200" />
              </Link>
              <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                <Twitter size={20} className="text-custom-green hover:scale-110 transition transform duration-200" />
              </Link>
              <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                <Instagram size={20} className="text-custom-green hover:scale-110 transition transform duration-200" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" aria-label="Linkedin">
                <Linkedin size={20} className="text-custom-green hover:scale-110 transition transform duration-200" />
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>

    </div>
  );
};

export default Logo;
