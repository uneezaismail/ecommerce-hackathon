import type React from "react"
import Image from "next/image"
import { Trash2 } from "lucide-react"

interface CartItemProps {
  id: string
  name: string
  price: number
  discount?: number
  discountedPrice: number
  quantity: number
  images: string
  size?: string
  color?: string
  inventory: number
  onDecrement: () => void
  onIncrement: () => void
  onRemove: () => void
}

const CartItem: React.FC<CartItemProps> = ({
  name,
  price,
  discount,
  discountedPrice,
  quantity,
  images,
  size,
  color,
  inventory,
  onDecrement,
  onIncrement,
  onRemove,
}) => {
  const totalOriginalPrice = price * quantity
  const totalDiscountedPrice = discountedPrice * quantity

  return (
    <div className="flex flex-row border-t pt-4 items-center justify-between md:p-4 rounded-lg gap-y-4 md:gap-y-0">
      <div className="flex flex-row items-center gap-4">
        <Image
          src={images}
          alt={name}
          height={70}
          width={80}
          className="w-20 h-20 md:w-28 md:h-28 object-cover border border-black"
        />
        <div>
          <p className="text-[15px] md:text-base font-medium text-custom-green">{name}</p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            {color && <p>Color: {color}</p>}
            {size && <p>Size: {size}</p>}
          </div>
          <div className="md:hidden text-custom-green font-semibold text-sm md:text-base">
            {discount && discount > 0 ? (
              <>
                <p className="line-through text-gray-500">Rs. {totalOriginalPrice.toFixed(2)}</p>
                <p>Rs. {totalDiscountedPrice.toFixed(2)}</p>
              </>
            ) : (
              <p>Rs. {totalOriginalPrice.toFixed(2)}</p>
            )}
          </div>
        </div>
      </div>

      <div className="hidden md:block text-sm md:text-base font-medium text-custom-green">
        {discount && discount > 0 ? (
          <>
            <p className="line-through text-gray-500">Rs. {totalOriginalPrice.toFixed(2)}</p>
            <p>Rs. {totalDiscountedPrice.toFixed(2)}</p>
          </>
        ) : (
          <p>Rs. {totalOriginalPrice.toFixed(2)}</p>
        )}
      </div>

      <div className="flex-col-reverse md:flex-row flex gap-4 items-center">
        <div className="flex items-center border border-gray-400 gap-2">
          <button
            onClick={onDecrement}
            disabled={quantity <= 1}
            className={`px-2 py-1 rounded-md ${quantity <= 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            -
          </button>
          <span className="px-2 sm:px-4 py-1 rounded-md">{quantity}</span>
          <button
            onClick={onIncrement}
            disabled={quantity >= inventory}
            className={`px-2 py-1 rounded-md ${quantity >= inventory ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            +
          </button>
        </div>
        <Trash2 onClick={onRemove} className="hover:text-red-900 text-red-700 cursor-pointer" size={20} />
      </div>
    </div>
  )
}

export default CartItem

