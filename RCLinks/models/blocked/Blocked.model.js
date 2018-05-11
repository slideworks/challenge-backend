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

    updateOrCreate(data) {
        self = this;
        this.Blocked.findAll({
            where: {
                ip: data.ip
            }
        }).then(function (result) {
            if (result) {
                self.create(data, function(err, result){});
            } else {
                data.id = result.id;
                self.update(data, function(err, result) {});
            }
        }).catch(function (err) {
        });
    }


    getOne(ip, cb) {
        this.Blocked.findAll({
            where: {
                ip: ip
            }
        }).then(function (result) {
            if (JSON.stringify(result) != '[]') {
                cb(null, result);
            } else {
                cb(null, null);
            }
        }).catch(function (err) {
            cb(err, null);
        });
    }

}

module.exports = BlockedModel;