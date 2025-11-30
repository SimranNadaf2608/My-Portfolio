// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

connectDB().catch(err => {
  console.error('DB connect failed (caught):', err);
  // do NOT exit here so we can still debug server binding
});

// simple routes
app.get('/', (req, res) => res.send('Portfolio backend running'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/contact', require('./routes/contact'));

// explicit host binding and extra logs
const PORT = Number(process.env.PORT) || 5000;
const HOST = process.env.HOST || '0.0.0.0';

const server = app.listen(PORT, HOST, () => {
  const addr = server.address();
  console.log(`Server running — PID=${process.pid} listening on ${addr.address}:${addr.port}`);
});

// handle unexpected errors so process doesn't silently exit
process.on('uncaughtException', (err) => {
  console.error('uncaughtException:', err);
});
process.on('unhandledRejection', (reason) => {
  console.error('unhandledRejection:', reason);
});
