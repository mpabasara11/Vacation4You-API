const mongoose = require('mongoose');

//define cruise schema
const bookedCruiseSchema = new mongoose.Schema({
    bookerFname: String,
    bookerLname: String,
    bookerNIC: String,
    bookerPhone: String,
    bookerEmail: String,
    bookingDate: String,             // this way 2023-11-07
    bookingOfficerName: String,
    bookingOfficerNic: String,
    bookingOfficerMail: String,
    cruiseName: String,
    departureDestination: String,
    arrivalDestination: String,
    departureDate: String,           // this way 2023-11-07
    arrivalDate: String,             // this way 2023-11-07
    deck: Number,
    cabinClass: String,
    price: Number,
    rating: Number,             // 1 to 5
    duration: Number,
    cruiseProvider: String,
    mealPreferences: String,
    cabinSelection: String,
    selectedMealPreference: String,
    selectedCabin: String,
    // other fields if needed...
    });
        
// Create a  booked cruise model from the schema
module.exports=mongoose.model('BookedCruise', bookedCruiseSchema);
   