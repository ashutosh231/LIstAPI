import express from "express";
import productRouter from "./routes/product.routes.js";
import { seedDatabaseController } from "./controller/seed.controller.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
const app = express();


dotenv.config();
connectDB();


app.use(express.json());

// BASE ROUTE
app.get("/", (req, res) => {
  res.send("User Management API is running");
});

app.use("/api/products",productRouter);

// SEED ROUTE - Use POST http://your-url/api/seed to populate database
app.post("/api/seed", seedDatabaseController);

// USER ROUTES

export default app;