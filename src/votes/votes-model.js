export default(sequelize, DataType) => {
	const Vote = sequelize.define('votes', {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		direction_vote: {
			type: DataType.STRING(4),
			allowNull: false,
		},
		ip: {
			type: DataType.STRING,
			allowNull: false,
			validate:{
				isIP:true
			}
		},
	});

	return Vote;
};
  