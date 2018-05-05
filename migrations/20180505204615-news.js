module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('news', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			title: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			link: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			up_votes: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			down_votes: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			ip: {
				type: Sequelize.STRING,
				allowNull: false,
			},	
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('news');
	}
};