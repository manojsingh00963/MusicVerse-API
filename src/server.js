import app from './app.js';
import { config } from './config/server.config.js';

const server = app.listen(config.port, () => {
    console.log(`🎵 MusicVerse API running in ${config.env} mode on port ${config.port}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1));
});