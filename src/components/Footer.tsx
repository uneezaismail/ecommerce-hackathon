import Link from 'next/link';
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-custom-green text-white font-medium px-4 lg:mx-0 h-fit py-6 md:py-10">
      <div className="flex flex-col mx-auto max-w-[1240px] gap-y-6 lg:gap-y-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-y-8">
          {/* About Section */}
          <div className="flex flex-col gap-y-4 max-w-[350px]">
            <h2 className="text-xl font-semibold">About OAK&TEAK</h2>
            <p className="text-gray-300  border-b pb-4">
              Discover premium furniture designed for comfort, style, and convenience at OAK&TEAK.
            </p>
            <div className="flex gap-x-4 mt-2">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook"
                className="hover:text-gray-300"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Twitter"
                className="hover:text-gray-300"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram"
                className="hover:text-gray-300"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn"
                className="hover:text-gray-300"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col gap-y-6">
            <h2 className="text-lg font-semibold">Links</h2>
            <nav>
              <ul className="flex flex-col gap-y-4">
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

          {/* Help Section */}
          <div className="flex flex-col gap-y-6">
            <h2 className="text-lg font-semibold">Help</h2>
            <nav>
              <ul className="flex flex-col gap-y-4">
                <li className="hover:scale-105">
                  <Link href="/paymentOptions">Payment Options</Link>
                </li>
                <li className="hover:scale-105">
                  <Link href="/returnpolicy">Return Policy</Link>
                </li>
                <li className="hover:scale-105">
                  <Link href="/privacyPolicy">Privacy Policy</Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col gap-y-6">
            <h2 className="text-lg font-semibold">Newsletter</h2>
            <p className="text-gray-300">Stay updated with our latest collections and offers.</p>
            <div className="flex items-center gap-x-3">
              <label htmlFor="newsletter-email" className="sr-only">
                Enter your email address
              </label>
              <input
                type="email"
                id="newsletter-email"
                placeholder="Enter Your Email Address"
                className="focus:ring-0 focus:outline-none border-b border-gray-300 bg-transparent text-white p-1 w-[75%] md:w-auto"
                aria-label="Enter your email address for the newsletter"
                required
              />
              <button
                type="submit"
                className="font-medium border border-gray-300 px-3 py-1 rounded-md hover:scale-105"
                aria-label="Subscribe to newsletter"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-400" />

        {/* Bottom Section */}
        <div className="text-center md:text-start">
          <p>© 2022 OAK&TEAK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
