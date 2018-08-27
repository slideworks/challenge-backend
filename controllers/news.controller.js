const Sequelize = require('sequelize')
const OP = Sequelize.Op
const News = require('../models/news')
const message = require('../middlewares/util/message')
const ResponseFormat = require('../middlewares/util/responseFormat')

class NewsController {
  constructor() {}

  index(req, res, err) {
    let filter = typeof req.query['filter'] === 'undefined' ?
      null : req.query['filter']

    if (filter) {
      let result = News.findAll({
        createdAt: {
          [OP.gt]: filter
        },
        order: [
          ['created_at', 'DESC']
        ]
      })
      res.status(200).json(new ResponseFormat(true, message.news.listNews, result).gimme())

    } else if (filter === null) {
      let result = News.findAll()
      res.status(200).json(new ResponseFormat(true, message.news.listNews, result).gimme())

    } else {
      res.status(204).json(new ResponseFormat(true, message.news.noNews, null).gimme())
    }

    if (err) {
      res.status(500).json(new ResponseFormat(true, message.news.errNews, null).gimme())
    }
  }

  create(req, res) {
    let link = typeof req.body.link === 'undefined' ?
      res.status(422).json(new ResponseFormat(false, message.news.noLink, null).gimme()) : req.body.link

    News.create(req.body, err => {
      if (!err) {
        res.status(201).json(new ResponseFormat(true, message.news.createNew, true).gimme())
      } else {
        res.status(500).json(new ResponseFormat(false, message.news.errCreateNew, false).gimme())
      }
    })
  }

}

module.exports = NewsController
