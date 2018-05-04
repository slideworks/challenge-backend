import voteController from './vote-controller';


module.exports = (app) => {
	app.patch('/news/:id/down', voteController.upVote);
	app.patch('/news/:id/up', voteController.downVote);
};