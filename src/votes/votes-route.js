import voteController from './votes-controller';


module.exports = (app) => {
	app.patch('/news/:id/up', voteController.upVote);
	app.patch('/news/:id/down', voteController.downVote);
};