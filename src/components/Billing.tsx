import React from 'react'

const Billing = () => {
  return (
 
    <div className='w-[90%] mx-4 sm:w-[300px] md:w-[500px] sm:mx-auto lg:w-[508px] h-fit xl:w-[608px] py-9 lg:pb-14 lg:px-16 space-y-9'>
  <div>
    <h2 className='text-4xl font-semibold'>Billing Details</h2>
  </div>
  <form className="space-y-6 md:space-y-9 md:w-[470px]">
    
    <div className="flex items-center gap-x-7">
      <div className="space-y-5">
        <label className="block text-black">First Name</label>
        <input
          type="text"
          className="w-full border-2 border-gray-400 rounded-[6px] md:rounded-[10px] h-[40px] md:h-[75px] focus:outline-none focus:ring-0"
        />
      </div>
      <div className="space-y-5">
        <label className="block text-black">Last Name</label>
        <input
          type="text"
          className="w-full border-2 border-gray-400 rounded-[6px] md:rounded-[10px] h-[40px] md:h-[75px] focus:outline-none focus:ring-0"
        />
      </div>
    </div>

    {/* Company Name */}
    <div className="space-y-5">
      <label className="block text-black">Company Name (Optional)</label>
      <input
        type="text"
        className="w-full border-2 border-gray-400 rounded-[6px] md:rounded-[10px] h-[40px] md:h-[75px] focus:outline-none focus:ring-0"
      />
    </div>

    {/* Country / Region */}
    <div className="space-y-5">
      <label className="block text-black">Country / Region</label>
      <select
        className="w-full border-2 border-gray-400 rounded-[6px] md:rounded-[10px] h-[40px] md:h-[75px] focus:outline-none focus:ring-0 bg-white"
      >
        <option value="">
          Select Country
        </option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="canada">Canada</option>
      </select>
    </div>

    {/* Street Address */}
    <div className="space-y-5">
      <label className="block text-black">Street Address</label>
      <input
        type="text"
        className="w-full border-2 border-gray-400 rounded-[6px] md:rounded-[10px] h-[40px] md:h-[75px] focus:outline-none focus:ring-0"
        placeholder="House number and street name"
      />
    </div>

    {/* Town / City */}
    <div className="space-y-5">
      <label className="block text-black">Town / City</label>
      <input
        type="text"
        className="w-full border-2 border-gray-400 rounded-[6px] md:rounded-[10px] h-[40px] md:h-[75px] focus:outline-none focus:ring-0"
      />
    </div>

    {/* Province */}
    <div className="space-y-5">
      <label className="block text-black">Province</label>
      <select
        className="w-full border-2 border-gray-400 rounded-[6px] md:rounded-[10px] h-[40px] md:h-[75px] focus:outline-none focus:ring-0 bg-white"
      >
        <option value="">
          Select Province
        </option>
        <option value="province1">Province 1</option>
        <option value="province2">Province 2</option>
      </select>
    </div>

    {/* ZIP Code */}
    <div className="space-y-5">
      <label className="block text-black">ZIP Code</label>
      <input
        type="text"
        className="w-full border-2 border-gray-400 rounded-[6px] md:rounded-[10px] h-[40px] md:h-[75px] focus:outline-none focus:ring-0"
      />
    </div>

    {/* Phone */}
    <div className="space-y-5">
      <label className="block text-black">Phone</label>
      <input
        type="text"
        className="w-full border-2 border-gray-400 rounded-[6px] md:rounded-[10px] h-[40px] md:h-[75px] focus:outline-none focus:ring-0"
      />
    </div>

    {/* Email Address */}
    <div className="space-y-5">
      <label className="block text-black">Email Address</label>
      <input
        type="email"
        className="w-full border-2 border-gray-400 rounded-[6px] md:rounded-[10px] h-[40px] md:h-[75px] focus:outline-none focus:ring-0"
      />
    </div>

    {/* Additional Information */}
    <input
      type="text"
      className="w-full border-2 border-gray-400 rounded-[6px] md:rounded-[10px] h-[40px] md:h-[75px] focus:outline-none focus:ring-0"
      placeholder="Additional information"
    />
  </form>
</div>

  )
}

export default Billing