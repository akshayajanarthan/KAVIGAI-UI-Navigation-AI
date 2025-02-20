import mongoose from "mongoose";
const GoalsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please Provide a title"],
        unique:true,
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
    status:{
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

const GoalsModel= mongoose.model("Goals",GoalsSchema);
