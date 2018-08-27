const express = require('express')
const router = express.Router()

const newsController = require('../controllers/news.controller')
const votesController = require('../controllers/votes.controller')

const NewsCtrl = new newsController()
const VotesCtrl = new votesController()


router.get('/news', NewsCtrl.index)
router.post('/news', NewsCtrl.create)
router.patch('/news/:id/up', VotesCtrl.up)
router.patch('/news/:id/down', VotesCtrl.down)
router.patch('/news/:id/up_down', VotesCtrl.upDown)

module.exports = router
