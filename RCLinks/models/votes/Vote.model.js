'use strict';
module.exports = (sequelize, DataTypes) => {

    var Votes = sequelize.define('Vote', {
        news_id: DataTypes.INTEGER,
        direction_vote: DataTypes.STRING,
        ip: DataTypes.STRING
    }, {});

    Votes.associate = function (models) {
        //pertence a uma noticia
        Vote.belongsTo(New, { as: 'New', foreignKey: 'news_id' })
    };
    return Votes;
};