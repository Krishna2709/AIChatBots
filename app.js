// importing Express.js module
var express = require('express');
// configuring an Express application form the above function
var app = express();

const path = require('path');
app.use(express.static(__dirname+'/BobBot-DialogFlow'));
app.use(express.static(__dirname+'/BobBot-Watson'));

// configuring routes
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/dialogflow', function (req, res) {
    res.sendFile(path.join(__dirname, 'dialogflow.html')); 
});

app.get('/ibmwatson', function (req, res) {
    res.sendFile(path.join(__dirname, 'IBMWatson-Report.html'));
});

// defining routes
var server = app.listen(3333, function () {
    console.log('Node server is running....')
});