module.exports = function(sequelize, DataTypes) {
  var HoneyDo = sequelize.define("HoneyDo", {
    food: {
        type: DataTypes.STRING
    },
    eaten: { type: DataTypes.BOOLEAN,
        defaultValue: true
  }});
  return HoneyDo;
};
