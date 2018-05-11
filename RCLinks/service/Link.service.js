var request = require('request');

class LinkService {

    validaLink(link, cb) {
        request.get({
            url: link
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var title = body.match(/<title>(.*?)<\/title>/);
                if (title == null) {
                    cb(null, "Sem título");
                } else {
                    cb(null, title[1]);
                }
            } else {
                cb(error, null);
            }
        });
    }

} module.exports = LinkService;