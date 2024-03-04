const express = require('express');
const router = express.Router();

// GET request to /events
router.get('/', (req, res) => {
  res.send('Responding to GET request on /events');
});

// Export the router
module.exports = router;
