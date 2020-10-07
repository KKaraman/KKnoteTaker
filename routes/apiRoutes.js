//This will be linking the route to the data source
//notesData holds an array that will hold the information
const notesData = require("../db/db.json");
const fs = require("fs");
//uuid will generate a very random id for each object when a note is created
const { v4: uuidv4 } = require('uuid');



//Routing =============
//this is what is being run in the server.js file when we call it
module.exports = function (app){

    app.get("/api/notes", function (req,res){
        res.json(notesData);
    });

    //this will generate a random id for each object and add it to req.body to complete the object instance
    //once it is completed, we push it into the array and stringify it to convert to JSON
    app.post("/api/notes", function (req, res){
        //console.log(uuidv4());
        req.body.id = uuidv4();
        notesData.push(req.body);

        console.log(notesData);

        fs.writeFile("./db/db.json", JSON.stringify(notesData), function (err) 
        {
            if (err) {
                return console.log(err);
            }
            console.log("Success generating the output file!");
        });  
        
    })

    //this will use the id for the object and find it in the array and get rid of that instance
    //we have to use req.params and not req.body bc it is passed through
    app.delete("/api/notes/:id", function (req,res){
        console.log(req.params.id);
        let index=0;

        for(i=0; i<notesData.length; i++){
            if(notesData[i].id === req.params.id){
                index = i;
            }
        }
        notesData.splice(index,1);
        fs.writeFile("./db/db.json", JSON.stringify(notesData), function (err) 
        {
            if (err) {
                return console.log(err);
            }
            console.log("Success generating the output file!");
        });       
        res.json();
    });
    
}

