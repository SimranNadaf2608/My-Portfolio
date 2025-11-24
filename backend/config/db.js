// backend/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI && process.env.MONGO_URI.trim().length
      ? process.env.MONGO_URI
      : 'mongodb://127.0.0.1:27017/portfolio';

    // connect and return so caller can await or catch
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connect error:', err && err.message ? err.message : err);
    throw err; // rethrow so caller sees failure
  }
};

module.exports = connectDB;
