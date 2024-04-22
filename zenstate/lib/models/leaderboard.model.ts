import mongoose from 'mongoose';

const leaderboardSchema = new mongoose.Schema({

})

const Leaderboard = mongoose.models.Leaderboard || mongoose.model('Leaderboard', leaderboardSchema);

export default Leaderboard;