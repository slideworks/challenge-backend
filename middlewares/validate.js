const blockController = require('../controllers/block.controller')
const message = require('./util/message')
const ResponseFormat = require('./util/responseFormat')

class Validate {
  constructor() {}

  ip(req, res, next) {
    blockController.check(req, (err, result) => {
      if (result) {
        res.status(403).json(new ResponseFormat(false, message.blocked.block).gimme())
      } else {
        next()
      }
    })
  }
}

module.exports = Validate
