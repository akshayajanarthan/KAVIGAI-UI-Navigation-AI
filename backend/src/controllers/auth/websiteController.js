import asyncHandler from "express-async-handler";

export const createWebsite = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Create Website"});
});