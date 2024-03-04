const mongoose = require('mongoose');


const suggestionSchema = new mongoose.Schema({
    reg: {
        type: String
    },
    description: {
        title: {
            type: String,
            required: true
        },
        problem: {
            type: String,
            required: true
        }
    }
});

const suggestionModel = mongoose.model('Suggestion', suggestionSchema);
module.exports = suggestionModel;
