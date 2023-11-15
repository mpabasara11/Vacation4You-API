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

//single upload route
router.post('/single-upload', function (req, res) 
{

    //parameters for all
    const reservationType = req.body.reservationType ;



    //parameters for cruise
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


//parameters for activity

    const aActivityName = req.body.aActivityName ;
    const aDestination = req.body.aDestination ;
    const aDate = req.body.aDate;
    const aActivityType = req.body.aActivityType;
    const aRating = req.body.aRating;
    const aPrice = req.body.aPrice;
    const aParticipants = req.body.aParticipants;
    const aAgeOfParticipants = req.body.aAgeOfParticipants;    



//parameters for package

    const pPackageName = req.body.pPackageName;
    const pDestination = req.body.pDestination;
    const pDuration = req.body.pDuration;
    const pNumTravelers = req.body.pNumTravelers;
    const pSpecialty = req.body.pSpecialty;
    const pRating = req.body.pRating;
    const pPrice = req.body.pPrice;
  

if(reservationType == "Cruise")
{

//check if cruiseName already exists
Cruise.findOne({ cruiseName: cCruiseName })
  .then(cruise => {

    if (cruise) {
      console.log('Cruise already exists');
      res.status(409).json({ error: 'Cruise already exists' });
    }
    else
    {
        const newCruise = new Cruise({
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
            // other user data...
          });


          newCruise.save()
          .then(savedCruise => {
            console.log('Cruise saved to the database:', savedCruise);
            res.status(201).json({ message: 'Cruise created successfully', Cruise: savedCruise });
          })
          .catch(error => {
            console.error('Error while saving the cruise :', error);
            res.status(500).json({ error: 'Internal server error' });
          });
    
    }

}).catch(error => {
    console.error('Error while finding the Cruise existance:', error);
    res.status(500).json({ error: 'Internal server error' });
  });
 

}
else if(reservationType == "Activity")
{

//check if activityName already exists
Activity.findOne({ activityName: aActivityName })
  .then(activity => {

    if (activity) {
      console.log('Activity already exists');
      res.status(409).json({ error: 'Activity already exists' });
    }
    else
    {
        const newActivity = new Activity({
          activityName: aActivityName,
          destination: aDestination,
          date: aDate,
          activityType: aActivityType,
          rating: aRating,
          price: aPrice,
          participants: aParticipants,
          ageOfParticipants: aAgeOfParticipants, 
            // other user data...
          });


          newActivity.save()
          .then(savedActivity => {
            console.log('Activity saved to the database:', savedActivity);
            res.status(201).json({ message: 'Activity created successfully', Activity: savedActivity });
          })
          .catch(error => {
            console.error('Error while saving the activity :', error);
            res.status(500).json({ error: 'Internal server error' });
          });
    
    }

}).catch(error => {
    console.error('Error while finding the Activity existance:', error);
    res.status(500).json({ error: 'Internal server error' });
  });





}
else if(reservationType == "Package")
{

//check if packageName already exists
Package.findOne({ packageName: pPackageName })
  .then(package => {

    if (package) {
      console.log('Package already exists');
      res.status(409).json({ error: 'Package already exists' });
    }
    else
    {
        const newPackage = new Package({
          packageName: pPackageName,
          destination: pDestination,
          duration: pDuration,
          numTravelers: pNumTravelers,
          specialty: pSpecialty,
          rating: pRating,
          price: pPrice,
      
            // other user data...
          });


          newPackage.save()
          .then(savedPackage => {
            console.log('Package saved to the database:', savedPackage);
            res.status(201).json({ message: 'Package created successfully', Package: savedPackage });
          })
          .catch(error => {
            console.error('Error while saving the package :', error);
            res.status(500).json({ error: 'Internal server error' });
          });
    
    }

}).catch(error => {
    console.error('Error while finding the Package existance:', error);
    res.status(500).json({ error: 'Internal server error' });
  });


}

});

