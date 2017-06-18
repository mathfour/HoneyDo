module.exports = function (sequelize, DataTypes) {
    var Burgers = sequelize.define("Burgers", {
        task: {
            type: DataTypes.STRING
        },
        done: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Burgers;
};

