// Imports
const express = require('express');
const app = express();
const cors = require("cors");
const Complaint = require("./model/complainSchema")
const Suggestion = require("./model/suggestionSchema")
require('dotenv').config(); // Load environment variables
require('./db/conn'); // Import DB connection
const mailer = require('./services/mailer')
const getEventData = require('./services/eventFetch')

// Middleware for parsing request bodies
app.use(express.urlencoded({ extended: false })); // Replace bodyParser with express' built-in method
app.use(express.json());

app.use(require('./router/auth')); // Include routes
app.post('/api/v1/complaints', async (req, res) => {
    try {
        const student = req.body.student
        const hostler = student.hostler
        var block = "NA"
        if (hostler == true) {
            block = student.block
        }
        const regid = student.regid
        const studentEmail = student.email
        const wardenEmail = "aneesahu4@gmail.com"
        const supervisorEmail = "sanidhyasahu2022@vitbhopal.ac.in"
        const complaintObject = {
            "reg": regid,
            "student_email": studentEmail,
            "warden_email": wardenEmail,
            "supervisor_email": supervisorEmail,
            "block": block,
            "type": req.body.type,
            "title": req.body.title,
            "description": req.body.description,
        }
        const complaint = new Complaint({
            ...complaintObject
        });

        complaint.save().then((save) => {
            mailer.sendComplainEmail(save._id, wardenEmail, supervisorEmail, student.name, regid, req.body.description, block, save.status)
                .then((sent) => {
                    if (sent == true) {
                        res.status(201).send(complaint);
                    }
                    else {
                        res.status(400).send(error.stack);
                    }
                })
                .catch(() => {
                    res.status(400).send(error.stack);
                })
        })
    } catch (error) {
        res.status(400).send(error.stack);
    }
});
app.get('/api/v1/complaints', async (req, res) => {
    const { student: { reg } } = req.body;

    try {
        if (!reg) {
            // If reg is not provided, return an error or all complaints depending on your use case
            return res.status(400).send('Registration number is required');
        }

        // Find complaints that match the provided reg
        const complaints = await Complaint.find({ reg });
        res.send(complaints);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
app.delete('/api/v1/complaints/:id', async (req, res) => {
    const { id } = req.params;
    console.log(req);
    // const reg = req.body;
    const post = await Complaint.findById(id);
    if (req.body.student.reg === post.reg) {
        await Complaint.findByIdAndRemove(id);
        return res.status(200).json({ message: "Deleted Successfully" });
    }
    return res.status(401).json({ message: "Unauthenticated to delete." });
});
app.post('/api/v1/suggestions', async (req, res) => {
    try {
        const student = req.body.student
        const regid = student.regid
        const description = {
            "title": req.body.title,
            "problem": req.body.description
        }
        const complaintObject = {
            "reg": regid,
            "description": description,
        }
        const suggestion = new Suggestion({
            ...complaintObject
        });

        suggestion.save().then((save) => {
            mailer.sendSuggetionEmail(regid, req.body.description, req.body.title)
                .then((sent) => {
                    if (sent == true) {
                        res.status(201).send(suggestion);
                    }
                    else {
                        res.status(400).send(error.stack);
                    }
                })
                .catch(() => {
                    res.status(400).send(error.stack);
                })
        })
    } catch (error) {
        res.status(400).send(error.stack);
    }
});
app.get('/api/v1/suggestions', async (req, res) => {
    const { student: { reg } } = req.body;

    try {
        if (!reg) {
            // If reg is not provided, return an error or all complaints depending on your use case
            return res.status(400).send('Registration number is required');
        }

        // Find complaints that match the provided reg
        const complaints = await Suggestion.find({ reg });
        res.send(complaints);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
app.delete('/api/v1/suggestions/:id', async (req, res) => {
    const { id } = req.params;
    console.log(req);
    // const reg = req.body;
    const post = await Suggestion.findById(id);
    if (req.reg === post.reg) {
        await Suggestion.findByIdAndRemove(id);
        return res.status(200).json({ message: "Deleted Successfully" });
    }
    return res.status(401).json({ message: "Unauthenticated to delete." });
});
app.get('/api/v1/events', async (req, res) => {
    try {
        const eventData = await getEventData()
        res.status(200).send(eventData)
    } catch (error) {
        res.status(400).send(error.stack);
    }
})
app.use(cors());
// Listen on the port defined in the environment variables or default to 3000
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Application is running at http://localhost:${port}`);
});
