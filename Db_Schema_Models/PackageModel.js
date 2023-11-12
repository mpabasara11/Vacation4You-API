const mongoose = require('mongoose');

//define package schema
const packageSchema = new mongoose.Schema({
    packageName: String,
    destination: String,
    duration: Number,
    numTravelers: Number,
    specialty: String,
    rating: Number,
    price: Number,
    // other fields if needed...
    });
        
// Create a package model from the schema
module.exports=mongoose.model('Package', packageSchema);
   