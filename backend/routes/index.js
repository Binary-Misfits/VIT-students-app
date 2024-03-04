const events = require('./events')
const express = require('express');
const router = express.Router();

// GET request to /events
router.use('/events', events);

// Export the router
module.exports = router;
