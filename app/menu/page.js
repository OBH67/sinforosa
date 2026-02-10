'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/ProductCard'
import ReloadBlur from '@/components/ReloadBlur'
import { ArrowLeft, Coffee } from 'lucide-react'

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  // Language translations
  const [lang, setLang] = useState(() => {
    try {
      return typeof window !== 'undefined' ? localStorage.getItem('lang') || 'es' : 'es'
    } catch (e) { return 'es' }
  })

  useEffect(() => {
    try { localStorage.setItem('lang', lang) } catch (e) {}
  }, [lang])

  const toggleLang = () => setLang((l) => (l === 'es' ? 'en' : 'es'))

  const translations = {
    es: {
      menu: {
        title: 'Nuestro Menú',
        note: 'Todos los precios en MXN • Ticket promedio: $100–$200',
        filters: { all: 'Todos', coffee: 'Café', toasts: 'Tostadas', bakery: 'Panadería' },
        backHome: 'Volver al Inicio'
      },
    },
    en: {
      menu: {
        title: 'Our Menu',
        note: 'All prices in MXN • Average ticket: $100–$200',
        filters: { all: 'All Items', coffee: 'Coffee', toasts: 'Toasts', bakery: 'Bakery' },
        backHome: 'Back to Home'
      },
    }
  }

  const t = (path) => {
    const parts = path.split('.')
    let cur = translations[lang]
    for (const p of parts) {
      if (!cur) return path
      cur = cur[p]
    }
    return cur ?? path
  }

  const menuItems = {
    coffee: [
      { name: 'Mocha', price: 86, description: 'Mezcla rica de chocolate y espresso', image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=800' },
      { name: 'Capuchino', price: 76, description: 'Clásico italiano con leche espumada', image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=800' },
      { name: 'Mocha Blanco', price: 88, description: 'Dulce mocha de chocolate blanco', image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=800' },
      { name: 'Latte', price: 76, description: 'Espresso suave con leche vaporizada', image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=800' },
      { name: 'Americano', price: 74, description: 'Espresso alargado con agua caliente', image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=800' },
      { name: 'Cold Brew', price: 84, description: 'Café en frío, extracción suave y refrescante', image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=800' },
    ],
    toasts: [
      { name: 'Tostada de Aguacate', price: 169, description: 'Aguacate fresco sobre pan artesanal', image: 'https://images.unsplash.com/photo-1514481538271-cf9f99627ab4?q=80&w=800' },
      { name: 'Tostada de Salmón', price: 209, description: 'Salmón ahumado con queso crema', image: 'https://images.unsplash.com/photo-1514481538271-cf9f99627ab4?q=80&w=800' },
      { name: 'Tostada de Nopal', price: 181, description: 'Nopal a la parrilla con queso fresco', image: 'https://images.unsplash.com/photo-1514481538271-cf9f99627ab4?q=80&w=800' },
      { name: 'Tostada Caprese', price: 174, description: 'Jitomate, mozzarella y albahaca', image: 'https://images.unsplash.com/photo-1514481538271-cf9f99627ab4?q=80&w=800' },
    ],
    bakery: [
      { name: 'Croissant Clásico', price: 45, description: 'Hojaldre francés mantecoso', image: 'https://images.unsplash.com/photo-1763683944193-c4635a3d3999?q=80&w=800' },
      { name: 'Croissant de Almendra', price: 55, description: 'Relleno de crema de almendra', image: 'https://images.unsplash.com/photo-1763683944193-c4635a3d3999?q=80&w=800' },
      { name: 'Croissant de Avellana y Chocolate', price: 58, description: 'Relleno de chocolate y avellana', image: 'https://images.unsplash.com/photo-1763683944193-c4635a3d3999?q=80&w=800' },
      { name: 'Galleta con Chips de Chocolate', price: 35, description: 'Caliente y suave', image: 'https://images.unsplash.com/photo-1763683944193-c4635a3d3999?q=80&w=800' },
      { name: 'Galleta Red Velvet', price: 38, description: 'Galleta rica en cacao', image: 'https://images.unsplash.com/photo-1763683944193-c4635a3d3999?q=80&w=800' },
      { name: 'Galleta de Avena y Arándanos', price: 35, description: 'Saludable y deliciosa', image: 'https://images.unsplash.com/photo-1763683944193-c4635a3d3999?q=80&w=800' },
      { name: 'Pastel de Zanahoria', price: 75, description: 'Bizcocho húmedo con frosting de queso crema', image: 'https://images.unsplash.com/photo-1763683944193-c4635a3d3999?q=80&w=800' },
      { name: 'Pastel Red Velvet', price: 78, description: 'Postre clásico con cobertura cremosa', image: 'https://images.unsplash.com/photo-1763683944193-c4635a3d3999?q=80&w=800' },
      { name: 'Brownie', price: 55, description: 'Brownie de chocolate fudgy', image: 'https://images.unsplash.com/photo-1763683944193-c4635a3d3999?q=80&w=800' },
      { name: 'Banoffee', price: 72, description: 'Tarta de plátano y toffee', image: 'https://images.unsplash.com/photo-1763683944193-c4635a3d3999?q=80&w=800' },
    ]
  }

  const getFilteredItems = () => {
    if (activeCategory === 'all') {
      return [...menuItems.coffee, ...menuItems.toasts, ...menuItems.bakery]
    }
    return menuItems[activeCategory] || []
  }

  return (
    <div className="min-h-screen bg-[#D4B5A0]">
      {/* Professional page load effect */}
      <ReloadBlur variant="blur" delay={100} duration={800} />

      {/* Header */}
      <div className="bg-[#D4B5A0]/95 backdrop-blur-sm sticky top-0 z-50 border-b border-[#A68B75]/20">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <Link href="/" className="flex items-center gap-2 text-[#5C4A3D] hover:text-[#3D2E23] transition-colors">
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium text-sm sm:text-base">{t('menu.backHome')}</span>
            </Link>

            <div className="flex items-center gap-2 sm:gap-3">
              <Coffee className="w-6 h-6 sm:w-8 sm:h-8 text-[#5C4A3D]" />
              <h1 className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#5C4A3D]">
                {t('menu.title')}
              </h1>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <button onClick={toggleLang} aria-label="toggle-lang" className="px-3 py-2 rounded-full border border-[#A68B75] text-xs sm:text-sm text-[#5C4A3D] bg-transparent hover:bg-[#A68B75] hover:text-white transition-colors">{lang === 'es' ? 'ES' : 'EN'}</button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Note */}
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-[#5C4A3D]/60 font-light text-xs tracking-widest uppercase">
              {t('menu.note')}
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8 sm:mb-12">
            {[
              { id: 'all', label: t('menu.filters.all') },
              { id: 'coffee', label: t('menu.filters.coffee') },
              { id: 'toasts', label: t('menu.filters.toasts') },
              { id: 'bakery', label: t('menu.filters.bakery') },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-6 sm:px-8 py-2 sm:py-2.5 text-xs sm:text-sm font-normal transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-[#3D2E23] text-white shadow-md'
                    : 'bg-white/60 text-[#5C4A3D] hover:bg-white/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 mb-8 sm:mb-12">
            {getFilteredItems().map((item, idx) => (
              <ProductCard key={idx} item={item} onOrder={(it) => console.log('Order', it)} />
            ))}
          </div>

          {/* Back to top button */}
          <div className="text-center mt-12 sm:mt-16">
            <Link href="/">
              <Button className="rounded-full bg-[#5C4A3D] hover:bg-[#3D2E23] text-white px-8 sm:px-10 py-4 text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105">
                {t('menu.backHome')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
