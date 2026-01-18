import SongService from '../services/song.service.js';

export const getSongs = async (req, res, next) => {
    try {
        const songs = await SongService.getAllSongs(req.query);
        res.status(200).json({ success: true, data: songs });
    } catch (error) {
        next(error); // Passes to error.middleware.js
    }
};

export const getSongById = async (req, res, next) => {
    try {
        const song = await SongService.getSongById(req.params.id);
        res.status(200).json({ success: true, data: song });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
};