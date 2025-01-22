import React from "react";

const Delivery = () => {
  const Deliverydetail = [
    {
      heading: "Free Delivery",
      para: "For all orders over $50, consectetur adipiscing elit.",
    },
    {
      heading: "90 Days Return",
      para: "If goods have problems, consectetur adipiscing elit.",
    },
    {
      heading: "Secure Payment",
      para: "100% secure payment, consectetur adipiscing elit.",
    },
  ];

  return (
    <section className="bg-[#F6F6F0] text-custom-green mt-20 flex items-center justify-center py-16 md:py-16 lg:py-24">
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-11">
        {Deliverydetail.map((detail, index) => (
          <div
            key={index}
            className=" max-w-[367px] min-h-[150px] md:min-h-[180px] text-center md:text-start mx-auto space-y-2"
          >
            <h4 className="font-semibold text-2xl lg:text-3xl">{detail.heading}</h4>
            <p>{detail.para}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Delivery;
