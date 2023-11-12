var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');

var Cruise = require('../Db_Schema_Models/CruiseModel.js');
var Activity = require('../Db_Schema_Models/ActivityModel.js');
var Package = require('../Db_Schema_Models/PackageModel.js');
var BookedCruise = require('../Db_Schema_Models/BookedCruiseModel.js');
var BookedActivity = require('../Db_Schema_Models/BookedActivityModel.js');
var BookedPackage = require('../Db_Schema_Models/BookedPackageModel.js');

//view cruises route
router.get('/view-cruises', function (req, res) 
{
//retrieve all cruises and send them to the client in json format

Cruise.find()
  .then(cruises => {
    if (cruises)
    {
      console.log(cruises);
        res.status(200).json({ cruises });
    }
    else
    {
          console.log('No cruises found');
          res.status(404).json({ error: 'No cruises found' });
    }


  }).catch(error => {
    console.error('Error while finding the cruises existance:', error);
    res.status(500).json({ error: 'Internal server error' });
  });


});

//view activities route
router.get('/view-activities', function (req, res) 
{
//retrieve all activities and send them to the client in json format

Activity.find()
  .then(activities => {
    if (activities)
    {
      console.log(activities);
        res.status(200).json({ activities });
    }
    else
    {
          console.log('No activities found');
          res.status(404).json({ error: 'No activities found' });
    }


  }).catch(error => {
    console.error('Error while finding the activities existance:', error);
    res.status(500).json({ error: 'Internal server error' });
  });


});

//view packages route
router.get('/view-packages', function (req, res) 
{
//retrieve all packages and send them to the client in json format

Package.find()
  .then(packages => {
    if (packages)
    {
      console.log(packages);
        res.status(200).json({ packages });
    }
    else
    {
          console.log('No packages found');
          res.status(404).json({ error: 'No packages found' });
    }


  }).catch(error => {
    console.error('Error while finding the packages existance:', error);
    res.status(500).json({ error: 'Internal server error' });
  });


});

//search cruise
router.get('/search-cruises', function (req, res) 
{
    const searchBy = req.body.searchBy ;




    if(searchBy == "departureDistination")
    {
    const cDepartureDestination = req.body.cDepartureDestination ;


    Cruise.find({ departureDestination: cDepartureDestination })
    .then(cruise => {
        if (cruise)
        {

        if(cruise.length == 0)
        {
            console.log('No cruise found with that departure destination');
            res.status(404).json({ error: 'No cruise found with that departure destination' });
        }
        else{
        console.log(cruise);
            res.status(200).json({ cruise });
        }
        }
        else
        {
            console.log('No cruises found on the database');
            res.status(404).json({ error: 'No cruises found on the database' });
        }


    }).catch(error => {
        console.error('Error while finding the cruise existance:', error);
        res.status(500).json({ error: 'Internal server error' });
    });


    }
    else if(searchBy == "arrivalDistination")
    {
        const cArrivalDestination = req.body.cArrivalDestination ;


        Cruise.find({ arrivalDestination: cArrivalDestination })
        .then(cruise => {
            if (cruise)
            {
    
            if(cruise.length == 0)
            {
                console.log('No cruise found with that arrival destination');
                res.status(404).json({ error: 'No cruise found with that arrival destination' });
            }
            else{
            console.log(cruise);
                res.status(200).json({ cruise });
            }
            }
            else
            {
                console.log('No cruises found on the database');
                res.status(404).json({ error: 'No cruises found on the database' });
            }
    
    
        }).catch(error => {
            console.error('Error while finding the cruise existance:', error);
            res.status(500).json({ error: 'Internal server error' });
        });
    

    }
    else if(searchBy == "departureDate")
    {
        const cDepartureDate = req.body.cDepartureDate ;


        Cruise.find({ departureDate: cDepartureDate })
        .then(cruise => {
            if (cruise)
            {
    
            if(cruise.length == 0)
            {
                console.log('No cruise found with that departure date');
                res.status(404).json({ error: 'No cruise found with that departure date' });
            }
            else{
            console.log(cruise);
                res.status(200).json({ cruise });
            }
            }
            else
            {
                console.log('No cruises found on the database');
                res.status(404).json({ error: 'No cruises found on the database' });
            }
    
    
        }).catch(error => {
            console.error('Error while finding the cruise existance:', error);
            res.status(500).json({ error: 'Internal server error' });
        });

    }
    else if(searchBy == 'arrivalDate')
    {
        const cArrivalDate = req.body.cArrivalDate ;


        Cruise.find({ arrivalDate: cArrivalDate })
        .then(cruise => {
            if (cruise)
            {
    
            if(cruise.length == 0)
            {
                console.log('No cruise found with that arrival date');
                res.status(404).json({ error: 'No cruise found with that arrival date' });
            }
            else{
            console.log(cruise);
                res.status(200).json({ cruise });
            }
            }
            else
            {
                console.log('No cruises found on the database');
                res.status(404).json({ error: 'No cruises found on the database' });
            }
    
    
        }).catch(error => {
            console.error('Error while finding the cruise existance:', error);
            res.status(500).json({ error: 'Internal server error' });
        });

    }
    else if(searchBy == 'deck')
    {
        const cDeck = req.body.cDeck ;


        Cruise.find({ deck: cDeck })
        .then(cruise => {
            if (cruise)
            {
    
            if(cruise.length == 0)
            {
                console.log('No cruise found with that deck number');
                res.status(404).json({ error: 'No cruise found with that deck number' });
            }
            else{
            console.log(cruise);
                res.status(200).json({ cruise });
            }
            }
            else
            {
                console.log('No cruises found on the database');
                res.status(404).json({ error: 'No cruises found on the database' });
            }
    
    
        }).catch(error => {
            console.error('Error while finding the cruise existance:', error);
            res.status(500).json({ error: 'Internal server error' });
        });


    }
    else if(searchBy == 'cabinClass')
    {
        const cCabinClass = req.body.cCabinClass ;


        Cruise.find({ cabinClass: cCabinClass })
        .then(cruise => {
            if (cruise)
            {
    
            if(cruise.length == 0)
            {
                console.log('No cruise found with that cabin class');
                res.status(404).json({ error: 'No cruise found with that cabin class' });
            }
            else{
            console.log(cruise);
                res.status(200).json({ cruise });
            }
            }
            else
            {
                console.log('No cruises found on the database');
                res.status(404).json({ error: 'No cruises found on the database' });
            }
    
    
        }).catch(error => {
            console.error('Error while finding the cruise existance:', error);
            res.status(500).json({ error: 'Internal server error' });
        });


    }
    else
    {
        console.log('No search criteria found');
        res.status(404).json({ error: 'No search criteria found' });
    }


});


