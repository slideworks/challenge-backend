import voteController from './votes-controller';
import {apiLimiter} from '../../utils';

module.exports = (app) => {
	app.patch('/api/news/:id/up',apiLimiter(), voteController.upVote);
	app.patch('/api/news/:id/down',apiLimiter(), voteController.downVote);
};