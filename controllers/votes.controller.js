const Sequelize = require('sequelize')
const OP = Sequelize.Op
const News = require('../models/news')
const Votes = require('../models/votes')
const message = require('../middlewares/util/message')
const ResponseFormat = require('../middlewares/util/responseFormat')

class VotesController {
  constructor() {}

  up(req, res) {
    this.vote(req, res, 'up')
  }

  down(req, res) {
    this.vote(req, res, 'down')
  }

  upDown(req, res) {
    this.vote(req, res, 'upDown')
  }

  vote(req, res, thumbs) {
    if (thumbs === 'upDown') {
      res.status(403).json(new ResponseFormat(false, message.vote.upAndDown, false).gimme())
    }

    let record = {
      news_id: req.params.id,
      direction_vote: thumbs,
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
    }

    News.find(req.params.id, (err, result) => {
      if(result) {
        Votes.create(record, (err, result) => {
          if(!err) {
            this.associate(result, err => {
              if (!err) {
                res.status(200).json(new ResponseFormat(true, message.vote.createVote, record).gimme())
              } else {
                res.status(500).json(new ResponseFormat(false, message.vote.errVote, null).gimme())
              }
            })
          } else {
            res.status(500).json(new ResponseFormat(false, message.vote.errVote, null).gimme())
          }
        })
      } else {
        res.status(400).json(new ResponseFormat(false, message.vote.invalidId, null).gimme())
      }
    })
  }

  associate(vote) {
    let _ = {}

    if (vote.direction_vote === 'up') {
      _.up_votes = Sequelize.literal('up_votes + 1')
    } else {
      _.down_votes = Sequelize.literal('down_votes + 1')
    }

    News.find(vote.news_id, (err, result) => {
      if (result && !err) {
        News.update(_, {
          where: {
            id: vote.news_id
          }
        })
      }
    })

  }
}

module.exports = VotesController
