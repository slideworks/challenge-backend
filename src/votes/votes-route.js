import voteController from './votes-controller';
import {apiLimiter} from '../../utils';

module.exports = (app) => {
	app.patch('/api/news/:id/vote',apiLimiter(), voteController.vote);
};