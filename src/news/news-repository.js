import loadDatabase from '../../config/datasource';
const News =  loadDatabase().models.news;
const Votes = loadDatabase().models.votes;

exports.findAll = () => {
	return  News.findAll({ include: [{ model: Votes }] })
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

exports.update = (idNews,data) => {
	return  News.update(data, { where: { id: idNews } })
				.then(result => result)
				.catch(err => err);
};
exports.updateVote = (idNew,data) => {
	return  News.update(data, { where: { id: idNew } })
				.then(result => result)
				.catch(err => err);
};
