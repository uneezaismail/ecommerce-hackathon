
"use client";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Icons from "./Icons";
import NavLinks from "./NavLinks";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  console.log(isDropdownOpen)
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 md:py-4">
        <Logo/>

       
        {/* Center Section: Logo */}
        <div className="flex-shrink-0">
          <Link href="/" aria-label="Home">
            <Image
              src="/logoname.png"
              alt="OAK&TEAK Logo"
              width={140}
              height={40}
              className="h-auto md:w-40"
            />
          </Link>
        </div>

        <nav className="hidden md:flex gap-6">
          <NavLinks />
        </nav>


        {/* Right Section: Search and Icons */}
        <div className="flex items-center gap-4">
          <Icons
            setIsSearchOpen={setIsSearchOpen}
            setIsDropdownOpen={setIsDropdownOpen}
          />
        </div>
      </div>



      {/* Search Bar */}
      {isSearchOpen && <SearchBar setIsSearchOpen={setIsSearchOpen} />}
    </header>
  );
};

export default Header;


// "use client";
// import React, { useState } from "react";
// import SearchBar from "./SearchBar";
// import Icons from "./Icons";
// import Logo from "./Logo";
// import NavLinks from "./NavLinks";
// import Link from "next/link";
// import Image from "next/image";


// const Header = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
 
//  return (
//     <header className={`bg-white shadow-md sticky top-0 z-50`}>
//       <div className="max-w-7xl md:mx-auto flex items-center justify-between px-3 sm:px-4 py-3 sm:py-5">
//        <div className="md:hidden">
//          <Logo />
//        </div>
//        <div className="flex">
//        <Link href="/" className="hidden md:flex ">
     
//         <Image src={"/logoname.png"} alt="image" height={60} width={150}/>
//       </Link>
//       </div>

//         <NavLinks />
//         <Icons setIsSearchOpen={setIsSearchOpen} setIsDropdownOpen={setIsDropdownOpen} />

//         </div>
     
      

//       {/* Search Bar */}
//       {isSearchOpen && (
//         <SearchBar
//           setIsSearchOpen={setIsSearchOpen}
//         />
//       )}

  
//     </header>
//   );
// };

// export default Header;








   {/* <h1 className="text-2xl md:text-4xl font-semibold font-playfair text-gray-900 tracking-wider">
          OAK<span className="text-custom-green">&</span>TEAK
        </h1> */}










