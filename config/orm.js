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
            // response.render('uneaten', {uneatenBurgers: result});
        });
    }
    // allEaten: function (param1, param2, cb) {
    //     console.log(param1, param2);
    //     cb();
    // }
};

module.exports = orm;
// bmc:
