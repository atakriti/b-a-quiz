import mongoose from "mongoose";
import express from "express";
import "dotenv/config"
import cors from "cors"
import Users from "./Users.js";

let app = express()
app.use(express.json())
app.use(cors())
app.listen(process.env.PORT || 5000,()=>console.log("server is listening..."))
mongoose.connect(process.env.MONGO)
