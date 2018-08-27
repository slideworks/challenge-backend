# Challenge Gustavo Cavalcante

## Endpoints

- `GET /news`: Lista notícias
- `POST /news`: Cria notícia
- `PATCH /news/:id/up`: Up vote para notícia
- `PATCH /news/:id/down`: Down vote para notícia

## Setup

- `npm install`: Instala as dependencias
- `npm postinstall`: Cria o DB e roda as migrations
- `npm start`: Inicia a aplicação

## Docker

Caso queira, usar com Docker, tem uma receita pronta subir container Node com Mysql.
Basta usar:
- `docker-compose up`
