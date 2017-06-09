
var orm = require('./../config/orm.js');

var burger = {
    allUneaten: function (callback) {
        orm.allUneaten('burgers', 'eaten', 'false', function (result) {
            callback(result);
        });
    },
    allEaten: function () {
       // bmc: list eaten burgers
        console.log('you ate these burgers');
    },
    createBurger: function (columns, values, callback) {
       // bmc: insert burger into database
    },
    eatThisBurger: function (id, callback) {
       // bmc: update burger to be eaten = true
    }
};

module.exports = burger;