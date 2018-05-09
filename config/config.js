
let match = ['','root','123','localhost','8000','challengeBackend'];

if(process.env.DATABASE_URL) {
	match = process.env.DATABASE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);
}
export default{
	production:{
		database: match[5] ,
		username: match[1],
		password: match[2],
		params: {
			dialect:  'postgres' ,
			logging: false,
			protocol: 'postgres',
			port: match[4],
			host: match[3],
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