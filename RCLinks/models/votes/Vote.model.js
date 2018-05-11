var New = require('../news/New.entity');

class VoteModel {

    constructor() {
        this.Vote = require('./Vote.entity');
        this.Vote.belongsTo(New, { foreignKey: 'news_id' });
    }

    create(data, cb) {
        try {
            this.Vote.build(data).save()
            .then(result => {
                console.log("Crigou voto");
                cb(null, result);
            }).catch(err => {
                cb(err, null);
        });
        } catch(e) {
            console.log("Erro aoc riar voto: "+e);
        }
    }

    getAll(cb) {
        Vote.findAll({})
            .then(function (result) {
                if (result && result != []) {
                    cb(null, result);
                } else {
                    cb(null, null);
                }
            }).catch(function (err) {
                console.log("Erro ao buscar todos os votos: " + err);
                cb(err, null);
            });
    }

}

module.exports = VoteModel;