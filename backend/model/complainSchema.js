const mongoose = require('mongoose');

const complainSchema = new mongoose.Schema({
    reg: {
        type: String,
        required: true,
    },
    type: [
        {
            type: String,
            required: true
        }
    ],
    status: {
        type: String,
        default: "Raised",
    },
    student_email: {
        type: String,
        required: true,
    },
    block: {
        type: String,
    },
    email_warden: {
        type: String,
    },
    email_supervisor: {
        type: String,
    },
    email_head: {
        type: String,
    },
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});


const complaints = mongoose.model('complains', complainSchema)
module.exports = complaints;