import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { Routes } from './Router/Router.js';
const app = express();

app.use(express.json());
app.use(cors());

const databaseUrl = "mongodb+srv://Vamsi:Vamsi@cluster0.5ekwbv8.mongodb.net/E-commerce";
mongoose.connect(databaseUrl);

const database = mongoose.connection;

database.on('error',(error)=>{
    console.log("Error in database connection",error)
})

database.once('connected',()=>{
    console.log("database conteected ")
})

app.use(Routes);

app.get('/AppUser',(res,req)=>{
    console.log("server is running")
})
app.listen(5000,()=>{
    console.log("server is running port number 5000")
});

