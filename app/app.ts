import express from "express";
import { connectToMongo } from "./connection/connection.mongo";
import { registerRoutes } from "./routes/routes";
import cors from 'cors'

export const startServer = async()=>{
    const app = express();
    app.use(cors())
    await connectToMongo();
    registerRoutes(app)
    const {PORT} = process.env;
    app.listen(PORT || 3500, ()=>{
        console.log(`server started on port ${PORT} || 3500`);
    });
    
}