'use server'
import { TimeLog } from "../models"
import { connectToMongo } from "../mongoose"
import { getUser, updateUser } from "./user.actions"
interface Params{
    _userID:string
    _time:number
    _date: Date
    _category: string
}
export const createTimeLog=async ({_userID, _time, _date, _category}:Params)=>{
    try{
        connectToMongo()
        const log=new TimeLog({
            time:_time,
            date:_date,
            category:_category
        })
        log.save()
        const user= await getUser(_userID)
        // const currentUser= await getUser(_userID).select("+history")
        if(!user) return null
        const currentHistory=user.history
        currentHistory.push(log._id)
        await updateUser({
            _uid: _userID,
            _friends: user.friends,
            _username: user.username,
            _history:currentHistory,
            _score:user.score,
            _categories: user.categories
        })
    }catch(err){
        console.log(err)
    }
}