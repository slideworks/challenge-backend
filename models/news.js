module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define('News', {
    title: DataTypes.STRING,
    link: DataTypes.STRING,
    up_votes: DataTypes.INTEGER,
    down_votes: DataTypes.INTEGER,
    ip: DataTypes.STRING
  }, {})

  return News
}
