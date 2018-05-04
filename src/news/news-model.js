export default(sequelize, DataType) => {
	const News = sequelize.define('News', {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		title: {
			type: DataType.STRING,
			allowNull: false,
		},
		link: {
			type: DataType.STRING,
			allowNull: false,
		},
		up_votes: {
			type: DataType.INTEGER,
			allowNull: true,
		},
		down_votes: {
			type: DataType.INTEGER,
			allowNull: true,
		},
		ip: {
			type: DataType.STRING,
			allowNull: false,
		},	
	},
	{
		hooks: {
			beforeCreate: (news) => {
				news.set('up_votes', 0);
				news.set('down_votes', 0);
			},
		}
	});

	return News;
};
  