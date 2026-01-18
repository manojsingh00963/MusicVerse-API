import express from 'express';
import { getSongs, getSongById } from '../controllers/song.controller.js';
import { updateInteractions } from '../controllers/interaction.controller.js';

const router = express.Router();

router.get('/', getSongs);
router.get('/:id', getSongById);
router.patch('/:id/interaction', updateInteractions); // For likes/plays

export default router;