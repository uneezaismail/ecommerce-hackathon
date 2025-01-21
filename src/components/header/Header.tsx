// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React, { useState, useEffect } from "react";
// import { HiBars3, HiXMark } from "react-icons/hi2";
// import { TbSearch, TbUserExclamation } from "react-icons/tb";
// import Image from "next/image";
// import SearchBar from "./SearchBar"; 
// import CartIcon from "./CartIcon";

// const Header = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const pathname = usePathname();
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) setIsDropdownOpen(false);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const backgroundColor =
//     isScrolled || pathname !== "/"
//       ? "bg-white shadow-md"
//       : "bg-white";

//   const menuItems = [
//     { name: "Home", link: "/" },
//     { name: "Shop", link: "/shop" },
//     { name: "About", link: "/Product" },
//     { name: "Contact", link: "/contact" },
//   ];

//   return (
//     <header className={`${backgroundColor} sticky top-0 z-50 animate-fadeIn`}>
//       <div className="max-w-7xl md:mx-auto flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4">
//         {/* Left Section */}
//         <div className="flex items-center md:gap-2">
//           <button
//             aria-expanded={isDropdownOpen}
//   aria-label="Toggle navigation menu"
//             className="lg:hidden hover:scale-110 transition-transform"
//             onClick={() => setIsDropdownOpen((prev) => !prev)}
//           >
//             {isDropdownOpen ? <HiXMark size={30} /> : <HiBars3 size={30} />}
//           </button>
//           <Link href="/" className="hidden lg:flex items-center">
//           <Image
//   src={"/meubal.png"}
//   alt="logo"
//   width={50}
//   height={30}
//   priority 
// />
//             <h1 className="text-[26px] font-semibold font-playfair">
//               Oak&Teak
//             </h1>
//           </Link>
//         </div>

//         <Link href="/" className="flex lg:hidden items-center">
//           <Image
//             src={"/meubal.png"}
//             alt="logo"
//             width={50}
//             height={50}
//             className="md:w-16 object-cover md:h-16"
//           />
//           <h1 className="text-2xl font-semibold font-playfair">
//             Oak&Teak
//           </h1>
//         </Link>

//         {/* Center Section */}
//         <nav className="hidden lg:flex gap-12">
//           {menuItems.map((item) => (
//             <Link key={item.name} href={item.link}>
//               <span
//                 className={`font-medium font-poppins cursor-pointer ${
//                   pathname === item.link ? "text-black border-b border-b-black" : ""
//                 }`}
//               >
//                 {item.name}
//               </span>
//             </Link>
//           ))}
//         </nav>

//         {/* Right Section */}
//         <div className="flex items-center gap-[6px] sm:gap-6">
//           <button
//             onClick={() => {
//               setIsSearchOpen(true);
//               setIsDropdownOpen(false);
//             }}
//             className="hover:scale-110"
//           >
//             <TbSearch size={22} className="sm:size-6 hover:scale-110" />
//           </button>

//           <Link href="/cart">
//             <CartIcon /> {/* Replace 0 with dynamic count */}
//           </Link>
//           <Link href="/account">
//             <TbUserExclamation size={21} className="sm:size-6 hover:scale-110" />
//           </Link>
//         </div>
//       </div>

//       {/* Conditionally render SearchBar */}
//       {isSearchOpen && (
//         <SearchBar
//           searchQuery={searchQuery}
//           setSearchQuery={setSearchQuery}
//           setIsSearchOpen={setIsSearchOpen}
//         />
//       )}

//       {/* Dropdown Menu */}
//       <div
     

//         className={`lg:hidden absolute left-0 right-0 bg-white shadow-md transition-all duration-300 overflow-hidden ${
//           isDropdownOpen ? "max-h-48" : "max-h-0"
//         }`}
//         style={{ top: "100%" }}
//       >
//         <div className="flex flex-col py-4 px-4">
//           {menuItems.map((item) => (
//             <Link key={item.name} href={item.link}>
//               <span
//                 className="block py-2 text-lg font-medium hover:text-gray-700"
//                 onClick={() => setIsDropdownOpen(false)}
//               >
//                 {item.name}
//               </span>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;









"use client";
import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import SearchBar from "./SearchBar";
import Icons from "./Icons";
import Logo from "./Logo";
import NavLinks from "./NavLinks";


const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
 


  return (
    <header className={`bg-white shadow-md sticky top-0 z-50`}>
      <div className="max-w-7xl md:mx-auto flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4">
        <Logo isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen} />
        <NavLinks />
        <Icons setIsSearchOpen={setIsSearchOpen} setIsDropdownOpen={setIsDropdownOpen} />
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <SearchBar
          setIsSearchOpen={setIsSearchOpen}
        />
      )}

      {/* Dropdown Menu */}
      <DropdownMenu isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen} />
    </header>
  );
};

export default Header;
