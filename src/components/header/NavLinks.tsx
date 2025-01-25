"use client";
import React from "react";
import Link from "next/link";

const NavLinks = () => (
  <ul className="flex gap-8 text-custom-green text-base font-medium">
    <li>
      <Link
        href="/"
        className="hover:underline transition"
        aria-label="Go to Home"
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        href="/shop"
        className="hover:underline transition"
        aria-label="Go to Shop"
      >
        Shop
      </Link>
    </li>
    <li>
      <Link
        href="/about"
        className="hover:underline transition"
        aria-label="Go to About"
      >
        About
      </Link>
    </li>
    <li>
      <Link
        href="/contact"
        className="hover:underline transition"
        aria-label="Go to Contact"
      >
        Contact
      </Link>
    </li>
  </ul>
);

export default NavLinks;
