import React from 'react';
import { useState, useEffect } from 'react';
import './Leaderboard.css'; 
import { useUser } from '@clerk/nextjs';
import { getFriends } from '@/lib/actions/user.actions';
const Leaderboard = () => {

  const [players, setPlayers]=useState<any[]>([]) 
  const {isSignedIn, user, isLoaded}=useUser()
  useEffect(()=>{
    const getPlayers=async(uid: string)=>{
      let entries: any=[]
      try{
        entries=await getFriends(uid)
      }catch(err){
        console.log(err)
      }
      return entries
    }
    if(user){
      getPlayers(user.id).then(vals=>{
        vals.sort((a: any, b: any)=>{
          if(a.score<b.score){
            return 1
          }
          if(b.score<a.score){
            return -1
          }else{
            return 0
          }})
        setPlayers(vals)
      })
    }
  }, [user])
  return (
    <div>
      <h1 className="title">Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th className="rank">Rank</th>
            <th className="player">Player</th>
            <th className="score">Score</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, i) => (
            <tr key={i+1}>
              <td>{i+1}</td>
              <td>{player.userName}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
