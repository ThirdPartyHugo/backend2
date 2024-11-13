import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { AppDataSource } from './data-source';
import { authRouter } from './routes/auth';
import { salesRouter } from './routes/sales';
import { usersRouter } from './routes/users';
import { tasksRouter } from './routes/tasks';
import { errorHandler } from './middleware/error-handler';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/sales', salesRouter);
app.use('/api/users', usersRouter);
app.use('/api/tasks', tasksRouter);

// Error handling
app.use(errorHandler);

// Database connection and server start
AppDataSource.initialize()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => console.log(error));