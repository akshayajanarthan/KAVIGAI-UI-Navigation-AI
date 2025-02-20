import asyncHandler from "express-async-handler";

export const createBook = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Create Book"});
});