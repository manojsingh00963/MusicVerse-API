import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

import songRoutes from "./routes/song.routes.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

const app = express();

// 🔧 ES module dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔐 Security & Logging
app.use(helmet());
app.use(
  cors({
    origin: "*", // restrict in production
    methods: ["GET", "POST", "PATCH"]
  })
);
app.use(express.json());
app.use(morgan("dev"));

// 🎵 Static audio files
app.use("/songs", express.static(path.join(__dirname, "../songs")));

// ❤️ Health check
app.get("/health", (_, res) => {
  res.status(200).json({ status: "OK", uptime: process.uptime() });
});

// 🚀 API Routes
app.use("/api/v1/songs", songRoutes);

// ❌ Centralized Error Handling
app.use(errorMiddleware);

export default app;
