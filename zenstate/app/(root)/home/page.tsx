'use client';
import React from 'react';
import NavbarUser from '@/components/NavbarUser'
import Footer from '@/components/Footer'
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'
import WeekForm from "@/components/weeklypoints/weeklypoints";
import Leaderboard from "@/components/Leaderboard/Leaderboard";
import Stopwatch from "@/components/timer/Stopwatch";
import SearchFriends from '@/components/SearchFriends/SearchFriends';
// Move to root
export default function Page() {
  return (
    <div>
      <NavbarUser />
      <BackgroundGradientAnimation>
        <div style={{ position: 'absolute', top: '8%', left: '5%', zIndex: 999 }}>
          <Stopwatch setPointTrackerValue={setPointTrackerValue} />
        </div>

        <div style={{ position: 'absolute', bottom: '8%', left: '5%', zIndex: 999 }}>
          <WeekForm />
        </div>

        <div style={{ position: 'absolute', bottom: '30%', right: '10%', zIndex: 999 }}>
          <Leaderboard />
        </div>

        <div style={{ position: 'absolute', top: '10%', right: '10%', zIndex: 999 }}>
          <SearchFriends />
        </div>

        <div style={{ position: 'absolute', bottom: '25%', right: '35%', zIndex: 999 }}> 
          <PointTracker time={pointTrackerValue} />
        </div>
        
      </BackgroundGradientAnimation>
      <Footer />
    </div>
  )
}
