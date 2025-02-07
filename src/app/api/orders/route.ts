import { client } from "@/sanity/lib/client"
import { type NextRequest, NextResponse } from "next/server"
import { v4 as uuidv4 } from "uuid"

export async function POST(req: NextRequest) {
  try {
    const { customerData, orderData, address } = await req.json()

    const trackingNumber = uuidv4().replace(/-/g, "").substring(0, 8)
    const createdAt = new Date().toISOString()
    const estimatedDeliveryDate = new Date()
    estimatedDeliveryDate.setDate(new Date().getDate() + 10)

    const itemsWithKeys = orderData.items.map((item: any) => ({
      ...item,
      _key: uuidv4(),
    }))

   
    for (const item of orderData.items) {
      const productId = item.productId
      const quantity = item.quantity

      if (!productId) {
        throw new Error(`Product ID is missing for item: ${JSON.stringify(item)}`)
      }

      const product = await client.fetch(`*[_type == "product" && _id == $productId][0]`, {
        productId,
      })

      if (!product) {
        throw new Error(`Product with ID ${productId} not found`)
      }

      if (product.inventory < quantity) {
        throw new Error(`Not enough inventory for product ${product.productName}`)
      }

      await client
        .patch(product._id)
        .set({ inventory: product.inventory - quantity })
        .commit()
    }

   
    let customer = await client.fetch(`*[_type == "customer" && email == $email][0]`, { email: customerData.email })

    if (!customer) {
      
      customer = await client.create({
        _type: "customer",
        ...customerData,
      })
    } else {
      
      customer = await client.patch(customer._id).set(customerData).commit()
    }

    const order = await client.create({
      _type: "order",
      customer: {
        _type: "reference",
        _ref: customer._id,
      },
      items: itemsWithKeys,
      totalPrice: orderData.totalPrice,
      paymentMethod: orderData.paymentMethod,
      trackingNumber,
      shipmentStatus: "pending",
      shippingMethod: "Leopard",
      createdAt,
      estimatedDeliveryDate: estimatedDeliveryDate.toISOString(),
      address: address,
    })

    return NextResponse.json({
      message: "Order created successfully",
      customer,
      order,
    })
  } catch (error: any) {
    console.error("Error creating order:", error)
    return NextResponse.json({ message: "Failed to create order", error: error.message }, { status: 500 })
  }
}





















// import { type NextRequest, NextResponse } from "next/server"
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// export async function POST(request: NextRequest) {
//   try {
//     if (!request.body) {
//       return NextResponse.json({ error: "Request body is missing" }, { status: 400 })
//     }

//     const { amount } = await request.json()


//     if (!amount || typeof amount !== "number") {
//       return NextResponse.json({ error: "Invalid amount provided" }, { status: 400 })
//     }

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: "pkr",
//       automatic_payment_methods: { enabled: true },
//     })

//     return NextResponse.json({ clientSecret: paymentIntent.client_secret });
//   } catch (error) {
//     console.error("Stripe API Error:", error)
//     return NextResponse.json(
//       { error: error instanceof Error ? error.message : "Internal Server Error" },
//       { status: 500 },
//     )
//   }
// }

