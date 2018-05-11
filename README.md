# API DE NOTÍCIAS

Aplicação para cadastro de links de notícias/artigos com possibilidade de votos (up e down) de usuários.

## Roteamento 

> **GET** `/news` - Retorna as notícias cadastradas.

> **GET** `/news?filter=up` - Ordena a listagem de notícias pela quantidade de votos up.

> **GET** `/news?filter=down` - Ordena a listagem de notícias pela quantidade de votos down.

> **GET** `/news?filter=last` - Ordena a listagem de notícias de acordo com a data de criação.

> **POST** `/news` - Cadastra uma nova notícia.

> **PATCH** `/news/:id/up` - Adiciona um voto **up** em uma notícia.

> **PATCH** `/news/:id/down` - Adiciona um voto **down** em uma notícia.

# Como instalar

## Requisitos:
* MySQL
* NodeJS 

## Passos para instalação:
1. Clonar ou Baixar este projeto no Github
2. Abrir terminal na raiz do projeto:
    > npm install

3. Atualizar as configurações de banco no arquivo config/config.js

4. Abrir terminal na raiz do projeto e executar:
    > node_modules/.bin/sequelize/ db:create
5. No mesmo terminal executar:
    > node_modules/.bin/sequelize/ db:migrate  

# Como testar

Executar o comando
> npm test


Testar Rate Limit
>
**OBS** O bloqueio de ip está configurado para 20 request's em 5 minutos.
O RateLimit Test deve ser executado **por último**, pois o IP será bloqueado temporariamente.
Para remover o bloqueio, deve-se excluir o registro (que contém o IP) na tabela blockeds no banco de dados.
Comando: `npm run stress`

