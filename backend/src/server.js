import express from "express";
import blogRoutes from "./routes/blogRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

// middleware
app.use(express.json()); // parse JSON bodies: req.body

// custom middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();
// });

app.use("/api/blogs", blogRoutes);

app.listen(PORT, () => {
  console.log("Server started on PORT:", PORT);
});