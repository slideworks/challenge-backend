'use strict';
var Sequelize = require('sequelize');
var sequelize = require('../../util/conn');

module.exports = sequelize.define('Blocked', {
	ip: Sequelize.STRING,
	until: Sequelize.DATE	
}, {
	timestamps: false
});