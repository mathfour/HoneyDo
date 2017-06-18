module.exports = function (sequelize, DataTypes) {
    var Burgers = sequelize.define("Burgers", {
        food: {
            type: DataTypes.STRING
        },
        eaten: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Burgers;
};

