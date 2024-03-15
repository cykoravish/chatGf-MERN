import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();

const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(express.json())
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server is running at port ${PORT}`);
});