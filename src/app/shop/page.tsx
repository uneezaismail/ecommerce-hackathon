import Card from '@/components/Card'
import { allData } from '@/components/data'
import NavImage from '@/components/NavImage'
import Delivery from '@/components/ourDelivery'
import React from 'react'
import { BiGridSmall } from 'react-icons/bi'
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'
import { RxDividerVertical } from 'react-icons/rx'

const Shop = () => {
  return (
   <section className='space-y-10'>
     <NavImage heading={"Shop"} path={"Home"} currentPage={"Shop"}/>
     <div className='flex flex-col justify-center '>
<div className='flex flex-col py-4 bg-[#FAF4F4] sm:flex-row justify-around items-center gap-y-4 sm:gap-y-0'>
<div className='flex items-center gap-x-6'>
  <div className='flex items-center gap-x-4'>
    <span><HiOutlineAdjustmentsHorizontal size={30}/></span>
    <span className='text-xl'>Filter</span>
  </div>
  <span><BiGridSmall size={30}/></span>
  <span><RxDividerVertical size={30}/></span>
  <p>Showing 1-16 of 32 results</p>
</div>

 <div className='flex items-center gap-x-6'>
 <div className='space-x-4'>
    <span>Show</span>
    <input type="number" placeholder='16' className='bg-white w-[55px] h-[55px] items-center p-2'/>
 </div>
 <div className='space-x-4'>
    <span>Sort by</span>
    <input type="number" placeholder='Default' className='bg-white w-[188px] h-[55px] items-center p-3'/>
</div>
 </div>
 <div></div>
      </div>

     <div className="grid mx-auto grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 xl:gap-x-8">
         {allData.map((item, index) => (
          <Card
            key={index}
            data={{
              img: item.img,
              heading: item.heading,
              price: item.price,
            }}
          />
        ))}
      </div>

<div className='flex items-center gap-x-9 mx-auto my-16'>
<button className='px-8 py-6 bg-[#FBEBB5] rounded-xl'>1</button>
<button className='px-8 py-6 bg-[#FFF9E5] rounded-xl'>2</button>
<button className='px-8 py-6 bg-[#FFF9E5] rounded-xl'>3</button>
<button className='px-8 py-6 bg-[#FFF9E5] rounded-xl'>Next</button>
</div>
      </div>
   <Delivery/>
   </section>
  )
}

export default Shop


