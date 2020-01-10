var express = require("express")
var app = express();
var hbs = require("hbs")
var router = require('./routes/routes')
const mongoose = require('mongoose');
const mongoDbUrl = 'mongodb://127.0.0.1:27017/newsCrunch';

//<-------------------------------------------------------Body-parser setup---------------------------------------------------->
var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static("public"))
app.set("view engine","hbs")
//<----------------------------------------------------express-session setup------------------------------------------------->
var session = require("express-session")
app.use(session({
    secret: "khushbudesai's session",
    resave: true,
    saveUninitialized: true
}))



mongoose.connect(mongoDbUrl, { useNewUrlParser: true, useUnifiedTopology: true });


app.use('/',router)

app.listen(3000);
