// Imports
const express = require('express');
const app = express();
const cors = require("cors");
require('dotenv').config(); // Load environment variables
require('./db/conn'); // Import DB connection

// Middleware for parsing request bodies
app.use(express.urlencoded({ extended: false })); // Replace bodyParser with express' built-in method
app.use(express.json());

app.use(require('./router/auth')); // Include routes
app.use(cors());
// Listen on the port defined in the environment variables or default to 3000
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Application is running at http://localhost:${port}`);
});
