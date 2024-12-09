import mongoose from "mongoose"

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete:{
      type: String,
      default: false
    },
    createdBy:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"User"
    },
    subTodes:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subtodo"
      }
    ] //array of subtodoes
  },
  {timestamps: true}
)

export const Todo = mongoose.model("Todo", todoSchema)