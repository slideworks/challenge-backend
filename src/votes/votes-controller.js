import votesRepository from './votes-repository';
import newsRepository from '../news/news-repository' ;
import {responseResultObject} from '../../utils';
exports.upVote =  async  (req, res) =>  {

	if(!req.params.id){
		return res.status(400).send(responseResultObject('Está faltando o parametro na url!'));
	}
	try {
		let newOfThisVote = await newsRepository.findOne(req.params.id);
		if(!newOfThisVote) return res.status(404).send(responseResultObject('Não existe noticia com esse id!'));
		
		req.body['news_id'] = req.params.id;

		const result =  await votesRepository.upVote(req.body);

		if (result['errors']|| result['parent']) {
			res.status(400).send(responseResultObject("O voto não foi cadastrado!", result));
		} else {

			newOfThisVote.dataValues.up_votes = newOfThisVote.dataValues.up_votes+1;

			const updatedNew = await newsRepository.updateVote(req.params.id, newOfThisVote.dataValues)
			
			if (updatedNew['errors'] || updatedNew['parent']){
				res.status(500).send(responseResultObject("O voto foi cadastrada com sucesso mas a noticia não pode ser atualizada!", updatedNew))
			}	else	{
				res.status(201).send(responseResultObject("O voto foi cadastrada com sucesso e a noticia foi atualizada com sucesso!", result));
			}
		}
		
	} catch (err) {
		res.status(500).send(responseResultObject('Ocorreu um erro durante o processamento da requisição',err.message));
		throw(err);
	}
}; 

exports.downVote =  async  (req, res) =>  {
	if(!req.params.id){
		return res.status(400).send(responseResultObject('Está faltando o parametro na url!'));
	}
	try {
		let newOfThisVote = await newsRepository.findOne(req.params.id);
		if(!newOfThisVote) return res.status(404).send(responseResultObject('Não existe noticia com esse id!'));
		
		req.body['news_id'] = req.params.id;

		const result =  await votesRepository.upVote(req.body);

		if (result['errors']|| result['parent']) {
			res.status(400).send(responseResultObject("O voto não foi cadastrado!", result));
		} else {

			newOfThisVote.dataValues.down_votes = newOfThisVote.dataValues.down_votes +1;

			const updatedNew = await newsRepository.updateVote(req.params.id, newOfThisVote.dataValues)
			
			if (updatedNew['errors'] || updatedNew['parent']){
				res.status(500).send(responseResultObject("O voto foi cadastrada com sucesso mas a noticia não pode ser atualizada!", updatedNew))
			}	else	{
				res.status(201).send(responseResultObject("O voto foi cadastrada com sucesso e a noticia foi atualizada com sucesso!", result));
			}
		}
		
	} catch (err) {
		res.status(500).send(responseResultObject('Ocorreu um erro durante o processamento da requisição',err.message));
		throw(err);
	}
}; 
 