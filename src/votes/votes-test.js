import votesController from './votes-controller';
import votesRepository from './votes-repository';
import newsRepository from '../news/news-repository';
import httpMocks from 'node-mocks-http';
import HttpStatus from 'http-status';
import chai from 'chai';
global.expect = chai.expect;

describe('News Test Suite : vote function',  () => {
    describe('vote function without id param',  () => {
        it('not create a vote | reason: missing id param', async () => {
            let request  = httpMocks.createRequest({
                method: 'PATCH',
                url: '/api/news/:id/up',
                params: {
                },
                body:{
                    direction_vote:'up'
                }
            });
            let response = httpMocks.createResponse();

            await votesController.vote(request,response);

            expect(response.statusCode).to.be.eql(HttpStatus.BAD_REQUEST);
            expect(response._getData().message).to.be.eql('Está faltando o parametro na url!');
            expect(response._getData().data).to.be.eql('error');      
        })
    })
    describe('vote function with an invalid body',  () => {
        it('not create a vote | reason: invalid body', async () => {
            let request  = httpMocks.createRequest({
                method: 'PATCH',
                url: '/api/news/:id/vote',
                params: {
                    id:1
                },
                body:{
                    direction_vote:'up'
                }
            });
            let response = httpMocks.createResponse();

            await votesController.vote(request,response);

            expect(response.statusCode).to.be.eql(HttpStatus.BAD_REQUEST);
            expect(response._getData().data).to.be.have.property('errors');
            expect(response._getData().message).to.be.eql('O voto não foi cadastrado!');
            expect(response._getData().data.name).to.be.eql('SequelizeValidationError');                        
        })
    })

    describe('vote function with a correct body using the value up in the body',  () => {
        it('create a vote and update the up_votes of the news', async () => {
            let request  = httpMocks.createRequest({
                method: 'PATCH',
                url: '/api/news/:id/vote',
                params: {
                    id:1
                },
                body:{
                    id:13,
                    direction_vote:'up',
                    ip:'192.168.1.2'
                }
            });
            let response = httpMocks.createResponse();

            await votesController.vote(request,response);
            
            expect(response.statusCode).to.be.eql(HttpStatus.CREATED);
            expect(response._getData().message).to.be.eql('O voto foi cadastrado com sucesso e a noticia foi atualizada com sucesso!');
            expect(response._getData().data.direction_vote).to.be.eql(request.body.direction_vote);
            expect(response._getData().data.ip).to.be.eql(request.body.ip);
            
            const newsWithVoteUpdated = await newsRepository.findOne(request.params.id);

            expect(newsWithVoteUpdated.up_votes).to.be.eql(2);

            await votesRepository.delete(13);
            await newsRepository.updateVote(request.params.id,{up_votes:1})
        })
    })

    describe('vote function with a correct body using the value down in the body',  () => {
        it('create a vote and update the down_votes of the news', async () => {
            let request  = httpMocks.createRequest({
                method: 'PATCH',
                url: '/api/news/:id/vote',
                params: {
                    id:1
                },
                body:{
                    id:13,
                    direction_vote:'down',
                    ip:'192.168.1.2'
                }
            });
            let response = httpMocks.createResponse();

            await votesController.vote(request,response);
            
            expect(response.statusCode).to.be.eql(HttpStatus.CREATED);
            expect(response._getData().message).to.be.eql('O voto foi cadastrado com sucesso e a noticia foi atualizada com sucesso!');
            expect(response._getData().data.direction_vote).to.be.eql(request.body.direction_vote);
            expect(response._getData().data.ip).to.be.eql(request.body.ip);
            
            const newsWithVoteUpdated = await newsRepository.findOne(request.params.id);

            expect(newsWithVoteUpdated.down_votes).to.be.eql(4);

            await votesRepository.delete(13);
            await newsRepository.updateVote(request.params.id,{down_votes:3})
        })
    })

    describe('vote function with a news id not found',  () => {
        it('not create a vote | reason: id param not found', async () => {
            let request  = httpMocks.createRequest({
                method: 'PATCH',
                url: '/api/news/:id/vote',
                params: {
                    id:1458
                },
                body:{
                    direction_vote:'up',
                    ip:'192.168.1.2'
                }
            });
            let response = httpMocks.createResponse();

            await votesController.vote(request,response);
            expect(response.statusCode).to.be.eql(HttpStatus.NOT_FOUND);
            expect(response._getData().message).to.be.eql('Não existe noticia com esse id!');
            expect(response._getData().data).to.be.eql('error');            
        })
    })

    describe('vote function with a strange value in the field direction_vote',  () => {
        it('not create a vote | reason: strange value in the field direction_vote', async () => {
            let request  = httpMocks.createRequest({
                method: 'PATCH',
                url: '/api/news/:id/votes',
                params: {
                    id:1
                },
                body:{
                    direction_vote:'strange value',
                    ip:'192.168.1.2'
                }
            });
            let response = httpMocks.createResponse();

            await votesController.vote(request,response);
            expect(response.statusCode).to.be.eql(HttpStatus.BAD_REQUEST);
            expect(response._getData().message).to.be.eql('O corpo da requisição não possui os valores corretos para ser aceito!');
            expect(response._getData().data).to.be.eql('error');            
        })
    })
})