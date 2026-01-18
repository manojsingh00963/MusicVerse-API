import { musicData } from '../data/music.data.js';

class SongService {
    async getAllSongs(filters) {
        let songs = [...musicData];
        if (filters.genre) {
            songs = songs.filter(s => s.genre === filters.genre);
        }
        return songs;
    }

    async getSongById(id) {
        const song = musicData.find(s => s.id === id);
        if (!song) throw new Error('Song not found');
        return song;
    }
}

export default new SongService();