import path from 'path';
import { config as loadEnv } from 'dotenv';
loadEnv();
loadEnv({ path: path.join(process.cwd(), 'src', '.env') });

import express from 'express';
import cors from 'cors';
import connectDB from './config/database';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

const startServer = async (): Promise<void> => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

