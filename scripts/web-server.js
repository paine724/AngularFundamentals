//Requires both path and express
var express = require('express');
var path = require('path');

//Start express
var app = express();

//Root directory is set to /DemoApp directory
var rootPath = path.normalize(__dirname + '/../');
//set the app directory for use
app.use(express.static(rootPath + '/app'));
//set the port for use
app.listen(8000);
console.log("Listening on port 8000...");