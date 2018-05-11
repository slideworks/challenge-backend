'use strict';
var Sequelize = require('sequelize');
var autoBind = require('auto-bind');
var msg = require('../../util/message');
var ResponseStructure = require('../../util/ResponseStructure');
var NewsModel = require('../../models/news/New.model');
var LinkService = require('../../service/Link.service');
var sLink = new LinkService();
var mNews = new NewsModel();
var self;

class NewsController {

    constructor() {
        autoBind(this);
    }

    list(req, res) {
        var responseStructure = {};
        var filter = null;
        if (typeof req.query['filter'] != 'undefined') {
            filter = req.query['filter'];
        }

        mNews.getAll(filter, function (err, result) {
            if (!err && result) {
                res.status(200).json(new ResponseStructure(true, msg.news.getListNews, result).getJSON());
            } else {
                if (!err) {
                    res.status(204).json(new ResponseStructure(false, msg.news.noNews, null).getJSON());
                } else {
                    res.status(500).json(new ResponseStructure(false, msg.news.errGetNews, null).getJSON());
                }
            }
        });
    }

    create(req, res) {
        self = this;
        var responseStructure = {};
        if (typeof req.body.link == 'undefined') {
            res.status(422).json(new ResponseStructure(false, msg.news.noLink, null).getJSON());
        } else {
            sLink.validaLink(req.body.link, function (err, result) {
                if (!err) {
                    self.dataResult(req, result, function (rData) {
                        mNews.create(rData, function (err, result) {
                            if (!err) {
                                res.status(201).json(
                                new ResponseStructure(true, msg.news.createNew, result)
                                .getJSON());
                            } else {
                                res.status(500).json(new ResponseStructure(false, msg.news.errCreateNew, null).getJSON());
                            }
                        });
                    });
                } else {
                    res.status(400).json(new ResponseStructure(false, msg.news.invalidLink, null).getJSON());
                }
            });
        }
    }

    dataResult(req, titlePage, cb) {
        var data = {};
        data.ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        data.link = req.body.link;
        data.up_votes = 0;
        data.down_votes = 0;
        if (typeof req.body.title == 'undefined') {
            data.title = titlePage;
            cb(data);
        } else {
            data.title = req.body.title;
            cb(data);
        }
    }

}

module.exports = NewsController;