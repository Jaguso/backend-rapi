'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      "Address_Restaurants",
      "restaurantId",{
        type: Sequelize.UUID,
        references: {
          model: 'Restaurants',
          key: "id"
        }
      }
    )
    
    queryInterface.addColumn(
      "Address_Users",
      "userId",{
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: "id"
        }
      }
    )

    queryInterface.addColumn(
      "Dishes",
      "restaurantId",{
        type: Sequelize.UUID,
        references: {
          model: 'Restaurants',
          key: "id"
        }
      }
    )

    queryInterface.addColumn(
      "Dishes",
      "orderId",{
        type: Sequelize.UUID,
        references: {
          model: 'Orders',
          key: "id"
        }
      }
    )

    queryInterface.addColumn(
      "Orders",
      "userId",{
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: "id"
        }
      }
    )

    queryInterface.addColumn(
      "Restaurants",
      "userId",{
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: "id"
        }
      }
    )

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
