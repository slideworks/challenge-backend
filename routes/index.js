const express = require('express')
const router = express.Router()

const Validate = require('../middlewares/validate')

router.get('/news', newsController.index)
router.post('/news', Validate.ip, newsController.create)
router.patch('/news/:id/up', Validate.ip, votesController.up)
router.patch('/news/:id/down', Validate.ip, votesController.down)
router.patch('/news/:id/up_down', Validate.ip, votesController.upDown)

module.exports = router
