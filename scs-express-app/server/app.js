// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const loggerMod = require('./logger')
const compression = require('compression') // eslint-disable-line global-require, max-len
const httpLogger = loggerMod.httpReqLogger(module) // eslint-disable-line global-require, max-len
var bodyParser = require('body-parser');
var jsonfile = require('jsonfile')

const app = express();

app.use(httpLogger)
// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.use(compression())
// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use('*.js', (req, res, next) => {
  console.log('loading js')
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next(err) // eslint-disable-line no-unused-vars
})

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/health', function(req, res){
    res.json({"message": "Server health looking good... "});
});

// Always return the main index.html, so react-router render the route in the client
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
// });

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




module.exports = app;