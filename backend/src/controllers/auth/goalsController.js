import asyncHandler from "express-async-handler";

export const createGoals = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Create Goals"});
});