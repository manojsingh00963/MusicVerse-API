import app from "./app.js";
import { config } from "./config/server.config.js";

const server = app.listen(config.port, () => {
  console.log(
    `🎵 MusicVerse API running in ${config.env} mode on port ${config.port}`
  );
});

// ❌ Unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED REJECTION 💥", err);
  shutdown();
});

// ❌ Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION 💥", err);
  shutdown();
});

// 🛑 Graceful shutdown
process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);

function shutdown() {
  console.log("🛑 Shutting down server...");
  server.close(() => {
    process.exit(1);
  });
}
