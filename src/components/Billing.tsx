"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Subtotal from "./Subtotal";

// Zod schema for form validation
const schema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  country: z.string().min(1, "Country is required"),
  province: z.string().min(1, "Province is required"),
  city: z.string().min(1, "City is required"),
  area: z.string().min(1, "Area is required"),
  streetAddress: z.string().min(1, "Street Address is required"),
  zipCode: z.string().min(1, "ZIP Code is required"),
  phone: z
    .string()
    .min(11, "Phone number must be 11 digits")
    .regex(/^03\d{9}$/, "Phone number must start with 03 and be 11 digits long"),
  email: z
    .string()
    .email("Invalid email address")
    .regex(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, "Email must be a Gmail address"),
  additionalInfo: z.string().optional(),
});

// Type inferred from Zod schema
type BillingFormData = z.infer<typeof schema>;

const Billing = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<BillingFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      country: "",
      province: "",
      city: "",
      area: "",
      streetAddress: "",
      zipCode: "",
      phone: "",
      email: "",
      additionalInfo: "",
    },
  });

  const onSubmit = (data: BillingFormData) => {
    console.log(data);
  };

  const countries = ['Pakistan'];
  const provinces = ['Sindh'];
  const cities = ['Karachi'];
  const karachiAreas = ['Saddar', 'Korangi', 'Gulshan-e-Iqbal', 'Shahra-e-Faisal', 'DHA'];

  return (
    <section className="w-full">
      <form
        className="w-full md:justify-between gap-y-10 my-14 flex flex-col lg:flex-row mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative space-y-6 md:space-y-9 mx-6 max-w-[500px]">
          <div>
            <h2 className="text-4xl flex items-center text-custom-green justify-center md:justify-start font-semibold">
              Billing details
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-7">
            <div className="space-y-2 text-base md:text-lg w-full sm:w-[48%]">
              <label className="font-medium text-black">First Name</label>
              <input
                {...register("firstName")}
                type="text"
                name="firstName"
                className="input-class relative z-30"
              />
              {errors.firstName && (
                <p className="error-class">{errors.firstName.message}</p>
              )}
            </div>
            <div className="space-y-2 text-base md:text-lg w-full sm:w-[48%]">
              <label className="font-medium text-black">Last Name</label>
              <input
                {...register("lastName")}
                type="text"
                className="input-class relative z-30"
              />
              {errors.lastName && (
                <p className="error-class">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          {/* Country / Region */}
          <div className="space-y-2 text-base md:text-lg">
            <label className="font-medium text-black">Country / Region</label>
            <Select onValueChange={(value) => setValue("country", value)}>
              <SelectTrigger className="select-class">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent className="bg-white z-30">
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.country && (
              <p className="error-class">{errors.country.message}</p>
            )}
          </div>

          {/* Province */}
          <div className="space-y-2 text-base md:text-lg">
            <label className="font-medium text-black">Province</label>
            <Select onValueChange={(value) => setValue("province", value)}>
              <SelectTrigger className="select-class">
                <SelectValue placeholder="Select Province" />
              </SelectTrigger>
              <SelectContent className="bg-white z-30">
                {provinces.map((province) => (
                  <SelectItem key={province} value={province}>
                    {province}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.province && (
              <p className="error-class">{errors.province.message}</p>
            )}
          </div>

          {/* City */}
          <div className="space-y-2 text-base md:text-lg">
            <label className="font-medium text-black">City</label>
            <Select onValueChange={(value) => setValue("city", value)}>
              <SelectTrigger className="select-class">
                <SelectValue placeholder="Select City" />
              </SelectTrigger>
              <SelectContent className="bg-white z-30">
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.city && <p className="error-class">{errors.city.message}</p>}
          </div>

          {/* Karachi Areas */}
          <div className="space-y-2 text-base md:text-lg">
            <label className="font-medium text-black">Town / Area</label>
            <Select onValueChange={(value) => setValue("area", value)}>
              <SelectTrigger className="select-class">
                <SelectValue placeholder="Select Area" />
              </SelectTrigger>
              <SelectContent className="bg-white z-30">
                {karachiAreas.map((area) => (
                  <SelectItem key={area} value={area}>
                    {area}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.area && <p className="error-class">{errors.area.message}</p>}
          </div>

          {/* Street Address */}
          <div className="space-y-2 text-base md:text-lg">
            <label className="font-medium text-black">Street Address</label>
            <input
              {...register("streetAddress")}
              type="text"
              className="input-class"
            />
            {errors.streetAddress && (
              <p className="error-class">{errors.streetAddress.message}</p>
            )}
          </div>

          {/* ZIP Code */}
          <div className="space-y-2 text-base md:text-lg">
            <label className="font-medium text-black">ZIP Code</label>
            <input
              {...register("zipCode")}
              type="text"
              className="input-class"
            />
            {errors.zipCode && (
              <p className="error-class">{errors.zipCode.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-2 text-base md:text-lg">
            <label className="font-medium text-black">Phone</label>
            <input
              {...register("phone")}
              type="text"
              className="input-class"
            />
            {errors.phone && <p className="error-class">{errors.phone.message}</p>}
          </div>

          {/* Email */}
          <div className="space-y-2 text-base md:text-lg">
            <label className="font-medium text-black">Email</label>
            <input
              {...register("email")}
              type="text"
              className="input-class"
            />
            {errors.email && <p className="error-class">{errors.email.message}</p>}
          </div>

          {/* Additional Info */}
          <div className="space-y-2 text-base md:text-lg">
            <label className="font-medium text-black">Additional Information</label>
            <textarea
              {...register("additionalInfo")}
              rows={4}
              className="input-class"
            />
          </div>
        </div>

        {/* Subtotal Component */}
        <div>
          <Subtotal />
          </div>
      </form>
    </section>
  );
};

export default Billing;
