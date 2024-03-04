// Imports
const express = require('express');
const app = express();
const cors = require("cors");
const Complaint = require("./model/complainSchema")
require('dotenv').config(); // Load environment variables
require('./db/conn'); // Import DB connection

// Middleware for parsing request bodies
app.use(express.urlencoded({ extended: false })); // Replace bodyParser with express' built-in method
app.use(express.json());

app.use(require('./router/auth')); // Include routes
app.post('/api/v1/complaints', async (req, res) => {
    try {
        const complaint = new Complaint({
            ...req.body
        });

        await complaint.save();
        res.status(201).send(complaint);
    } catch (error) {
        res.status(400).send(error.stack);
    }
});
app.get('/api/v1/complaints', async (req, res) => {
    try {
        const complaints = await Complaint.find();
        res.send(complaints);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.use(cors());
// Listen on the port defined in the environment variables or default to 3000
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Application is running at http://localhost:${port}`);
});