//bulk upload route
router.post('/bulk-upload', function (req, res) 
{
 //parameters for all
 const documentType = req.body.documentType ;
 const dataArray = req.body.dataArray ;

 var ignoredRecords = 0;


  if(documentType == "Cruise")
  { 
   
    for (const singleDocument of dataArray) {

      const reservationType = singleDocument.reservationType;
      
  if(reservationType == "Cruise")
  {

  //parameters for cruise
  const cCruiseName = singleDocument.cCruiseName ;
  const cDepartureDestination = singleDocument.cDepartureDestination ;
  const cArrivalDestination = singleDocument.cArrivalDestination ;
  const cDepartureDate = singleDocument.cDepartureDate ;
  const cArrivalDate = singleDocument.cArrivalDate ;
  const cDeck = singleDocument.cDeck ;
  const cCabinClass = singleDocument.cCabinClass ;
  const cPrice = singleDocument.cPrice ;
  const cRating = singleDocument.cRating ;
  const cDuration = singleDocument.cDuration ;
  const cCruiseProvider = singleDocument.cCruiseProvider ;
  const cMealPreferences = singleDocument.cMealPreferences ;
  const cCabinSelection = singleDocument.cCabinSelection ;



//check if cruiseName already exists
Cruise.findOne({ cruiseName: cCruiseName })
  .then(cruise => {

    if (cruise) {
     
      ignoredRecords++;

    }
    else
    {
        const newCruise = new Cruise({
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
            // other user data...
          });


          newCruise.save()
          .then(savedCruise => {
            console.log('Cruise saved to the database:', savedCruise);
        
          })
          .catch(error => {
     
          });
    
    }

}).catch(error => {
    
    
  });


  }
  else
  {
    ignoredRecords++;
  }
     
      }
    
      // Send a response when all cruises are processed.
      res.status(201).json({ message: 'Cruises added successfully' , totalRecordsOnFile: dataArray.length , ignoredRecords: ignoredRecords});
      console.log("total records on the file: " + dataArray.length);
      console.log("ignored records: " + ignoredRecords);
   
  }
  else if(documentType == "Activity")
  {
  
    for (const singleDocument of dataArray) {

      const reservationType = singleDocument.reservationType;
      
  if(reservationType == "Activity")
  {

//parameters for activity
const aActivityName = singleDocument.aActivityName ;
const aDestination = singleDocument.aDestination ;
const aDate = singleDocument.aDate;
const aActivityType = singleDocument.aActivityType;
const aRating = singleDocument.aRating;
const aPrice = singleDocument.aPrice;
const aParticipants = singleDocument.aParticipants;
const aAgeOfParticipants = singleDocument.aAgeOfParticipants;    


//check if activity name already exists
Activity.findOne({ activityName: aActivityName })
  .then(activity => {

    if (activity) {
     
      ignoredRecords++;

    }
    else
    {
      const newActivity = new Activity({
        activityName: aActivityName,
        destination: aDestination,
        date: aDate,
        activityType: aActivityType,
        rating: aRating,
        price: aPrice,
        participants: aParticipants,
        ageOfParticipants: aAgeOfParticipants, 
          // other user data...
        });


        newActivity.save()
          .then(savedActivity => {
            console.log('Activity saved to the database:', savedActivity);
        
          })
          .catch(error => {
     
          });
    
    }

}).catch(error => {
    
    
  });


  }
  else
  {
    ignoredRecords++;
  }
     
      }
    
      // Send a response when all activities have been processed.
      res.status(201).json({ message: 'Activity added successfully' , totalRecordsOnFile: dataArray.length , ignoredRecords: ignoredRecords});
      console.log("total records on the file: " + dataArray.length);
      console.log("ignored records: " + ignoredRecords);
   

  }
  else if(documentType == "Package")
  {

    for (const singleDocument of dataArray) {

      const reservationType = singleDocument.reservationType;
      
  if(reservationType == "Package")
  {

//parameters for package
const pPackageName = singleDocument.pPackageName;
const pDestination = singleDocument.pDestination;
const pDuration = singleDocument.pDuration;
const pNumTravelers = singleDocument.pNumTravelers;
const pSpecialty = singleDocument.pSpecialty;
const pRating = singleDocument.pRating;
const pPrice = singleDocument.pPrice;



//check if package name already exists
Package.findOne({ packageName: pPackageName })
  .then(package => {

    if (package) {
     
      ignoredRecords++;

    }
    else
    {
      const newPackage = new Package({
        packageName: pPackageName,
        destination: pDestination,
        duration: pDuration,
        numTravelers: pNumTravelers,
        specialty: pSpecialty,
        rating: pRating,
        price: pPrice,
       
          // other user data...
        });


        newPackage.save()
          .then(savedPackage => {
            console.log('Package saved to the database:', savedPackage);
        
          })
          .catch(error => {
     
          });
    
    }

}).catch(error => {
    
    
  });


  }
  else
  {
    ignoredRecords++;
  }
     
      }
    
      // Send a response when all packages have been processed.
      res.status(201).json({ message: 'Package added successfully' , totalRecordsOnFile: dataArray.length , ignoredRecords: ignoredRecords});
      console.log("total records on the file: " + dataArray.length);
      console.log("ignored records: " + ignoredRecords);
   

  }


});

