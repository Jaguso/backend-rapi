'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dishes = sequelize.define('Dishes', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4 
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    pictures: DataTypes.ARRAY(DataTypes.STRING),
    price: DataTypes.DECIMAL
  }, {});
  Dishes.associate = function(models) {
    // associations can be defined here
    Dishes.belongsTo(models.Restaurants, {foreignKey: "restaurantId"});
    Dishes.belongsTo(models.Orders, {foreignKey: "orderId"});
  };
  return Dishes;
};