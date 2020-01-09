var express = require("express")
var app = express();
var hbs = require("hbs")
var router = require('./routes/routes')
var connection = require('./dbInstance')
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


app.use('/',router)



connection.connect();
app.listen(3000);

