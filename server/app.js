import express from 'express';
import pg from 'pg';
import dotenv from 'dotenv';
import router from './routes/routes.js';
// to-do: find lighter analogue of bodyParser
import bodyParser from 'body-parser';
import path from 'path';
import NodeCache from 'node-cache';
import cors from 'cors';
import compression from 'compression';
// init caching
export const storage = new NodeCache({
  stdTTL: 86400,
  checkperiod: 43200,
  deleteOnExpire: true,
});
// env file in the main dir
const __dirname = path.dirname(new URL(import.meta.url).pathname);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// init express app
const app = express();
app.use(express.json());
app.use(bodyParser.json());
// CORS
var corsOptions = {
  origin: 'http://localhost:5173', // vite development server
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
// pre-load the frontend
app.use(express.static('../client/dist'));
//gzip
app.use(compression());
//port
const port = process.env.PORT || 3000;
//PG DB
const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};
const { Client } = pg;
const db = new Client(dbConfig);

db.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
  })
  .catch((err) => {
    console.error('Error connecting to PostgreSQL database:', err);
  });

// backend
app.use('/', router);
// frontend (assigns all endpoints except the backend ones)
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: '../client/dist' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
