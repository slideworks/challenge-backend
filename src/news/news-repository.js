import loadDatabase from '../../config/datasource';
const News =  loadDatabase().models.news;
const Votes = loadDatabase().models.votes;

exports.findAll = () => {
	return  News.findAll({ include: [{ model: Votes }], order: [['id']] })
				.then(result => result)
				.catch(err => err);
};

exports.findAllWithParam = (param) => {
	if(param.hasOwnProperty('up')){
		return  News.findAll({ include: [{ model: Votes }] , order: [['up_votes', 'DESC']] })
					.then(result => result)
					.catch(err => err);
	}
	if(param.hasOwnProperty('down')){
		return  News.findAll({ include: [{ model: Votes }], order: [['down_votes', 'DESC']] })
					.then(result => result)
					.catch(err => err);
	}

	if(param.hasOwnProperty('lastNews')){
		return  News.findAll({ include: [{ model: Votes }], order: [['created_at', 'DESC']]})
					.then(result => result)
					.catch(err => err);
	}
	return News.findAll({ include: [{ model: Votes }], order: [['id']] })
					.then(result => result)
					.catch(err => err);
};

exports.findOne = (id) => {
	return  News.findOne({ where: { id: id } })
				.then(result => result)
				.catch(err => err);
};

exports.create = (data) => {
	return  News.create(data)
				.then(result => result)
				.catch(err => err);
};

exports.delete = (idNews) => {
	return  News.destroy({ where: { id: idNews } })
				.then(result => result)
				.catch(err => err);
};
exports.updateVote = (idNew,data) => {
	return  News.update(data, { where: { id: idNew } })
				.then(result => result)
				.catch(err => err);
};
