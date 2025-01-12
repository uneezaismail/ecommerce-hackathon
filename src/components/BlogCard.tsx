import Image from 'next/image';
import React from 'react';
import { FaTag } from 'react-icons/fa';
import { ImUser } from 'react-icons/im';
import { IoCalendarClear } from 'react-icons/io5';

type BlogCardProps = {
  image: string;
  category: string;
  title: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ image, category, title}) => {
  return (
    <div className="bg-white w-full px-2 md:w-[700px] lg:w-[700px] xl:w-[820px] rounded-lg space-y-4">
      {/* Blog Image */}
      <Image src={image} alt={title} width={350} height={300}  className="rounded-xl w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover" />
      
      {/* Meta Info */}
      <div className="flex items-center gap-4 mt-4 text-base  text-gray-400">
       <div className='flex items-center gap-x-2 sm:text-base text-xs'><span><ImUser size={20} className='md:size-6'/></span><span>Admin</span></div> 
        <span> | </span>
        <div className='flex items-center gap-x-2 sm:text-base text-xs'><span><IoCalendarClear size={20} className='md:size-6'/></span><span>14 Oct 2022</span></div> 
        <span> | </span>
        <div className='flex items-center gap-x-2 sm:text-base text-xs'><span><FaTag size={20} className='md:size-6'/></span><span>{category}</span></div> 
      </div>
      
      {/* Blog Title */}
      <h2 className="mt-4 text-2xl sm:text-3xl font-medium">{title}</h2>

      {/* Blog Description */}
      <p className="text-gray-700 my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
      
      {/* Read More */}
      <button className='text-xl md:text-2xl  transition-transform duration-300 ease-in-out hover:scale-105 hover:text-gray-700  md:mt-0  font-medium border-b-2 border-black border-b-black mt-4  md:pt-2 pb-2'>Read More</button>
    </div>
  );
};

export default BlogCard;
