import mongoose from "mongoose";

const todoSchema = mongoose.Schema(
    {
        task:{
            type: String,
            required: true,
        }
    }
);


export const Todo = mongoose.model('Todo', todoSchema);