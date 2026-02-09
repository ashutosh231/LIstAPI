import express from "express";
import productRouter from "./routes/product.routes.js";
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
// USER ROUTES

export default app;