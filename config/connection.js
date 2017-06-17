// bmc: the connection.js is for the connection to the database
// bmc: the orm.js will be for the queries

// bmc: need mysql package
var mysql = require("mysql");

// bmc: make the connection with the jawsdb add-on in heroku or locally
if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burger_muncher"
});
}

// initiate mysql connection
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected to mySQL as id " + connection.threadId);
});

module.exports = connection;