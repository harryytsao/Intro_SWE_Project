import Stopwatch from '@/components/Stopwatch'
import React from 'react'
import { UserButton } from "@clerk/nextjs"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection/HeroSection'

export default function Home() {
  return (
    <div>
      <Navbar />
      <BackgroundGradientAnimation>
      <div className="absolute z-50 flex min-h-screen flex-col pointer-events-none">
        <div className="container mx-auto px-24 py-12">
          <HeroSection />
        </div>
      </div>
    </BackgroundGradientAnimation>
      <Footer />
    </div>
  ) 
}
