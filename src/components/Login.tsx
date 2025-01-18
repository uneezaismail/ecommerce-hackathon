import React from 'react'

const Login = () => {
  return (
   <section className='w-[400px] mx-auto lg:w-[508px] xl:h-[630x] xl:w-[608px] lg:pt-9 lg:pb-14 lg:px-16 space-y-9'>
    <div><h4 className='text-4xl font-semibold text-custom-green'>Log In</h4></div>
    <div>
        <form className='space-y-6 md:space-y-11'>
            <div className='space-y-6 md:space-y-9'>
            <div className='flex flex-col space-y-3'>
                <label htmlFor="Email" className='text-lg font-medium'>Username or email address</label>
                <input type="email" className='border focus:ring-0 focus:outline-none border-black rounded w-[300px] lg:w-[423px] h-[40px] lg:h-[75px]'/>
            </div>
            <div className='flex flex-col space-y-3'>
                <label htmlFor="Password" className='text-lg font-medium'>Password</label>
                <input type="password" className='border focus:ring-0 focus:outline-none border-black rounded w-[300px]  lg:w-[423px] h-[40px] lg:h-[75px]'/>
            </div>
            </div>
            <div className='space-y-6 md:space-y-11'>
            <div className="flex items-center ">
            <input
              type="checkbox"
              className="h-7 w-7 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">Remember me</label>
          </div>
            <div className="flex items-center gap-x-7">
                
            <button type='submit' className='border border-black rounded text-white bg-custom-green hover:bg-emerald-950 text-xl py-2 md:py-4 px-6 md:px-10 lg:px-20'>Log In</button>
            <div> <button className='font-light'>Lost your Password?</button></div>
          </div>
            </div>
        </form>
    </div>
   </section>
  )
}

export default Login