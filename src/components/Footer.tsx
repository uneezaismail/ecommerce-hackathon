import React from 'react'

const Footer = () => {
  return (
   <footer className='w-full px-4 lg:mx-0 h-fit py-6 md:py-8 lg:content-center'>
    <div className='flex mx-auto h-[95%] lg:justify-center flex-col gap-y-6 lg:gap-y-8 xl:gap-y-10  max-w-[1240px] '>
    <div className='flex justify-between flex-col md:flex-row gap-y-6  md:gap-x-16 xl:gap-x-32 w-full'>
    <div className='flex flex-col md:items-center md:justify-center '>
        <h6 className=' text-gray-400'>
        400 University Drive Suite 200 Coral <br />Gables,<br />
        FL 33134 USA
        </h6>
    </div>
    <div className='flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-12'>
                <span className='text-gray-400'>Link</span>
        <ul className='font-medium flex flex-col gap-y-4 md:gap-y-8 lg:gap-y-11'>
            <li className='hover:text-[#877026]'>
                Home
            </li>
            <li className='hover:text-[#877026]'>Shop</li>
            <li className='hover:text-[#877026]'>
                About
            </li>
            <li className='hover:text-[#877026]'>Contact</li>
        </ul>
    </div>
    <div className='flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-12'>
                <span className='text-gray-400'>Help</span>
        <ul className='font-medium flex flex-col gap-y-4 md:gap-y-8 lg:gap-y-11'>
         
            <li className='hover:text-[#877026]'>Payment Options</li>
            <li className='hover:text-[#877026]'>
               Return
            </li>
            <li className='hover:text-[#877026]'>Private Policies</li>
        </ul>
    </div>
    <div className='flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-12'>
                <span className='text-gray-400'>Newletter</span>
       <div className='flex items-center gap-x-2 sm:gap-x-3'>
        <input type="email" placeholder='Enter Your Email Address' className='focus:ring-0 focus:outline-none border-b border-b-black p-1 md:w-full w-[90%]'/>
        <button type='submit' className='font-medium border-b border-b-black p-1 [#877026]'>SUBSCRIBE</button>
       </div>
    </div>
    </div>
    <hr />
    <div className='w-full text-center md:text-start'>
<p>2022 Meubel House. All rights reverved</p>
    </div>
    </div>
   </footer>
  )
}

export default Footer