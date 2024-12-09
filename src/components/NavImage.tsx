import Image from 'next/image'
import React from 'react'


interface NavImageProps {
  heading: string;
  path: string;
  currentPage: string;
}

const NavImage: React.FC<NavImageProps> = ({ heading, path, currentPage }) => {
  return (
    <div className="relative bg-[url('/nav-image.avif')] bg-cover bg-center h-[200px] lg:h-[316px] w-full">
      <div className="absolute inset-0 bg-white opacity-50 backdrop-blur-md"></div> {/* Background overlay */}
      <div className="relative z-10 flex flex-col items-center gap-y-2 justify-center h-full">
        <Image src={"/meubal.png"} alt='meubal' width={70} height={70} />
        <h2 className="text-black text-3xl md:text-5xl font-medium">{heading}</h2>
        <p className='flex items-center gap-x-2'>
          <span className='font-medium'>{path}</span>
          <span className='font-medium'>{`>`}</span>
          <span className='font-light'>{currentPage}</span>
        </p>
      </div>
    </div>
  )
}

export default NavImage
