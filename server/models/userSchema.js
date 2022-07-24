const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Contact: {
        type: Number,
        required: true
    },
     Gender: {
        type: String,
        required: true
    },
    Birthday: {
        type: Number,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Nationality: {
        type: String,
        required: true
    },
    State: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    },
    Zip: {
        type: Number,
        required: true
    },
    Skills: {
        type: String,
        required: true
    },
    PastAssignment: {
        type: String,
        required: true
    },
    PresentAssignment: {
        type: String,
        required: true
    }
});

const users = new mongoose.model("users",userSchema);


module.exports = users;