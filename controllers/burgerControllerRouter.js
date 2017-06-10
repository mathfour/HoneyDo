// bmc: the controller is only for routing information

var express = require('express');


var router = express.Router();

var burger = require('../models/burger.js');

router.get('/', function (request, response) {
    var handlebarsObject = {};

    burger.allUneaten(function (data) {
        handlebarsObject.uneatenBurgers = data;
        burger.allEaten(function (data) {
            handlebarsObject.eatenBurgers = data;
            console.log(handlebarsObject);
            response.render('index', handlebarsObject);
        });
    });
});

router.post('/', function (request, response) {
    burger.createBurger(food, request.body.name, function () {
        response.redirect('/');
    });
});

router.put('/:id', function (request, response) {

    // bmc: the cats one has req.params.id, not body (hmm)
    burger.eatThisBurger(request.body.id, function () {
        response.redirect('/');
    });
});

module.exports = router;
