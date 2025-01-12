"use client"
import React, { useState } from 'react';

type Country = {
  name: string;
  code: string;
};

type Province = {
  name: string;
  code: string;
};

type Provinces = {
  [key: string]: Province[];
};

const Billing = () => {
  const countries: Country[] = [
    { name: 'India', code: 'india' },
    { name: 'Pakistan', code: 'pakistan' },
    { name: 'Bangladesh', code: 'bangladesh' },
    { name: 'China', code: 'china' },
  ];

  const provinces: Provinces = {
    india: [
      { name: 'Uttar Pradesh', code: 'india-uttarPradesh' },
      { name: 'Maharashtra', code: 'india-maharashtra' },
      { name: 'Karnataka', code: 'india-karnataka' },
      { name: 'Tamil Nadu', code: 'india-tamilNadu' },
    ],
    pakistan: [
      { name: 'Punjab', code: 'pakistan-punjab' },
      { name: 'Sindh', code: 'pakistan-sindh' },
      { name: 'Khyber Pakhtunkhwa', code: 'pakistan-khyberPakhtunkhwa' },
      { name: 'Balochistan', code: 'pakistan-balochistan' },
    ],
    bangladesh: [
      { name: 'Dhaka', code: 'bangladesh-dhaka' },
      { name: 'Chittagong', code: 'bangladesh-chittagong' },
      { name: 'Khulna', code: 'bangladesh-khulna' },
      { name: 'Rajshahi', code: 'bangladesh-rajshahi' },
    ],
    china: [
      { name: 'Beijing', code: 'china-beijing' },
      { name: 'Shanghai', code: 'china-shanghai' },
      { name: 'Guangdong', code: 'china-guangdong' },
      { name: 'Zhejiang', code: 'china-zhejiang' },
    ],
  };

  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedProvinces, setSelectedProvinces] = useState<Province[]>([]);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const countryCode = event.target.value;
    setSelectedCountry(countryCode);
    // Update the provinces based on the selected country
    if (countryCode && provinces[countryCode]) {
      setSelectedProvinces(provinces[countryCode]);
    } else {
      setSelectedProvinces([]);
    }
  };

  return (
    <div className='max-w-screen-sm w-[90%] md:w-[500px] xl:w-[700px] mx-auto py-9 lg:pb-14 lg:px-16 space-y-11'>
      <div className='max-w-[470px] mx-auto'>
        <h2 className='text-4xl flex items-center justify-center md:justify-start font-semibold'>
          Billing details
        </h2>
      </div>
      <form className='space-y-6 md:space-y-9 max-w-[470px] mx-auto'>
        <div className='flex flex-col sm:flex-row gap-7'>
          <div className='space-y-2 md:space-y-5 w-full sm:w-[48%]'>
            <label className='font-medium text-black'>First Name</label>
            <input
              type='text'
              required
              className='w-full border px-2 text-sm md:text-xl border-gray-500 rounded-[10px] h-[40px] md:h-[75px] focus:outline-none focus:ring-0'
            />
          </div>
          <div className='space-y-2 md:space-y-5 w-full sm:w-[48%]'>
            <label className='font-medium text-black'>Last Name</label>
            <input
              type='text'
              required
              className='w-full px-2 text-sm md:text-xl border border-gray-500 rounded-[10px] h-[40px] md:h-[75px] focus:outline-none focus:ring-0'
            />
          </div>
        </div>

        {/* Company Name (Optional) */}
        <div className='space-y-2 md:space-y-5'>
          <label className='font-medium text-black'>Company Name (Optional)</label>
          <input
            type='text'
            className='w-full border px-2 text-sm md:text-xl border-gray-500 rounded-[10px] md:rounded-[10px] h-[40px] md:h-[75px] focus:outline-none focus:ring-0'
          />
        </div>

        {/* Country / Region */}
        <div className='space-y-2 md:space-y-5'>
          <label className='font-medium text-black'>Country / Region</label>
          <select
            required
            className='w-full border px-2 text-sm md:text-xl border-gray-500 rounded-[10px] md:rounded-[10px] h-[40px] md:h-[75px] focus:outline-none focus:ring-0 bg-white'
            onChange={handleCountryChange}
            value={selectedCountry}
          >
            <option value=''>Select Country</option>
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        {/* Province */}
        <div className='space-y-2 md:space-y-5'>
          <label className='font-medium text-black'>Province</label>
          <select
            required
            className='w-full px-2 text-sm md:text-xl border border-gray-500 rounded-[10px] md:rounded-[10px] h-[40px] md:h-[75px] focus:outline-none focus:ring-0 bg-white'
          >
            <option value=''>Select Province</option>
            {selectedProvinces.map((province) => (
              <option key={province.code} value={province.code}>
                {province.name}
              </option>
            ))}
          </select>
        </div>

        {/* Street Address */}
        <div className="space-y-2 md:space-y-5">
          <label className="font-medium text-black">Street Address</label>
          <input
            type="text"
            required
            className="w-full border px-2 text-sm md:text-xl border-gray-500 rounded-[10px] md:rounded-[10px] h-[40px] md:h-[75px] focus:outline-none focus:ring-0"
            placeholder="House number and street name"
          />
        </div>

        {/* Town / City */}
        <div className="space-y-2 md:space-y-5">
          <label className="font-medium text-black">Town / City</label>
          <input
            type="text"
            required
            className="w-full  px-2 text-sm md:text-xl border border-gray-500 rounded-[10px] md:rounded-[10px] h-[40px] md:h-[75px] focus:outline-none focus:ring-0"
          />
        </div>

        {/* ZIP Code */}
        <div className="space-y-2 md:space-y-5">
          <label className="font-medium text-black">ZIP Code</label>
          <input
            type="text"
            required
            className="w-full px-2 text-sm md:text-xl border border-gray-500 rounded-[10px] md:rounded-[10px] h-[40px] md:h-[75px] focus:outline-none focus:ring-0"
          />
        </div>

        {/* Phone */}
        <div className="space-y-2 md:space-y-5">
          <label className="font-medium text-black">Phone</label>
          <input
            type="text"
            required
            className="w-full px-2 text-sm md:text-xl border border-gray-500 rounded-[10px] md:rounded-[10px] h-[40px] md:h-[75px] focus:outline-none focus:ring-0"
          />
        </div>

        {/* Email Address */}
        <div className="space-y-2 md:space-y-5">
          <label className="font-medium text-black">Email Address</label>
          <input
            type="email"
            required
            className="w-full px-2 text-sm md:text-xl border border-gray-500 rounded-[10px] md:rounded-[10px] h-[40px] md:h-[75px] focus:outline-none focus:ring-0"
          />
        </div>

        {/* Additional Information (Optional) */}
        <div className="space-y-2 md:space-y-5">
          <input
            type="text"
            className="w-full px-2 text-sm md:text-xl border border-gray-500 rounded-[10px] md:rounded-[10px] h-[40px] md:h-[75px] focus:outline-none focus:ring-0"
            placeholder="Additional information"
          />
        </div>
      </form>
    </div>
  );
};

export default Billing;

















