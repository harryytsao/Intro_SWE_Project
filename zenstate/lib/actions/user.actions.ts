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

// Fetch User

// export const addFriend = async (_fromId: string, _toId: string) => {
//   connectToDB();
//   const fromUser = await getUser(_fromId);
//   const toUser = await getUser(_toId);
//   if (!fromUser) return null;
//   if (!toUser) return null;
//   const oldFriends = fromUser.friends;
//   oldFriends.push(toUser._id);
//   await updateUser({
//     _uid: _fromId,
//     _friends: oldFriends,
//     _username: fromUser.username,
//     _history: fromUser.history,
//     _score: fromUser.score,
//     _categories: fromUser.categories,
//   });
// };
// export const getUser = (_uid: string) => {
//   return User.findById(_uid);
// };

export async function fetchUser(userId: string) {
  try {
    connectToDB();
    return await User.findOne({ id: userId })
    
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
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
        score: 0,
        categories: new Array<String>(),
      },
      { upsert: true }
    );
  } catch (err) {
    console.log(err);
  }
};
