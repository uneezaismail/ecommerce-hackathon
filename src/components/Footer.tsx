import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 text-custom-green font-medium px-4 lg:mx-0 h-fit py-6 md:py-8 lg:content-center">
      <div className="flex mx-auto h-[95%] lg:justify-center flex-col gap-y-6 lg:gap-y-8 xl:gap-y-10 max-w-[1240px]">
        <div className="flex justify-between flex-col md:flex-row gap-y-6 md:gap-x-16 xl:gap-x-32 w-full">
          <div className="flex flex-col md:items-center md:justify-center">
            
          </div>
          <div className="flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-12">
            <span className="text-gray-500">Link</span>
            <nav>
              <ul className="font-medium flex flex-col gap-y-4 md:gap-y-8 lg:gap-y-11">
                <li className="hover:scale-105">
                <Link href="/">Home</Link>
                </li>
                <li className="hover:scale-105">
                <Link href="/shop">Shop</Link>
                </li>
                <li className="hover:scale-105">
                  <Link href="/about">About</Link>
                </li>
                <li className="hover:scale-105">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-12">
            <span className="text-gray-500">Help</span>
            <nav>
              <ul className="font-medium flex flex-col gap-y-4 md:gap-y-8 lg:gap-y-11">
                <li className="hover:scale-105">
                  <Link href="/payment-options">Payment Options</Link>
                </li>
                <li className="hover:scale-105">
                  <Link href="/return">Return</Link>
                </li>
                <li className="hover:scale-105">
                  <Link href="/privacy-policy">Private Policies</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-12">
            <span className="text-gray-500">Newsletter</span>
            <div className="flex items-center gap-x-2 sm:gap-x-3">
              <label htmlFor="newsletter-email" className="sr-only">
                Enter your email address
              </label>
              <input
                type="email"
                id="newsletter-email"
                placeholder="Enter Your Email Address"
                className="focus:ring-0 focus:outline-none border-b border-b-black p-1 md:w-full w-[90%] bg-transparent"
                aria-label="Enter your email address for the newsletter"
                required
              />
              <button
                type="submit"
                className="font-medium border-b border-b-black p-1 hover:scale-105"
                aria-label="Subscribe to newsletter"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="w-full text-center md:text-start">
          <p>2022 Meubel House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
