'use strict';
module.exports = (sequelize, DataTypes) => {

  var Blocked = sequelize.define('Blocked', {
    ip: DataTypes.STRING,
    until: DataTypes.DATE
    }, {});

  Blocked.associate = function(models) {
    // associations can be defined here
  };
  return Blocked;
};