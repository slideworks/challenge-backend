'use strict';
var Sequelize = require('sequelize');
var sequelize = require('../../util/conn');

module.exports = sequelize.define('Vote', {
    news_id: Sequelize.INTEGER,
    direction_vote: Sequelize.STRING,
    ip: Sequelize.STRING,
    created_at: {
        type: Sequelize.DATE, defaultValue: Sequelize.NOW
    }
}, {
    timestamps: false,
    underscored: true
});