var Test = require('tape');
var BlockedModel = require('./Blocked.model');
var mBloc = new BlockedModel();

Test('Bloquear ip', (t) => {
    var newObject = {
        ip: '10.0.4.6',
        until: new Date()
    };

    mBloc.create(newObject, function (err, result) {
        t.notEqual(result, null, "Bloqueio criado com sucesso!");
        t.error(err, "Não houve erro");
        t.end();
    });
});

Test('Verificar bloqueio', (t) => {
    mBloc.getOne('10.0.4.6', function (err, result) {
        t.notEqual(result, null, "Está bloqueado");
        t.error(err, "Não houve erro");
        t.end();
    });
});