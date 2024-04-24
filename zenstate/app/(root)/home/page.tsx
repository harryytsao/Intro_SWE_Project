'use client';
import React, { useState } from 'react';
import NavbarUser from '@/components/NavbarUser'
import Footer from '@/components/Footer'
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'
import WeekForm from "@/components/weeklypoints/weeklypoints";
import Leaderboard from "@/components/Leaderboard/Leaderboard";
import Stopwatch from "@/components/timer/Stopwatch";
import PointTracker from '@/components/Points/points'; 
import SearchFriends from '@/components/SearchFriends/SearchFriends';

export default function Page() {
  // State variables for point tracker value and added friend count
  const [pointTrackerValue, setPointTrackerValue] = useState(0); 
  const [addedFriend, setAddedFriend]= useState(0)

  return (
    <div>
      <NavbarUser />
      <BackgroundGradientAnimation>
        {/* Stopwatch component to track time */}
        <div style={{ position: 'absolute', top: '8%', left: '5%', zIndex: 999 }}>
          <Stopwatch setPointTrackerValue={setPointTrackerValue} />
        </div>

         {/* Form for weekly points */}
        <div style={{ position: 'absolute', bottom: '8%', left: '5%', zIndex: 999 }}>
          <WeekForm points={pointTrackerValue} />
        </div>

        {/* Leaderboard component */}
        <div style={{ position: 'absolute', bottom: '30%', right: '10%', zIndex: 999 }}>
          <Leaderboard addedPoint={pointTrackerValue} addedFriend={addedFriend} />
        </div>

        {/* Point tracker component */}
        <div style={{ position: 'absolute', bottom: '25%', right: '35%', zIndex: 999 }}> 
          <PointTracker time={pointTrackerValue} />
        </div>

        {/* Search friends component */}
        <div style={{ position: 'absolute', top: '10%', right: '10%', zIndex: 999 }}>
          <SearchFriends  cb={setAddedFriend} curr={addedFriend}/>
        </div>
        
      </BackgroundGradientAnimation>
      <Footer />
    </div>
  );
}
