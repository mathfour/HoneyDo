module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
                food: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                eaten: {
                    type: DataTypes.BOOLEAN,
                    defaultValue: false
                }

            }
            )
    ;
    return Burger;
};

