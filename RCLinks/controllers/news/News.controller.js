var NewsModel = require('../../models/news.model');

class NewsController {

    constructor() {
        this.mNews = new NewsModel();
    }

    list(req, res) {
        //ordenação: pode vir ocpcionalmente um query param de ordenação
        //chama o getAll do newsModel
        //retorna array em data
    }

    create(req, res) {
        //recebe dados via req.body
        //valida os dados
        //chama o store do newsModel
        //retorna a noticia criada no dat
    }

    voteUp(req, res) {
        //pega o id da noticia por req.param.id
        //findNoticia em newsModel
        //se achou: vote do newsModel
    }

    voteDown(req, res) {
        //pega o id da noticia por req.param.id
        //findNoticia em newsModel
        //se achou: vote do newsModel
    }
}

module.exports = NewsController;