const mongoose = require('mongoose');

const userDetailsSchema = new mongoose.Schema({
    username: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    age: {type: Number, required: true},
    userDescription: {type: String, required: true},
    userType: {type:String, required: true}, // Student or Alumni
    yearOfPassing: {type: Number, required: true},
    currentYear: {type: Number, required: true},
    branch: {type: String, required: true},
    fieldsOfInterest: {type: [String], required: true},
    proficiency: {type: [String], required: true},
    currentField: {type: String, required: true},
    workExperience: {type: Number, required: true},
    currentEmployment: {type: String, required: true},
    linkedinProfile: {type: String, required: true},
    profilepic: {type: String, required: true}
});

const UserDetails= mongoose.model('UserDetails', userDetailsSchema);

module.exports = UserDetails;