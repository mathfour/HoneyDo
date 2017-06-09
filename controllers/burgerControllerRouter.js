// bmc: the controller is only for routing information

var express = require('express');


var router = express.Router();

var burger = require('../models/burger.js');

router.get('/', function (request, response) {
   burger.allUneaten(function (data) {
      var sendViaHandlebars = {
          burgers: data
      };
      response.render('uneaten', sendViaHandlebars);
   });
});

router.get('/', function (request, response) {
   burger.allEaten(function (data) {
      var sendViaHandlebars = {
          burgers: data
      };
      response.render('eaten', sendViaHandlebars);
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
