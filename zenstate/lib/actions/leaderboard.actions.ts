import Leaderboard from "@/components/Leaderboard/Leaderboard";
import { connectToDB } from "../mongoose";

interface Params {
    username: string,
    name: string,
    quant: number,
}

export async function updateLeaderboard({ username, name, quant }: Params) {
    connectToDB()
    const createdLeaderboard = await Leaderboard.create({ 
        username: username,
        name: name,
        quant: quant
    });
}