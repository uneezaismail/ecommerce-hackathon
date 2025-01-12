
"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaRegClock } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";

const Blog = () => {
  const blogImages = ["/ourblog-1.avif", "/ourblog-2.avif", "/ourblog-3.avif"];

  return (
    <motion.section
      className="max-w-screen-xl mx-auto w-full h-fit px-2 lg:px-0 py-14 flex flex-col items-center space-y-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Heading Section */}
      <motion.div
        className="flex flex-col items-center gap-y-5 text-center"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h4 className="text-4xl font-medium">Our Blogs</h4>
        <p className="font-medium tracking-wider text-gray-400">
          Find a bright ideal to suit your taste with our great selection
        </p>
      </motion.div>

      {/* Blog Cards */}
      <motion.div
        className="grid mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {blogImages.map((img, index) => (
           <motion.div
           key={index}
           className="mx-auto md:mx-0 lg:h-[555px] w-[300px] lg:w-[330px] xl:w-[393px] flex flex-col items-center cursor-pointer"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: index * 0.2 }}
           whileHover={{
             scale: 1.05,
             boxShadow: "0",
             transition: { duration: 0.3 }
           }}
           whileTap={{ scale: 0.98 }}
         >
            <div className="relative h-72 sm:h-80 xl:h-[393px] w-full rounded-[10px]">
              <Image
                src={img}
                alt={`blog-${index}`}
                fill
                objectFit="cover"
                className="rounded-[10px]"
              />
            </div>
            <div className="flex items-center flex-col gap-3 md:gap-4 mt-4 md:mt-6">
              <h4 className="text-lg md:text-xl font-poppins">
                Going all-in with millennial design
              </h4>
              <Link href={"/blog"}>
                <motion.button
                  className="relative text-xl md:text-2xl font-medium text-black pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full active:text-gray-700 active:after:bg-gray-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More
                </motion.button>
              </Link>

              <div className="flex items-center gap-x-5 font-poppins">
                <p className="flex items-center font-light gap-x-2">
                  <span className="font-bold">
                    <FaRegClock size={20} />
                  </span>
                  <span>5 min</span>
                </p>
                <p className="flex items-center font-light gap-x-2">
                  <span>
                    <FiCalendar size={20} />
                  </span>
                  <span>12 <sup>th</sup></span>
                  <span>Oct 2022</span>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View More Button */}
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Link href={"/blog"}>
          <motion.button
            className="font-poppins transition-transform duration-300 ease-in-out hover:scale-105 hover:text-gray-700 mt-10 md:mt-0 text-xl font-medium border-b-2 border-black pb-3"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View More
          </motion.button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Blog;