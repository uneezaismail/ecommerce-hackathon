import NavImage from '@/components/NavImage'
import Delivery from '@/components/ourDelivery'
import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { GoClockFill } from 'react-icons/go'
import { IoLocation } from 'react-icons/io5'

const Contact = () => {
  return (
   <section className='space-y-10 lg:space-y-28'>
      <NavImage heading={"Contact"} path={"Home"} currentPage={"Contact"}/>
      <div className='flex flex-col gap-y-2 items-center'>
        <h2 className='text-3xl md:text-4xl font-semibold'>Get In Touch With Us</h2>
        <p className='text-gray-400 w-[95%] sm:w-[70%] lg:w-[50%] text-center'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
      </div>

<div className='md:justify-between  mx-auto lg:gap-x-8 w-fit xl:justify-center gap-y-10 md:gap-y-16 my-14 flex flex-col lg:flex-row'>
<div className='w-full sm:w-[400px] md:w-[500px] lg:w-[393px]  px-12 py-10 space-y-10'>
      <div className='flex gap-x-6'>
        <span><IoLocation size={30}/></span>
        <div className='flex flex-col'> <h4 className=' text-2xl font-medium'>Address</h4>
        <p>236 5th SE Avenue, New York NY10000, United States</p></div>
      </div>
      <div className='flex gap-x-4'>
        <span><FaPhoneAlt size={30}/></span>
        <div className='flex flex-col'> <h4 className=' text-2xl font-medium'>Phone</h4>
        <p>Mobile: +(84) 546-6789
        </p>
        <p>Hotline: +(84) 456-6789</p>
        </div>
      </div>
      <div className='flex gap-x-4'>
        <span><GoClockFill size={30}/></span>
        <div className='flex flex-col'> <h4 className=' text-2xl font-medium'>Working Time</h4>
        <p>Monday-Friday: 9:00 - 22:00

        </p>
        <p>Saturday-Sunday: 9:00 - 21:00</p>
        </div>
      </div>
      </div>

      
<div className='w-[90%]  mx-4 sm:w-[300px] md:w-[600px] sm:mx-auto  h-fit lg:w-[635px] py-9 lg:pb-14 lg:px-16 space-y-9'>
<form className="space-y-6 md:space-y-9 md:w-[531px]">
<div className="space-y-5">
      <label className="block text-black">Your Name</label>
      <input
        type="text"
        className="w-full border-2 border-gray-400 rounded-[6px] md:rounded-[10px] h-[40px] md:h-[75px] focus:outline-none focus:ring-0"
      />
    </div>
<div className="space-y-5">
      <label className="block text-black">Email Address</label>
      <input
        type="text"
        className="w-full border-2 border-gray-400 rounded-[6px] md:rounded-[10px] h-[40px] md:h-[75px] focus:outline-none focus:ring-0"
      />
    </div>
<div className="space-y-5">
      <label className="block text-black">Subject</label>
      <input
        type="text"
        className="w-full border-2 border-gray-400 rounded-[6px] md:rounded-[10px] h-[40px] md:h-[75px] focus:outline-none focus:ring-0"
      />
    </div>
<div className="space-y-5">
      <label className="block text-black">Message</label>
      <textarea
        
        className="w-full border-2 border-gray-400 rounded-[6px] md:rounded-[10px] h-[40px] md:h-[75px] focus:outline-none focus:ring-0"
      />
    </div>
    <div>
      <button type='submit' className='px-10 md:px-20 py-3 border border-black rounded-2xl'>Submit</button>
    </div>
</form>
      </div>
      </div>
      <div>
        <Delivery/>
      </div>
   </section>
  )
}

export default Contact