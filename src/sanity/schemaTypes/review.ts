import { defineField, defineType } from "sanity"

export const review = defineType({
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    defineField({
      name: "product",
      title: "Product",
      type: "reference",
      to: [{ type: "product" }],
    }),
    defineField({
      name: "customer",
      title: "Customer",
      type: "reference",
      to: [{ type: "customer" }],
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: "reviewText",
      title: "Review Text",
      type: "text",
    }),
    defineField({
      name: "customerEmail",
      title: "Customer Email",
      type: "string",
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
    }),
    defineField({
      name: "updatedAt",
      title: "Updated At",
      type: "datetime",
    }),
  ],
})