//update products route
router.put('/update-products', function (req, res) 
{

//parameters for all
const reservationType = req.body.reservationType ;


//parameters for cruise
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

//parameters for activity

const aActivityName = req.body.aActivityName ;
const aDestination = req.body.aDestination ;
const aDate = req.body.aDate;
const aActivityType = req.body.aActivityType;
const aRating = req.body.aRating;
const aPrice = req.body.aPrice;
const aParticipants = req.body.aParticipants;
const aAgeOfParticipants = req.body.aAgeOfParticipants;    



//parameters for package

const pPackageName = req.body.pPackageName;
const pDestination = req.body.pDestination;
const pDuration = req.body.pDuration;
const pNumTravelers = req.body.pNumTravelers;
const pSpecialty = req.body.pSpecialty;
const pRating = req.body.pRating;
const pPrice = req.body.pPrice;


if(reservationType == "Cruise")
{

//check if cruiseName already exists
Cruise.findOne({ cruiseName: cCruiseName })
.then(cruise => {

 if (cruise) {

cruise.cruiseName = cCruiseName;
cruise.departureDestination = cDepartureDestination;
cruise.arrivalDestination = cArrivalDestination;
cruise.departureDate = cDepartureDate;
cruise.arrivalDate = cArrivalDate;
cruise.deck = cDeck;
cruise.cabinClass = cCabinClass;
cruise.price = cPrice;
cruise.rating = cRating;
cruise.duration = cDuration;
cruise.cruiseProvider = cCruiseProvider;
cruise.mealPreferences = cMealPreferences;
cruise.cabinSelection = cCabinSelection;
   
  


cruise.save()
    .then(savedCruise => {
      console.log('Cruise updated on the database:', savedCruise);
      res.status(200).json({ message: 'Cruise updated successfully', Cruise: savedCruise });
    })
    .catch(error => {
      console.error('Error while updating the cruise :', error);
      res.status(500).json({ error: 'Internal server error' });
    });
 }
 else
 {
    
  console.log('Cruise does not exist using that name');
  res.status(404).json({ error: 'Cruise Not Found' });
 }

}).catch(error => {
 console.error('Error while finding the Cruise existance:', error);
 res.status(500).json({ error: 'Internal server error' });
});


}
else if(reservationType == "Activity")
{

//check if activityName already exists
Activity.findOne({ activityName: aActivityName })
.then(activity => {

 if (activity) {
  
  
  activity.activityName = aActivityName;
  activity.destination = aDestination;
  activity.date = aDate;
  activity.activityType = aActivityType;
  activity.rating = aRating;
  activity.price = aPrice;
  activity.participants = aParticipants;
  activity.ageOfParticipants = aAgeOfParticipants; 
     



  activity.save()
    .then(savedActivity => {
      console.log('Activity updated on the database:', savedActivity);
      res.status(200).json({ message: 'Activity updated successfully', Activity: savedActivity });
    })
    .catch(error => {
      console.error('Error while updating the activity :', error);
      res.status(500).json({ error: 'Internal server error' });
    });


 }
 else
 {
  console.log('Activity does not exist using that name');
  res.status(404).json({ error: 'Activity Not Found' });
  
 }

}).catch(error => {
 console.error('Error while finding the Activity existance:', error);
 res.status(500).json({ error: 'Internal server error' });
});

}

else if(reservationType == "Package")
{

//check if packageName already exists
Package.findOne({ packageName: pPackageName })
.then(package => {

 if (package) {


  package.packageName = pPackageName;
  package.destination = pDestination;
  package.duration = pDuration;
  package.numTravelers = pNumTravelers;
  package.specialty = pSpecialty;
  package.rating = pRating;
  package.price = pPrice;
 
  


  package.save()
    .then(savedPackage => {
      console.log('Package updated on the database:', savedPackage);
      res.status(200).json({ message: 'Package updated successfully', Package: savedPackage });
    })
    .catch(error => {
      console.error('Error while updating the package :', error);
      res.status(500).json({ error: 'Internal server error' });
    });

 }
 else
 {
  console.log('Package does not exist using that name');
  res.status(404).json({ error: 'Package Not Found' });
  
 }

}).catch(error => {
 console.error('Error while finding the Package existance:', error);
 res.status(500).json({ error: 'Internal server error' });
});


}


});

