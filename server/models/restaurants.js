'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurants = sequelize.define('Restaurants', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4 
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    cathegory:{ 
      type: DataTypes.ENUM,
      values: ["1", "2", "3", "4", "5"]
    },
    pictures: DataTypes.ARRAY(DataTypes.STRING)
  }, {});
  Restaurants.associate = function(models) {
    // associations can be defined here
    Restaurants.hasMany(models.Dishes);
    Restaurants.hasOne(models.Address_Restaurants);
    Restaurants.belongsTo(models.Users, {foreignKey: "userId"});
  };
  return Restaurants;
};