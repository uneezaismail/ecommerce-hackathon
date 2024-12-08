import NavImage from '@/components/NavImage'
import Delivery from '@/components/ourDelivery'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillDelete } from 'react-icons/ai'

const Cart = () => {
  return (
    <section className='w-full  md:space-y-16'>
      <NavImage heading={"Cart"} path={"Home"} currentPage={"Cart"}/>
      <div className='m-2 sm:mx-4 xl:m-0 flex flex-col md:flex-row justify-between gap-y-16 md:justify-center gap-x-7 my-16'>
        {/* Product List */}
        <div className='h-fit space-y-12 w-full md:w-[817px]'>
          <div className='bg-[#FFF9E5] py-4'>
            <ul className='flex items-center justify-around sm:justify-evenly'>
              <li>Product</li>
              <li>Price</li>
              <li>Quantity</li>
              <li>Subtotal</li>
            </ul>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex flex-col sm:flex-row items-center gap-x-2 sm:gap-x-4'>
              <div className='relative w-[70px] sm:w-[95px] lg:w-[106px] h-[50px] lg:h-[106px] bg-[#FBEBB5] rounded-xl'>
                <Image src={"/new-arrivals.png"} alt='cart-img' layout='fill' objectFit='contain' />
              </div>
              <p className='text-gray-500 text-sm md:text-base'>Asgaard sofa</p> 
            </div>
            <p className='text-gray-500 text-sm md:text-base'>Rs. 250,000.00</p>
            <input type="number" placeholder='1' className='text-black border text-sm md:text-base border-gray-300  w-10 rounded-xl text-center p-2'/>
            <p className='font-medium text-sm md:text-base'>Rs. 250,000.00</p>
            <span className='hidden sm:inline-block'><AiFillDelete className='text-[#FBEBB5]' size={30}/></span>
          </div>
        </div>

        {/* Cart Totals */}
        <div className='bg-[#FFF9E5] h-fit md:h-[390px] flex flex-col px-6 md:px-20 py-10 md:p-0 md:pt-3 rounded-md gap-y-14'>
          <h4 className='text-3xl font-semibold'>
            Cart Totals
          </h4>
          <div className='flex flex-col gap-y-12'>
            <div className='flex flex-col gap-y-7'>
              <p className='flex items-center justify-between'>
                <span className='font-medium'>Subtotal</span>
                <span className='text-gray-300'>Rs. 250,000.00</span>
              </p>
              <p className='flex items-center justify-between'>
                <span className='font-medium'>Total</span>
                <span className='font-medium text-xl text-[#B88E2F]'>Rs. 250,000.00</span>
              </p>
            </div>
            <div> 
              <Link href={"/checkout"}><button className='text-xl px-14 py-3 border border-black rounded-xl'>
                Check Out
              </button></Link>
            </div>
          </div>
        </div>
      </div>
      <Delivery/>
    </section>
  )
}

export default Cart
