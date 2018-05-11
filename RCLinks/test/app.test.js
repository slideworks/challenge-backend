const Test = require('tape');
const request = require('supertest');
const msg = require('../util/message');
const app = require('../app');

Test('REQUEST TEST: POST / - Criar notícia', (t) => {
    var newTest = {
        title: 'New test',
        link: 'http://www.facebook.com'
    };

    request(app).post('/news').send(newTest)
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function (err, result) {
            var returnedNew = {
                title: result.body.data.title,
                link: result.body.data.link,
                up_votes: result.body.data.up_votes,
                down_votes: result.body.data.down_votes
            };
            newTest.up_votes = 0;
            newTest.down_votes = 0;
            t.error(err, 'Sem erros');
            t.ok(result.body.status, 'Sucesso na operação');
            t.equal(result.body.message, msg.news.createNew, "Mensagem correta");
            t.notEqual(result, null, 'Obteve resultado');
            t.same(returnedNew, newTest, 'Notícia criada com sucesso');
            t.end();
    });
});

Test('REQUEST TEST: POST / - Criar notícia sem passar link', (t) => {
    var newTest = {
        title: 'Force error test'
    };

    request(app).post('/news').send(newTest)
        .expect(422)
        .expect('Content-Type', /json/)
        .end(function (err, result) {
            t.notOk(result.body.status, 'Operação não realizada');
            t.equal(result.body.data, null, 'Não retornou a notícia criada');
            t.equal(result.body.message, msg.news.noLink, "Mensagem correta");
            t.end();
    });
});

Test('REQUEST TEST: POST / - Criar notícia com link inválido', (t) => {
    var newTest = {
        title: 'Force error test',
        link: 'http://www.1112ss.com.br'
    };

    request(app).post('/news').send(newTest)
        .expect(400)
        .expect('Content-Type', /json/)
        .end(function (err, result) {
            t.notOk(result.body.status, 'Operação não realizada');
            t.equal(result.body.data, null, 'Não retornou a notícia criada');
            t.equal(result.body.message, msg.news.invalidLink, "Mensagem correta");
            t.end();
    });
});

Test('REQUEST TEST: POST / - Criar notícia sem título', (t) => {
    var newTest = {
        link: 'http://www.google.com.br'
    };

    request(app).post('/news').send(newTest)
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function (err, result) {
            newTest.up_votes = 0;
            newTest.down_votes = 0;
            t.error(err, 'Sem erros');
            t.ok(result.body.status, 'Sucesso na operação');
            t.equal(result.body.message, msg.news.createNew, "Mensagem correta");
            t.equal(result.body.data.title, 'Google', 'Pegou o link da página');
            t.end();
    });
});

Test('REQUEST TEST: PATCH /news/:id/up - UP voto', (t) => {
    request(app).patch('/news/1/up')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function (err, result) {
            console.log(err);
            t.error(err, 'Sem erros');
            t.equal(result.body.message, msg.vote.createVote, "Mensagem correta");
            t.notEqual(result, null, 'Obteve resultado');
            t.end();
    });
});

Test('REQUEST TEST: PATCH /news/:id/down - DOWN voto', (t) => {
    request(app).patch('/news/1/down')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function (err, result) {
            t.error(err, 'Sem erros');
            t.equal(result.body.message, msg.vote.createVote, "Mensagem correta");
            t.notEqual(result, null, 'Obteve resultado');
            t.end();
    });
});

Test('REQUEST TEST: GET /news - Obter todas as notícias', (t) => {
    request(app).get('/news')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function (err, result) {
            t.error(err, 'Sem erros');
            t.ok(result.body.status, "Operação realizada com sucesso!");
            t.equal(result.body.message, msg.news.getListNews, "Mensagem correta");
            t.notEqual(result, null, 'Obteve resultado');
            t.end();
    });
});

