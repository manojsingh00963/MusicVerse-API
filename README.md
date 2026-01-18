\# 🎵 MusicVerse API

MusicVerse API is a RESTful music backend built with Node.js and Express.

It provides rich song metadata, lyrics, artist and album details, and interaction features like plays and likes.

Audio files are served via local storage or GitHub-hosted URLs, making it ideal for portfolio and learning purposes.

\---

\## 🚀 Features

\- 🎧 Serve music via local files or GitHub raw URLs

\- 📝 Rich song metadata (title, artist, writer, composer, album, genre, mood, language)

\- 📜 Lyrics API (full or preview)

\- 🔍 Search and filter by title, artist, genre, mood

\- ❤️ Track song plays and likes

\- 🎤 Artist-based and album-based endpoints

\- 🧩 Clean and scalable backend architecture

\---

\## 🛠️ Tech Stack

\- \*\*Backend:\*\* Node.js, Express.js

\- \*\*Data Layer:\*\* In-memory JSON (easy to migrate to MongoDB / Supabase)

\- \*\*Media Hosting:\*\* Local files / GitHub raw URLs

\- \*\*Architecture:\*\* RESTful API (MVC-inspired)

\---

\## 📁 Project Structure

\`\`\`bash

music-api/

├── src/

│ ├── config/

│ ├── data/

│ ├── controllers/

│ ├── routes/

│ ├── services/

│ ├── middlewares/

│ ├── utils/

│ ├── app.js

│ └── server.js

├── songs/

├── .env

├── package.json

└── README.md

📌 API Endpoints

Songs

GET /api/songs

GET /api/songs/:id

GET /api/songs/search?q=keyword

GET /api/songs/genre/:genre

GET /api/songs/mood/:mood

Lyrics

GET /api/songs/:id/lyrics

Interactions

POST /api/songs/:id/play

POST /api/songs/:id/like

Artists & Albums

GET /api/artists

GET /api/albums

▶️ Getting Started

1️⃣ Clone the repository

git clone https://github.com/your-username/music-api.git

cd music-api

2️⃣ Install dependencies

npm install

3️⃣ Start the server

npm run dev

Server runs at:

http://localhost:5000

🎯 Learning Objectives

Practice real-world API design

Understand music data modeling

Apply clean backend architecture

Prepare a strong portfolio project

🔮 Future Enhancements

Database integration (MongoDB / Supabase)

User authentication & playlists

Trending songs & analytics

AI-based mood detection from lyrics

⚠️ Disclaimer

This project is built for educational and portfolio purposes only.

Audio files and lyrics used are for non-commercial demonstration.

📄 License

This project is licensed under the MIT License.

👨‍💻 Author

Manoj Singh
