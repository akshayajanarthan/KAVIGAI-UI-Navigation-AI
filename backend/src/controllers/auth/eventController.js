import asyncHandler from "express-async-handler";

export const createEvent = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Create Event"});
});