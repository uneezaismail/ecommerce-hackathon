import NavImage from '@/components/NavImage'
import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoLocation } from 'react-icons/io5'

const Contact = () => {
  return (
   <section className=''>
      <NavImage heading={"Contact"} path={"Home"} currentPage={"Contact"}/>
      <div className='flex flex-col gap-y-2 items-center'>
        <h2>Get In Touch With Us</h2>
        <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
      </div>


<div className='w-[393px] px-12 py-10'>
      <div className='flex gap-x-4'>
        <span><IoLocation /></span>
        <div className='flex flex-col'> <h4>Address</h4>
        <p>236 5th SE Avenue, New York NY10000, United States</p></div>
      </div>
      <div className='flex gap-x-4'>
        <span><FaPhoneAlt /></span>
        <div className='flex flex-col'> <h4>Phone</h4>
        <p>Mobile: +(84) 546-6789
        </p>
        <p>Hotline: +(84) 456-6789</p>
        </div>
      </div>
      <div className='flex gap-x-4'>
        <span><FaPhoneAlt /></span>
        <div className='flex flex-col'> <h4>Working Time</h4>
        <p>Monday-Friday: 9:00 - 22:00

        </p>
        <p>Saturday-Sunday: 9:00 - 21:00</p>
        </div>
      </div>
      </div>

      <div>

      </div>
   </section>
  )
}

export default Contact