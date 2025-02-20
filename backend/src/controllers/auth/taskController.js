import asyncHandler from "express-async-handler";
import TaskModel from "../../models/auth/TaskModel.js";

export const createTask = asyncHandler(async(req,res)=>{
   try{
    const {title,description,dueDate, priority,status} = req.body;
    if(!title || title.trim() ===""){
        res.status(400).json({message:"Title is required!"});
    }
    if(!description || description.trim() ===""){
        res.status(400).json({message:"Description is required!"});
    }
    const task= new TaskModel({
        title,
        description,
        dueDate,
        priority,
        status,
        user:req.user._id,
    });
    
    await task.save();

    res.status(201).json(task);
   }catch(error){
    console.log("Error in createTask:",error.message)
    res.status(500).json({ message: error.message });
   }
});
export const getTasks= asyncHandler(async(req,res)=>{
    try{
        const userId = req.user._id;
        if(!userId){
            res.status(400).json({message:"User not found!!"});
        }

        const tasks= await TaskModel.find({user:userId});
        res.status(200).json(
            {
                length: tasks.length,
                tasks,
        }
    );
    }catch{
        console.log("Error in createTask:",error.message)
        res.status(500).json({ message: error.message });
    }
});

export const getTask = (async (req,res)=>{
    try {
        const userId = req.user._id;
        const{id}= req.params;
        if(!id){
            res.status(400).json({message:"Please Provide a task id"});
        }
        const task = await TaskModel.findById(id);
        if(!task){
            res.status(404).json({message:"Task not found!!"});
        }
        if(!task.user.equals(userId)){
            res.status(403).json({message:"You are not authorized to access this task!!"});
        }
        res.status(200).json(task);
    } catch (error) {
        console.log("Error in createTask:",error.message)
        res.status(500).json({ message: error.message });
    }
});

export const updateTask = asyncHandler(async (req, res) => {
    try {
        const userId = req.user?._id;
        const { id } = req.params;
        const { title, description, dueDate, priority, status, completed } = req.body;

        if (!id) {
            return res.status(400).json({ message: "Please provide a task ID" });
        }

        const task = await TaskModel.findById(id);

        if (!task) {
            return res.status(404).json({ message: "Task not found!" });
        }

        if (!task.user.equals(userId)) {
            return res.status(403).json({ message: "You are not authorized to update this task!" });
        }

        // Update only provided fields
        if (title !== undefined) task.title = title;
        if (description !== undefined) task.description = description;
        if (dueDate !== undefined) task.dueDate = dueDate;
        if (priority !== undefined) task.priority = priority;
        if (status !== undefined) task.status = status;
        if (completed !== undefined) task.completed = completed;

        await task.save();

        return res.status(200).json({ message: "Task updated successfully!", task });
    } catch (error) {
        console.error("Error in updateTask:", error.message);
        return res.status(500).json({ message: "Server error", error: error.message });
    }
});
export const deleteTask = asyncHandler(async (req, res) => {
    try {
        const userId = req.user?._id;
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: "Please provide a task ID" });
        }

        const task = await TaskModel.findById(id);

        if (!task) {
            return res.status(404).json({ message: "Task not found!" });
        }

        if (!task.user.equals(userId)) {
            return res.status(403).json({ message: "You are not authorized to delete this task!" });
        }

        await task.deleteOne();

        return res.status(200).json({ message: "Task deleted successfully!" });
    } catch (error) {
        console.error("Error in deleteTask:", error.message);
        return res.status(500).json({ message: "Server error", error: error.message });
    }
});
