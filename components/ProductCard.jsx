"use client"

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'

export default function ProductCard({ item, onOrder }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg overflow-hidden flex flex-col sm:flex-row transition-all duration-300 sm:h-[200px]">
      {/* Image Section - Top on mobile, Left on desktop */}
      <div className="relative w-full sm:w-[200px] h-[180px] sm:h-auto flex-shrink-0 p-3">
        <div className="absolute top-5 left-5 z-20 bg-white rounded-full p-1.5 shadow-sm"> 
          <Heart className="w-4 h-4 text-gray-400" />
        </div>
        {item.image ? (
          <div className="w-full h-full bg-gray-100 overflow-hidden rounded-xl">
            <Image 
              src={item.image} 
              alt={item.name} 
              width={400} 
              height={400} 
              className="w-full h-full object-cover" 
            />
          </div>
        ) : (
          <div className="w-full h-full bg-[#E8D5C4] rounded-xl" />
        )}
      </div>

      {/* Content Section - Bottom on mobile, Right on desktop */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#3D2E23] mb-1 sm:mb-1.5">{item.name}</h3>
          <p className="text-xs sm:text-sm text-gray-500 leading-snug mb-3 sm:mb-0">{item.description}</p>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-baseline">
            <span className="text-sm text-[#3D2E23] font-medium">$</span>
            <span className="text-2xl sm:text-3xl font-bold text-[#3D2E23]">{item.price}</span>
            <span className="text-xs text-gray-400 ml-1">MXN</span>
          </div>
          <Button 
            onClick={() => onOrder && onOrder(item)} 
            className="rounded-full bg-[#3D2E23] hover:bg-[#2D1E13] text-white text-xs px-4 sm:px-6 py-2 font-medium tracking-wide transition-colors uppercase whitespace-nowrap"
          >
            COMPRAR
          </Button>
        </div>
      </div>
    </div>
  )
}
