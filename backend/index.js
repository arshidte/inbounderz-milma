import path from "path";
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import productRoutes from './Routes/productRoutes.js';
import uploadRoutes from './Routes/uploadRoutes.js';
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const app = express();

app.use(express.json());
dotenv.config();
connectDB();

app.use('/api/products', productRoutes);
app.use("/api/upload", uploadRoutes);


const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(notFound);
app.use(errorHandler);

app.listen('5000',()=>{
    console.log("Server is running in port 5000");
})