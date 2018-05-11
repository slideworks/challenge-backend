var Vote = require('../votes/Vote.entity');
var Sequelize = require('sequelize');
var autoBind = require('auto-bind');
var New = require('./New.entity');
var self;

class NewModel {

    constructor() {
        autoBind(this);
        New.hasMany(Vote, { foreignKey: 'news_id', sourceKey: 'id' });
    }

    create(data, cb) {
        New.build(data).save()
        .then(result => {
            cb(null, result);
        }).catch(err => {
            cb(err, null);
        });
    }

    getOne(id, cb) {
        New.findAll({
            where: { id: id }
        }).then(function (result) {
            cb(null, result);
        }).catch(function (err) {
            cb(err, null);
        });
    }

    associateVote(data, cb) {
        self = this;
        var dt = {};
        if (data.direction_vote == 'up') {
            dt.up_votes = Sequelize.literal('up_votes + 1');
        } else {
            dt.down_votes = Sequelize.literal('down_votes + 1');
        }
        this.getOne(data.news_id, function (err, result) {
            if (!!result && !err) {
                self.update(dt, result[0].dataValues.id, function (err, result) {
                    if (!err) {
                        cb(null, result);
                    } else {
                        cb(err, null);
                    }
                });
            } else {
                cb(err, null);
            }
        });
    }

    update(data, id, cb) {
        New.update(data, {
            where: {
                id: id
            }
        }).then(result => {
            cb(null, result);
        }).catch(err => {
            console.log("Erro: " + err);
            cb(err, null);
        });
    }

    getOrder(filter, cb) {
        var order;
        if (filter == null || filter == 'last') {
            order = [['created_at', 'DESC']];
            cb(order);
        } else {
            if (filter == 'up') {
                order = [['up_votes', 'DESC']];
                cb(order);
            } else if (filter == 'down') {
                order = [['down_votes', 'DESC']];
                cb(order);
            }
        }
    }

    getAll(filter, cb) {
        self = this;
        this.getOrder(filter, function (order) {
            New.findAll({
                order: order,
                include: [
                { model: Vote }
                ],
            }).then(function (result) {
                if (result && result != []) {
                    console.log(result);
                    cb(null, result);
                } else {
                    cb(null, null);
                }
            }).catch(function (err) {
                console.log("Erro ao buscar todos as notícias: " + err);
                cb(err, null);
            });
        });
    }

}

module.exports = NewModel;
