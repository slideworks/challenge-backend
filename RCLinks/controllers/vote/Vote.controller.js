'use strict';
var Sequelize = require('sequelize');
var autoBind = require('auto-bind');
var msg = require('../../util/message');
var NewsModel = require('../../models/news/New.model');
var VoteModel = require('../../models/votes/Vote.model');
var ResponseStructure = require('../../util/ResponseStructure');

var mNews = new NewsModel();
var mVote = new VoteModel();
var self;

class VoteController {

    constructor() {
        autoBind(this);
    }

    voteUp(req, res) {
        this.vote(req, res, 'up');
    }

    voteDown(req, res) {
        this.vote(req, res, 'down');
    }

    vote(req, res, direction) {
        self = this;
        var dataCreate = {
            news_id: req.params.id,
            direction_vote: direction,
            ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
        };
        mNews.getOne(req.params.id, function(err, result){
            if (!result) {
                mVote.create(dataCreate, function (err, result) {
                    if (!err) {
                        mNews.associateVote(result, function (err, result) {
                            if (!err) {
                                res.status(200).json(new ResponseStructure(true, msg.vote.createVote, dataCreate).getJSON());
                            } else {
                                res.status(500).json(new ResponseStructure(false, msg.vote.errCreateVote, null).getJSON());
                            }
                        });
                    } else {
                        res.status(500).json(new ResponseStructure(false, msg.vote.errCreateVote, null).getJSON());
                    }
                });
            } else {
                res.status(400).json(new ResponseStructure(false, msg.vote.invalidParams, null).getJSON());                    
            }
        });
    }

}

module.exports = VoteController;
