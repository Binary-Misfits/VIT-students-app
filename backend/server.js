const express = require('express');
const cors = require('cors');
const mainRouter  = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());

// Add a simple route for GET requests to the root URL
app.get('/', (req, res) => {
  res.json({ message: 'Hello from the Express app' });
});

// Routes
app.use('/api/v1', mainRouter)

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
