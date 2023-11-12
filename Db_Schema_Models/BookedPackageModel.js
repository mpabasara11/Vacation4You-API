const mongoose = require('mongoose');

//define cruise schema
const bookedPackageSchema = new mongoose.Schema({
    bookerFname: String,
    bookerLname: String,
    bookerNIC: String,
    bookerPhone: String,
    bookerEmail: String,
    bookingDate: String,             // this way 2023-11-07
    bookingOfficerName: String,
    bookingOfficerNic: String,
    bookingOfficerMail: String,
    packageName: String,
    destination: String,
    duration: Number,
    numTravelers: Number,
    specialty: String,
    rating: Number,
    price: Number,
    // other fields if needed...
    });
        
// Create a  booked package model from the schema
module.exports=mongoose.model('BookedPackage', bookedPackageSchema);
   