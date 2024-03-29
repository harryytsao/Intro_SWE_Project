"user server"
import { connectToMongo } from "../mongoose";
import { User } from "../models";
import mongoose from "mongoose";
interface Params{
    _uid: string
    _friends: Array<string>
    _username?: String|null
    _history:Array<mongoose.Types.ObjectId>
    _score?: number|null
    _categories: Array<String>
}
export const addFriend=async(_fromId: string, _toId: string)=>{
    connectToMongo()
    const fromUser= await getUser(_fromId)
    const toUser=await getUser(_toId)
    if(!fromUser) return null
    if(!toUser) return null
    const oldFriends=fromUser.friends
    oldFriends.push(toUser._id)
    await updateUser({
        _uid: _fromId,
        _friends: oldFriends,
        _username: fromUser.username,
        _history:fromUser.history,
        _score:fromUser.score,
        _categories: fromUser.categories
    })
}
export const getUser=(_uid: string)=>{
    return User.findById(_uid)
}
export const updateUser=({_uid, _friends,_username,  _history, _score, _categories}: Params)=>{
    connectToMongo()
    User.findOneAndUpdate(
        {_id: _uid,},
        {
            username: _username,
            friends:_friends,
            history:_history,
            score: _score,
            categories: _categories
        },
    )
}
export const newUser=(_newId: string, _username: string)=>{
    try{
        connectToMongo()
        User.findOneAndUpdate(
            {_id: _newId,},
            {
                username:_username.toLowerCase(),
                friends:new Array<String>(),
                history:new Array<String>(),
                score: 0,
                categories: new Array<String>()
            },
            {upsert:true}
        )
    }catch(err){
        console.log(err)
    }
}