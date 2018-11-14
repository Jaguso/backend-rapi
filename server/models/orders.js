'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4 
    },
    comment: DataTypes.TEXT
  }, {});
  Orders.associate = function(models) {
    // associations can be defined here
    Orders.belongsTo(models.Users);
  };
  return Orders;
};