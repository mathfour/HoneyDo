var orm = require('./../config/orm.js');

var burger = {
    allUneaten: function (callback) {
        orm.allBurgers('burgers', 'eaten', false, function (data) {
            callback(data);
        });
    },
    allEaten: function (callback) {
        orm.allBurgers('burgers', 'eaten', true, function (data) {
            callback(data);
        });
        // bmc: list eaten burgers
        console.log('you ate these burgers');
    },
    createBurger: function (burgerName, callback) {
        // bmc: insert burger into database
        orm.createBurger(burgerName, function (response) {
            callback(response);
        });
    },
    eatThisBurger: function (id, callback) {
        // bmc: update burger to be eaten = true
        orm.eatThisBurger(id, function (response) {
            callback(response);
        });
    }
};

module.exports = burger;