const Sequelize = require('sequelize')
const OP = Sequelize.Op
const Blocked = require('../models/blocked')
const message = require('../middlewares/util/message')
const ResponseFormat = require('../middlewares/util/responseFormat')

class BlockedController {
  constructor() {}

  block(req, res) {
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    let date = new Date()

    Blocked.create({
      ip: ip,
      until: date.setHours(date.getHours() + 1),
      state: 'blocked'
    })

    res.status(403).json(new ResponseFormat(false, message.blocked.noAccess, null).gimme())
  }

  check(req, callbk) {
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress

    Blocked.findAll({
      where: {
        ip: ip,
        state: 'blocked'
      }
    }, (err, result) => {
      if (result) {
        callbk(null, true)
      } else {
        callbk(null, false)
      }
    })
  }
}

module.exports = BlockedController
