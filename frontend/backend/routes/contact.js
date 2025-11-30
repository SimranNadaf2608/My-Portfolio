const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const c = new Contact(req.body);
    await c.save();
    // Optional: send email with nodemailer here
    res.status(201).json({ message: 'Message received' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/contact (admin)
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
