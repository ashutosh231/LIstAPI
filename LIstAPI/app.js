import express from 'express';

import dotenv from 'dotenv';
import connectDB from './config/db.js';
const app = express();

dotenv.config();

connectDB();

app.use(express.json());

//BASE ROUTE
app.get('/', (req, res) => {
  res.send('List API is running');
});

export default app;