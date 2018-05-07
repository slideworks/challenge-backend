import urlExists from 'url-exists';
import cheerio from 'cheerio';
import request from 'request';
import newRepository from './news-repository';
import {responseResultObject} from '../../utils';
import HttpStatus from 'http-status-codes';

exports.getAllNews =  async  (req, res) =>  {
	const param = req.query;

	if(Object.keys(param).length !== 0) {	
		if((param.hasOwnProperty('up') || param.hasOwnProperty('down') || param.hasOwnProperty('lastNews') ) && Object.keys(req.query).length === 1){
			try {
				const result = await newRepository.findAllWithParam(param);	
				res.status(HttpStatus.OK).send(responseResultObject('As noticias foram listadas com sucesso!', result));
			} catch (error) {
				console.error(error);
				res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(responseResultObject('Ocorreu um erro durante o processamento da requisição', error.message));
			}
			
		}  else {
			res.status(HttpStatus.BAD_REQUEST).send(responseResultObject('Os parametros não estão de acordo com o que era esperado'));
		}
			
	} else {
		try {
			const result =  await newRepository.findAll();
			res.status(HttpStatus.OK).send(responseResultObject('As noticias foram listadas com sucesso!', result));
		} catch (err) {
			console.error(err);
			res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(responseResultObject('Ocorreu um erro durante o processamento da requisição', err.message));
		}
	}
}; 

exports.addNew =  async  (req, res) =>  {
		
	try {
		const link = await exports.isValidLink(req.body.link);
		if(!link) throw 'O link é inválido';

		if (req.body.title === ''){
			const html	= await exports.getHtmlOfTheSite(req.body.link);

			const $ = cheerio.load(html);
			req.body.title = $('h1').first().text();
			
			if(req.body.title === ''){
				return res.status(HttpStatus.BAD_REQUEST).send(responseResultObject('A noticia não foi cadastrada pois não foi possivel identificar o seu titulo!'));
			} 
			const result =  await newRepository.create(req.body);
			
			if (result['errors'] || result['parent']) {
				return res.status(HttpStatus.BAD_REQUEST).send(responseResultObject('A noticia não foi cadastrada!', result));
			} else {
				return res.status(HttpStatus.CREATED).send(responseResultObject('A noticia foi cadastrada com sucesso!', result));
			}
		}
		const result =  await newRepository.create(req.body);
		
		if (result['errors'] || result['parent']) {
			res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(responseResultObject('A noticia não foi cadastrada!', result));
		} else {
			res.status(HttpStatus.CREATED).send(responseResultObject('A noticia foi cadastrada com sucesso!', result));
		}
	} catch (err) {
		console.error(err);
		res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(responseResultObject('Ocorreu um erro durante o processamento da requisição', err.message || err));
	}
}; 

exports.isValidLink= (url) => new Promise((resolve, reject) => urlExists(url, (err, exists) => err ? reject(err) : resolve(exists)));

exports.getHtmlOfTheSite = (url) => new Promise((resolve, reject) => request(url, (err, httpResponse, body) => err ? reject(err) : resolve(body)));