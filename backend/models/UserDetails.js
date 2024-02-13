const mongoose = require('mongoose');

const userDetailsSchema = new mongoose.Schema({
    // Define your fields here
});

module.exports = mongoose.model('UserDetails', userDetailsSchema);