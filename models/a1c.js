"use strict";

const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

const a1cSchema = new mongoose.Schema({
    a1cNumber: {
        type: Number,
        required: false
    },
    a1cDate: {
        type: Date,
        required: false
    },
    loggedInUsername: {
        type: String,
        required: false
    }
});

const A1c = mongoose.model('A1c', a1cSchema);

module.exports = A1c;
