"use client"
import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"
import axios from "axios"
import { Star, Edit, Trash2, Pencil, MessageCircle, X, Loader2 } from "lucide-react" // Icons
import { useUser } from "@clerk/nextjs"
 

interface Review {
  _id: string
  customer: {
    firstName: string
    lastName: string
    email: string
  }
  rating: number | undefined
  reviewText: string
  createdAt: string
}

interface ReviewSectionProps {
  productId: string
  reviews: Review[]
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ productId, reviews }) => {
  const { user } = useUser(); 
  const [rating, setRating] = useState<number | undefined>(undefined)
  const [reviewText, setReviewText] = useState("")
  const [customerEmail, setCustomerEmail] = useState(user?.emailAddresses?.[0]?.emailAddress || "") 
  const [editingReview, setEditingReview] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [visibleReviews, setVisibleReviews] = useState(5)
  const [loading, setLoading] = useState(false) 
  const [reviewList, setReviewList] = useState(reviews) 
  const router = useRouter()

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true) 

    if (!user || user?.emailAddresses?.[0]?.emailAddress !== customerEmail) {  
      toast.error("You must be logged in to submit a review with your account email.")
      setLoading(false)
      return
    }

    try {
      let response;
      if (editingReview) {
        response = await axios.put(`/api/reviews/${editingReview}`, { productId, rating, reviewText, customerEmail })
        if (response.status === 200) {
          toast.success("Review updated successfully")
          setEditingReview(null)
          setReviewList((prevReviews) => 
            prevReviews.map((review) =>
              review._id === editingReview
                ? { ...review, rating, reviewText } 
                : review
            )
          )
        }
      } else {
        response = await axios.post("/api/reviews", { productId, rating, reviewText, customerEmail })
        if (response.status === 200) {
          toast.success("Review submitted successfully")
          const newReview = { _id: response.data._id, customer: { firstName: "You", lastName: "", email: customerEmail }, rating, reviewText, createdAt: new Date().toISOString() }
          setReviewList([newReview, ...reviewList]) 
        }
      }
      setRating(undefined)
      setReviewText("")
      setCustomerEmail("")
    } catch (error) {
      console.log(error)
      toast.error("An error occurred while submitting the review")
    } finally {
      setLoading(false)
      setShowForm(false)
    }
  }


  const handleEditReview = (reviewId: string) => {
    const reviewToEdit = reviews.find((review) => review._id === reviewId)
    if (reviewToEdit) {
      setEditingReview(reviewId)
      setRating(reviewToEdit.rating || undefined)
      setReviewText(reviewToEdit.reviewText)
      setCustomerEmail(reviewToEdit.customer.email)
      setShowForm(true)
    }
  }

  const handleDeleteReview = async (reviewId: string) => {
    setLoading(true)
    try {
      await axios.delete(`/api/reviews/${reviewId}`, { data: { customerEmail } })
      toast.success("Review deleted successfully")
      router.refresh()
    } catch (error) {
      console.log(error)
      toast.error("An error occurred while deleting the review")
    } finally {
      setLoading(false) 
    }
  }

  return (
    <div className="mt-12 max-w-screen-xl mx-auto p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <MessageCircle size={24} className="text-custom-green" /> Customer Reviews
        </h2>
        <button
          onClick={() => setShowForm(true)}
          className="hidden mt-4 md:flex items-center gap-2 bg-custom-green text-white px-4 py-2 rounded-lg hover:bg-emerald-950"
        >
          <Pencil size={18} /> Write a Review
        </button>
      </div>

      {reviewList.length === 0 ? (
        <div className="text-gray-500 flex flex-col items-center gap-2 py-4">
          <Star size={48} className="text-gray-300" />
          <p>No reviews yet</p>
          <button
          onClick={() => setShowForm(true)}
          className="hidden mt-4 md:flex items-center gap-2 bg-custom-green text-white px-4 py-2 rounded-lg hover:bg-emerald-950"
        >
          <Pencil size={18} /> Write a Review
        </button>
        </div>
      ) : (
        <>
          {reviewList.slice(0, visibleReviews).map((review) => (
            <div key={review._id} className="my-4 p-4 border rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold mr-2">
                    {review.customer.firstName} {review.customer.lastName}
                  </span>
                  <span className="text-yellow-500 flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-500" />
                    ))}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleEditReview(review._id)} className="text-blue-500">
                    <Edit size={18} />
                  </button>
                  <button onClick={() => handleDeleteReview(review._id)} className="text-red-500">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              <p className="mt-2">{review.reviewText}</p>
              <span className="text-sm text-gray-500">
                {new Date(review.createdAt).toLocaleDateString()}
              </span>
            </div>
          ))}
          {visibleReviews < reviewList.length && (
            <button
              onClick={() => setVisibleReviews(visibleReviews + 5)}
              className="mt-4 text-custom-green underline"
            >
              Show more reviews
            </button>
          )}
        </>
      )}

      {showForm && (
        <div className="fixed z-30 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button onClick={() => setShowForm(false)} className="absolute top-2 right-2 text-gray-600">
              <X size={24} />
            </button>
            <h3 className="text-xl font-semibold mb-4">{editingReview ? "Edit Review" : "Write a Review"}</h3>
            <form onSubmit={handleSubmitReview}>
              <div className="mb-4">
                <label className="block mb-2">Your Email</label>
                <input
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Rating</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} type="button" onClick={() => setRating(star)}
                      className={`text-2xl ${rating !== undefined && star <= rating ? "text-yellow-500" : "text-gray-300"}`}>★</button>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-2">Your Review</label>
                <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)}
                  className="w-full p-2 border rounded" rows={4} required></textarea>
              </div>
              <button type="submit" className="bg-custom-green text-white px-4 py-2 rounded-lg hover:bg-emerald-950">
                {loading ? <Loader2 className="animate-spin mr-2" size={20} /> : ""}
                {editingReview ? "Update Review" : "Submit Review"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default ReviewSection

