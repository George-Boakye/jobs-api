import express from "express";
import userRouteapi from "./routes/index.js";


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




