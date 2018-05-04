# Criar uma API Restfull para cadastro de links de notícias

Criar uma aplicação para cadastro de links de notícias/artigos com possibilidade de votos (up e down) de usuários. Todas ações poderão ser feitas por usuários anônimos. Referência: [hacker news](https://news.ycombinator.com/news).

O candidato poderá escolher entre criar a aplicação com `NodeJS` ou `PHP`, sendo que:

- __NodeJS:__ Sugerimos usar Express + Sequelize
- __PHP:__ Sugerimos usar CakePHP

## Endpoints

- `GET /news`: Lista notícias
- `POST /news`: Cria notícia
- `PATCH /news/:id/up`: Up vote para notícia
- `PATCH /news/:id/down`: Down vote para notícia

## Requisitos

- Banco de dados MySQL
- Usar uma biblioteca de ORM com migrations
- TDD
- Readme explicativo de como testar e usar
- Bloqueio temporário de ações repetidadas por IP (cadastro de notícias e votos)
- Possibilidade de ordenar notícias por: mais votos up, mais votos down, últimos adicionados (no mesmo endpoint de listagem)
- HTTP Status Code auto-explicativo (200 success, 404 not found, etc)

## Diferenciais

- Rate limit
- Ambiente de desenvolvimento com azk ou docker
- Teste do link para validar resposta da página
- Leitura do título da página caso passe apenas o link no cadastro
- ESLint (nodejs)
- ES6 (nodejs)
- PHP 7 (php)

# Estrutura do response (sugestão):

```json
{
    "success": true,
    "message": "Message",
    "data": {
        "id": 1
    }
}
```

# Estrutura do banco de dados (sugestão)

- __news__
    - id
    - title
    - link
    - up_votes
    - down_votes
    - ip
    - created_at
    - updated_at
- __votes__
    - id
    - news_id
    - direction_vote
    - ip
    - created_at
- __blocked_ips__
    - id
    - ip
    - until

# Envio

Criar um fork desse projeto e enviar um pull request.