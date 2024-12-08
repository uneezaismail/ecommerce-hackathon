import React from 'react'

const HomeContact = () => {
  return (
   <section className="h-[300px] md:h-[450px] bg-[url('/instagram-contact.avif')] flex items-center justify-center bg-cover">
<div className='flex flex-col items-center justify-between gap-y-4 w-fit h-fit'>
    <div className='flex flex-col items-center gap-y-2'>
    <h4 className='text-4xl sm:text-5xl md:text-6xl font-bold font-poppins'>Our Instagram</h4>
    <p className='text-md sm:text-xl font-poppins'>Follow our store on Instagram</p>
    </div>
    <div className='flex items-center'>
        <button className='bg-[#FAF4F4] font-poppins rounded-full shadow-lg shadow-black/10 py-4 px-16 md:px-20'>Follow Us</button>
    </div>
</div>
   </section>
  )
}

export default HomeContact 