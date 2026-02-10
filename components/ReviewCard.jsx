"use client"

import Image from 'next/image'
import { Star } from 'lucide-react'

/**
 * ReviewCard with gradient background and image
 * @param {object} review - Review data with name, location, rating, text, image, avatar, gradient
 */
export default function ReviewCard({ review }) {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? 'fill-black text-black'
            : 'fill-none text-black/30'
        }`}
      />
    ))
  }

  return (
    <div className="rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={review.image}
          alt={review.name}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section with Gradient - ensures full coverage */}
      <div
        className="p-6 min-h-[200px] flex flex-col"
        style={{
          background: review.gradient,
        }}
      >
        {/* User Info */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-white shadow-md flex-shrink-0">
            <Image
              src={review.avatar}
              alt={review.name}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold text-gray-900 truncate">{review.name}</h4>
            <p className="text-xs text-gray-700/70 truncate">{review.location}</p>
          </div>
          {review.icon && (
            <div className="text-xl flex-shrink-0">{review.icon}</div>
          )}
        </div>

        {/* Stars */}
        <div className="flex items-center gap-1 mb-3">
          {renderStars(review.rating)}
        </div>

        {/* Review Text */}
        <p className="text-sm text-gray-900/80 leading-relaxed flex-1">
          {review.text}
        </p>
      </div>
    </div>
  )
}
