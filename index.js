import express from "express";
import userRouteapi from "./routes/index.js";
import mongoose from "mongoose";
import "dotenv/config";

mongoose.connect(process.env.DB_URL).then(() =>{
    console.log('Connected to DB')
}).catch(error =>{
    console.log('Failed to connect to db:',error.message)
})

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to Job Search")
})

app.use(userRouteapi);

app.listen(port, () =>{
console.log(`Server is running on ${port}`)
});




