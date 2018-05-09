import votesRepository from './votes-repository';
import newsRepository from '../news/news-repository' ;
import {responseResultObject} from '../../utils';
import HttpStatus from 'http-status-codes';

exports.vote =  async  (req, res) =>  {

	if(!req.params.id){
		return res.status(HttpStatus.BAD_REQUEST).send(responseResultObject('Está faltando o parametro na url!'));
	}
	
	if(req.body.direction_vote.toLowerCase() !== 'up' && req.body.direction_vote.toLowerCase() !== 'down'){
		return res.status(HttpStatus.BAD_REQUEST).send(responseResultObject('O corpo da requisição não possui os valores corretos para ser aceito!'));
	}

	try {
		let newOfThisVote = await newsRepository.findOne(req.params.id);
		if(!newOfThisVote) return res.status(HttpStatus.NOT_FOUND).send(responseResultObject('Não existe noticia com esse id!'));
		
		req.body['news_id'] = req.params.id;

		const result =  await votesRepository.registerVote(req.body);

		if (result['errors']|| result['parent']) {
			res.status(HttpStatus.BAD_REQUEST).send(responseResultObject('O voto não foi cadastrado!', result));
		} else {
			
			if(req.body.direction_vote.toLowerCase() === 'up'){
				newOfThisVote.dataValues.up_votes = newOfThisVote.dataValues.up_votes+1;
			}else{
				newOfThisVote.dataValues.down_votes = newOfThisVote.dataValues.down_votes+1;
			}

			const updatedNew = await newsRepository.updateVote(req.params.id, newOfThisVote.dataValues);
			
			if (updatedNew['errors'] || updatedNew['parent']){
				res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(responseResultObject('O voto foi cadastrado com sucesso mas a noticia não pode ser atualizada!', updatedNew));
			}	else	{
				res.status(HttpStatus.CREATED).send(responseResultObject('O voto foi cadastrado com sucesso e a noticia foi atualizada com sucesso!', result));
			}
		}
		
	} catch (err) {
		console.error(err);
		res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(responseResultObject('Ocorreu um erro durante o processamento da requisição',err.message));
	}
}; 

 