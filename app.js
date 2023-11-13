const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors');


app.use(cors()); // Enable CORS for all routes
app.use(express.json());


const mongoose = require('mongoose');

const uri = "mongodb+srv://mpabasara11:zxasd@cluster0.sktjibw.mongodb.net/Vacations4You?retryWrites=true&w=majority";



connectToDb();





var authentication = require('./Routers/userAuth');
var travelAgents = require('./Routers/travelAgent');
var backOfficeStaff = require('./Routers/backOfficeStaff');
var admin = require('./Routers/admin');


//user authentication
app.use('/authenticate',authentication);

//travel agents
app.use('/travel-agent',travelAgents);

//backoffice staff
app.use('/backoffice',backOfficeStaff);

//admin
app.use('/admin',admin);




const server = app.listen(port,()=>{console.log(`api is listening at http://localhost:${port}`)});


// Handle Ctrl+C to gracefully disconnect from the database
process.on('SIGINT', async () => {
    try {
      // Close the MongoDB connection
      await mongoose.connection.close();
      console.log('MongoDB connection closed');
    } catch (error) {
      console.error('Error closing MongoDB connection:', error);
    }
    // Close the server
    server.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
  });
  

//////////////////////////////////////////////////////////////   Function definitions ///////////////////////////////////////////////////////////////////////////////


//entablish the connection with database
async function connectToDb()
{

    try
    {
        await mongoose.connect(uri);
        console.log("Connected to mongoDB");
    }
    catch(error)
    {
        console.error(error);


    }

}


 






