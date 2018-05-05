import newRepository from './news-repository';
import {responseResultObject} from '../../utils';
import HttpStatus from 'http-status-codes';

exports.getAllNews =  async  (req, res) =>  {
	const param = req.query;

	if(Object.keys(param).length !== 0) {	
		if((param.hasOwnProperty('up') || param.hasOwnProperty('down') || param.hasOwnProperty('lastNews') ) && Object.keys(req.query).length === 1){
			try {
				const result = await newRepository.findAllWithParam(param);	
				res.status(200).send(responseResultObject("As noticias foram listadas com sucesso!", result));
			} catch (error) {
				res.status(500).send(responseResultObject("Ocorreu um erro durante o processamento da requisição", err.message));
				throw(err);
			}
			
		}  else {
			res.status(400).send(responseResultObject("Os parametros não estão de acordo com o que era esperado"));
		}
			
	} else {
		try {
			const result =  await newRepository.findAll();
			res.status(HttpStatus.OK).send(result);
		} catch (err) {
			res.status(500).send(responseResultObject("Ocorreu um erro durante o processamento da requisição", err.message));
			throw(err);
		}
	}
}; 

exports.addNew =  async  (req, res) =>  {
	try {
		const result =  await newRepository.create(req.body);
		
		if (result['errors'] || result['parent']) {
			res.status(400).send(responseResultObject("A noticia não foi cadastrada!", result));
		} else {
			res.status(HttpStatus.CREATED).send(responseResultObject("A noticia foi cadastrada com sucesso!", result));
		}
	} catch (err) {
		res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(responseResultObject("Ocorreu um erro durante o processamento da requisição", err.message));
		throw(err);
	}
}; 

