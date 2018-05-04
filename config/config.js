export default{
	production:{
		database: 'challengeBackend',
		username: 'admin',
		password: '123',
		params: {
			dialect: 'postgres',
			logging: false
		},
	},
	development:{
		database: 'challengeBackend',
		username: 'postgres',
		password: '123',
		params: {
			dialect: 'postgres',
			logging: false
		},
	},
	test:{
		database: 'challengeBackend',
		username: 'postgres',
		password: 'postgres',
		params: {
			dialect: 'postgres',
			logging: false
		},
	},
};