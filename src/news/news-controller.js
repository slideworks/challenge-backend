import newRepository from './news-repository';
import {responseResultObject} from '../../utils';

exports.getAllNews =  async  (req, res) =>  {
	try {
		const result =  await newRepository.findAll();
		res.status(200).send(result);
	} catch (err) {
		res.status(500).send(responseResultObject("Ocorreu um erro durante o processamento da requisição", err.message));
		throw(err);
	}
}; 

exports.addNew =  async  (req, res) =>  {
	try {
		const result =  await newRepository.create(req.body);
		
		if (result['errors'] || result['parent']) {
			res.status(400).send(responseResultObject("A noticia não foi cadastrada!", result));
		} else {
			res.status(201).send(responseResultObject("A noticia foi cadastrada com sucesso!", result));
		}
	} catch (err) {
		res.status(500).send(responseResultObject("Ocorreu um erro durante o processamento da requisição", err.message));
		throw(err);
	}
}; 

