module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('news', [{
			'title' : 'Brasil campeão do mundo',
			'link' : 'globoesporte.globo.com',
			'ip' : '192.168.0.1',
			'up_votes':1,
			'down_votes':3,
			'created_at': '2016-05-04 15:56:21 ',
			'updated_at': '2016-05-04 15:56:21 '
		},{
			'title' : 'O mundo está em paz!',
			'link' : 'g1.globo.com',
			'ip' : '192.168.25.254',
			'up_votes':0,
			'down_votes':2,
			'created_at': '2016-05-04 15:57:21 ',
			'updated_at': '2016-05-04 15:57:21 '
		},{
			'title' : 'Bitcoin estoura',
			'link' : 'foxbit.com.br',
			'ip' : '223.0.0.1',
			'up_votes':2,
			'down_votes':0,
			'created_at': '2016-05-04 15:58:21 ',
			'updated_at': '2016-05-04 15:58:21 '
		},{
			'title' : 'noticia aleatoria qualquer',
			'link' : 'noticiaaleatoria.com',
			'ip' : '223.0.0.2',
			'up_votes':3,
			'down_votes':1,
			'created_at': '2016-05-04 15:59:21 ',
			'updated_at': '2016-05-04 15:59:21 '
		}]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('news', null, {});
	}
};
