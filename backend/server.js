import express from "express";
import blogRoutes from "./routes/blogRoutes.js";

const app = express();

app.use("/api/notes", blogRoutes);

app.listen(5001, () => {
  console.log("Server started on PORT: 5001");
});