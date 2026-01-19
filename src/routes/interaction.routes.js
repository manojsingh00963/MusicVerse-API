import express from "express";
import { playSong, likeSong } from "../controllers/interaction.controller.js";

const router = express.Router();

router.post("/:id/play", playSong);
router.post("/:id/like", likeSong);

export default router;
