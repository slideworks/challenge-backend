
# SlideWorks (API de notícias) - Challenge back-end
 API para cadastro de links de notícias/artigos com possibilidade de votos (up e down) de usuários.

## Atividades
- [X] Criar endpoints(listar notícias, criar notícia, up/down vote para notícia)
- [X] Utilizar migrations
- [X] Bloquear temporariamente ações repetidadas por IP
- [X] Ordenar notícias por: mais votos up, mais votos down, últimos adicionados (no mesmo endpoint de listagem)
- [X] HTTP Status Code auto-explicativo (200 success, 404 not found, etc)
- [X] Testar o link para validar resposta da página
- [X] Ler o título da página caso seja passado apenas o link no cadastro
- [X] Rate limit

## Estrutura do diretório
```sh
.
├── config
│	└── config.js
│	└── datasource.js
├── migrations
│   
├── src
│   ├── news
│   │    └── news-controller.js
│   │    └── news-model.js
│   │    └── news-repository.js
│   │    └── news-route.js
│   │    └── news-test.js
│   ├── votes
│       └── votes-controller.js
│       └── votes-model.js
│       └── votes-repository.js
│       └── votes-route.js
│       └── votes-test.js
├── .babelrc
├── .sequelizerc
├── .eslintrc.json
├── app.js
├── server.js
├── utils.js
├── package.json
└── package-lock.json
```


## Tecnologias utilizadas
- ES6
- NodeJS
- Express
- Sequelize
- MySQL
- EsLint

## Referência da API
A tabela abaixo mostra os diferentes endpoints que a aplicação possui. Para uma documentação mais detalhada só é preciso executar o seguinte comando:

```sh
> npm run documentation
```

Ou entrar no diretorio /doc e acessar o arquivo index.html
### News
|      METODO      |     ENDPOINT        |        FUNÇÃO                                    
|------------------|---------------------|----------------------
| GET              | /api/news           | Lista todas as news
| GET              | /api/news?up        | Lista todas as news em ordem decrescente de up_votes
| GET              | /api/news?down      | Lista todas as news em ordem decrescente de down_votes
| GET              | /api/news?lastNews  | Lista todas as news na ordem decrescente em que foram cadastradas
| POST             | /api/news           | Cadastra uma nova "new"

### Votes
|      METODO      |     ENDPOINT            |        FUNCÃO                                    
|------------------|-------------------------|--------
| PATCH            | /api/news/:id/vote      | Cadastra um novo voto


Em cada endpoint  possível fazer um total de 10 requisições, após isso o usuário é bloqueado por IP só podendo fazer uma nova requisição depois de 15 minutos.

## Heroku
Você pode ver o funcionamento da API no Heroku atráves desse link (https://slideworks-challenge-backend.herokuapp.com/api/news)

<p align="center">
  <img src="https://blog.phusion.nl/content/images/2016/07/Heroku.png" width="650"/>
</p>

## Rodando localmente
Primeiro de tudo você precisa do MySQL instalado em sua máquina;

```sh
> sudo apt-get update
> sudo apt-get install mysql-server
> systemctl start mysql
> /usr/bin/mysql -u root -p (para logar)
```

Baixe o NodeJS
```sh
> sudo apt-get update
> sudo apt-get install nodejs
```

Clone o projeto
```sh
> git clone https://github.com/CarlosJSL/challenge-backend.git
```

Instale as dependências do projeto
```sh
> npm install
```
Crie um banco de dados chamado "challengeBackend" no MySQL e mude as opções no arquivo config.js para o password e o usuário que você definiu anteriormente no seu banco MySQL

```sh
export default{
  development:{
		database: 'challengeBackend',
		username: 'root', << aqui
		password: '123',  << aqui
		params: {
			dialect: 'mysql',
			logging: false,
			define: {
				underscored: true,
			},
		},
	},
};
```

Rode as migrações com o seguinte comando
```
> npm run migration
```

Entao execute o comando 
```
> npm run development
```

E por fim, acesse `http://localhost:3000/{endpoint_name}`;

## Testes
Você pode rodar os testes com o seguinte comando:
```
> npm run test
```
Atenção, os testes precisam das migrações para funcionar. Caso não seja feita as migraçoes ou elas sejam modificadas, os testes não funcionarão corretamente.
