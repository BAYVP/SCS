var express = require('express');
var bodyParser = require('body-parser');
var jsonfile = require('jsonfile')


// create express app
var app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/health', function(req, res){
    res.json({"message": "Server health looking good... "});
});


app.get('/main_screen_contents', function(req, res){
    res.setHeader('Content-Type', 'application/json');

    var json = JSON.parse(require('fs').readFileSync('main_screen_contents.json', 'utf8'));
    res.send(JSON.stringify(json))
});

app.get('/svm_screen_contents', function(req, res){
    res.setHeader('Content-Type', 'application/json');

    var json = JSON.parse(require('fs').readFileSync('svm_screen_contents.json', 'utf8'));
    res.send(JSON.stringify(json))
});





// listen for requests
app.listen(3000, function(){
    console.log("Server is listening on port 3000");
});
