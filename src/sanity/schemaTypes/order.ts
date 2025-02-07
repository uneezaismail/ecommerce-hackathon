import { defineField, defineType } from "sanity"

export const order = defineType({
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    defineField({
      name: "customer",
      title: "Customer",
      type: "reference",
      to: [{ type: "customer" }],
    }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "product",
              title: "Product",
              type: "reference",
              to: [{ type: "product" }],
            },
            { name: "quantity", type: "number", title: "Quantity" },
            { name: "price", type: "number", title: "Price" },
            { name: "color", type: "string", title: "Color" },
            { name: "size", type: "string", title: "Size" },
            { name: "name", type: "string", title: "Product name" },
            { name: "productId", type: "string", title: "product ID" },
          ],
        },
      ],
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "object",
      fields: [
        { name: "country", type: "string", title: "Country" },
        { name: "province", type: "string", title: "Province" },
        { name: "city", type: "string", title: "City" },
        { name: "area", type: "string", title: "Area" },
        { name: "streetAddress", type: "string", title: "Street Address" },
        { name: "zipCode", type: "string", title: "ZIP Code" },
      ],
    }),
    defineField({
      name: "totalPrice",
      title: "Total Price",
      type: "number",
    }),
    defineField({
      name: "paymentMethod",
      title: "Payment Method",
      type: "string",
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
    }),
    defineField({
      name: "shipmentStatus",
      title: "Shipment Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Shipped", value: "shipped" },
          { title: "In Transit", value: "inTransit" },
          { title: "Delivered", value: "delivered" },
          { title: "Cancelled", value: "cancelled" },
        ],
      },
    }),
    defineField({
      name: "trackingNumber",
      title: "Tracking Number",
      type: "string",
    }),
    defineField({
      name: "shippingMethod",
      title: "Shipping Method",
      type: "string",
    }),
    defineField({
      name: "estimatedDeliveryDate",
      title: "Estimated Delivery Date",
      type: "datetime",
    }),
  ],
  preview: {
    select: {
      productName: "items.0.name",
      customer: "customer.firstName",
    },
    prepare({ productName, customer }) {
      return {
        title: productName || "No Product Name",
        subtitle: customer ? `Ordered by: ${customer}` : "No Customer",
      }
    },
  }
})
