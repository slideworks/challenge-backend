const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const Blocked = sequelize.define('Blocked', {
    ip: DataTypes.STRING,
    until: Sequelize.DATEONLY,
    state: {
      type: Sequelize.ENUM,
      values: ['blocked', 'released']
    }
  }, {})

  return Blocked
}
