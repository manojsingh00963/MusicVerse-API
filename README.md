# 🎵 MusicVerse API

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

**MusicVerse API** is a robust RESTful music backend designed for seamless integration. It serves high-quality song metadata, lyrics, and media while tracking user interactions. Perfect for developers building music players or portfolio projects.

---

## 🚀 Key Features

* **🎧 Flexible Hosting:** Serve music via local storage or remote GitHub raw URLs.
* **📝 Metadata Rich:** Detailed info including Title, Writer, Composer, Genre, Mood, and Language.
* **📜 Lyrics Support:** Dedicated endpoints for full lyrics or short previews.
* **🔍 Smart Discovery:** Filter and search by artist, genre, or mood.
* **❤️ Engagement Tracking:** Built-in logic to track song plays and "likes."
* **🎤 Entity-Based Routing:** Specialized endpoints for Artists and Albums.
* **🧩 Scalable Design:** Clean, MVC-inspired architecture for easy maintenance.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Backend** | Node.js, Express.js |
| **Data Layer** | In-memory JSON (Ready for MongoDB/Supabase migration) |
| **Media Hosting** | Local Files / GitHub CDN |
| **Architecture** | RESTful API (MVC Pattern) |

---

## 📁 Project Structure

```bash
music-api/
├── src/
│   ├── config/       # Environment & App config
│   ├── data/         # JSON data stores
│   ├── controllers/  # Request handlers
│   ├── routes/       # API route definitions
│   ├── services/     # Business logic
│   ├── middlewares/  # Security & validation
│   ├── utils/        # Helper functions
│   ├── app.js        # App entry point
│   └── server.js     # Server listener
├── songs/            # Local audio storage
├── .env              # Environment variables
└── package.json      # Dependencies & Scripts