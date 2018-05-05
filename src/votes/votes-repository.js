import loadDatabase from '../../config/datasource';
const Vote =  loadDatabase().models.votes;
const New = loadDatabase().models.news;

exports.upVote = (data) => {
	return   Vote.create(data)
				.then(result => result)
				.catch(err => err);
};

exports.downVote = (data) => {
	return   Vote.create(data)
				.then(result => result)
				.catch(err => err);
};
