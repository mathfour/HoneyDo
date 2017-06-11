/**
 * Created by SilverDash on 6/7/17.
 */
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var path = require("path");

var PORT = process.env.PORT || 3000;

var app = express();
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
// Routes
// bmc: need to import them from controllers/burgerControllerRouter.js

var router = require("./controllers/burgerControllerRouter.js");

app.use("/", router);

// Initiate the listener
app.listen(PORT, function () {
    console.log('listening on port', PORT);
});


