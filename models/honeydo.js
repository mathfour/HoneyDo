module.exports = function (sequelize, DataTypes) {
    var HoneyDoTask = sequelize.define("HoneyDoTask", {
        task: {
            type: DataTypes.STRING
        },
        done: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return HoneyDoTask;
};

