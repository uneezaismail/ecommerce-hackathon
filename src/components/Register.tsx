import React from 'react'

const Register = () => {
  return (
   <section className='w-[400px] mx-auto lg:w-[508px] xl:h-[630x] xl:w-[608px] lg:pt-9 lg:pb-14 lg:px-16 space-y-9 '>
    <div><h4 className='text-4xl font-semibold'>Register</h4></div>
    <div>
        <form className='space-y-16 md:space-y-9 lg:space-y-16'>
            <div className='space-y-9'>
            <div className='flex flex-col space-y-6'>
                <label htmlFor="Email" className='text-base font-medium'>Email address</label>
                <input type="email" className='border focus:ring-0 focus:outline-none border-black rounded-xl w-[300px]  lg:w-[423px] h-[40px] lg:h-[75px]'/>
            </div>
            <div>
           <p>A link to set a new password will be sent to your email address.</p>
           <br />
           <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-semibold'>privacy policy</span>.</p>
           </div>
            </div>
           
          





            <div className="flex items-center">
                
            <button type='submit' className='border border-black rounded-xl text-xl px-10 py-4 lg:px-20'>Register</button>
      
         
            </div>
        </form>
    </div>
   </section>
  )
}

export default Register