//search activity
router.get('/search-activities', function (req, res) 
{
    const searchBy = req.body.searchBy ;


    if(searchBy == "destination")
    {
        const aDestination = req.body.aDestination ;


    Activity.find({ destination: aDestination })
    .then(activity => {
        if (activity)
        {

        if(activity.length == 0)
        {
            console.log('No activity found with that destination');
            res.status(404).json({ error: 'No activity found with that destination' });
        }
        else{
        console.log(activity);
            res.status(200).json({ activity });
        }
        }
        else
        {
            console.log('No activity found on the database');
            res.status(404).json({ error: 'No activity found on the database' });
        }


    }).catch(error => {
        console.error('Error while finding the activity existance:', error);
        res.status(500).json({ error: 'Internal server error' });
    });


    }
    else if(searchBy == "date")
    {
        const aDate = req.body.aDate;


        Activity.find({ date: aDate })
        .then(activity => {
            if (activity)
            {
    
            if(activity.length == 0)
            {
                console.log('No activity found with that date');
                res.status(404).json({ error: 'No activity found with that date' });
            }
            else{
            console.log(activity);
                res.status(200).json({ activity });
            }
            }
            else
            {
                console.log('No activity found on the database');
                res.status(404).json({ error: 'No activity found on the database' });
            }
    
    
        }).catch(error => {
            console.error('Error while finding the activity existance:', error);
            res.status(500).json({ error: 'Internal server error' });
        });
    

    }
    else if(searchBy == "activityType")
    {
        const aActivityType = req.body.aActivityType;


        Activity.find({ activityType: aActivityType })
        .then(activity => {
            if (activity)
            {
    
            if(activity.length == 0)
            {
                console.log('No activity found with that activity type');
                res.status(404).json({ error: 'No activity found with that activity type' });
            }
            else{
            console.log(activity);
                res.status(200).json({ activity });
            }
            }
            else
            {
                console.log('No activity found on the database');
                res.status(404).json({ error: 'No activity found on the database' });
            }
    
    
        }).catch(error => {
            console.error('Error while finding the activity existance:', error);
            res.status(500).json({ error: 'Internal server error' });
        });

    }
    else if(searchBy == 'rating') 
    {
        const aRating = req.body.aRating;


        Activity.find({ rating: aRating })
        .then(activity => {
            if (activity)
            {
    
            if(activity.length == 0)
            {
                console.log('No activity found with that rating');
                res.status(404).json({ error: 'No cruise found with that rating' });
            }
            else{
            console.log(activity);
                res.status(200).json({ activity });
            }
            }
            else
            {
                console.log('No activity found on the database');
                res.status(404).json({ error: 'No activity found on the database' });
            }
    
    
        }).catch(error => {
            console.error('Error while finding the activity existance:', error);
            res.status(500).json({ error: 'Internal server error' });
        });

    }
    else
    {
        console.log('No search criteria found');
        res.status(404).json({ error: 'No search criteria found' });
    }


});

