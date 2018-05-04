'use strict';
module.exports = (sequelize, DataTypes) => {

  var News = sequelize.define('New', {
    title: DataTypes.STRING,
    link: DataTypes.STRING,
    up_votes: DataTypes.INTEGER,
    down_votes: DataTypes.INTEGER,
    ip: DataTypes.STRING
    }, {});

  News.associate = function (models) {
      // tem varios votos
      New.hasMany(Vote, { as: 'Votes', foreignKey: 'news_id', sourceKey: 'id' });
  };
  return News;
};