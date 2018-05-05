import voteController from './votes-controller';


module.exports = (app) => {
	app.patch('/api/news/:id/up', voteController.upVote);
	app.patch('/api/news/:id/down', voteController.downVote);
};