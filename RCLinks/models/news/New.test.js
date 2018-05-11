var Test = require('tape');
var NewsModel = require('./New.model');
var mNews = new NewsModel();

Test('Criar notícia', (t) => {
    var newObject = {
        title: 'Noticia exemplo',
        link: 'http://google.com.br',
        up_votes: 3,
        down_votes: 1,
        ip: '10.0.4.6'
    };

    mNews.create(newObject, function (err, result) {
        t.notEqual(result, null, "Notícia criada com sucesso!");
        t.error(err, "Não houve erro");
        t.end();
    });
});

Test('Listar notícias', (t) => {
    mNews.getAll(function (err, result) {
        t.notEqual(result, null, "Notícias obtidas com sucesso!");
        t.error(err, "Não houve erro");
        t.end();
    });
});

Test('Atualizar notícia', (t) => {
    var newObject = {
        id: 2,
        title: 'Noticia teste',
        link: 'http://google.com.br'
    };

    mNews.update(newObject, function (err, result) {
        t.notEqual(result, null, "Notícia atualizada com sucesso!");
        t.error(err, "Não houve erro");
        t.end();
    });
});