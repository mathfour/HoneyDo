/**
 * Created by SilverDash on 6/7/17.
 */
// bmc: DEPENDENCIES  ==========================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var exphbs = require("express-handlebars");
// var methodOverride = require("method-override");

// bmc: EXPRESS ===============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// bmc: MODELS ================================================================
var db = require("./models");

// bmc: HANDLEBARS ===============================================================
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// bmc: STATIC FILES =====================================================
app.use(express.static(path.join(__dirname, 'public')));

// bmc: DATA PARSING ======================================================
app.use(bodyParser.urlencoded({extended: false}));
// app.use(methodOverride("_method"));

// var router = require("./controllers/burgerControllerRouter.js");

// app.use("/", router);

// bmc: SYNC AND LISTEN =====================================================
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log('listening on port', PORT);
    });
})


