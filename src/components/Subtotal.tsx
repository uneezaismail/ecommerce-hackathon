import React from 'react'

const Subtotal = () => {
  return (
    
    <div className='w-[90%] mx:2 md:mx-auto sm:w-[400px] md:w-[500px] mx-auto lg:w-[508px] h-fit xl:w-[608px] py-9 lg:pb-14 lg:py-20 lg:px-9 space-y-9'>
        <div className=' xl:w-[533px] space-y-9'>
            <div className='flex flex-col gap-y-5'>
                <div className='flex items-center justify-between'><span className='text-2xl font-medium'>Product</span><span className='text-2xl font-medium'>Subtotal</span></div>
                <div className='flex items-center justify-between'>
                    <span className='text-gray-300'>Asgaard sofa <span  className='text-black'>*</span> <span className='text-black'>1</span></span>
                    <span>Rs.250,000.00</span></div>
                <div className='flex items-center justify-between'><span>Subtotal</span><span>Rs.250,000.00</span></div>
                <div className='flex items-center justify-between'><span>Total</span><span className='text-2xl font-bold text-[#B88E2F]'>Rs.250,000.00</span></div>
                
            </div>


            {/* bottom  */}
            <div className='flex flex-col gap-y-5'>
            <hr />
            <div className='space-y-6'>
                {/* 1  */}
            <div className='space-x-4'><span className='bg-black px-3 rounded-full'></span> <span>Direct Bank Transfer</span></div>
            {/* 2  */}
            <div><p className='font-light text-gray-400'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p></div>
            {/* 3  */}
            <div className="flex flex-col gap-y-3 gap-x-7">
  <div className="flex items-center">
    <input
      type="radio"
      id="directBankTransfer"
      name="paymentMethod"
      value="directBankTransfer"
      className="mr-2"
    />
    <label htmlFor="directBankTransfer" className="text-black">
      Direct Bank Transfer
    </label>
  </div>
  <div className="flex items-center">
    <input
      type="radio"
      id="cashOnDelivery"
      name="paymentMethod"
      value="cashOnDelivery"
      className="mr-2"
    />
    <label htmlFor="cashOnDelivery" className="text-black">
      Cash on Delivery
    </label>
  </div>
</div>

{/* 4  */}
<div>
    <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-semibold'>privacy policy.</span> </p>
</div>


            </div>
            </div>
            <div className='flex items-center justify-center'>
<button type='submit' className='border border-black rounded-xl text-xl py-4 px-10 lg:px-28'>Place Order</button>
</div>
            </div>
            </div>
  )
}

export default Subtotal