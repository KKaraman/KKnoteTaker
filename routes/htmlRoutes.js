//Dependencies - need path to get the correct file path for HTML
var path = require("path");

module.exports = function(app){
    //localhost:8080/notes should return the notes.html file
    app.get("/notes", function(req,res){
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    //If no other matching route, then go to index.html page
    app.get("*", function(req,res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}