import { musicData } from '../data/music.data.js';

export const updateInteractions = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { type } = req.body; // 'like' or 'play'

        const song = musicData.find(s => s.id === id);
        if (!song) return res.status(404).json({ success: false, message: "Song not found" });

        if (type === 'like') song.likes += 1;
        if (type === 'play') song.plays += 1;

        res.status(200).json({ success: true, data: song });
    } catch (error) {
        next(error);
    }
};