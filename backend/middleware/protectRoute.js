import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req,res,next) =>{
    try {
        const token = req.cookies.jwt;
        if(!token){
        res.status(401).json({error: "Unauthorized - No Token Provided"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            res.status(401).json({error: "Unauthorized - No Token Provided"});
        }

        const user = await User.findById(decoded.userId).select("-password");

        if(!user){
            return res.status(404).json({error: "User not found"});
        }

        req.user = user;
        next();


    } catch (error) {
        console.log("Error in protectRoute middleware", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

export default protectRoute;