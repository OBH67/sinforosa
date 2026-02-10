"use client"

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'

export default function ProductCard({ item, onOrder }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg overflow-hidden flex flex-row transition-all duration-300 h-[200px]">
      {/* Image Section - Left Side */}
      <div className="relative w-[200px] flex-shrink-0 p-3">
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

      {/* Content Section - Right Side */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-[#3D2E23] mb-1.5">{item.name}</h3>
          <p className="text-sm text-gray-500 leading-snug">{item.description}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline">
            <span className="text-sm text-[#3D2E23] font-medium">$</span>
            <span className="text-3xl font-bold text-[#3D2E23]">{item.price}</span>
            <span className="text-xs text-gray-400 ml-1">MXN</span>
          </div>
          <Button 
            onClick={() => onOrder && onOrder(item)} 
            className="rounded-full bg-[#3D2E23] hover:bg-[#2D1E13] text-white text-xs px-6 py-2 font-medium tracking-wide transition-colors uppercase"
          >
            COMPRAR
          </Button>
        </div>
      </div>
    </div>
  )
}
