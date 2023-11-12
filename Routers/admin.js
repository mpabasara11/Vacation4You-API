var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');

var User = require('../Db_Schema_Models/UserModel.js');

const bcrypt = require('bcrypt');


//view all users route
router.get('/view-users', function (req, res) 
{
//retrieve all users and send them to the client in json format

User.find()
  .then(users => {
    if (users)
    {
      console.log(users);
        res.status(200).json({ users });
    }
    else
    {
          console.log('No users found');
          res.status(404).json({ error: 'No users found' });
    }


  }).catch(error => {
    console.error('Error while finding the user existance:', error);
    res.status(500).json({ error: 'Internal server error' });
  });


});

//search users by username route
router.get('/search-users', function (req, res) 
{

  const usrName = req.body.usrName ;
//retrieve the user and send that to the client in json format

User.find({ username: usrName })
  .then(users => {
    if (users)
    {

      if(users.length == 0)
      {
        console.log('No users found with that username');
        res.status(404).json({ error: 'No users found with that username' });
      }
      else{
      console.log(users);
        res.status(200).json({ users });
      }
    }
    else
    {
          console.log('No users found on the database');
          res.status(404).json({ error: 'No users found on the database' });
    }


  }).catch(error => {
    console.error('Error while finding the user existance:', error);
    res.status(500).json({ error: 'Internal server error' });
  });


});


//add new agents route
router.post('/add-user', function (req, res) 
{

    const userName = req.body.usrName ;
    const password = req.body.pswd ;
    const userRole = req.body.userRole ;
    const firstName = req.body.firstName ;
    const lastName = req.body.lastName ;
    const email = req.body.email ;
    const nic = req.body.nic ;


//hash the password
const saltRounds = 10;
const passwordHashCode = bcrypt.hashSync(password, saltRounds);

//check if username already exists
User.findOne({ username: userName })
  .then(user => {
    if (user) {
      console.log('User already exists');
      res.status(409).json({ error: 'User already exists' });
    }
    else
    {

      const newUser = new User({
        username: userName,
        passwordHashCode: passwordHashCode,
        userRole: userRole,
        firstName: firstName,
        lastName: lastName,
        email: email,
        nic: nic,
        // other user data...
      });

      newUser.save()
        .then(savedUser => {
          console.log('User saved to the database:', savedUser);
          res.status(201).json({ message: 'User created successfully', user: savedUser });
        })
        .catch(error => {
          console.error('Error while saving the user:', error);
          res.status(500).json({ error: 'Internal server error' });
        });
    
    }


  }).catch(error => {
    console.error('Error while searching the user existance:', error);
    res.status(500).json({ error: 'Internal server error' });
  });


  });


//reset password route
router.post('/reset-password', function (req, res) 
{
  
      const userName = req.body.usrName ;
      const password = req.body.pswd ;

      //hash the password
    const saltRounds = 10;
    const passwordHashCode = bcrypt.hashSync(password, saltRounds);


//check if username already exists
User.findOne({ username: userName })
  .then(user => {
    if (user)
     {
//update the password
        user.passwordHashCode = passwordHashCode;
        user.save()
        .then(savedUser => {
          console.log('Password updated on the database:', savedUser);
          res.status(200).json({ message: 'User password updated successfully', user: savedUser });
        })
        .catch(error => {
          console.error('Error while updating password:', error);
          res.status(500).json({ error: 'Internal server error' });
        });

    }
    else
    {

          console.log('No user exist using that username:');
          res.status(404).json({ error: 'User Not Found' });
    }


  }).catch(error => {
    console.error('Error while finding the user existance:', error);
    res.status(500).json({ error: 'Internal server error' });
  });




});


//delete user route
router.delete('/delete-user', function (req, res) 
{

  const userName = req.body.usrName ;

  //check if username already exists

User.findOne({ username: userName })
  .then(user => {
    if (user)
    {
//delete the user
        user.deleteOne()
        .then(deletedUser => {
          console.log('User deleted from the database:', deletedUser);
          res.status(200).json({ message: 'User deleted successfully',  deletedUser });
        })
        .catch(error => {
          console.error('Error while deleting the user:', error);
          res.status(500).json({ error: 'Internal server error' });
        });

    }
    else
    {

          console.log('User does not exist using that username');
          res.status(404).json({ error: 'User Not Found' });
    }


  }).catch(error => {
    console.error('Error while finding the user existance:', error);
    res.status(500).json({ error: 'Internal server error' });
  });

});



module.exports = router;