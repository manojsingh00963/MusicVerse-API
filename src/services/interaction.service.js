import { musicData } from "../data/music.data.js";

class InteractionService {
  update(id, type) {
    const song = musicData.find(s => s.id === id);
    if (!song) throw new Error("Song not found");

    if (type === "like") song.stats.likes += 1;
    else if (type === "play") song.stats.plays += 1;
    else throw new Error("Invalid interaction type");

    return song.stats;
  }
}

export default new InteractionService();
