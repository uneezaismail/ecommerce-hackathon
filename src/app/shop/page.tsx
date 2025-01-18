// "use client"
// import Card from '@/components/Card'
// import { allData } from '@/components/data'
// import FilterSortBar from '@/components/FilterSortBar'
// import NavImage from '@/components/NavImage'
// import Delivery from '@/components/ourDelivery'
// import { client } from '@/sanity/lib/client'
// import { groq } from 'next-sanity'
// import React from 'react'
// // import { BiGridSmall } from 'react-icons/bi'
// // import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'
// // import { RxDividerVertical } from 'react-icons/rx'



// const Shop = async() => {

//   return (
//     <section className='space-y-10'>
//       <NavImage heading={"Shop"} path={"Home"} currentPage={"Shop"}/>
//       <div className='flex flex-col justify-center'>
//         <FilterSortBar/>

//         {/* Display sorted and filtered items */}
//         <div className="grid mx-auto px-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-x-8">
//           {allData.map((item, index) => (
//             <Card
//               key={index}
//               data={{
//                 img: item.img,
//                 heading: item.heading,
//                 price: item.price,
//                 hoverImg: item.hoverImg,
//               }}
//             />
//           ))}
//         </div>

//         <div className="flex w-fit items-center gap-x-3 md:gap-x-9 mx-auto my-16">
//           <button className="px-6 md:px-8 py-4 md:py-6 bg-[#FBEBB5] rounded-xl">1</button>
//           <button className="px-6 md:px-8 py-4 md:py-6 bg-[#FFF9E5] rounded-xl">2</button>
//           <button className="px-6 md:px-8 py-4 md:py-6 bg-[#FFF9E5] rounded-xl">3</button>
//           <button className="px-6 md:px-8 py-4 md:py-6 bg-[#FFF9E5] rounded-xl">Next</button>
//         </div>
//       </div>
//       <Delivery />
//     </section>
//   )
// }

// export default Shop





import Card from '@/components/Card';
import FilterSortBar from '@/components/FilterSortBar';
import NavImage from '@/components/NavImage';
import Delivery from '@/components/ourDelivery';
import { client } from '@/sanity/lib/client';
import { shopQuery } from '@/sanity/schemaTypes/sanity_query';
import Link from 'next/link';
import React from 'react';
import { Product } from '../../../types/product';




const Shop = async () => {
  const products: Product[] = await client.fetch(shopQuery);
 
  return (
    <section className="space-y-10">
      <NavImage heading={"Shop"} path={"Home"} currentPage={"Shop"} />
      <div className="flex flex-col justify-center">
        <FilterSortBar />
        {/* Display sorted and filtered items */}
        <div className="my-16 grid mx-auto px-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-x-8">
          {products.map((item) => (
            <Link href={`/product/${item.slug}`} key={item._id}>
              <Card
                data={{
                  img: item.imageUrls[0] || '/placeholder.png',
                  hoverImg: item.imageUrls[1] || item.imageUrls[0] || '/placeholder.png',
                  heading: item.productName,
                  price: item.price,
                  category: item.category,
                  discountPercentage:item.discountPercentage
                }}
              />
            </Link>
          ))}
        </div>
        <div className="flex w-fit items-center gap-x-3 md:gap-x-9 mx-auto my-16">
          <button className="px-6 md:px-8 py-4 md:py-6 bg-[#FBEBB5] rounded-xl">1</button>
          <button className="px-6 md:px-8 py-4 md:py-6 bg-[#FFF9E5] rounded-xl">2</button>
          <button className="px-6 md:px-8 py-4 md:py-6 bg-[#FFF9E5] rounded-xl">3</button>
          <button className="px-6 md:px-8 py-4 md:py-6 bg-[#FFF9E5] rounded-xl">Next</button>
        </div>
      </div>
      <Delivery />
    </section>
  );
};

export default Shop;
