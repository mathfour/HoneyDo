/**
 * Created by SilverDash on 6/18/17.
 */

var db = require('../models');

module.exports = function (app) {
    app.get('/', function (req, res) {
        db.Burgers.findAll({
            where: {
                done: false
            }
        }).then(function (burgers) {
            console.log('result of promise', burgers);
            res.render('index', burgers);
        })
    });

    app.post('/add', function (req, res) {
        db.Burgers.create(req.body.name).then(function (burgers) {
            console.log(burgers);
            res.json(burgers);
        })
    })
};
