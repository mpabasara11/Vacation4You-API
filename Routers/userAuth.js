const express = require('express');
const router = express.Router();



const mongoose = require('mongoose');

const jwt = require('jsonwebtoken');

//security key used to sign the JWT
const secretKey = 'zxasdqwer12345';

var User = require('../Db_Schema_Models/UserModel.js');

const bcrypt = require('bcrypt');


//login route
router.post('/login', function (req, res) 
{
    const userName = req.body.usrName ;
    const password = req.body.pswd ;



    User.findOne({ username: userName }).exec()
      .then(user => {
        if (user) {
          console.log('User exists');
          

          const storedHashedPassword = user.passwordHashCode;
          const plainPassword = password;

          const result = bcrypt.compareSync(plainPassword, storedHashedPassword);

          if (result) {

            console.log('Passwords match. User authenticated. Token sent.');
            const token = jwt.sign({ username: user.username ,userrole: user.userRole ,firstname:user.firstName ,lastname:user.lastName ,email:user.email ,nic:user.nic}, secretKey, { expiresIn: '1h' });
            //res.status(200).json({ token });

            res.status(200).cookie('name','halal').send('cookie set')



          } else {

            console.log('Passwords do not match. Authentication failed.');
            res.status(401).json({ error: 'User Not Authorized', message: 'entered password is wrong' });


          }


        } else {
          console.log('User does not exist');
          res.status(404).json({ error: 'User Not Authorized', message: 'user does not exist' });
        }
      })
      .catch(error => {
        console.error('Error finding user:', error);
        res.status(500).json({ error: 'Internal Server Error', message: 'Something happend at the server' });
      });

});


router.post('/verify-token', function (req, res)
{

  const jwtToken = req.body.token ;



if (!jwtToken){

  return res.status(400).json({ error: 'Bad Request', message: 'Token is missing in the request body' });

}

try{
  // Verify  token
  const decodedToken = jwt.verify(jwtToken, secretKey);

  // If verification is successfull then send the decoded information to the client
  res.status(200).json({ valid: true, decoded: decodedToken });
} catch (error) {


  // If verification fail
  if (error.name === 'TokenExpiredError') {

    return res.status(401).json({ error: 'Unauthorized', message: 'Token has expired' });

  } else if (error.name === 'JsonWebTokenError') {

    return res.status(401).json({ error: 'Unauthorized', message: 'Invalid token' });

  } else {

    console.error('Error verifying token:', error);
    return res.status(500).json({ error: 'Internal Server Error', message: 'Something happened at the server' });
    
  }

}


});



module.exports = router;