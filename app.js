const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors');


app.use(cors()); // Enable CORS for all routes
app.use(express.json());


const mongoose = require('mongoose');



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


connectToDb();
  

//////////////////////////////////////////////////////////////   Function definitions ///////////////////////////////////////////////////////////////////////////////


//entablish the connection with database
async function connectToDb()
{
  const uri = "mongodb+srv://mpabasara11:zxasd@cluster0.sktjibw.mongodb.net/Vacations4You?retryWrites=true&w=majority";

    try
    {
       await mongoose.connect(uri);
        console.log("Connected to mongoDB");
        startServer();
    }
    catch(error)
    {
        console.error(error);


    }

}

function startServer()
{
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });
}


 






