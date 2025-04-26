import express from 'express';
import dotenv from 'dotenv';
import incidentRoutes from './routes/incidentRoutes';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/', incidentRoutes);

// Connect DB and start server
const PORT = process.env.PORT;
const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI as string);
      console.log('MongoDB connected successfully.');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      process.exit(1);
    }
  };
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
