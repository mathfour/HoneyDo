
var db = require("../models");

var router = function (app) {
    app.get('/', function (request, response) {
        var handlebarsObject = {};
        db.HoneyDo.findAll({
            where: {
                eaten: true
            }
        }).then(function (something) {
            handlebarsObject.uneatenBurgers = something;
            db.HoneyDo.findAll({
                where: {
                    eaten: false
                }
            }).then(function (somethingelse) {
                handlebarsObject.eatenBurgers = somethingelse;
                response.render('index', handlebarsObject)
            })
        })
    });

    app.post('/do', function (request, response) {
        db.HoneyDo.create(request.body.name).then(function (theDO) {
            response.json(theDO);
        })
    });

    app.delete('/do/:id', function (request, response) {
        db.HoneyDo.destroy({
            where: {
                id: request.params.id
            }
        }).then(function () {
            response.redirect('/');
        })
    });
};

module.exports = router;