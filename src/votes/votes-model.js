export default(sequelize, DataType) => {
	const Vote = sequelize.define('Votes', {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		direction_vote: {
			type: DataType.STRING(4),
			values: ['up', 'down'],
			allowNull: false,
		},
		ip: {
			type: DataType.STRING,
			allowNull: false,
		},
	});

	return Vote;
};
  