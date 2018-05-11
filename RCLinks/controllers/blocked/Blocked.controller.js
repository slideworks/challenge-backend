'use strict';
var Sequelize = require('sequelize');
var autoBind = require('auto-bind');
var msg = require('../../util/message');
var BlockedModel = require('../../models/blocked/Blocked.model');
var ResponseStructure = require('../../util/ResponseStructure');

var mBlocked = new BlockedModel();
var self;

class BlockedController {

    constructor() {
        autoBind(this);
    }

    blockIP(req, res, next) {
        try {
            this.verificarBloqueio(req, function (err, bloq) {
                if (bloq) {
                    res.status(403).json(new ResponseStructure(false, msg.blocked.noAccess, null).getJSON());
                } else {
                    self = this;
                    var data = new Date();
                    mBlocked.updateOrCreate({
                        ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                        until: data.setHours(data.getHours() + 1)
                    });
                }
            });
        } catch (e) {
            console.log("Erro: " + e);
        }
    }

    verificarBloqueio(req, cb) {
        self = this;
        var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        console.log("ip: " + ip);
        mBlocked.getOne(ip, function (err, result) {
            if (result) {
                var until = result[0].dataValues.until;
                self.dataDiff(until, function (bloq) {
                    if (bloq) {
                        cb(null, true);
                    } else { cb(null, false); }
                });
            } else { cb(null, false); }
        });

    }

    dataDiff(until, cb) {
        var date = new Date(until);
        var novaData = new Date();
        if (date >= novaData) {
            var horaUntil = new Date(until).getHours;
            if (novaData.getHours > horaUntil) {
                cb(false);
            } else {
                cb(true);
            }
        } else {
            cb(false);
        }
    }
}

module.exports = BlockedController;