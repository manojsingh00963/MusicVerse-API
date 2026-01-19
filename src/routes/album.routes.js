import express from "express";
import { fetchAlbums } from "../controllers/album.controller.js";

const router = express.Router();
router.get("/", fetchAlbums);

export default router;
