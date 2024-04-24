import React from 'react';
import './WeekForm.css';
import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { getWeeklyPoints } from '@/lib/actions/user.actions';
type props={
  points: number
}
const WeekForm: React.FC<props> = (props) => {
  const inputBackgroundColor = 'rgba(255, 255, 255, 0.5)'; 
  const [points, setPoints]=useState([])
  const {isSignedIn, user, isLoaded}=useUser()


  useEffect(()=>{
  const getPoints=async(uid: string)=>{
    let entries:any=[]
    try{
      entries= await getWeeklyPoints(uid)
    }catch(err){
      console.log(err)
    }
    return entries
  }
  if(user){
    getPoints(user.id).then((vals: any)=>{
      setPoints(vals)
    })
  }
  },[user, props.points])
    // if(user){
    //   getPoints(user.id).then((val: any)=>{
    //     setPoints(val)
    //   })
    // }


  return (
    <div className="week-form">
      <form>
        <div>
          {/* First Row: weekdays */}
          <div className="weekdays">
            <div className="day">Sun</div>
            <div className="day">Mon</div>
            <div className="day">Tue</div>
            <div className="day">Wed</div>
            <div className="day">Thu</div>
            <div className="day">Fri</div>
            <div className="day">Sat</div>
          </div>
          {/* Second Row: Points */}
          <div className="points">
            {points.map((point, index) => (
              <div key={index} className="cell">
                <input
                  type="number"
                  value={point}
                  className="input-cell"
                  readOnly
                />
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default WeekForm;
