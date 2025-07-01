import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import next from "next";
import blogRoutes from "./routes/blogRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import rateLimiter from "./middleware/rateLimiter.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev, dir: path.join(__dirname, "../frontend") });
const handle = nextApp.getRequestHandler();

const PORT = process.env.PORT || 5001;

connectDB().then(async () => {
  await nextApp.prepare();

  const app = express();

  // Middleware
  if (dev) {
    app.use(cors({
      origin: "http://localhost:3000",
      credentials: true,
    }));
  }

  app.use(express.json());
  app.use(cookieParser());
  app.use(rateLimiter);

  // API routes
  app.use("/api/blogs", blogRoutes);
  app.use("/api/auth", authRoutes);
  app.use("/api/users", userRoutes);

  // Serve public assets
  app.use('/public', express.static(path.join(__dirname, '../frontend/public')));

  // Next.js handling for everything else
  app.all("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(PORT, () => {
    console.log(`🚀 Server ready on http://localhost:${PORT}`);
  });
});
