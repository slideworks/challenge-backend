export default{
	production:{
		database: 'challengeBackend',
		username: 'root',
		password: '123',
		params: {
			dialect: 'sqlite',
			storage: 'slideworks.sqlite',
			logging: false
		},
	},
	development:{
		database: 'challengeBackend',
		username: 'root',
		password: '123',
		params: {
			dialect: 'sqlite',
			storage: 'slideworksdev.sqlite',
			logging: false
		},
	},
	test:{
		database: 'challengeBackend',
		username: 'root',
		password: '123',
		params: {
			dialect: 'sqlite',
			storage: 'slideworkstest.sqlite',
			logging: false
		},
	},
};