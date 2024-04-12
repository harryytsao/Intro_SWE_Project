'use client';
import React from 'react';
import NavbarUser from '@/components/NavbarUser'
import Footer from '@/components/Footer'
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'
import WeekForm from "@/components/weeklypoints/weeklypoints";
import Leaderboard from "@/components/Leaderboard/Leaderboard";
import Stopwatch from "@/components/timer/Stopwatch";

export default function Onboarding() {
  return (
    <div>
      <NavbarUser />
      <BackgroundGradientAnimation>
        <div style={{ position: 'absolute', top: '8%', left: '5%', zIndex: 999 }}>
          <Stopwatch />
        </div>

        <div style={{ position: 'absolute', bottom: '8%', left: '5%', zIndex: 999 }}>
          <WeekForm />
        </div>

        <div style={{ position: 'absolute', bottom: '30%', right: '10%', zIndex: 999 }}>
          <Leaderboard />
        </div>
        
      </BackgroundGradientAnimation>
      <Footer />
    </div>
  )
}
