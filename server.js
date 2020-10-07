//Dependencies - what we will use to give our server useful functionality
const express = require("express");


//Express configuration - this sets up the basic properties for express server
const app = express();

//Set an initial port for our listener for Heroku or use 8080
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

//Create an "express" app to handle data parsing of urlencoded or JSON
app.use(express.urlencoded({ extended:true}));
app.use(express.json());

//Router - points the server to a series of "route files"
//These routes will give the server a "map" for user requests
//IIFE - we are asking to retrieve the route and immediately run the function
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Listener - to start our server
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
})