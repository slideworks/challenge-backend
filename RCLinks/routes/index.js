var express = require('express');
var router = express.Router();
var NewsController = require('../controllers/news/News.controller');
var VoteController = require('../controllers/vote/Vote.controller');
var BlockController = require('../controllers/blocked/Blocked.controller');
var msg = require('../util/message');
var ResponseStructure = require('../util/ResponseStructure');
var newsCtrl = new NewsController();
var voteCtrl = new VoteController();
var blockCtrl = new BlockController();

/* Endpoint list */
router.get('/news', newsCtrl.list);
router.post('/news', validarIP, newsCtrl.create);
router.patch('/news/:id/up', validarIP, voteCtrl.voteUp);
router.patch('/news/:id/down', validarIP, voteCtrl.voteDown);

function validarIP(req, res, next) {
    /* Middleware que verifica bloqueio de IP */
    blockCtrl.verificarBloqueio(req, function (err, result) {
        if (!result || !!result) {
            next();
        } else { 
            res.status(403).json(new ResponseStructure(false, msg.blocked.noAccess, null).getJSON());            
        }
    });
}

module.exports = router;
