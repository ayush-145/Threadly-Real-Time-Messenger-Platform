import jwt from "jsonwebtoken";
import { ENV } from "../lib/env.js";
import User from "../models/User.js";

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized - No token provided" });
        }
        const decodedToken = jwt.verify(token, ENV.JWT_SECRET);
        if (!decodedToken) {
            return res.status(401).json({ message: "Unauthorized - Invalid token" });
        }
        const user = await User.findById(decodedToken.userId).select("-password");
        if (!user) {
            return res.status(401).json({ message: "Unauthorized - User not found" });
        }
        req.user = user;
        next();
    } catch (error) {
        console.log("error in protect route middleware", error);
        res.status(500).json({ message: "Internal server error" });
    }
};