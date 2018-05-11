'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('News', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false
            },
            link: {
                type: Sequelize.STRING,
                allowNull: false
            },
            up_votes: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            down_votes: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            ip: {
                type: Sequelize.STRING
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('News');
    }
};