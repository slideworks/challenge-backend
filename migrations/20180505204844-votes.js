module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('votes', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			news_id:{
				type: Sequelize.INTEGER,
				references: {
					model: 'news',
					key: 'id'
				},
			},
			direction_vote: {
				type: Sequelize.STRING(4),
				values: ['up', 'down'],
				allowNull: false,
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
		return queryInterface.dropTable('votes');
	}
};
