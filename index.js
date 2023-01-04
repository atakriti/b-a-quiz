import mongoose from "mongoose";
import express from "express";
import "dotenv/config"
import cors from "cors"
import Users from "./Users.js";
//! ================== Depolyment =========

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path'
//! ================== Depolyment ends ========
let app = express()
app.use(express.json())
app.use(cors())
app.listen(process.env.PORT || 5000,()=>console.log("server is listening..."))
mongoose.connect(process.env.MONGO)

app.post("/user", async (req, res) => {
    await Users.create(req.body).then(result => res.json(result))
})
app.get("/getAllUsers", async (req, res) => {
    await Users.find().then(result => res.json(result))
})
app.put("/update/:id", async (req, res) => {
    await Users.findByIdAndUpdate({"_id":req.params.id},req.body).then(result => res.json(result))
})
//! ======================================== Deployment ========================
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
 
app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
 res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

//! ===================================== Deployment ends ================