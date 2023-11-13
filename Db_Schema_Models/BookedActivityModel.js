const mongoose = require('mongoose');

//define cruise schema
const bookedActivitySchema = new mongoose.Schema({
    bookerFname: String,
    bookerLname: String,
    bookerNIC: String,
    bookerPhone: String,
    bookerEmail: String,
    bookingDate: String,             // this way 2023-11-07
    bookingOfficerName: String,
    bookingOfficerNic: String,
    bookingOfficerMail: String,
    activityName: String,
    destination: String,
    date: String,
    activityType: String,
    rating: Number,
    price: Number,
    participants: Number,
    ageOfParticipants: Number,
    numberOfParticipants: Number,
    maximumParticipants: Number,
    // other fields if needed...
    });
        
// Create a  booked activity model from the schema
module.exports=mongoose.model('BookedActivity', bookedActivitySchema);
   