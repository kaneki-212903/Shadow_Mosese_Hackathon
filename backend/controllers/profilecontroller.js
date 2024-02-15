const UserDetails = require('../models/UserDetails');
const User = require('../models/User');
const cloudinary = require('cloudinary').v2;

const uploadImage = async (fileBuffer) => {
    const result = await cloudinary.uploader.upload_stream({ folder: 'Profilepic' }, (error, result) => {
        if (error) throw error;
        return result.secure_url;
    });
    const stream = cloudinary.v2.uploader.upload_stream({ folder: 'Profilepic' }, (error, result) => {
        if (error) throw error;
        return result.secure_url;
    });
    stream.end(fileBuffer);
    return result;
};

module.exports.createUserProfile = async (req, res) => {
    if(!req.file){
        return res.status(400).json({error: 'Please upload a file'});
    }
    try {
        // Access the file buffer from the request
        const fileBuffer = req.file.buffer;

        // Use the uploadImage function to get the Cloudinary URL
        const profilePicUrl = await uploadImage(fileBuffer);

        // Destructure other properties from req.body
        const {
            username,
            firstName,
            lastName,
            age,
            userDescription,
            userType,
            yearOfPassing,
            currentYear,
            branch,
            fieldsOfInterest,
            proficiency,
            currentField,
            workExperience,
            currentEmployment,
            linkedinProfile,
        } = req.body;

        // Create a new user profile including the Cloudinary URL
        const newUserProfile = await UserDetails.create({
            username,
            firstName,
            lastName,
            age,
            userDescription,
            userType,
            yearOfPassing,
            currentYear,
            branch,
            fieldsOfInterest,
            proficiency,
            currentField,
            workExperience,
            currentEmployment,
            linkedinProfile,
            profilepic: profilePicUrl, // Include the Cloudinary URL
        });

        // Update the associated User model by pushing the newUserProfile's ID
        await User.findByIdAndUpdate(req.user.id, { $push: { userDetails: newUserProfile._id } });

        res.status(201).send(newUserProfile);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};