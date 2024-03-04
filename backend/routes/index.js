const events = require('./events');
const users = require('./users');
const express = require('express');
const router = express.Router();

// GET request to /events
router.use('/events', events);
router.use('/users', users);

// Export the router
module.exports = router;
