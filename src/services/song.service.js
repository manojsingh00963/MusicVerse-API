import { musicData } from "../data/music.data.js";

class SongService {
  async getAllSongs(filters = {}) {
    let songs = [...musicData];

    // 🎵 Filter by genre
    if (filters.genre) {
      songs = songs.filter(song =>
        song.genre?.some(
          g => g.toLowerCase() === filters.genre.toLowerCase()
        )
      );
    }

    // 🎤 Filter by artist
    if (filters.artist) {
      songs = songs.filter(song =>
        song.artist?.name
          ?.toLowerCase()
          .includes(filters.artist.toLowerCase())
      );
    }

    // 😊 Filter by mood
    if (filters.mood) {
      songs = songs.filter(
        song => song.mood?.toLowerCase() === filters.mood.toLowerCase()
      );
    }

    // 🔍 Search (title, artist, lyrics preview)
    if (filters.q) {
      const query = filters.q.toLowerCase();
      songs = songs.filter(song =>
        song.title.toLowerCase().includes(query) ||
        song.artist.name.toLowerCase().includes(query) ||
        song.lyrics?.preview?.toLowerCase().includes(query)
      );
    }

    // 🔥 Sort
    if (filters.sort === "popular") {
      songs.sort((a, b) => b.stats.plays - a.stats.plays);
    }

    if (filters.sort === "latest") {
      songs.sort((a, b) => b.releaseYear - a.releaseYear);
    }

    return songs;
  }

  async getSongById(id) {
    const song = musicData.find(song => song.id === id);
    if (!song) {
      throw new Error("Song not found");
    }
    return song;
  }
}

export default new SongService();