//delete products route
router.delete('/delete', function (req, res) 
{


//parameters for all
const reservationType = req.body.reservationType ;

//parameters for cruise
  const cCruiseName = req.body.cCruiseName ;

//parameters for activity
const aActivityName = req.body.aActivityName ;

//parameters for package
const pPackageName = req.body.pPackageName;

if(reservationType == "Cruise")
{

  Cruise.findOne({ cruiseName: cCruiseName })
  .then(cruise => {
    if (cruise)
    {
//delete the cruise
cruise.deleteOne()
        .then(deletedCruise => {
          console.log('Cruise deleted from the database:', deletedCruise);
          res.status(200).json({ message: 'Cruise deleted successfully',  deletedCruise });
        })
        .catch(error => {
          console.error('Error while deleting the cruise:', error);
          res.status(500).json({ error: 'Internal server error' });
        });

    }
    else
    {

          console.log('Cruise does not exist using that name');
          res.status(404).json({ error: 'Cruise Not Found' });
    }


  }).catch(error => {
    console.error('Error while finding the cruise existance:', error);
    res.status(500).json({ error: 'Internal server error' });
  });




}
else if(reservationType == "Activity")
{
  Activity.findOne({ activityName: aActivityName })
  .then(activity => {
    if (activity)
    {
//delete the activity
activity.deleteOne()
        .then(deletedActivity => {
          console.log('Activity deleted from the database:', deletedActivity);
          res.status(200).json({ message: 'Activity deleted successfully',  deletedActivity });
        })
        .catch(error => {
          console.error('Error while deleting the activity:', error);
          res.status(500).json({ error: 'Internal server error' });
        });

    }
    else
    {

          console.log('Activity does not exist using that name');
          res.status(404).json({ error: 'Activity Not Found' });
    }


  }).catch(error => {
    console.error('Error while finding the activity existance:', error);
    res.status(500).json({ error: 'Internal server error' });
  });


}
else if(reservationType == "Package")
{
  Package.findOne({ packageName: pPackageName })
  .then(package => {
    if (package)
    {
//delete the package
package.deleteOne()
        .then(deletedPackage => {
          console.log('Package deleted from the database:', deletedPackage);
          res.status(200).json({ message: 'Package deleted successfully',  deletedPackage });
        })
        .catch(error => {
          console.error('Error while deleting the package:', error);
          res.status(500).json({ error: 'Internal server error' });
        });

    }
    else
    {

          console.log('Package does not exist using that name');
          res.status(404).json({ error: 'Package Not Found' });
    }


  }).catch(error => {
    console.error('Error while finding the package existance:', error);
    res.status(500).json({ error: 'Internal server error' });
  });

}

});


//view booked cruises route
router.get('/view-booked-cruises', function (req, res) 
{


BookedCruise.find()
  .then(bcruises => {
    if (bcruises)
    {
      console.log(bcruises);
        res.status(200).json({ bcruises });
    }
    else
    {
          console.log('No booked cruises found');
          res.status(404).json({ error: 'No booked cruises found' });
    }


  }).catch(error => {
    console.error('Error while finding the booked cruises existance:', error);
    res.status(500).json({ error: 'Internal server error' });
  });


});

//view booked activities route
router.get('/view-booked-activities', function (req, res) 
{


BookedActivity.find()
  .then(bactivities => {
    if (bactivities)
    {
      console.log(bactivities);
        res.status(200).json({ bactivities });
    }
    else
    {
          console.log('No booked activities found');
          res.status(404).json({ error: 'No booked activities found' });
    }


  }).catch(error => {
    console.error('Error while finding the booked activities existance:', error);
    res.status(500).json({ error: 'Internal server error' });
  });


});

//view booked packages route
router.get('/view-booked-packages', function (req, res) 
{
//retrieve all packages and send them to the client in json format

BookedPackage.find()
  .then(bpackages => {
    if (bpackages)
    {
      console.log(bpackages);
        res.status(200).json({ bpackages });
    }
    else
    {
          console.log('No booked packages found');
          res.status(404).json({ error: 'No booked packages found' });
    }


  }).catch(error => {
    console.error('Error while finding the booked packages existance:', error);
    res.status(500).json({ error: 'Internal server error' });
  });


});


module.exports = router;