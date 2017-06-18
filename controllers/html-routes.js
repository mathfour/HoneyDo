/**
 * Created by SilverDash on 6/18/17.
 */

var db = require('../models');

module.exports = function (app) {
    app.get('/', function (req, res) {
        db.Burger.findAll({}).then(function (burgers) {
            var objectRach = {burger: burgers};
            res.render('index', objectRach);
        })
    });

    app.post('/add', function (req, res) {

        console.log('req.body is', req.body);

        db.Burger.create({
            food: req.body.name
        }).then(function (burgers) {
            // console.log(burgers);
            res.redirect('/');
        })
    });
    app.put('/:id', function (res, req) {
        console.log('the req.body is', req.body);
        db.Burger.update({
                    eaten: true
                },
                {
                    where: {
                        id: req.params.id
                    }
                }
        ).then(function (burgers) {
            res.redirect('/');
        })
    })
};
