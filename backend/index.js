import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Todo } from "./models/todo.js";
import todoRoute from "./routes/todoRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cors from 'cors';

const app = express();

//Middleware Parsing request body
app.use(express.json());

//Middleware handles CORS POLICY
/*
app.use(cors({
    origin: 'https://localhost:3000',//front end url
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}
));
*/

app.get('/', (request, response)=>{
    console.log(request)
    return response.status(234).send("welcome to tutorial")
});

app.use('/todo', todoRoute);
app.use('/users', userRoutes);

//7SmuLaf1TsN8OV6I

mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log("App connected to database");
    app.listen(PORT, () => {
        console.log(`App is listening to port : ${PORT}`);
    });

}).catch ((error)=>{
    console.log(error);
});