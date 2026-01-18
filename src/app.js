import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { errorMiddleware } from './middlewares/error.middleware.js';
import songRoutes from './routes/song.routes.js';

const app = express();

// Security & Logging
app.use(helmet()); // Sets various HTTP headers for security
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Static files for audio
app.use('/songs', express.static('songs'));

// API Routes
app.use('/api/v1/songs', songRoutes);

// Centralized Error Handling
app.use(errorMiddleware);

export default app;