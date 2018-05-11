const Test = require('tape');
const request = require('supertest');
const app = require('../app');
const async = require('async');

Test('TESTE DE ESTRESSE: PATCH /news/:id/up - Votar 101x', (t) => {
    var count = 0;
    var total = 21;
    async.eachSeries(
        new Array(total),
        function (key, next) {
            request(app).patch('/news/1/up')
                .end(function (err, res) {
                    if (count + 1 == total) {
                        t.end();
                    } else {
                        t.ok(res.body.status, "Voto computado");
                        count++;
                        next();
                    }
                });
        });
});

Test('REQUEST TEST: PATCH /news/:id/down - DOWN voto', (t) => {
    request(app).patch('/news/1/down')
        .expect(429)
        .expect('Content-Type', /json/)
        .end(function (err, result) {
            t.notEqual(err, null, 'Houve erro');
            t.end();
    });
});