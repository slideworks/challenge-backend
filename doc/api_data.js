define({ "api": [
  {
    "type": "post",
    "url": "/api/news",
    "title": "Cadastra uma nova \"new\"",
    "name": "AddNew",
    "group": "News",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Titulo da notícia.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>Link da notícia.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip",
            "description": "<p>IP do usuário.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201\t  Created\n{\n  \"message\": \"A noticia foi cadastrada com sucesso!\",\n  \"data\":{\n     \"id\":1\n     \"title\": \"Cells Talk in a Language That Looks Like Viruses\",\n     \"link\": \"https://www.quantamagazine.org/cells-talk-in-a-language-that-looks-like-viruses-20180502/\",\n     \"ip\": \"192.168.0.1\"\t  \n     \"created_at\":\"2016-05-04 15:57:21\"\n     \"updated_at\":\"2016-05-04 15:57:21\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc.js",
    "groupTitle": "News",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidBodyError",
            "description": "<p>O corpo da requisição não possui os valores corretos</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidUrlink",
            "description": "<p>A URL é inválida</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseErrorNews",
            "description": "<p>Erro proveniente da conexão com o banco de dados</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnknowTitle",
            "description": "<p>A noticia não foi cadastrada pois não foi possivel identificar seu título</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"O corpo da requisição não possui os valores corretos para ser aceito!\",\n  \"data\":[{errors}]   \n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"message\": \"Ocorreu um erro durante o processamento da requisição\",\n  \"data\":[{errors}]   \n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"message\": \"A noticia não foi cadastrada\",\n  \"data\":[{errors}]   \n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"message\": \"'A noticia não foi cadastrada pois não foi possivel identificar o seu titulo!\",\n  \"data\":\"error\"  \n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/news",
    "title": "Lista todas as news",
    "name": "GetNews",
    "group": "News",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"message\": \"As notícias foram listadas com sucesso!\",\n \"data\":\n     {\n         [news]\n     }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc.js",
    "groupTitle": "News"
  },
  {
    "type": "get",
    "url": "/api/news?down",
    "title": "Lista todas as news em ordem decrescente de down_votes",
    "name": "GetNews_with_param_down",
    "group": "News",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"message\": \"As notícias foram listadas com sucesso!\",\n \"data\":\n     {\n         [news]\n     }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc.js",
    "groupTitle": "News"
  },
  {
    "type": "get",
    "url": "/api/news?lastNews",
    "title": "Lista todas as news na ordem decrescente em que foram cadastradas",
    "name": "GetNews_with_param_lastNews",
    "group": "News",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"message\": \"As notícias foram listadas com sucesso!\",\n \"data\":\n     {\n         [news]\n     }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc.js",
    "groupTitle": "News"
  },
  {
    "type": "get",
    "url": "/api/news?up",
    "title": "Lista todas as news em ordem decrescente de up_votes",
    "name": "GetNews_with_param_up",
    "group": "News",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"message\": \"As notícias foram listadas com sucesso!\",\n \"data\":\n     {\n         [news]\n     }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc.js",
    "groupTitle": "News"
  },
  {
    "type": "post",
    "url": "/api/:id/vote",
    "title": "Cadastra uma novo voto",
    "name": "AddVote",
    "group": "Votes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "direction_vote",
            "description": "<p>Tipo do voto: &quot;up&quot; ou &quot;down&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip",
            "description": "<p>IP do usuário.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201\t  Created\n{\n  \"message\": \"'O voto foi cadastrado com sucesso e a noticia foi atualizada com sucesso!\",\n  \"data\":{\n     \"id\":1\n     \"direction_vote\": \"up\",\n     \"ip\": \"192.168.0.1\"\t  \n     \"created_at\":\"2016-05-04 15:57:21\"\n     \"updated_at\":\"2016-05-04 15:57:21\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc.js",
    "groupTitle": "Votes",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidBodyError",
            "description": "<p>O corpo da requisição não possui os valores corretos</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseErrorVotes",
            "description": "<p>Erro proveniente da conexão com o banco de dados</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundId",
            "description": "<p>O id passado na url não foi encontrado no banco de dados</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingIdParam",
            "description": "<p>Não foi passado nenhum id na url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"O corpo da requisição não possui os valores corretos para ser aceito!\",\n  \"data\":[{errors}]   \n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"message\": \"O voto não foi cadastrado\",\n  \"data\":[{errors}]   \n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Não existe noticia com esse id!\",\n  \"data\":\"error\"  \n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Está faltando o parametro na url!\",\n  \"data\":\"error\"  \n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "_home_carlos__rea_de_Trabalho_teste_doc_main_js",
    "groupTitle": "_home_carlos__rea_de_Trabalho_teste_doc_main_js",
    "name": ""
  }
] });
