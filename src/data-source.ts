import { DataSource } from 'typeorm';
import { User } from './entities/User';
import { Sale } from './entities/Sale';
import { Task } from './entities/Task';
import { Customer } from './entities/Customer';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3000'),
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'your_database_name',
  synchronize: false,
  logging: process.env.NODE_ENV === 'development',
  entities: [User, Sale, Task, Customer],
  migrations: [],
  subscribers: [],
});
