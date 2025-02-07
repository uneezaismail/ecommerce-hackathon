"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useCart } from "@/app/context/cartContext"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import toast from "react-hot-toast"
import { useUser } from "@clerk/nextjs"

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
  paymentMethod: z.enum(["easypaisa", "jazzcash", "bankTransfer"]),
})

type CheckoutFormData = z.infer<typeof schema>

const Billing = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const shippingCost = 300;
  const finalTotalPrice = totalPrice + shippingCost;
  const { user } = useUser(); 
  const userEmail = user?.emailAddresses?.[0]?.emailAddress || '';

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: CheckoutFormData) => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty. Please add items before placing an order.");
      return; 
    }
    const customerData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: userEmail,
      phone: data.phone,
    };

    const address = {
      country: data.country,
      province: data.province,
      city: data.city,
      area: data.area,
      streetAddress: data.streetAddress,
      zipCode: data.zipCode,
    };


    const orderData:any = {
      items: cartItems.map((item) => ({
        productId: item.id,
        product: {
          _type: "reference",
          _ref: item.id,
        },
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        color: item.color,
        size: item.size,
      })),
      totalPrice: finalTotalPrice,
      paymentMethod: data.paymentMethod,
    };

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customerData, orderData, address}), 
      });

      const result = await response.json();
      if (response.ok) {
        
        toast.success("Order placed successfully!");
        clearCart();
        window.location.href = "/order-success"; 
      } else {
        
        toast.error(result.message || "Something went wrong, please try again!");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      toast.error("An error occurred while placing the order. Please try again.");
    }
  };
  

  const locations = {
    country: ["Pakistan"],
    province: ["Sindh"],
    city: ["Karachi"],
    area: ["Saddar", "Korangi", "Gulshan-e-Iqbal", "Shahra-e-Faisal", "DHA"],
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-custom-green mb-12 text-center">Checkout</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col lg:flex-row gap-8 mx-auto">
        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="text-4xl font-semibold text-custom-green">Billing Details</h2>
          <div className="grid grid-cols-2 gap-4">
            {["firstName", "lastName"].map((field) => (
              <div key={field} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 capitalize">
                  {field.replace(/([A-Z])/g, " $1").trim()}
                </label>
                <input
                  {...register(field as "firstName" | "lastName")}
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-custom-green focus:border-transparent transition duration-200 ease-in-out"
                />
                {errors[field as "firstName" | "lastName"] && (
                  <p className="text-red-500 text-sm">{errors[field as "firstName" | "lastName"]?.message}</p>
                )}
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {Object.entries(locations).map(([field, options]) => (
              <div key={field} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 capitalize">{field}</label>
                <Select onValueChange={(value) => setValue(field as keyof CheckoutFormData, value)}>
                  <SelectTrigger className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-custom-green  transition duration-200 ease-in-out">
                    <SelectValue placeholder={`Select ${field}`} />
                  </SelectTrigger>
                  <SelectContent className="z-30 bg-white">
                    {options.map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors[field as keyof CheckoutFormData] && (
                  <p className="text-red-500 text-sm">{errors[field as keyof CheckoutFormData]?.message}</p>
                )}
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {["streetAddress", "zipCode", "phone", "email"].map((field) => (
              <div key={field} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 capitalize">
                  {field.replace(/([A-Z])/g, " $1").trim()}
                </label>
                <input
                  {...register(field as keyof CheckoutFormData)}
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-custom-green focus:border-transparent transition duration-200 ease-in-out"
                />
                {errors[field as keyof CheckoutFormData] && (
                  <p className="text-red-500 text-sm">{errors[field as keyof CheckoutFormData]?.message}</p>
                )}
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Additional Information</label>
            <textarea
              {...register("additionalInfo")}
              rows={3}
              className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-custom-green focus:border-transparent transition duration-200 ease-in-out resize-none"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="text-2xl md:text-4xl font-semibold text-custom-green">Order Summary</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <div className="relative">
                    <Image
                      src={item.images}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-md"
                    />
                    <span className="absolute top-0 right-0 bg-gray-200 text-xs font-bold px-2 py-1 rounded-full">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      {item.size && `Size: ${item.size}`} {item.color && `Color: ${item.color}`}
                    </p>
                  </div>
                  <div className="text-right">
                    {item.discount ? (
                      <>
                        <p className="text-sm font-medium text-custom-green">
                          Rs. {totalPrice}
                        </p>
                        <p className="text-xs text-gray-500 line-through">
                          Rs. {(item.price * item.quantity)}
                        </p>
                      </>
                    ) : (
                      <p className="text-sm font-medium">Rs. {(item.price * item.quantity).toFixed(2)}</p>
                    )}
                  </div>
                </div>
              ))}
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between items-center text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-medium">Rs. {totalPrice}</span>
                </div>
                <div className="flex justify-between items-center text-gray-700 mt-2">
                  <span>Shipping</span>
                  <span className="font-medium">Rs. {shippingCost}</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold mt-4">
                  <span>Total</span>
                  <span className="text-custom-green">Rs. {finalTotalPrice}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Payment Method</h3>
            <div className="space-y-2">
              {["easypaisa", "jazzcash", "bankTransfer"].map((method) => (
                <div key={method} className="flex items-center">
                  <input
                    {...register("paymentMethod")}
                    type="radio"
                    id={method}
                    value={method}
                    className="w-4 h-4 text-custom-green focus:ring-custom-green border-gray-300"
                  />
                  <label htmlFor={method} className="ml-3 block text-sm font-medium text-gray-700 capitalize">
                    {method.replace(/([A-Z])/g, " $1").trim()}
                  </label>
                </div>
              ))}
            </div>
            {errors.paymentMethod && <p className="text-red-500 text-sm">{errors.paymentMethod.message}</p>}
          </div>

          <p className="text-sm text-gray-500">
            Your personal data will be used to process your order, support your experience throughout this website, and
            for other purposes described in our <span className="font-semibold">privacy policy</span>.
          </p>

          <button
            type="submit"
            className="w-full bg-custom-green text-white py-2 px-4 rounded-md text-lg font-semibold hover:bg-emerald-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-green transition-all duration-300 ease-in-out transform"
          >
            Place Order
          </button>
        </div>
      </form>
    </section>
  )
}

export default Billing
