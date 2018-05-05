export default{
	production:{
		database: 'challengeBackend',
		username: 'root',
		password: '123',
		params: {
			dialect: 'mysql',
			logging: false,
			define: {
				underscored: true,
			},
		},
	},
	development:{
		database: 'challengeBackend',
		username: 'root',
		password: '123',
		params: {
			dialect: 'mysql',
			logging: false,
			define: {
				underscored: true,
			},
		},
	},
	test:{
		database: 'challengeBackend',
		username: 'root',
		password: '123',
		params: {
			dialect: 'mysql',
			logging: false,
			define: {
				underscored: true,
			},
		},
	},
};