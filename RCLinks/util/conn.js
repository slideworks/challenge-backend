var Sequelize = require('sequelize');
var config = require('../config/config');

module.exports = new Sequelize(
    config.database,
    config.username,
    config.password, 
    {
        host: config.host,
        dialect: 'mysql',
        operatorsAliases: false
        logging: false
    }
);