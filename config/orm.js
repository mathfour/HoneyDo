// bmc: database queries happen in ORM
// bmc: the connection is in the connection.js so we need to require it here

var connection = require('./connection.js');


var orm = {
    allBurgers: function (tableName, colName, colValue, callback) {
        var mysqlQueryString = 'SELECT * FROM ' + tableName + ' WHERE ' + colName + ' = ' + colValue + ';';

        connection.query(mysqlQueryString, function (error, result) {
            if (error) {
                throw error;
            }
            callback(result);
        });
    },
    createBurger: function (burgerName, callback) {
        console.log('burger name is', burgerName);
        var mysqlQueryString = 'INSERT INTO burgers (food) VALUES (?);';

        connection.query(mysqlQueryString, burgerName, function (error, result) {
            if (error) {
                throw error;
            }
            callback(result);
        });
    }
};

module.exports = orm;
