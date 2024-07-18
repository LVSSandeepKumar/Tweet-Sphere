import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";

const app = express();
const port = process.env.PORT || 8000;
dotenv.config();

app.use("/api/auth", authRoutes);

app.listen(8000, () => {
    console.log(`Server running at ${port}`);
    connectMongoDB();
})