import mongoose from "mongoose";
let { model, Schema } = mongoose

let users = new Schema({
    username: String,
    password: String,
    email: String,
    a1Level: {type:Number,default:1},
    a2Level: {type:Number,default:0},
    b1Level:{type:Number,default:0}
})
export default model("users",users)