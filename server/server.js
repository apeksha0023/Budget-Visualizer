import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import transactionRoutes from './routes/transactionRoutes.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Connect to MongoDB
connectDB();

// ✅ CORS configuration (important)
app.use(cors()); // ← for development only, allows all origins


// ✅ Middleware
app.use(express.json());

// ✅ Routes
app.use('/api/transactions', transactionRoutes);

// ✅ Error handler middleware
app.use(errorHandler);

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
