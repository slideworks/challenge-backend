var express = require('express');
var router = express.Router();
var NewsController = require('../controllers/news.controller');
var newsCtrl = new NewsController();

router.get('/news', newsCtrl.list);
router.post('/news', newsCtrl.create);
router.patch('/news/:id/up', newsCtrl.voteUp);
router.patch('/news/:id/down', newsCtrl.voteDown);

module.exports = router;
