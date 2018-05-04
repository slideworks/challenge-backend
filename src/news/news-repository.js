import loadDatabase from '../../config/datasource';
const News =  loadDatabase().models.News;

exports.findAll = () => {
	return  News.findAll({})
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