import newsController from './news-controller';
import newsRepository from './news-repository';
import httpMocks from 'node-mocks-http';
import HttpStatus from 'http-status';
import chai from 'chai';
global.expect = chai.expect;

describe('News Test Suite : getNews function',  () => {
	describe('getNews function without query params',  () => {
		it('list all news without order', async () => {
			let request  = httpMocks.createRequest({
				method: 'GET',
				url: '/api/news',
				params: {
				}
			});
            
			let response = httpMocks.createResponse();

			await newsController.getAllNews(request,response);

			expect(response.statusCode).to.be.eql(HttpStatus.OK);
			expect(response._getData().data).to.be.an('array');
            
			expect(response._getData().data[0].dataValues.id).to.be.eql(1);
			expect(response._getData().data[0].dataValues.title).to.be.eql('Brasil campeão do mundo');
			expect(response._getData().data[0].dataValues.link).to.be.eql('globoesporte.globo.com');
			expect(response._getData().data[0].dataValues.up_votes).to.be.eql(1);
			expect(response._getData().data[0].dataValues.down_votes).to.be.eql(3);
			expect(response._getData().data[0].dataValues.ip).to.be.eql('192.168.0.1');
		});
	});

	describe('getNews function with query param up',  () => {
		it('list all news according the biggest value of up vote', async () => {
			let request  = httpMocks.createRequest({
				method: 'GET',
				url: '/api/news',
				query: {
					up:''
				}
			});
            
			let response = httpMocks.createResponse();

			await newsController.getAllNews(request,response);

			expect(response.statusCode).to.be.eql(HttpStatus.OK);
			expect(response._getData().data).to.be.an('array');

			expect(response._getData().data[0].dataValues.id).to.be.eql(4);
			expect(response._getData().data[0].dataValues.title).to.be.eql('noticia aleatoria qualquer');
			expect(response._getData().data[0].dataValues.link).to.be.eql('noticiaaleatoria.com');
			expect(response._getData().data[0].dataValues.up_votes).to.be.eql(3);
			expect(response._getData().data[0].dataValues.down_votes).to.be.eql(1);
			expect(response._getData().data[0].dataValues.ip).to.be.eql('223.0.0.2');

			expect(response._getData().data[1].dataValues.id).to.be.eql(3);
			expect(response._getData().data[1].dataValues.title).to.be.eql('Bitcoin estoura');
			expect(response._getData().data[1].dataValues.link).to.be.eql('foxbit.com.br');
			expect(response._getData().data[1].dataValues.up_votes).to.be.eql(2);
			expect(response._getData().data[1].dataValues.down_votes).to.be.eql(0);
			expect(response._getData().data[1].dataValues.ip).to.be.eql('223.0.0.1');
		});
	});

	describe('getNews function with query param down',  () => {
		it('list all news according the biggest value of down vote', async () => {
			let request  = httpMocks.createRequest({
				method: 'GET',
				url: '/api/news',
				query: {
					down:''
				}
			});
            
			let response = httpMocks.createResponse();

			await newsController.getAllNews(request,response);

			expect(response.statusCode).to.be.eql(HttpStatus.OK);
			expect(response._getData().data).to.be.an('array');

			expect(response._getData().data[0].dataValues.id).to.be.eql(1);
			expect(response._getData().data[0].dataValues.title).to.be.eql('Brasil campeão do mundo');
			expect(response._getData().data[0].dataValues.link).to.be.eql('globoesporte.globo.com');
			expect(response._getData().data[0].dataValues.up_votes).to.be.eql(1);
			expect(response._getData().data[0].dataValues.down_votes).to.be.eql(3);
			expect(response._getData().data[0].dataValues.ip).to.be.eql('192.168.0.1');

			expect(response._getData().data[1].dataValues.id).to.be.eql(2);
			expect(response._getData().data[1].dataValues.title).to.be.eql('O mundo está em paz!');
			expect(response._getData().data[1].dataValues.link).to.be.eql('g1.globo.com');
			expect(response._getData().data[1].dataValues.up_votes).to.be.eql(0);
			expect(response._getData().data[1].dataValues.down_votes).to.be.eql(2);
			expect(response._getData().data[1].dataValues.ip).to.be.eql('192.168.25.254');
		});
	});

	describe('getNews function with query param lastNews',  () => {
		it('list all news according the latest news add', async () => {
			let request  = httpMocks.createRequest({
				method: 'GET',
				url: '/api/news',
				query: {
					lastNews:''
				}
			});
            
			let response = httpMocks.createResponse();

			await newsController.getAllNews(request,response);

			expect(response.statusCode).to.be.eql(HttpStatus.OK);
			expect(response._getData().data).to.be.an('array');

			expect(response._getData().data[0].dataValues.id).to.be.eql(4);
			expect(response._getData().data[0].dataValues.title).to.be.eql('noticia aleatoria qualquer');
			expect(response._getData().data[0].dataValues.link).to.be.eql('noticiaaleatoria.com');
			expect(response._getData().data[0].dataValues.up_votes).to.be.eql(3);
			expect(response._getData().data[0].dataValues.down_votes).to.be.eql(1);
			expect(response._getData().data[0].dataValues.ip).to.be.eql('223.0.0.2');

			expect(response._getData().data[1].dataValues.id).to.be.eql(3);
			expect(response._getData().data[1].dataValues.title).to.be.eql('Bitcoin estoura');
			expect(response._getData().data[1].dataValues.link).to.be.eql('foxbit.com.br');
			expect(response._getData().data[1].dataValues.up_votes).to.be.eql(2);
			expect(response._getData().data[1].dataValues.down_votes).to.be.eql(0);
			expect(response._getData().data[1].dataValues.ip).to.be.eql('223.0.0.1');
		});
	});

	describe('getNews function with a strange query param ',  () => {
		it('list all news according with the strange query param', async () => {
			let request  = httpMocks.createRequest({
				method: 'GET',
				url: '/api/news',
				query: {
					strangeParam:''
				}
			});
            
			let response = httpMocks.createResponse();

			await newsController.getAllNews(request,response);
    
			expect(response.statusCode).to.be.eql(HttpStatus.BAD_REQUEST);
			expect(response._getData()).to.be.an('object');
			expect(response._getData().message).to.be.eql('Os parametros não estão de acordo com o que era esperado');
			expect(response._getData().data).to.be.eql('error');
            
		});
	});
});

