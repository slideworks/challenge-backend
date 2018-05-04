import votesRepository from './votes-repository';

exports.upVote =  async  (req, res) =>  {
	try {
		const result =  await votesRepository.create(req.body);
		res.status(201).send(result);
	} catch (err) {
		res.status(500).send({message: 'Ocorreu um erro durante o processamento da requisição'});
		throw(err);
	}
}; 

exports.downVote =  async  (req, res) =>  {
	try {
		const result =  await votesRepository.create(req.body);
		res.status(201).send(result);
	} catch (err) {
		res.status(500).send({message: 'Ocorreu um erro durante o processamento da requisição'});
		throw(err);
	}
}; 
 