import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Todo } from "./models/todo.js";

const app = express();

//Parsing request body
app.use(express.json());

app.get('/', (request, response)=>{
    console.log(request)
    return response.status(234).send("welcome to tutorial")
});
//7SmuLaf1TsN8OV6I

//Route for saving a new Todo Task
app.post('/todo', async (request, response)=>{
    try{
        if(
            !request.body.task
        ){
            return response.status(400).send({
                message: "Send all required fields: task",
            })
        }
        const newTask = {
            task: request.body.task
        };
        const task = await Todo.create(newTask);
        return response.status(201).send(task);
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


//Route to get all tasks from database
app.get('/todo', async (request, response)=>{
    try{
        const todos = await Todo.find({});
        return response.status(200).json({
            count: todos.length,
            data: todos
        });
    }
    catch (error){
        console.log(error.message);
        response.status(500).send({message: error.message})
    }
});

//Route to get one task from database by id
app.get('/todo/:id', async (request, response)=>{
    try{
        const{ id } = request.params;

        const todo = await Todo.findById(id);
        return response.status(200).json(todo);
    }
    catch (error){
        console.log(error.message);
        response.status(500).send({message: error.message})
    }
});


//Route to update a task
app.put('/todo/:id', async (request, response)=>{
    try{
        if (!request.body.task){
            return response.status(400).send({
                message: 'Send all required fields: task'
            })
        }
    const {id} = request.params;
    const result = await Todo.findByIdAndUpdate(id, request.body);

    if(!result){
        return response.status(400).send({message: 'Todo not found'})
    }
    return response.status(200).send({message: 'Todo task updated successfully'})
    }catch (error){
        console.log(error.message);
        response.status(500).send({message: error.message})
    }
});


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