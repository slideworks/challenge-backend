module.exports = (sequelize, DataTypes) => {
  const Votes = sequelize.define('Votes', {
    news_id: DataTypes.INTEGER,
    direction_vote: DataTypes.STRING,
    ip: DataTypes.STRING
  }, {})
  Votes.associate = models => {
    // associations can be defined here
    Votes.hasOne(models.News)
  }

  return Votes
}
