export const musicData = [
  {
    id: "rangreza-atif-aslam",
    title: "Rangreza",
    artist: {
      name: "Atif Aslam",
      country: "Pakistan"
    },
    album: {
      name: "Rangreza",
      year: 2013
    },
    writers: ["Guri"],
    composer: "Sachin–Jigar",
    language: "Punjabi",
    genre: ["Romantic"],
    mood: "Romantic",

    duration: 268, // seconds (better than "4:28")
    releaseYear: 2013,

    media: {
      source: "local",
      audioUrl: "/songs/rangreza.mp3",
      coverUrl: "/covers/rangreza.jpg"
    },

    lyrics: {
      preview: "Rangreza rangreza ve...",
      full: null // optional / future
    },

    stats: {
      plays: 1250,
      likes: 450
    },

    tags: ["atif", "romantic", "punjabi"]
  },

  {
    id: "tera-hone-laga-hoon-atif-aslam",
    title: "Tera Hone Laga Hoon",
    artist: {
      name: "Atif Aslam",
      country: "Pakistan"
    },
    album: {
      name: "Ajab Prem Ki Ghazab Kahani",
      year: 2009
    },
    writers: ["Irshad Kamil"],
    composer: "Pritam",
    language: "Hindi",
    genre: ["Bollywood", "Romantic"],
    mood: "Romantic",

    duration: 262,
    releaseYear: 2009,

    media: {
      source: "local",
      audioUrl: "/songs/tera-hone-laga-hoon.mp3",
      coverUrl: "/covers/tera-hone-laga-hoon.jpg"
    },

    lyrics: {
      preview: "Tera hone laga hoon...",
      full: null
    },

    stats: {
      plays: 5000,
      likes: 1200
    },

    tags: ["atif", "bollywood", "love"]
  }
];
