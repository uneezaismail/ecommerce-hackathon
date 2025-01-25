"use client";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

const Blog = () => {
  const blogImages = ["/ourblog-1.avif", "/ourblog-2.avif", "/ourblog-3.avif"];

  return (
    <section className="max-w-screen-xl bg-white mx-auto w-full h-fit px-4 lg:px-0 py-20 flex flex-col items-center space-y-16">
      {/* Heading Section */}
      <div className="flex flex-col items-center gap-y-5 text-center">
        <h4 className="text-3xl md:text-4xl text-custom-green font-bold font-poppins">
          Our Blogs
        </h4>
        <p className="font-medium tracking-wider text-gray-500">
          Find inspiration and tips with our carefully curated blogs.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {blogImages.map((img, index) => (
          <div
            key={index}
            className="group mx-auto lg:h-[555px] w-[300px] lg:w-[330px] xl:w-[393px] flex flex-col items-center cursor-pointer transition-all duration-300 ease-in-out transform "
          >
            {/* Image Section */}
            <div className="relative h-72 sm:h-80 xl:h-[393px] w-full rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <Image
                src={img}
                alt={`blog-${index}`}
                fill
                objectFit="cover"
                className="rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col items-center gap-3 md:gap-4 mt-4 md:mt-6">
              <h4 className="text-lg md:text-xl font-poppins text-custom-green font-semibold group-hover:text-custom-green transition-colors duration-300">
                Going all-in with millennial design
              </h4>
              <Link href={"/blog"}>
                <button className="relative text-lg md:text-xl font-medium text-black pb-1 border-b-2 border-transparent group-hover:border-custom-green transition-all duration-300">
                  Read More
                </button>
              </Link>

              {/* Meta Info */}
              <div className="flex items-center gap-x-5 font-poppins text-gray-500">
                <p className="flex items-center gap-x-2">
                  <span className="font-bold text-custom-green">
                    <Clock size={20} />
                  </span>
                  <span>5 min</span>
                </p>
                <p className="flex items-center gap-x-2">
                  <span className="text-custom-green">
                    <Calendar size={20} />
                  </span>
                  <span>12<sup>th</sup></span>
                  <span>Oct 2022</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex items-center justify-center">
        <Link href={"/blog"}>
          <button className="font-poppins transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-custom-green hover:text-white mt-10 md:mt-0 text-xl font-medium text-custom-green border-2 border-custom-green px-6 py-2 rounded-lg">
            View More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Blog;
