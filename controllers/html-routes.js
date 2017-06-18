/**
 * Created by SilverDash on 6/18/17.
 */

var db = require('../models');

module.exports = function (app) {
    app.get('/', function (req, res) {
        db.HoneyDoTask.findAll({
            where: {
                done: false
            }
        }).then(function (dbDos) {
            console.log('result of promise', dbDos);
            res.render('index', dbDos);
        })
    });

    app.post('/add', function (req, res) {
        db.HoneyDoTask.create(req.body.name).then(function (dbDo) {
            console.log(dbDo);
            res.json(dbDo);
        })
    })
};
