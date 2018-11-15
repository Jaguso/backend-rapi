'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address_Users = sequelize.define('Address_Users', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4 
    },
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    city: DataTypes.STRING,
    zipcode: DataTypes.STRING
  }, {});
  Address_Users.associate = function(models) {
    // associations can be defined here
    Address_Users.belongsTo(models.Users, {foreignKey: "userId"});
  };
  return Address_Users;
};