import express from 'express';
import {
    newJoke, 
    jokes, 
    joke,
    updatedJoke,
    deletedJoke
} from '../controllers/joke.controllers.js';

const router = express.Router();

router.post("/", newJoke);
router.get("/", jokes);
router.get("/:id", joke);
router.put("/:id", updatedJoke);
router.delete("/:id", deletedJoke);

export default router;