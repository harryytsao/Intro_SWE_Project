"use server";
import { connectToDB } from "../mongoose";
import User from "../models/user.model";
import mongoose from "mongoose";
import { revalidatePath } from "next/cache";
interface Params {
  userId: string;
  username: string;
  name: string;
  path: string;
}

export async function searchUserByUsername(_username: string){
  let returnVals={
    id: "", 
    name: "",
    username: ""
  }
  const user=await User.findOne({username: _username}).exec()
  if(!user) return null
  returnVals.id=user.id
  returnVals.name=user.name
  returnVals.username=user.username
  return  returnVals
}
export async function getFriends(uid: string){
  connectToDB()
  let returnFriends:any[]=[]
  const user=await User.findOne({id: uid}).exec()
  if(!user){
    return null
  }
  for(let i=0;i<user.friends.length;i++){
    let score=0
    let currentFriend=await User.findById(user.friends[i]).exec()
    for(let j=0;j<currentFriend.score.length;j++){
      score+=currentFriend.score[j].quant
    }
    returnFriends.push({
      userName:currentFriend.username,
      score:score,
    })
  }
  let myScore=0
  for(let u=0;u<user.score.length;u++){
    myScore+=user.score[u].quant
  }
  returnFriends.push({
    userName: user.username,
    score: myScore
  })
  return returnFriends
}

export async function getWeeklyPoints(uid: string){
  connectToDB()
  const user=await User.findOne({id: uid}).exec()
  if(!user) return null
  const userScore=user.score
  let points=[0,0,0,0,0,0,0]
  for(let i=0;i<userScore.length;i++){
    points[userScore[i].date]+=userScore[i].quant
  }
  return points
}

// Fetch User
export async function fetchUser(userId: string) {
  try {
    connectToDB();
    return await User.findOne({ id: userId })
    
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}
export async function addTime(userId: string, quant: Number, date:Number ){
  try{
    const user=await User.findOne({id: userId}).exec()
    let current=user["score"]
    current.push({quant, date})
    console.log(current)
    const added=await User.findOneAndUpdate(
      {id: userId},
      {score: current}
    ).exec()
  }catch(err){
    console.log(err)
  }
}

export async function addFriend(fromId: string, toId:String){
  try{
    console.log(fromId)
    const user=await User.findOne({id: fromId})
    const friend=await User.findOne({id: toId})
    const friend_Id=friend._id
    if(!user)return
    if(user.friends.includes(friend_Id)){
      return 
    }
    await User.findOneAndUpdate({id:fromId},
      {$push: {friends: friend_Id}}
    )
  }catch(err){
    console.log(err)
  }
}

export async function updateUser({
  userId,
  username,
  name,
  path,
}: Params): Promise<void> {
  connectToDB();
  try {
    await User.findOneAndUpdate(
      { id: userId },
      {
        username: username.toLowerCase(),
        name,
        onboarded: true,
      },
      { upsert: true }
    );
    if (path === "/profile/edit") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}

export const newUser = (_newId: string, _username: string) => {
  try {
    connectToDB();
    User.findOneAndUpdate(
      { _id: _newId },
      {
        username: _username.toLowerCase(),
        friends: new Array<String>(),
        history: new Array<String>(),
        score: new Array<any>(),
        categories: new Array<String>(),
      },
      { upsert: true }
    );
  } catch (err) {
    console.log(err);
  }
};
