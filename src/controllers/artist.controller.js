import { artists } from "../data/artists.data.js";

export const fetchArtists = (req, res) => {
  res.json(artists);
};
