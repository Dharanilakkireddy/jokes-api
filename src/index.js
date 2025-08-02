import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/connectDB.js'
import jokeRoutes from './routes/joke.routes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use('/api/jokes', jokeRoutes);
app.get('/', (req, res)=>{
    res.send("Welcome to the Jokes API");
});

app.listen(PORT, ()=>{
    console.log(` Server is running at http://localhost:${PORT}`);
})