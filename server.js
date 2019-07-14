var express = require("express");
var app = express();
const http = require('http');
const server = http.createServer(app);
var io = require('socket.io')(server);
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
const path = require('path');
var cors = require('cors')
var useragent = require('express-useragent');

let hacker_db

var DB_Hacker = "mongodb+srv://karan:gng@cluster0-94hyf.mongodb.net/gargngalgat?retryWrites=true&w=majority"

var corsOptions = {
    origin: true,
    optionsSuccessStatus: 200,
    credentials: true
}

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(useragent.express());

// Create link to Angular build directory
app.use(express.static(path.join(__dirname, 'dist/hacker')));

// Connect to the database before starting the application server.
mongoose.set('useCreateIndex', true)

hacker_db = mongoose.createConnection(DB_Hacker, { useNewUrlParser: true })
server.listen(process.env.PORT || 4200, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

exports.hacker_db = hacker_db


var hackingRoute = require('./routes/hacking')

app.use('/api/hack', hackingRoute);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/hacker/index.html'));
});

// Generic error handler used by all endpoints.
function handleError(res, reason, code) {
    res.status(code || 500).json(reason);
}