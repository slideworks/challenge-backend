var self;

class BlockedModel {

    constructor() {
        this.Blocked = require('./Blocked.entity');
    }

    create(data, cb) {
        this.Blocked.build(data).save()
              .then(result => {
            cb(null, result);
        }).catch(err => {
            cb(err, null);
        });
    }

    update(data, cb) {
        this.Blocked.update(data, {
            where: {
                id: data.id
            }
        }).then(re => {
            cb(null, re);
        }).catch(err => {
            cb(err, null);
        });
    }

    updateOrCreate(data, cb) {
        self = this;
        this.Blocked.findAll({
            where: {
                ip: data.ip
            }
        }).then(function (result) {      
            if (result && typeof result[0].dataValues != 'undefined') {
                data.id = result[0].dataValues['id'];
                self.update(data, function(err, result) {
                    if (!err) {
                        cb(null, result);
                    } else {
                        cb(err, null);    
                    }
                });
            } else {
                self.create(data, function(err, result){
                    if (!err) {
                        cb(null, result);
                    } else {
                        cb(err, null);    
                    }
                });
            }
        }).catch(function (err) {
            cb(err, null);
        });
    }


    getOne(ip, cb) {
        console.log("ip: "+ip);
        this.Blocked.findAll({
            where: {
                ip: ip
            }
        }).then(function (result) {
            if (!result && typeof result[0].dataValues != 'undefined') {
                cb(null, result[0].dataValues);
            } else {
                cb(null, null);
            }
        }).catch(function (err) {
            cb(err, null);
        });
    }

}

module.exports = BlockedModel;