//search package
router.get('/search-packages', function (req, res) 
{
    const searchBy = req.body.searchBy ;




    if(searchBy == "destination")
    {
        const pDestination = req.body.pDestination;


    Package.find({ destination: pDestination })
    .then(package => {
        if (package)
        {

        if(package.length == 0)
        {
            console.log('No package found with that destination');
            res.status(404).json({ error: 'No package found with that destination' });
        }
        else{
        console.log(package);
            res.status(200).json({ package });
        }
        }
        else
        {
            console.log('No package found on the database');
            res.status(404).json({ error: 'No package found on the database' });
        }


    }).catch(error => {
        console.error('Error while finding the package existance:', error);
        res.status(500).json({ error: 'Internal server error' });
    });


    }
    else if(searchBy == "duration")
    {
        const pDuration = req.body.pDuration;


        Package.find({ duration: pDuration })
        .then(package => {
            if (package)
            {
    
            if(package.length == 0)
            {
                console.log('No package found with that duration');
                res.status(404).json({ error: 'No package found with that duration' });
            }
            else{
            console.log(package);
                res.status(200).json({ package });
            }
            }
            else
            {
                console.log('No package found on the database');
                res.status(404).json({ error: 'No package found on the database' });
            }
    
    
        }).catch(error => {
            console.error('Error while finding the package existance:', error);
            res.status(500).json({ error: 'Internal server error' });
        });
    

    }
    else if(searchBy == "numberOfTravelers")
    {
        const pNumTravelers = req.body.pNumTravelers;


        Package.find({ numTravelers: pNumTravelers })
        .then(package => {
            if (package)
            {
    
            if(package.length == 0)
            {
                console.log('No package found with that traveler number');
                res.status(404).json({ error: 'No package found with that traveler number' });
            }
            else{
            console.log(package);
                res.status(200).json({ package });
            }
            }
            else
            {
                console.log('No package found on the database');
                res.status(404).json({ error: 'No package found on the database' });
            }
    
    
        }).catch(error => {
            console.error('Error while finding the package existance:', error);
            res.status(500).json({ error: 'Internal server error' });
        });

    }
    else if(searchBy == 'speciality')
    {
        const pSpecialty = req.body.pSpecialty;


        Package.find({ specialty: pSpecialty })
        .then(package => {
            if (package)
            {
    
            if(package.length == 0)
            {
                console.log('No package found with that specialty');
                res.status(404).json({ error: 'No package found with that specialty' });
            }
            else{
            console.log(package);
                res.status(200).json({ package });
            }
            }
            else
            {
                console.log('No package found on the database');
                res.status(404).json({ error: 'No package found on the database' });
            }
    
    
        }).catch(error => {
            console.error('Error while finding the package existance:', error);
            res.status(500).json({ error: 'Internal server error' });
        });

    }
    else
    {
        console.log('No search criteria found');
        res.status(404).json({ error: 'No search criteria found' });
    }


});

 //book cruise
router.post('/book-cruise', function (req, res){

 
   const bookerFname = req.body.bookerFname ;
   const bookerLname = req.body.bookerLname ;
   const bookerNIC= req.body.bookerNIC ;
   const bookerPhone = req.body.bookerPhone ;
   const bookerEmail = req.body.bookerEmail ;
   const bookingDate = req.body.bookingDate ; 
   const bookingOfficerName = req.body.bookingOfficerName ;
   const bookingOfficerNic = req.body.bookingOfficerNic ;
   const bookingOfficerMail = req.body.bookingOfficerMail ;



 const cCruiseName = req.body.cCruiseName ;
 const cDepartureDestination = req.body.cDepartureDestination ;
 const cArrivalDestination = req.body.cArrivalDestination ;
 const cDepartureDate = req.body.cDepartureDate ;
 const cArrivalDate = req.body.cArrivalDate ;
 const cDeck = req.body.cDeck ;
 const cCabinClass = req.body.cCabinClass ;
 const cPrice = req.body.cPrice ;
 const cRating = req.body.cRating ;
 const cDuration = req.body.cDuration ;
 const cCruiseProvider = req.body.cCruiseProvider ;
 const cMealPreferences = req.body.cMealPreferences ;
 const cCabinSelection = req.body.cCabinSelection ;

/////////////////

const newBookedCruise = new BookedCruise({
    bookerFname: bookerFname,
    bookerLname: bookerLname,
    bookerNIC: bookerNIC,
    bookerPhone: bookerPhone,
    bookerEmail: bookerEmail,
    bookingDate: bookingDate,
    bookingOfficerName: bookingOfficerName,
    bookingOfficerNic: bookingOfficerNic,
    bookingOfficerMail: bookingOfficerMail,
    cruiseName: cCruiseName,
    departureDestination: cDepartureDestination,
    arrivalDestination: cArrivalDestination,
    departureDate: cDepartureDate,
    arrivalDate: cArrivalDate,
    deck: cDeck,
    cabinClass: cCabinClass,
    price: cPrice,
    rating: cRating,
    duration: cDuration,
    cruiseProvider: cCruiseProvider,
    mealPreferences: cMealPreferences,
    cabinSelection: cCabinSelection,
});

newBookedCruise.save()
.then(savedBcruise => {
  console.log('Cruise booked successfully:', savedBcruise);
  res.status(201).json({ message: 'Cruise booked successfully', BookedCruise: savedBcruise });
})
.catch(error => {
  console.error('Error while booking the cruise :', error);
  res.status(500).json({ error: 'Internal server error' });
});



});

