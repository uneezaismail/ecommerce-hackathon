import Image from 'next/image'
import React from 'react'

const ProductDescription = () => {
  return (
   <section className='max-w-[1240px] mx-auto px-2 space-y-9'>
   
    {/* Header Section */}
    <div className='flex flex-row w-full md:w-fit sm:mx-auto items-center justify-between gap-y-4 sm:gap-x-14'>
      <h4 className='text-[15px] sm:text-lg md:text-2xl text-black'>Description</h4>
      <h4 className='text-[15px] sm:text-lg md:text-2xl text-gray-400'>Additional Information</h4>
      <h4 className='text-[15px] sm:text-lg md:text-2xl text-gray-400'>Reviews [5]</h4>
    </div>

    {/* Description Text */}
    <div className='w-full text-sm sm:text-base md:w-[90%] text-gray-400 mx-auto space-y-6 text-center sm:text-left'>
      <p>Embodying the raw, wayward spirit of rock &apos;n&apos; roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
      <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
    </div>
  
    {/* Image Section */}
    <div className='w-full h-auto grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-x-6'>
      <div className='relative bg-[#FFF9E5] h-[240px] sm:h-[348px]'>
        <Image src={"/shop/shop-11.png"} alt='description-1' fill objectFit='cover' />
      </div>
      <div className='relative bg-[#FFF9E5] h-[240px] sm:h-[348px]'>
        <Image src={"/shop/shop-11.png"} alt='description-2' fill objectFit='cover' />
      </div>
    </div>
   </section>
  )
}

export default ProductDescription



