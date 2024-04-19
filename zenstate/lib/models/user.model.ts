import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id: { type: String, required: true },
    username: { type: String, required: true, unique: true},
    name: { type: String, required: true },
    score:[{
        quant: {type: Number}, 
        date: {type: Number}
    }], 
    onboarded : {
        type: Boolean,
        default: false,
    },
})

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;