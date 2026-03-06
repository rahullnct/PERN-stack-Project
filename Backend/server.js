import express from "express";
import cors from "cors";
import "dotenv/config";
import { clerkMiddleware } from '@clerk/express'
const app=express();
const Port=process.env.PORT || 10004;

app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());

app.get('/',(req,res)=> res.send("server is live"));
app.listen(Port,()=> console.log(`server is running at ${Port}`));
