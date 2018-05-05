'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('votes', [{
			'direction_vote' : 'up',
			'news_id': 3,
			'created_at': '2016-05-04 15:59:21 ',
			'updated_at': '2016-05-04 15:59:21 ',
			'ip' : '1283.1230123'
		},{
			'direction_vote' : 'down',
			'news_id': 2,
			'created_at': '2016-05-04 15:59:21 ',
			'updated_at': '2016-05-04 15:59:21 ',
			'ip' : '1283.1230123'
		},{
			'direction_vote' : 'up',
			'news_id': 1,
			'created_at': '2016-05-04 15:59:21 ',
			'updated_at': '2016-05-04 15:59:21 ',
			'ip' : '1283.1230123'
		},{
			'direction_vote' : 'down',
			'news_id': 2,
			'created_at': '2016-05-04 15:59:21 ',
			'updated_at': '2016-05-04 15:59:21 ',
			'ip' : '1283.1230123'
		},{
			'direction_vote' : 'up',
			'news_id': 4,
			'created_at': '2016-05-04 15:59:21 ',
			'updated_at': '2016-05-04 15:59:21 ',
			'ip' : '1283.1230123'
		},{
			'direction_vote' : 'down',
			'news_id': 4,
			'created_at': '2016-05-04 15:59:21 ',
			'updated_at': '2016-05-04 15:59:21 ',
			'ip' : '1283.1230123'
		},{
			'direction_vote' : 'up',
			'news_id': 3,
			'created_at': '2016-05-04 15:59:21 ',
			'updated_at': '2016-05-04 15:59:21 ',
			'ip' : '1283.1230123'
		},{
			'direction_vote' : 'down',
			'news_id': 1,
			'created_at': '2016-05-04 15:59:21 ',
			'updated_at': '2016-05-04 15:59:21 ',
			'ip' : '1283.1230123'
		},{
			'direction_vote' : 'up',
			'news_id': 1,
			'created_at': '2016-05-04 15:59:21 ',
			'updated_at': '2016-05-04 15:59:21 ',
			'ip' : '1283.1230123'
		}]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('votes', null, {});
	}
};
