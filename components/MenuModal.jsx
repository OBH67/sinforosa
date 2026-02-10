"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import ReloadBlur from '@/components/ReloadBlur'
import { useState } from 'react'

/**
 * MenuModal - Full screen modal that displays the menu
 */
export default function MenuModal({ isOpen, onClose, menuItems, t, activeCategory, setActiveCategory }) {
  const getFilteredItems = () => {
    if (activeCategory === 'all') {
      return [...menuItems.coffee, ...menuItems.toasts, ...menuItems.bakery]
    }
    return menuItems[activeCategory] || []
  }

  // Stagger animation for filter buttons
  const filterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    })
  }

  // Stagger animation for product cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ 
              opacity: 1, 
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)'
            }}
            exit={{ 
              opacity: 0, 
              backdropFilter: 'blur(0px)',
              WebkitBackdropFilter: 'blur(0px)'
            }}
            transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ 
              duration: 0.5, 
              ease: [0.43, 0.13, 0.23, 0.96],
              scale: { type: "spring", damping: 20, stiffness: 300 }
            }}
            className="fixed inset-4 md:inset-8 lg:inset-12 bg-[#D4B5A0] rounded-3xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Professional page load effect */}
            <ReloadBlur variant="blur" delay={100} duration={800} />

            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="absolute top-0 left-0 right-0 bg-[#D4B5A0]/95 backdrop-blur-sm z-10 border-b border-[#A68B75]/20"
            >
              <div className="container mx-auto px-6 py-6">
                <div className="flex items-center justify-between">
                  <motion.h2 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                    className="text-3xl md:text-4xl font-serif italic text-[#5C4A3D]"
                  >
                    {t('menu.title')}
                  </motion.h2>
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="w-12 h-12 rounded-full bg-[#3D2E23] hover:bg-[#2D1E13] text-white flex items-center justify-center transition-all duration-200"
                    aria-label="Cerrar menú"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Scrollable Content */}
            <div className="h-full overflow-y-auto pt-24 pb-8">
              <div className="container mx-auto px-6">
                <div className="text-center mb-8">
                  <p className="text-[#5C4A3D]/60 font-light text-xs tracking-widest uppercase mb-8">
                    {t('menu.note')}
                  </p>
                  
                  {/* Filter Buttons */}
                  <motion.div 
                    initial="hidden"
                    animate="visible"
                    className="flex flex-wrap gap-3 justify-center mb-12"
                  >
                    {[
                      { id: 'all', label: t('menu.filters.all') },
                      { id: 'coffee', label: t('menu.filters.coffee') },
                      { id: 'toasts', label: t('menu.filters.toasts') },
                      { id: 'bakery', label: t('menu.filters.bakery') },
                    ].map((cat, index) => (
                      <motion.button
                        key={cat.id}
                        custom={index}
                        variants={filterVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`rounded-full px-8 py-2.5 text-sm font-normal transition-all duration-200 ${
                          activeCategory === cat.id
                            ? 'bg-[#3D2E23] text-white shadow-md'
                            : 'bg-white/60 text-[#5C4A3D] hover:bg-white/80'
                        }`}
                      >
                        {cat.label}
                      </motion.button>
                    ))}
                  </motion.div>
                </div>

                {/* Products Grid */}
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-12 max-w-6xl mx-auto"
                >
                  {getFilteredItems().map((item, idx) => (
                    <motion.div
                      key={idx}
                      custom={idx}
                      variants={cardVariants}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <ProductCard item={item} onOrder={(it) => console.log('Order', it)} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
