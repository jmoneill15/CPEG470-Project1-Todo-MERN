import express from "express";
import { User } from "../models/user.js";
//import { generateToken } from "../utils/jwt.js"; // Add JWT utility here

const router = express.Router();

// Route for user signup
router.post('/signup', async (request, response) => {
    try {
        const { username, password } = request.body;

        // Check if user already exists
        const userExists = await User.findOne({ username });
        if (userExists) {
            return response.status(400).send({ message: "User already exists" });
        }

        // Create new user
        const newUser = new User({ username, password });
        await newUser.save();

        // Generate JWT token
        const token = generateToken(newUser);
        return response.status(201).json({ token });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for user login
router.post('/login', async (request, response) => {
    try {
        const { username, password } = request.body;

        // Find user by username
        const user = await User.findOne({ username });
        if (!user) {
            return response.status(400).send({ message: "Invalid credentials" });
        }

        // Check password
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return response.status(400).send({ message: "Invalid credentials" });
        }

        // Generate JWT token
        //const token = generateToken(user);
        //return response.status(200).json({ token });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;


/*import express from "express";
import {User} from "../models/user.js";

const router = express.Router();

//Route for saving a new user ie in signin
router.post('/', async (request, response)=>{
    try{
        if(
            !request.body.username ||
            !request.body.password
        ){
            return response.status(400).send({
                message: "Send all required fields: username, password",
            })
        }
        const newUser = {
            username: request.body.username,
            password: request.body.password,
        };
        const user = await User.create(newUser);
        return response.status(201).send(user);
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//Route to get all users from database
router.get('/', async (request, response)=>{
    try{
        const users = await User.find({});
        return response.status(200).json({
            count: users.length,
            data: users
        });
    }
    catch (error){
        console.log(error.message);
        response.status(500).send({message: error.message})
    }
});

// Route to get a user by ID
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const user = await User.findById(id);

        if (!user) {
            return response.status(404).send({ message: "User not found" });
        }

        return response.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;*/
