import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { Playfair_Display, Poppins } from 'next/font/google';
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: '--font-playfair', 
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${poppins.variable}  ${playfair.variable}  font-poppins antialiased `}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
