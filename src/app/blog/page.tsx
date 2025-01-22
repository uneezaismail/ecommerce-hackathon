import BlogCard from '@/components/BlogCard';
import Delivery from '@/components/ourDelivery';
import Image from 'next/image';
import React from 'react';

const blogs = [
  {
    image: '/ourblog-2.avif', 
    category: 'Wood',
    title: 'Going all-in with millennial design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
  },
  {
    image: '/blogimage-1.avif',
    category: 'Handmade',
    title: 'Exploring new ways of decorating',

  },
  {
    image: '/blogimage-2.avif', 
    category: 'Handmade',
    title: 'Handmade pieces that took time to make',

  },
];

const recentpost = [{
    img : "/recentpost/recentpost-1.avif",
    name : "Going all-in with millennial design"
},
{
    img : "/recentpost/recentpost-2.avif",
    name : "Exploring new ways of decorating"
},{
    img : "/recentpost/recentpost-3.avif",
    name : "Handmade pieces that took time to make"
},{
    img : "/recentpost/recentpost-4.avif",
    name : "Modern home in Milan"
},{
    img : "/recentpost/recentpost-5.avif",
    name : "Colorful office redesign"
},
]

const BlogPage: React.FC = () => {
  return (
    <section className="space-y-10 lg:space-y-28">
  <div className="flex flex-col w-full lg:flex-row max-w-7xl mx-auto space-y-8 md:space-y-0">
    {/* Left Section */}
    <div className="flex-1 flex flex-col  mx-auto space-y-20  md:space-y-16 items-center justify-center">
      {blogs.map((blog, index) => (
        <BlogCard key={index} {...blog} />
      ))}
    </div>

    {/* Right Section */}
    <div className="space-y-10">
      <div className="hidden lg:block px-2 xl:px-10 xl:w-full h-[537px] py-4 space-y-8">
        <div className="relative w-full max-w-md">
          {/* Input Field */}
          <input
            type="text"
            className="w-full h-[58px] px-4 xl:pr-12 border border-black rounded-xl focus:outline-none"
          />
          {/* Search Icon */}
        </div>
        {/* Categories */}
        <ul className="px-4 space-y-8 flex flex-col">
          <h3 className="text-xl font-medium ">Categories</h3>
          {['Crafts', 'Design', 'Handmade', 'Interior', 'Wood'].map((category, index) => (
            <li key={index} className="flex justify-between text-gray-400">
              {category} <span className="text-gray-400">{index + 1}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className=" flex px-2 w-full items-center flex-col">
        <ul className="flex w-full md:max-w-64 flex-wrap gap-4 xl:gap-6">
          <h3 className="text-2xl w-full font-medium mb-4">Recent Posts</h3>
          {recentpost.map((blog, index) => (
            <li key={index} className=" max-h-28 overflow-hidden flex items-center gap-4 w-full md:max-w-64 md:w-auto sm:flex-none">
              {/* Image */}
              <Image src={blog.img} alt={blog.name} width={80} height={80} className=" w-32 h-auto md:w-[80px] md:h-[80px] rounded-xl object-cover" />
              {/* Blog Details */}
              <div className="flex flex-col w-[50%]">
                <h4 className="text-gray-800 text-base md:text-sm font-medium">{blog.name}</h4>
                <span className="text-gray-400">03 Aug 2022</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>

  {/* Pagination */}
  <div className="flex w-fit items-center gap-x-3 md:gap-x-9 mx-auto my-16">
    <button className="px-6 md:px-8 py-4 md:py-6 bg-[#FBEBB5] rounded-xl">1</button>
    <button className="px-6 md:px-8 py-4 md:py-6 bg-[#FFF9E5] rounded-xl">2</button>
    <button className="px-6 md:px-8 py-4 md:py-6 bg-[#FFF9E5] rounded-xl">3</button>
    <button className="px-6 md:px-8 py-4 md:py-6 bg-[#FFF9E5] rounded-xl">Next</button>
  </div>
  <Delivery />
</section>

  );
};

export default BlogPage;

