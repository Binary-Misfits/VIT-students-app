// Imports --
const mongoose = require('mongoose')


// Variables calling from dotenv--
const DB = process.env.Database_Address;


// Data Base Connection --

// Enabling strict query mode for Mongoose (for MongoDB v7+)
mongoose.set("strictQuery", true);

// Connecting to MongoDB with Mongoose
mongoose.connect(DB, {
    useNewUrlParser: true, // Using the new URL parser for MongoDB connection strings
    useUnifiedTopology: true, // Using the unified topology for MongoDB driver
}).then(() => {
    console.log(`Connection Established Successfully...`);
}).catch((err) => {
    // Assuming you're in an Express.js context given the 'res.status(500);'
    // It's best to handle the response within a route or middleware
    console.error(err, `-- Connection Not Established...`);
    // if (res) {
    //     res.status(500).send("Failed to connect to the database.");
    // }
});
