import mongoose from "mongoose";
const TaskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please Provide a title"],
    },
    description:{
        type:String,
        default:"No Description",
    },
    dueDate:{
        type:Date,
        default:Date.now(),
    },
    status:{
        type:String,
        enum:["current","skipped","future"],
        default:"current",
    },
    completed:{
        type:Boolean,
        default:false,
    },
    priority:{
        type:String,
        enum:["low","medium","high"],
        default:"low",
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true,
    },
},
{timestamps:true}
);

const TaskModel= mongoose.model("Task",TaskSchema);
export default TaskModel;