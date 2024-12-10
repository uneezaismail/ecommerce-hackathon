import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiCalendar } from 'react-icons/ci'
import { GoClock } from 'react-icons/go'

const Blog = () => {
 const blogImages = ["/ourblog-1.avif","/ourblog-2.avif","/ourblog-3.avif"]
  return (
    <section className="w-full h-fit px-2 lg:px-0 py-14 flex flex-col items-center space-y-16 ">
    {/* Heading Section */}
    <div className="flex flex-col items-center gap-y-3 text-center">
      <h4 className="text-4xl font-medium">Our Blogs</h4>
      <p className="font-medium text-gray-500">
      Find a bright ideal to suit your taste with our great selection
      </p>
    </div>
    <div className="grid mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-4 md:gap-6 xl-gap-8">
    {blogImages.map((img,index)=>(
    <div key={index} className='mx-auto md:mx-0 h-[450px] w-[300px] lg:h-[555px] lg:w-[330px] xl:w-[393px] flex flex-col items-center gap-y-6 md:gap-y-8'>
        <div className='relative h-[350px] lg:h-[300px] xl:h-[393px] w-full rounded-[10px]'>
            <Image src={img} alt='blog-1' fill objectFit='cover' className='rounded-[10px]'/>
        </div>
        <div className='flex items-center flex-col gap-y-4'>
          <h4 className='text-xl font-poppins'>Going all-in with millennial design</h4>
          <Link href={"/blog"}> <button className='text-2xl font-medium border-b-2 border-b-black pb-2'>Read More</button>
          </Link>
          <div className='flex items-center gap-x-5 font-poppins'><p className='flex items-center font-light gap-x-2'><span><GoClock /></span><span>5 min</span></p><p className='flex items-center font-light gap-x-2'><span><CiCalendar /></span><span>12 <sup>th</sup></span><span>Oct 2022</span></p></div>
        </div>
    </div>
    ))}
    </div>

    <div className="flex items-center justify-center">
        <Link href={"/blog"}><button className="text-xl font-medium border-b-2 border-black pb-2 md:pb-5 font-poppins">
          View More
        </button></Link>
      </div>
    </section>
  )
}

export default Blog