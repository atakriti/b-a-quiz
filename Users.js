import mongoose from "mongoose";
let { model, Schema } = mongoose

let users = new Schema({
    username: String,
    password: String,
    email: String,
    a1: {type:Boolean,default:false},
    a2: {type:Boolean,default:false},
    b1:{type:Boolean,default:false},
    demo:{type:Boolean,default:false}
})
export default model("users",users)