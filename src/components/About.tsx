"use client";

import Image from "next/image";
import { CheckCircle, Truck, Star, Smile, MapPin} from "lucide-react";

const AboutPage = () => {
  return (
    <section className="bg-white text-custom-green w-full">
      {/* About Section */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-0 py-20 space-y-16">
        {/* Our Mission */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl text-custom-green font-bold font-poppins">
            Our Mission
          </h2>
          <p className=" text-lg font-medium">
            At OAK&TEAK, our goal is to create a seamless online and offline
            experience for homeowners, design enthusiasts, and businesses to
            find quality furniture that fits their style and budget. Whether
            you&apos;re shopping online or visiting one of our physical stores, we
            aim to redefine comfort and luxury, one piece of furniture at a
            time.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Image
            src="/table-2-4.jpg"  
            alt="Why Choose Us"
            width={600}
            height={400}
            className="rounded-lg shadow-lg mx-auto"
          />
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold font-poppins">
              Why Choose OAK&TEAK?
            </h3>

            <ul className="space-y-6">
              <li className="flex items-center gap-x-4  text-lg">
                <CheckCircle className="text-custom-green w-6 h-6" />
                Premium Quality: Every piece is crafted from top-notch materials
                to ensure durability and style.
              </li>
              <li className="flex items-center gap-x-4  text-lg">
                <Truck className="text-custom-green w-6 h-6" />
                Hassle-Free Delivery: We manage the entire delivery process for
                your convenience.
              </li>
              <li className="flex items-center gap-x-4  text-lg">
                <Star className="text-custom-green w-6 h-6" />
                Wide Selection: From modern minimalism to classic luxury, we
                have something for every taste.
              </li>
              <li className="flex items-center gap-x-4  text-lg">
                <Smile className="text-custom-green w-6 h-6" />
                Personalized Support: Our team is here to help with
                customization, orders, or any questions.
              </li>
              <li className="flex items-center gap-x-4  text-lg">
                <MapPin className="text-custom-green w-6 h-6" />
                Physical Stores: Visit us at our beautifully designed stores
                to experience our furniture firsthand.
              </li>
            </ul>
          </div>
        </div>

        {/* Physical Stores Section */}
        <div className="bg-[#f9f9f9] p-10 rounded-lg space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-custom-green">
            Visit Our Stores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="space-y-4">
              <Image
                src="/table-2-4.jpg" 
                alt="New York Showroom"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <p className=" text-center">
                <strong>New York Showroom</strong>
                <br />
                123 Manhattan Ave, New York, NY 10001
              </p>
            </div>
            <div className="space-y-4 overflow-hidden">
              <Image
                src="/table-2-4.jpg"
                alt="San Francisco Store"
                width={500}
                height={300}
                className="rounded-lg overflow-hidden shadow-lg"
              />
              <p className=" text-center">
                <strong>San Francisco Store</strong>
                <br />
                101 Market St, San Francisco, CA 94103
              </p>
            </div>
          </div>
        </div>

        {/* Our Vision */}
        <div className="bg-[#e9e9e3] p-10 rounded-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-custom-green">
            Our Vision
          </h2>
          <p className="text-gray-700 text-lg mt-4">
            To become the go-to furniture marketplace for people who value
            design, quality, and convenience. We believe everyone deserves a
            home that reflects their personality, and we&apos;re here to make that
            happen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
