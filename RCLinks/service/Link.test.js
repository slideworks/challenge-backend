var Test = require('tape');
var LinkService = require('./Link.service');
var sLink = new LinkService();

Test('Verificar se link eh valido', (t) => {
    sLink.validaLink('http://www.google.com.br', function (err, result) {
        t.notEqual(result, null, "Obteve resultado");
        t.equal(result, "Google", "Obteve o título da página");
        t.end();
    });
});