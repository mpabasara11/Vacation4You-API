const mongoose = require('mongoose');

//define cruise schema
const activitySchema = new mongoose.Schema({
    activityName: String,
    destination: String,
    date: String,
    activityType: String,
    rating: Number,
    price: Number,
    participants: Number,
    ageOfParticipants: Number,     //can be age limit
    // other fields if needed...
    });
        
// Create a activity model from the schema
module.exports=mongoose.model('Activities', activitySchema);
   