describe('News Test Suite : addNew function',  () => {
	describe('addNew function with new title',  () => { 
		it('create a new data on the database', async () => {
			let request  = httpMocks.createRequest({
				method: 'POST',
				url: '/api/news',
				body: {
					id:5,
					title: 'Europe Takes First Steps in Electrifying World’s Shipping Fleets',
					link:'https://e360.yale.edu/features/europe-takes-first-steps-in-electrifying-worlds-shipping-fleets',
					ip: '223.0.0.1'
				}
			});
            
			let response = httpMocks.createResponse();

			await newsController.addNew(request,response);
            
			expect(response.statusCode).to.be.eql(HttpStatus.CREATED);
			expect(response._getData()).to.be.an('object');
			expect(response._getData().message).to.be.eql('A noticia foi cadastrada com sucesso!');
			expect(response._getData().data.title).to.be.eql('Europe Takes First Steps in Electrifying World’s Shipping Fleets');
			expect(response._getData().data.link).to.be.eql('https://e360.yale.edu/features/europe-takes-first-steps-in-electrifying-worlds-shipping-fleets');
			expect(response._getData().data.ip).to.be.eql('223.0.0.1');
			expect(response._getData().data.up_votes).to.be.eql(0);
			expect(response._getData().data.down_votes).to.be.eql(0);
            
			await newsRepository.delete(5);
		}).timeout(5000);
	});

	describe('addNew function without new title',  () => { 
		it('create a new data on the database', async () => {
			let request  = httpMocks.createRequest({
				method: 'POST',
				url: '/api/news',
				body: {
					id:5,
					title: '',
					link:'https://www.quantamagazine.org/cells-talk-in-a-language-that-looks-like-viruses-20180502/',
					ip: '223.0.0.1'
				}
			});
            
			let response = httpMocks.createResponse();

			await newsController.addNew(request,response);
            
			expect(response.statusCode).to.be.eql(HttpStatus.CREATED);
			expect(response._getData()).to.be.an('object');
			expect(response._getData().message).to.be.eql('A noticia foi cadastrada com sucesso!');
			expect(response._getData().data.title).to.be.eql('Cells Talk in a Language That Looks Like Viruses');
			expect(response._getData().data.link).to.be.eql('https://www.quantamagazine.org/cells-talk-in-a-language-that-looks-like-viruses-20180502/');
			expect(response._getData().data.ip).to.be.eql('223.0.0.1');
			expect(response._getData().data.up_votes).to.be.eql(0);
			expect(response._getData().data.down_votes).to.be.eql(0);
            
			await newsRepository.delete(5);
		}).timeout(7000);
	});

	describe('addNew function without a invalid link',  () => { 
		it('not create a new data on the database | reason: invalid link', async () => {
			let request  = httpMocks.createRequest({
				method: 'POST',
				url: '/api/news',
				body: {
					id:5,
					title: '',
					link:'https://www.quqlasoca,o.com',
					ip: '223.0.0.1'
				}
			});
            
			let response = httpMocks.createResponse();

			await newsController.addNew(request,response);
            
			expect(response.statusCode).to.be.eql(HttpStatus.INTERNAL_SERVER_ERROR);
			expect(response._getData()).to.be.an('object');
			expect(response._getData().message).to.be.eql('Ocorreu um erro durante o processamento da requisição');
			expect(response._getData().data).to.be.eql('O link é inválido');
            
			await newsRepository.delete(5);
		}).timeout(7000);
	});

	describe('addNew function with a incorrect body',  () => { 
		it('not create a new data on the database | reason: incorrect body', async () => {
			let request  = httpMocks.createRequest({
				method: 'POST',
				url: '/api/news',
				body: {
					id:5,
					strangeParam: '',
					link:'https://www.quantamagazine.org/cells-talk-in-a-language-that-looks-like-viruses-20180502/',
				}
			});
            
			let response = httpMocks.createResponse();

			await newsController.addNew(request,response);
        
			expect(response.statusCode).to.be.eql(HttpStatus.BAD_REQUEST);
			expect(response._getData()).to.be.an('object');
			expect(response._getData().message).to.be.eql('A noticia não foi cadastrada!');
			expect(response._getData().data).to.be.have.property('errors');
			expect(response._getData().data.name).to.be.eql('SequelizeValidationError');
            
			await newsRepository.delete(5);
		}).timeout(7000);
	});
});