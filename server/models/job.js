const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schema = new Schema({
    jobId: {type: Number, required: true},
    company: {type: String, required: true},
    role: {type: String, required: true},
    location: {type: String, required: true},
    haveInterview: {type: Boolean, required: true},
    interviewDate: {type: Date},
});

module.exports = mongoose.model('Job', schema);