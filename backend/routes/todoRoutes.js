import express from "express";
import { Todo } from "../models/todo.js";
import { protect } from "../middleware/authMiddleware.js"; // Protect middleware

const router = express.Router();

// Route for saving a new Todo Task (protected)
router.post('/', protect, async (request, response) => {
    try {
        if (!request.body.task) {
            return response.status(400).send({
                message: "Send all required fields: task",
            });
        }

        const newTask = {
            task: request.body.task,
            user: request.user._id // Attach user ID from JWT token
        };

        const task = await Todo.create(newTask);
        return response.status(201).send(task);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to get all tasks for the authenticated user (protected)
router.get('/', protect, async (request, response) => {
    try {
        const todos = await Todo.find({ user: request.user._id }); // Filter tasks by user
        return response.status(200).json({
            count: todos.length,
            data: todos
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;


/*import express from "express";
import { Todo } from "../models/todo.js";

const router = express.Router();

//Route for saving a new Todo Task
router.post('/', async (request, response)=>{

    try{
        if(
            !request.body.task
        ){
            return response.status(400).send({
                message: "Send all required fields: task",
            })
        }
        const newTask = {
            task: request.body.task,
            //user: request.body.user,
        };
        const task = await Todo.create(newTask);
        return response.status(201).send(task);
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


//Route to get all tasks from database
router.get('/', async (request, response)=>{
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
router.get('/:id', async (request, response)=>{
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
router.put('/:id', async (request, response)=>{
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

//Route for deleting a todo task
router.delete('/:id', async (request, response)=>{
    try{
        const {id} = request.params;
        const result = await Todo.findByIdAndDelete(id);

        if(!result){
            return response.status(400).send({message: 'Todo not found'})
        }
        return response.status(200).send({message: 'Todo task deleted successfully'})

    }catch (error){
        console.log(error.message);
        response.status(500).send({message: error.message})
    }
});

export default router;
*/