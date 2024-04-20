import React, { useState, useEffect } from 'react';
import './Stopwatch.css';
import PointTracker from '../Points/points';
import { useUser } from '@clerk/nextjs';
import {addTime} from "@/lib/actions/user.actions"

const  Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [started, setStarted] = useState(false);
  const [userInputTime, setUserInputTime] = useState(0);
  const [pointTrackerValue, setPointTrackerValue] = useState(0); 
  const {isSignedIn, user, isLoaded}= useUser()

  

  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined;
    if (started && time > 0) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (time === 0 && started) {
      console.log("ENDED");
      console.log("Adding points for time:", userInputTime);
      setPointTrackerValue(prevValue => prevValue + userInputTime); 

      const addUserTime = async(user: any, points: Number)=>{
        console.log("called")
        if(!user) return null
        const date=new Date()
        await addTime(user.id, points, date.getDay())
      }

      addUserTime(user, userInputTime).catch((err)=>console.log(err))
    }

    return () => clearInterval(intervalId);
  }, [time, started, userInputTime]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formElements = e.target as typeof e.target & {
      minutes: { value: string };
    };
    const inputTime = parseInt(formElements.minutes.value);
    setUserInputTime(inputTime);
    setTime(inputTime * 60);
    setStarted(true);
  };

  return (
    <div className="stopwatch-container">
      <h2 className="stopwatch-header">Timer</h2>
      <div className="stopwatch-frame">
        <div className="stopwatch-time">
          {Math.floor(time / 60) === 0 ? "00" : Math.floor(time / 60).toString().padStart(2, '0')}:
          {time % 60 === 0 ? "00" : (time % 60).toString().padStart(2, '0')}
        </div>
        <form className="stopwatch-form" onSubmit={handleSubmit}>
          <label className="stopwatch-label">
            Enter time in minutes:
            <input name="minutes" type="number" min="1" step="1" className="stopwatch-input" />
          </label>
          <button type='submit' className="stopwatch-button hover:bg-slate-400 hover:text-slate-700 transition-all">Start</button>
        </form>
      </div>
      <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <PointTracker time={pointTrackerValue} />
      </div>
    </div>
  );
};

export default Stopwatch;
