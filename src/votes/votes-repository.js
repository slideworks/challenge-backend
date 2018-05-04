import loadDatabase from '../../config/datasource';
const Vote =  loadDatabase().models.Votes;
const New = loadDatabase().models.News;

exports.upVote = (idNews,data) => {
	return   Vote.update(data, { where: { id: idNews } })
				.then(result => result)
				.catch(err => err);
};

exports.downVote = (idNews,data) => {
	return   Vote.update(data, { where: { id: idNews } })
				.then(result => result)
				.catch(err => err);
};
