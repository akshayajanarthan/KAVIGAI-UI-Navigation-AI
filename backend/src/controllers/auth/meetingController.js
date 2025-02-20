import asyncHandler from "express-async-handler";

export const createMeeting = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Create Meetings"});
});