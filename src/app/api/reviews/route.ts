 import { type NextRequest, NextResponse } from "next/server"
 import { client } from "@/sanity/lib/client"

export async function POST(request: NextRequest) {
  const { productId, rating, reviewText, customerEmail } = await request.json()


  const customerExists = await checkCustomerInSanity(customerEmail)

  if (!customerExists) {
    return NextResponse.json({ message: "You must be a registered customer to submit a review." }, { status: 403 })
  }

  const hasCustomerPurchasedProduct = await checkCustomerPurchase(customerEmail, productId)

  if (!hasCustomerPurchasedProduct) {
    return NextResponse.json({ message: "You can only review products you have purchased" }, { status: 403 })
  }

  try {
    const customer = await getOrCreateCustomer(customerEmail)

    const result = await client.create({
      _type: "review",
      product: {
        _type: "reference",
        _ref: productId,
      },
      customer: {
        _type: "reference",
        _ref: customer._id,
      },
      rating,
      reviewText,
      customerEmail,
      createdAt: new Date().toISOString(),
    })

    return NextResponse.json({ message: "Review created successfully", review: result }, { status: 201 })
  } catch (error) {
    console.error("Error creating review:", error)
    return NextResponse.json({ message: "Error creating review" }, { status: 500 })
  }
}

async function checkCustomerInSanity(email: string): Promise<boolean> {
  const query = `*[_type == "customer" && email == $email][0]`
  const result = await client.fetch(query, { email })
  return !!result
}

async function getOrCreateCustomer(customerEmail: string) {
  const query = `*[_type == "customer" && email == $email][0]`
  const existingCustomer = await client.fetch(query, { email: customerEmail })
  
  if (existingCustomer) {
    return existingCustomer
  }

  // Create a new customer if not found
  const newCustomer = await client.create({
    _type: 'customer',
    email: customerEmail,
    createdAt: new Date().toISOString(),
  })
  
  return newCustomer
}

async function checkCustomerPurchase(customerEmail: string, productId: string): Promise<boolean> {
  const query = `*[_type == "order" && customer->email == $customerEmail && $productId in items[].productId][0]`
  const result = await client.fetch(query, { customerEmail, productId })
  
  return !!result // Returns true if the customer has purchased the product
}





// export async function POST(request: NextRequest) {
//   const { productId, rating, reviewText, customerEmail } = await request.json()

//   // Ensure customerEmail exists in Sanity
//   const customerExists = await checkCustomerInSanity(customerEmail)

//   if (!customerExists) {
//     return NextResponse.json({ message: "You must be a registered customer to submit a review." }, { status: 403 })
//   }

//   const hasCustomerPurchasedProduct = await checkCustomerPurchase(customerEmail, productId)

//   if (!hasCustomerPurchasedProduct) {
//     return NextResponse.json({ message: "You can only review products you have purchased" }, { status: 403 })
//   }

//   try {
//     const customer = await getOrCreateCustomer(customerEmail)

//     const result = await client.create({
//       _type: "review",
//       product: {
//         _type: "reference",
//         _ref: productId,
//       },
//       customer: {
//         _type: "reference",
//         _ref: customer._id,
//       },
//       rating,
//       reviewText,
//       customerEmail,
//       createdAt: new Date().toISOString(),
//     })

//     return NextResponse.json({ message: "Review created successfully", review: result }, { status: 201 })
//   } catch (error) {
//     console.error("Error creating review:", error)
//     return NextResponse.json({ message: "Error creating review" }, { status: 500 })
//   }
// }

// async function checkCustomerInSanity(email: string): Promise<boolean> {
//   const query = `*[_type == "customer" && email == $email][0]`
//   const result = await client.fetch(query, { email })
//   return !!result
// }
