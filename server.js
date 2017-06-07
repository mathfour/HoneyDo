/**
 * Created by SilverDash on 6/7/17.
 */
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mysql = require("mysql");

var PORT = 3000;

var app = express();
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burger_muncher"
});

// Initiate MySQL Connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected to mySQL as id " + connection.threadId);
});


connection.query("SELECT * FROM burgers WHERE eaten = false;", function (err, response) {
    console.log(response);
});

// connection.query("SELECT * FROM top5000 WHERE artist=?", ["George Strait"], function (error, response) {
//     console.log(response);
// })

// Routes
app.get("/", function (req, res) {
    var sampleObject = [
        {
            burgerName: "shakamakacoocoo"
        }];

    res.render('uneaten', sampleObject);
    // If the main route is hit, then we initiate a SQL query to grab all records.
    // All of the resulting records are stored in the variable "result."
    // connection.query("SELECT * FROM burgers WHERE eaten = false;", function (err, result) {
    //     res.send("this iw working");
    // });
});

// Initiate the listener
app.listen(PORT);

