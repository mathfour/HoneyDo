/**
 * Created by SilverDash on 6/7/17.
 */
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

var db = require('./models');
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

// Routes
// bmc: need to import them from controllers/burgerControllerRouter.js

// var router = require("./controllers/burgerControllerRouter.js");

require('./controllers/html-routes.js')(app);

// app.use("/", router);

// Initiate the listener
db.sequelize.sync({force: false}).then(function () {
    // bmc: force: true deletes the table so you can start over
    app.listen(PORT, function () {
        console.log('listening on port', PORT);
    });
});
