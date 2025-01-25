"use client";

import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"; 
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "“They have a perfect touch for making something so professional, interesting, and useful for a lot of people.”",
    },
    {
      id: 2,
      text: "What impressed me most was the customization options. I was able to choose the perfect size and color for my dining table. The quality is amazing, and I'm constantly getting compliments from guests!",
    },
    {
      id: 3,
      text: "The chairs I bought are both elegant and durable. I appreciated the fast delivery and clear communication. It's refreshing to find a company that values customer satisfaction so much!",
    },
  ];

  return (
    <section className="bg-custom-green py-20 md:py-32 max-h-[600px] overflow-hidden">
      <div className="md:pl-20 mx-auto grid grid-cols-1 gap-8 items-center">
        {/* Testimonials in one carousel */}
        <div className="space-y-6">
          <Carousel
            plugins={[
              Autoplay({
                delay: 6000, // Set autoplay delay to 6 seconds
              }),
            ]}
            className="embla"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="rounded-lg shadow-xl grid grid-cols-1 gap-8 p-6"
                >
                  {/* Testimonial Text Only */}
                  <div className="relative space-y-4 p-6 text-white">
                    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    <div className="relative z-10">
                      <p className="text-xl italic">{testimonial.text}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
