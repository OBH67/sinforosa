'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import ProductCard from '@/components/ProductCard'
import ReloadBlur from '@/components/ReloadBlur'
import ReviewCard from '@/components/ReviewCard'
import Link from 'next/link'
import {
  Star, Phone, MapPin, Clock, Coffee, UtensilsCrossed, ShoppingBag,
  Truck, Wifi, Calendar, Accessibility, ParkingCircle, Users, Facebook
} from 'lucide-react'

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [navOpen, setNavOpen] = useState(false)

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

  const handleNavClick = (id) => {
    setNavOpen(false)
    if (typeof document !== 'undefined') {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Simple translations map
  const translations = {
    es: {
      nav: { home: 'INICIO', about: 'SOBRE NOSOTROS', menu: 'MENÚ', contact: 'CONTACTO' },
      hero: { tagline: 'CAFÉ DE ESPECIALIDAD Y PASTELERÍA', description: 'Café de calidad, pastelería deliciosa y un ambiente cómodo. El lugar perfecto para trabajar, relajarte o reunirte con amigos alrededor de una taza perfectamente preparada.', order: 'ORDENAR AHORA' },
      about: { badge: 'Sobre Nosotros', welcome: 'Bienvenido a\nCafeteria' },
      services: { title: 'Cómo te atendemos', subtitle: 'Disfruta de nuestro café a tu manera - en el local, para llevar o a domicilio' },
      menu: { title: 'Nuestro Menú', note: 'Todos los precios en MXN • Ticket promedio: $100–$200', filters: { all: 'Todos', coffee: 'Café', toasts: 'Tostadas', bakery: 'Panadería' } },
      reviews: { title: 'Reseñas de Clientes', basedOn: 'Basado en 432 reseñas' },
      visit: { title: 'Visítanos', address: 'Dirección', phone: 'Teléfono', hours: 'Horario', open: 'ABIERTO TODOS LOS DÍAS' },
      footer: { quickLinks: 'Enlaces Rápidos', orderNow: 'Ordena Ahora', orderOnline: 'Ordena en Línea' }
    },
    en: {
      nav: { home: 'HOME', about: 'ABOUT', menu: 'MENU', contact: 'CONTACT' },
      hero: { tagline: 'SPECIALTY COFFEE & PASTRIES', description: 'Quality coffee, delicious pastries, and a comfortable atmosphere. The perfect place to work, relax, or catch up with friends over a perfectly brewed cup.', order: 'ORDER NOW' },
      about: { badge: 'About Us', welcome: 'Welcome to\nCafeteria' },
      services: { title: 'How We Serve You', subtitle: 'Enjoy our coffee your way - dine in, take away, or have it delivered' },
      menu: { title: 'Our Menu', note: 'All prices in MXN • Average ticket: $100–$200', filters: { all: 'All Items', coffee: 'Coffee', toasts: 'Toasts', bakery: 'Bakery' } },
      reviews: { title: 'Customer Reviews', basedOn: 'Based on 432 reviews' },
      visit: { title: 'Visit Us', address: 'Address', phone: 'Phone', hours: 'Hours', open: 'OPEN EVERY DAY' },
      footer: { quickLinks: 'Quick Links', orderNow: 'Order Now', orderOnline: 'Order Online' }
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

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-5 h-5 fill-[#A68B75] text-[#A68B75]" />)
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-5 h-5">
          <Star className="w-5 h-5 text-[#A68B75]" />
          <div className="absolute inset-0 overflow-hidden" style={{ clipPath: 'inset(0 30% 0 0)' }}>
            <Star className="w-5 h-5 fill-[#A68B75] text-[#A68B75]" />
          </div>
        </div>
      )
    }

    return stars
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Professional page load effect */}
      <ReloadBlur variant="blur" delay={100} duration={800} />
      {/* HERO SECTION - Landing Page Design */}
      <section id="home" className="relative min-h-screen overflow-hidden pt-safe">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://www.machospitalitygroup.com/wp-content/uploads/2024/07/Cafeteria15L-25.jpg"
            alt="Cafeteria Entrance"
            fill
            className="object-cover"
            style={{ objectPosition: 'center 10%' }}
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#E8D5C4]/88 via-[#D4B5A0]/85 to-[#C9A88A]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          {/* Navigation */}
          <nav className="flex items-center justify-between mb-6 sm:mb-8 lg:mb-12">
            <div className="flex gap-1 sm:gap-2 lg:gap-3">
              <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#A68B75] flex items-center justify-center hover:bg-[#A68B75] hover:text-white transition-colors">
                <Facebook className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
              <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#A68B75] flex items-center justify-center hover:bg-[#A68B75] hover:text-white transition-colors">
                <Coffee className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
              <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#A68B75] flex items-center justify-center hover:bg-[#A68B75] hover:text-white transition-colors">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
              <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#A68B75] flex items-center justify-center hover:bg-[#A68B75] hover:text-white transition-colors">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
            <div className="hidden md:flex flex-1 justify-center gap-8 lg:gap-12">
              <a href="#home" onClick={(e)=>{e.preventDefault(); handleNavClick('home')}} className="text-xs lg:text-sm font-light tracking-widest uppercase text-[#5C4A3D] hover:text-[#3D2E23] transition-colors">{t('nav.home')}</a>
              <a href="#about" onClick={(e)=>{e.preventDefault(); handleNavClick('about')}} className="text-xs lg:text-sm font-light tracking-widest uppercase text-[#5C4A3D] hover:text-[#3D2E23] transition-colors">{t('nav.about')}</a>
              <a href="#menu" onClick={(e)=>{e.preventDefault(); handleNavClick('menu')}} className="text-xs lg:text-sm font-light tracking-widest uppercase text-[#5C4A3D] hover:text-[#3D2E23] transition-colors">{t('nav.menu')}</a>
              <a href="#contact" onClick={(e)=>{e.preventDefault(); handleNavClick('contact')}} className="text-xs lg:text-sm font-light tracking-widest uppercase text-[#5C4A3D] hover:text-[#3D2E23] transition-colors">{t('nav.contact')}</a>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 lg:gap-4">
              <button onClick={toggleLang} aria-label="toggle-lang" className="px-2 py-1 sm:px-3 sm:py-2 rounded-full border border-[#A68B75] text-xs sm:text-sm text-[#5C4A3D] bg-transparent hover:bg-[#A68B75] hover:text-white transition-colors">{lang === 'es' ? 'ES' : 'EN'}</button>
              <button onClick={() => setNavOpen((s) => !s)} className="md:hidden p-2 rounded-md border border-[#A68B75]">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#5C4A3D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
              <div role="button" onClick={() => handleNavClick('home')} className="hidden lg:flex w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden bg-[#A68B75] items-center justify-center shadow-xl cursor-pointer">
                <Image src="/valzar.png" alt="Sinforosa Café" width={96} height={96} className="w-full h-full object-cover" />
              </div>
            </div>
          </nav>

          {/* Mobile menu overlay */}
          {navOpen && (
            <div className="fixed inset-0 z-50 bg-white md:hidden flex flex-col items-center justify-center gap-6">
              <a href="#home" onClick={(e)=>{e.preventDefault(); handleNavClick('home')}} className="text-2xl font-medium uppercase">{t('nav.home')}</a>
              <a href="#about" onClick={(e)=>{e.preventDefault(); handleNavClick('about')}} className="text-2xl font-medium uppercase">{t('nav.about')}</a>
              <a href="#menu" onClick={(e)=>{e.preventDefault(); handleNavClick('menu')}} className="text-2xl font-medium uppercase">{t('nav.menu')}</a>
              <a href="#contact" onClick={(e)=>{e.preventDefault(); handleNavClick('contact')}} className="text-2xl font-medium uppercase">{t('nav.contact')}</a>
              <button onClick={() => setNavOpen(false)} className="absolute top-6 right-6 p-3 rounded-full border border-[#A68B75]">Cerrar</button>
            </div>
          )}

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center min-h-[calc(100vh-150px)] sm:min-h-[calc(100vh-200px)]">
            {/* Left Decorative Panel */}
            <div className="hidden lg:block lg:col-span-2 space-y-8">
              <div className="flex flex-col gap-3 items-center py-8">
                <div className="w-1 h-8 bg-[#A68B75]/30" />
                <div className="w-1 h-8 bg-[#A68B75]/30" />
                <div className="w-1 h-8 bg-[#A68B75]/30" />
              </div>
              <div className="flex justify-center">
                <div className="space-y-1">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="flex gap-1">
                      <div className="w-2 h-2 border border-[#A68B75]/40" />
                      <div className="w-2 h-2 border border-[#A68B75]/40" />
                      <div className="w-2 h-2 border border-[#A68B75]/40" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Center Image Section */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="absolute w-96 h-96 rounded-full bg-[#B39C88]/20 blur-3xl" />

              {/* Main circular image */}
              <div className="relative z-10">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 sm:border-8 border-white/80 shadow-2xl">
                  <Image
                    src="https://www.nestleprofessional-latam.com/sites/default/files/styles/np_article_small/public/2024-04/todo-necesario-abrir-cafeteria-mesera.jpg?itok=zQ9ycj8J"
                    alt="Coffee and cookies"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Top coffee cup overlay */}
                <div className="absolute -bottom-8 -right-8 w-44 h-44 rounded-full bg-white shadow-2xl overflow-hidden border-4 border-white">
                  <Image
                    src="https://eladelantado.com/actualidad/wp-content/uploads/2025/02/cafe-te-objetivos-fitness.jpg"
                    alt="Coffee cup top view"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative heart cookies */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  <div className="w-10 h-10 rounded-sm bg-[#8B7355] shadow-lg" />
                  <div className="w-10 h-10 rounded-full bg-white shadow-lg" />
                </div>
              </div>

              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full border border-[#A68B75]/30" />
              <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full border border-[#A68B75]/30" />
            </div>

            {/* Right Content Section */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6 lg:space-y-8 text-[#5C4A3D]">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex gap-1">
                  {[1,2,3,4,5,6,7].map((i) => (
                    <div key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#A68B75]/40" />
                  ))}
                </div>
                <span className="text-2xl sm:text-3xl lg:text-4xl text-[#A68B75]">+</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif italic text-black leading-tight">
                Cafeteria
              </h1>

              <div className="bg-[#5C4A3D] text-white inline-block px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-light tracking-widest">
                {t('hero.tagline')}
              </div>

              <p className="text-xs sm:text-sm leading-relaxed text-black max-w-md text-[#5C4A3D]/80 font-light">
                {t('hero.description')}
              </p>

              <Button onClick={() => {}} className="rounded-full bg-[#5C4A3D] hover:bg-[#3D2E23] text-white px-6 sm:px-10 py-3 sm:py-6 text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105">
                {t('hero.order')}
              </Button>

              <div className="flex gap-2 mt-6 sm:mt-8">
                <div className="w-12 sm:w-16 h-1 bg-[#A68B75]/40" />
                <div className="w-6 sm:w-8 h-1 bg-[#A68B75]/40" />
                <div className="w-3 sm:w-4 h-1 bg-[#A68B75]/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 sm:py-24 md:py-32 lg:py-40 bg-[#F5EDE5]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <p className="text-xs font-light tracking-[0.3em] uppercase text-[#A68B75] mb-3 sm:mb-4">
                {t('about.badge')}
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic color-black tracking-wide text-[#5C4A3D] mb-6 sm:mb-8">
                {t('about.welcome').split('\n').map((line, i) => (<span key={i}>{line}<br/></span>))}
              </h2>
              <div className="flex gap-1 mb-6 sm:mb-8">
                {[1,2,3,4,5].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#A68B75]/40" />
                ))}
              </div>
              <p className="text-[#5C4A3D]/80 font-light text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                En Cafeteria nos enorgullece servir café de especialidad excepcional
                acompañado de pastelería artesanal deliciosa. Nuestro ambiente cómodo crea
                el entorno ideal tanto para ser productivo como para relajarte.
              </p>
              <p className="text-[#5C4A3D]/80 font-light text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                Ya sea que busques un espacio tranquilo con WiFi confiable, disfrutar de
                nuestra terraza al aire libre, o simplemente saborear un café y postres de calidad,
                Cafeteria te recibe todos los días de 7:00 AM a 9:00 PM.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pt-6 sm:pt-8">
                <div className="border-l-2 border-[#A68B75] pl-4 sm:pl-6 group">
                    <h4 className="text-base sm:text-lg font-medium text-[#5C4A3D] mb-1 tracking-wide">Buen Café</h4>
                    <p className="text-xs sm:text-sm text-[#5C4A3D]/60 font-light leading-relaxed">Granos de especialidad y preparación experta</p>
                </div>
                <div className="border-l-2 border-[#A68B75] pl-4 sm:pl-6 group">
                    <h4 className="text-base sm:text-lg font-medium text-[#5C4A3D] mb-1 tracking-wide">Postres Deliciosos</h4>
                    <p className="text-xs sm:text-sm text-[#5C4A3D]/60 font-light leading-relaxed">Pastelería y tartas frescas a diario</p>
                </div>
                <div className="border-l-2 border-[#A68B75] pl-4 sm:pl-6 group">
                    <h4 className="text-base sm:text-lg font-medium text-[#5C4A3D] mb-1 tracking-wide">Gran Selección de Tés</h4>
                    <p className="text-xs sm:text-sm text-[#5C4A3D]/60 font-light leading-relaxed">Variedades de té de primera</p>
                </div>
                <div className="border-l-2 border-[#A68B75] pl-4 sm:pl-6 group">
                    <h4 className="text-base sm:text-lg font-medium text-[#5C4A3D] mb-1 tracking-wide">Zona Exterior</h4>
                    <p className="text-xs sm:text-sm text-[#5C4A3D]/60 font-light leading-relaxed">Terraza cómoda y agradable</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 group">
              <div className="relative overflow-hidden h-[400px] sm:h-[500px] md:h-[600px] rounded-full shadow-2xl">
                <Image
                  src="https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2019/08/restaurantes-para-cenar-al-aire-libre-cdmx-madre-cafe.jpg?fit=960%2C640&ssl=1"
                  alt="Coffee shop interior"
                  width={2940}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 border-8 border-white/80 pointer-events-none rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENU HERO SECTION - Simplified */}
      <section id="menu" className="relative py-16 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-br from-[#E8D5C4] via-[#D4B5A0] to-[#C9A88A] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-64 h-64 rounded-full border-4 border-[#5C4A3D]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border-4 border-[#5C4A3D]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 sm:mb-8">
              <Coffee className="w-12 h-12 sm:w-16 sm:h-16 text-[#5C4A3D] mx-auto mb-4 sm:mb-6" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif italic text-[#5C4A3D] mb-4 sm:mb-6">
              {t('menu.title')}
            </h2>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#5C4A3D]/80 font-light mb-3 sm:mb-4 max-w-2xl mx-auto leading-relaxed px-4">
              Descubre nuestra selección de cafés de especialidad, tostadas gourmet y repostería artesanal. Cada producto preparado con amor y los mejores ingredientes.
            </p>

            <p className="text-xs sm:text-sm text-[#5C4A3D]/60 font-light tracking-wider uppercase mb-8 sm:mb-12">
              {t('menu.note')}
            </p>

            <Link href="/menu">
              <Button className="rounded-full bg-[#5C4A3D] hover:bg-[#3D2E23] text-white px-8 py-4 sm:px-12 sm:py-6 text-sm sm:text-base tracking-widest uppercase transition-all duration-300 hover:scale-105 shadow-xl">
                Ver Menú Completo
              </Button>
            </Link>

            {/* Preview images */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-12 sm:mt-16 max-w-3xl mx-auto">
              <div className="relative h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden shadow-lg group">
                <Image
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800"
                  alt="Coffee"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3 sm:p-4">
                  <span className="text-white font-semibold text-xs sm:text-sm">Cafés</span>
                </div>
              </div>
              <div className="relative h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden shadow-lg group">
                <Image
                  src="https://images.unsplash.com/photo-1514481538271-cf9f99627ab4?q=80&w=800"
                  alt="Toasts"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3 sm:p-4">
                  <span className="text-white font-semibold text-xs sm:text-sm">Tostadas</span>
                </div>
              </div>
              <div className="relative h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden shadow-lg group col-span-2 md:col-span-1">
                <Image
                  src="https://images.unsplash.com/photo-1763683944193-c4635a3d3999?q=80&w=800"
                  alt="Bakery"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3 sm:p-4">
                  <span className="text-white font-semibold text-xs sm:text-sm">Repostería</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section id="reviews" className="py-16 sm:py-24 md:py-32 lg:py-40 bg-[#F5EDE5]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs font-light tracking-[0.3em] uppercase text-[#A68B75] mb-3 sm:mb-4">
              {t('reviews.title')}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic text-[#5C4A3D] mb-6 sm:mb-8">
              Reseñas de Clientes
            </h2>
            <div className="flex gap-1 justify-center mb-6 sm:mb-8">
              {[1,2,3,4,5].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#A68B75]/40" />
              ))}
            </div>
            <p className="text-[#5C4A3D]/80 font-light text-sm sm:text-base lg:text-lg mb-8 sm:mb-12">
              {t('reviews.basedOn')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ReviewCard
              review={{
                name: "María González",
                location: "Querétaro, Qro.",
                rating: 5,
                text: "¡El mejor café que he probado! El ambiente es perfecto para trabajar y el servicio es excelente. Los croissants están para morirse.",
                image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&fit=crop&crop=face",
                gradient: "linear-gradient(135deg, #FFE5B4 0%, #FFCDB2 100%)"
              }}
            />
            <ReviewCard
              review={{
                name: "Carlos Rodríguez",
                location: "Querétaro, Qro.",
                rating: 5,
                text: "Descubrí este lugar por casualidad y ahora vengo todos los fines de semana. El latte art es impresionante y las tostadas son deliciosas.",
                image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&fit=crop&crop=face",
                gradient: "linear-gradient(135deg, #E8D5C4 0%, #D4B5A0 100%)"
              }}
            />
            <ReviewCard
              review={{
                name: "Ana López",
                location: "Querétaro, Qro.",
                rating: 4,
                text: "Ambiente acogedor y café de calidad. Los precios son muy razonables para la calidad que ofrecen. Recomiendo el mocha blanco.",
                image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=800",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&fit=crop&crop=face",
                gradient: "linear-gradient(135deg, #F5EDE5 0%, #E8D5C4 100%)"
              }}
            />
            <ReviewCard
              review={{
                name: "José Martínez",
                location: "Querétaro, Qro.",
                rating: 5,
                text: "Excelente lugar para reuniones de trabajo. WiFi rápido, buen café y postres increíbles. El personal es muy amable.",
                image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&fit=crop&crop=face",
                gradient: "linear-gradient(135deg, #FFE5B4 0%, #FFCDB2 100%)"
              }}
            />
            <ReviewCard
              review={{
                name: "Laura Sánchez",
                location: "Querétaro, Qro.",
                rating: 5,
                text: "Los pasteles son una obra de arte. Especialmente el red velvet. El café es de especialidad y se nota la diferencia. ¡Volveré pronto!",
                image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800",
                avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&fit=crop&crop=face",
                gradient: "linear-gradient(135deg, #E8D5C4 0%, #D4B5A0 100%)"
              }}
            />
            <ReviewCard
              review={{
                name: "Miguel Torres",
                location: "Querétaro, Qro.",
                rating: 4,
                text: "Buen lugar para estudiar. El ambiente es tranquilo y el café mantiene despierto. Las opciones veganas son limitadas pero el resto está genial.",
                image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=800",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&fit=crop&crop=face",
                gradient: "linear-gradient(135deg, #F5EDE5 0%, #E8D5C4 100%)"
              }}
            />
          </div>

          {/* Overall Rating */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg">
              <div className="flex gap-1">
                {renderStars(4.3)}
              </div>
              <span className="text-2xl font-bold text-[#5C4A3D]">4.3</span>
              <span className="text-[#5C4A3D]/60 font-light">(432 reseñas)</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT/VISIT SECTION */}
      <section id="contact" className="py-16 sm:py-24 md:py-32 lg:py-40 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs font-light tracking-[0.3em] uppercase text-[#A68B75] mb-3 sm:mb-4">
              {t('visit.title')}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic text-[#5C4A3D] mb-6 sm:mb-8">
              Visítanos
            </h2>
            <div className="flex gap-1 justify-center mb-6 sm:mb-8">
              {[1,2,3,4,5].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#A68B75]/40" />
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Address */}
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F5EDE5] flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-[#A68B75] transition-colors duration-300">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-[#A68B75] group-hover:text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-[#5C4A3D] mb-2 sm:mb-3 tracking-wide">
                {t('visit.address')}
              </h3>
              <p className="text-sm sm:text-base text-[#5C4A3D]/80 font-light leading-relaxed">
                P.º Jurica 110<br />
                Jurica<br />
                Santiago de Querétaro, Qro. 76100
              </p>
            </div>

            {/* Phone */}
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F5EDE5] flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-[#A68B75] transition-colors duration-300">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-[#A68B75] group-hover:text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-[#5C4A3D] mb-2 sm:mb-3 tracking-wide">
                {t('visit.phone')}
              </h3>
              <p className="text-sm sm:text-base text-[#5C4A3D]/80 font-light leading-relaxed">
                <a href="tel:+524427735976" className="hover:text-[#A68B75] transition-colors">
                  +52 442 773 5976
                </a>
              </p>
            </div>

            {/* Hours */}
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F5EDE5] flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-[#A68B75] transition-colors duration-300">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-[#A68B75] group-hover:text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-[#5C4A3D] mb-2 sm:mb-3 tracking-wide">
                {t('visit.hours')}
              </h3>
              <p className="text-sm sm:text-base text-[#5C4A3D]/80 font-light leading-relaxed">
                Lunes - Domingo<br />
                7:00 AM - 9:00 PM
              </p>
              <div className="mt-2 inline-block bg-[#A68B75] text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium tracking-wider">
                {t('visit.open')}
              </div>
            </div>

            {/* Services */}
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F5EDE5] flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-[#A68B75] transition-colors duration-300">
                <Coffee className="w-6 h-6 sm:w-8 sm:h-8 text-[#A68B75] group-hover:text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-[#5C4A3D] mb-2 sm:mb-3 tracking-wide">
                Servicios
              </h3>
              <p className="text-sm sm:text-base text-[#5C4A3D]/80 font-light leading-relaxed">
                Café para llevar<br />
                Entrega a domicilio<br />
                WiFi gratuito
              </p>
            </div>
          </div>

          {/* Map or additional info */}
          <div className="mt-12 sm:mt-16">
            <p className="text-[#5C4A3D]/60 font-light mb-6 sm:mb-8 text-center max-w-2xl mx-auto text-sm sm:text-base px-4">
              Ubicado en Jurica, Santiago de Querétaro, te esperamos para disfrutar de un café excepcional en un ambiente único.
            </p>

            {/* Google Maps Embed */}
            <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
              <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.8476!2d-100.3899!3d20.5881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35b2c8b8b8b8b%3A0x1234567890abcdef!2zUC4gSnVyaWNhIDExMCwgSnVyaWNhLCA3NjEwMCBTYW50aWFnbyBkZSBRdWVyw6l0YXJvLCBRcm8u!5e0!3m2!1ses!2smx!4v1703123456789!5m2!1ses!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Cafeteria"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>

            <div className="text-center px-4">
              <p className="text-[#5C4A3D]/80 font-light mb-4 sm:mb-6 text-sm sm:text-base">
                <strong>Dirección:</strong> P.º Jurica 110, Jurica, 76100 Santiago de Querétaro, Qro.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Button className="rounded-full bg-[#5C4A3D] hover:bg-[#3D2E23] text-white px-6 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105">
                  <a href="https://www.google.com/maps/dir/?api=1&destination=P.%C2%BA+Jurica+110,+Jurica,+76100+Santiago+de+Quer%C3%A9taro,+Qro." target="_blank" rel="noopener noreferrer" className="block w-full h-full flex items-center justify-center">
                    Cómo Llegar
                  </a>
                </Button>
                <Button variant="outline" className="rounded-full border-[#A68B75] text-[#5C4A3D] hover:bg-[#A68B75] hover:text-white px-6 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105">
                  <a href="tel:+524427735976" className="block w-full h-full flex items-center justify-center">
                    Llamar Ahora
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#5C4A3D] text-[#E8D5C4] py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif italic tracking-wide mb-3 sm:mb-4">
                Cafeteria
              </h3>
              <p className="text-[#E8D5C4]/80 font-light mb-3 sm:mb-4 text-sm sm:text-base">
                Café de especialidad y pastelería artesanal
              </p>
              <div className="flex items-center gap-2">
                {renderStars(4.3)}
                <span className="ml-2 font-light text-sm">4.3 (432 reviews)</span>
              </div>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 tracking-wide">Enlaces Rápidos</h4>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                <li>
                  <a href="#menu" className="text-[#E8D5C4]/80 font-light hover:text-[#E8D5C4] transition-colors">
                    Nuestro Menú
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/sinforosa.cafe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E8D5C4]/80 font-light hover:text-[#E8D5C4] transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+524427735976"
                    className="text-[#E8D5C4]/80 font-light hover:text-[#E8D5C4] transition-colors"
                  >
                    +52 442 773 5976
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 tracking-wide">Ordena Ahora</h4>
              <p className="text-[#E8D5C4]/80 font-light mb-3 sm:mb-4 text-sm sm:text-base">
                Disponible para entrega a domicilio
              </p>
              <Button className="rounded-full font-light px-6 py-3 sm:px-8 sm:py-5 bg-[#E8D5C4] text-[#5C4A3D] hover:bg-white transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                Ordena en Línea
              </Button>
            </div>
          </div>
          <div className="border-t border-[#A68B75] pt-6 sm:pt-8 text-center">
            <p className="text-[#E8D5C4]/70 font-light text-xs tracking-widest px-4">
              © {new Date().getFullYear()} Cafeteria. TODOS LOS DERECHOS RESERVADOS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
