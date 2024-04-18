import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);
  if (!process.env.MONGO_URL) return console.log("url not found");
  if (isConnected) return console.log("already connected");

  try {
    await mongoose.connect(process.env.MONGO_URL);
    isConnected = true;
    console.log("mongo connected");
  } catch (err) {
    console.log(err);
  }
};
