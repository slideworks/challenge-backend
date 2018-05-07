import loadDatabase from '../../config/datasource';
const Vote =  loadDatabase().models.votes;

exports.registerVote = (data) => {
	return   Vote.create(data)
				.then(result => result)
				.catch(err => err);
};