//book activity
router.post('/book-activity', function (req, res){

 
    const bookerFname = req.body.bookerFname ;
    const bookerLname = req.body.bookerLname ;
    const bookerNIC= req.body.bookerNIC ;
    const bookerPhone = req.body.bookerPhone ;
    const bookerEmail = req.body.bookerEmail ;
    const bookingDate = req.body.bookingDate ; 

    const bookingOfficerName = req.body.bookingOfficerName ;
    const bookingOfficerNic = req.body.bookingOfficerNic ;
    const bookingOfficerMail = req.body.bookingOfficerMail ;
 
  
 
    const aActivityName = req.body.aActivityName ;
    const aDestination = req.body.aDestination ;
    const aDate = req.body.aDate;
    const aActivityType = req.body.aActivityType;
    const aRating = req.body.aRating;
    const aPrice = req.body.aPrice;
    const aParticipants = req.body.aParticipants;
    const aAgeOfParticipants = req.body.aAgeOfParticipants;    
 
 /////////////////
 
 const newBookedActivity = new BookedActivity({
     bookerFname: bookerFname,
     bookerLname: bookerLname,
     bookerNIC: bookerNIC,
     bookerPhone: bookerPhone,
     bookerEmail: bookerEmail,
     bookingDate: bookingDate,
     bookingOfficerName: bookingOfficerName,
     bookingOfficerNic: bookingOfficerNic,
     bookingOfficerMail: bookingOfficerMail,
     activityName: aActivityName,
     destination: aDestination,
     date: aDate,
     activityType: aActivityType,
     rating: aRating,
     price: aPrice,
     participants: aParticipants,
     ageOfParticipants: aAgeOfParticipants, 
 });
 
 newBookedActivity.save()
 .then(savedBactivity => {
   console.log('Activity booked successfully:', savedBactivity);
   res.status(201).json({ message: 'Activity booked successfully', BookedActivity: savedBactivity });
 })
 .catch(error => {
   console.error('Error while booking the activity :', error);
   res.status(500).json({ error: 'Internal server error' });
 });
 
 
 
 });
 
//book package
 router.post('/book-package', function (req, res){

 
    const bookerFname = req.body.bookerFname ;
    const bookerLname = req.body.bookerLname ;
    const bookerNIC= req.body.bookerNIC ;
    const bookerPhone = req.body.bookerPhone ;
    const bookerEmail = req.body.bookerEmail ;
    const bookingDate = req.body.bookingDate ;  

    const bookingOfficerName = req.body.bookingOfficerName ;
    const bookingOfficerNic = req.body.bookingOfficerNic ;
    const bookingOfficerMail = req.body.bookingOfficerMail ;
 
    const pPackageName = req.body.pPackageName;
    const pDestination = req.body.pDestination;
    const pDuration = req.body.pDuration;
    const pNumTravelers = req.body.pNumTravelers;
    const pSpecialty = req.body.pSpecialty;
    const pRating = req.body.pRating;
    const pPrice = req.body.pPrice;
     
 
 const newBookedPackage = new BookedPackage({
     bookerFname: bookerFname,
     bookerLname: bookerLname,
     bookerNIC: bookerNIC,
     bookerPhone: bookerPhone,
     bookerEmail: bookerEmail,
     bookingDate: bookingDate,
     bookingOfficerName: bookingOfficerName,
     bookingOfficerNic: bookingOfficerNic,
     bookingOfficerMail: bookingOfficerMail,
     packageName: pPackageName,
     destination: pDestination,
     duration: pDuration,
     numTravelers: pNumTravelers,
     specialty: pSpecialty,
     rating: pRating,
     price: pPrice,
 });
 
 newBookedPackage.save()
 .then(savedBpackage => {
   console.log('Package booked successfully:', savedBpackage);
   res.status(201).json({ message: 'Package booked successfully', BookedPackage: savedBpackage });
 })
 .catch(error => {
   console.error('Error while booking the package :', error);
   res.status(500).json({ error: 'Internal server error' });
 });
 
 
 
 });








module.exports = router;