import express from "express";
import { getSongs, getSongById } from "../controllers/song.controller.js";
import { updateInteractions  } from "../controllers/interaction.controller.js";

const router = express.Router();

// 🎵 Songs
router.get("/", getSongs);
router.get("/:id", getSongById);

// ❤️ Interactions
router.post("/:id/like", updateInteractions );
router.post("/:id/play", updateInteractions );

export default router;
