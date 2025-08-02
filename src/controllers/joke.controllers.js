import express from 'express';
import { Joke } from '../models/joke.model.js';

const router = express.Router();

export const jokes = async(req, res) => {
    try{
        const jokes = await Joke.find();
        res.json(jokes);
    }catch(error){
        res.status(500).json({error: "Failed to fetch jokes"});
    }
};

export const joke = async(req, res) => {
    try {
        const joke = await Joke.findOne({id:req.params.id});
        if(!joke) return res.status(404).json({error:"Joke not found"});
        res.json(joke);
    } catch (error) {
        res.status(500).json({error: "Failed to fetch joke"});
    }
};

export const newJoke = async(req, res)=>{
    try {
        const newJoke = await Joke.create(req.body);
        res.status(201).json(newJoke);
    } catch (error) {
        res.status(500).json({error:"Failed to create Joke", details: error.message})
    }
};

export const updatedJoke = async(req, res)=>{
    try {
        const updatedJoke = await Joke.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
        if(!updatedJoke) return res.status(404).json({error: "Joke not found"});
        res.json(updatedJoke);
    } catch (error) {
        res.status(400).json({error: "Failed to update joke", details: error.message});
    }
};

export const deletedJoke = async(req, res)=>{
    try {
        const deletedJoke = await Joke.findByIdAndDelete(
            req.params.id
        )
        if (!deletedJoke) return res.status(404).json({error: "Joke not Found"});
        res.json({message: "Joke deleted successfully"});
    } catch (error) {
        res.status(500).json({error: "Failed to delete joke"});
    }
};

export default router;