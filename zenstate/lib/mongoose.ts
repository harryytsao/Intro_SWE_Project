import mongoose from 'mongoose'

let connected=false

export const connectToMongo=async()=>{
    mongoose.set("strict", true)
    if(!process.env.MONGO_URL) return console.log("url not found")
    if(connected) return console.log("already connected")

    try{
        await mongoose.connect(process.env.MONGO_URL)
        connected=true
        console.log("mongo connected")
    }catch(err){
        console.log(err)
    }
}