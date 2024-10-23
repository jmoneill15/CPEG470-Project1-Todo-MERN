import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
import { JWT_SECRET } from "../config.js"; // Make sure JWT_SECRET is in your config

export const protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, JWT_SECRET);

            // Find the user by ID and attach it to the request
            req.user = await User.findById(decoded.id).select('-password');
            if (!req.user) {
                return res.status(404).send({ message: "User not found." });
            }
            next();
        } catch (error) {
            return res.status(401).send({ message: "Not authorized, token failed." });
        }
    } else {
        return res.status(401).send({ message: "Not authorized, no token." });
    }
};

