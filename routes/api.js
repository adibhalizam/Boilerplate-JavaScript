const express = require('express');
const router = express.Router();
const logger = require('../src/utils/logger');

// Handle frontend logs
router.post('/log', (req, res) => {
  const { level, message, args } = req.body;
  logger[level](`Frontend Log: ${message}`, ...args);
  res.sendStatus(200);
});

// You can add more API routes here as needed

module.exports = router;