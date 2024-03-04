// Imports
const express = require('express');
const app = express();
const cors = require("cors");
const Complaint = require("./model/complainSchema")
const Suggestion = require("./model/suggestionSchema")
require('dotenv').config(); // Load environment variables
require('./db/conn'); // Import DB connection
const mailer = require('./services/mailer')

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
            "reg" : regid,
            "student_email":studentEmail,
            "warden_email":wardenEmail,
            "supervisor_email":supervisorEmail,
            "block":block,
            "type":req.body.type,
            "title":req.body.title,
            "description":req.body.description,
        }
        const complaint = new Complaint({
            ...complaintObject
        });

        complaint.save().then((save)=>{
            mailer.sendComplainEmail(save._id,wardenEmail,supervisorEmail,student.name,regid,req.body.description,block,save.status)
            .then((sent)=>{
                if (sent==true) {
                    res.status(201).send(complaint);
                }
                else{
                    res.status(400).send(error.stack);
                }
            })
            .catch(()=>{
                res.status(400).send(error.stack);
            })
        })
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
app.post('/api/v1/suggestions', async (req, res) => {
    try {
        const suggestion = new Suggestion({
            ...req.body
        });
        
        await suggestion.save();
        res.status(201).send(suggestion);
    } catch (error) {
        res.status(400).send(error.stack);
    }
});
app.get('/api/v1/suggestions', async (req, res) => {
    try {
        const suggestions = await Suggestion.find();
        res.send(suggestions);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
app.delete('/api/v1/suggestions/:id', async (req,res)=>{
    const {id} = req.params;
    console.log(req);
    // const reg = req.body;
    const post = await Suggestion.findById(id);
    if (req.reg===post.reg) {
        await Suggestion.findByIdAndRemove(id);
        return res.status(200).json({message: "Deleted Successfully"});
    }
    return res.status(401).json({message: "Unauthenticated to delete."});
});
app.use(cors());
// Listen on the port defined in the environment variables or default to 3000
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Application is running at http://localhost:${port}`);
});
