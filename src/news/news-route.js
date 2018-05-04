import newsController from './news-controller';


module.exports = (app) => {
	app.get('/api/news', newsController.getAllNews);
	app.post('/api/news', newsController.addNew);
};