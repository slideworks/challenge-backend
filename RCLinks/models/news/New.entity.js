'use strict';
var Sequelize = require('sequelize');
var sequelize = require('../../util/conn');

module.exports = sequelize.define('New', {
    title: Sequelize.STRING,
    link: Sequelize.STRING,
    up_votes: Sequelize.INTEGER,
    down_votes: Sequelize.INTEGER,
    ip: Sequelize.STRING
}, {
    underscored: true
});