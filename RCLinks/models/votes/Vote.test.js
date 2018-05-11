var Test = require('tape');
var VotesModel = require('./Vote.model');
var mVote = new VotesModel();

Test('Criar voto', (t) => {
    var voteObject = {
        news_id: 1,
        direction_vote: 'up',
        ip: '192.168.5.33'
    };

    mVote.create(voteObject, function (err, result) {
        t.notEqual(result, null, "Voto retornado com sucesso!");
        t.error(err, "Não houve erro");
        t.end();
    });
});

Test('Listar votos', (t) => {
    mVote.getAll(function (err, result) {
        t.notEqual(result, null, "Votos obtidas com sucesso!");
        t.error(err, "Não houve erro");
        t.end();
    });
});