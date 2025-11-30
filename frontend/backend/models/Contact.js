const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contact', ContactSchema);
