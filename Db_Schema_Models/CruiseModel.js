const mongoose = require('mongoose');

//define cruise schema
const cruiseSchema = new mongoose.Schema({
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
    // other fields if needed...
    });
        
// Create a cruise model from the schema
module.exports=mongoose.model('Cruise', cruiseSchema);
   