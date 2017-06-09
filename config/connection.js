// bmc: the connection.js is for the connection to the database
// bmc: the orm.js will be for the queries

var mysql = require("mysql");

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

module.exports = connection;