import newsController from './news-controller';
import {apiLimiter} from '../../utils';

module.exports = (app) => {
	
	app.get('/api/news', apiLimiter(), newsController.getAllNews);
	app.post('/api/news',apiLimiter(), newsController.addNew);
};