module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Blockeds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ip: {
        type: Sequelize.STRING
      },
      until: {
        type: Sequelize.DATE
      },
      state: {
        type: Sequelize.ENUM,
        values: ['blocked', 'released']
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Blockeds')
  }
}
