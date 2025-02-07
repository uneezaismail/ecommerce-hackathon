import { type NextRequest, NextResponse } from "next/server"
import { client } from "@/sanity/lib/client"

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { rating, reviewText, customerEmail } = await request.json();

  try {
    const existingReview = await client.fetch(
      `*[_type == "review" && _id == $id][0]{
        ...,
        customer->{email}
      }`,
      { id }
    );

    if (!existingReview) {
      return NextResponse.json({ message: "Review not found" }, { status: 404 });
    }

    if (existingReview.customer.email !== customerEmail) {
      return NextResponse.json(
        { message: "Unauthorized to edit this review" },
        { status: 403 }
      );
    }

    const result = await client
      .patch(id)
      .set({
        rating,
        reviewText,
        updatedAt: new Date().toISOString(),
      })
      .commit();

    return NextResponse.json(
      { message: "Review updated successfully", review: result },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating review:", error);
    return NextResponse.json({ message: "Error updating review" }, { status: 500 });
  }
}





export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { customerEmail } = await request.json();

  try {
    const existingReview = await client.fetch(
      `*[_type == "review" && _id == $id][0]{
        ...,
        customer->{email}
      }`,
      { id }
    );

    if (!existingReview) {
      return NextResponse.json({ message: "Review not found" }, { status: 404 });
    }

    if (existingReview.customer.email !== customerEmail) {
      return NextResponse.json(
        { message: "Unauthorized to delete this review" },
        { status: 403 }
      );
    }

    await client.delete(id);

    return NextResponse.json(
      { message: "Review deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting review:", error);
    return NextResponse.json({ message: "Error deleting review" }, { status: 500 });
  }
}