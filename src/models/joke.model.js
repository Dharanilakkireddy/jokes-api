import mongoose from 'mongoose';

const jokeSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String, 
        required: true
    }
}, 
    {
        timestamps: true
    }
);

export const Joke = mongoose.model('Joke',jokeSchema);