import express from "express";
import { fetchArtists } from "../controllers/artist.controller.js";

const router = express.Router();
router.get("/", fetchArtists);

export default router;
