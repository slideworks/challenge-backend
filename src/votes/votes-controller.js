import votesRepository from './votes-repository';

exports.getAllVotes =  async  (req, res) =>  {
	try {
		const result =  await votesRepository.findAll();
		res.status(200).send(result);
	} catch (err) {
		res.status(500).send({message: 'Ocorreu um erro durante o processamento da requisição'});
		throw(err);
	}
}; 

exports.addVote =  async  (req, res) =>  {
	try {
		const result =  await votesRepository.create(req.body);
		res.status(201).send(result);
	} catch (err) {
		res.status(500).send({message: 'Ocorreu um erro durante o processamento da requisição'});
		throw(err);
	}
}; 

exports.excludeVote =  async  (req, res) =>  {
	try {
		const result =  await votesRepository.delete(req.params.id);
		res.status(200).send({message: "O voto foi excluído com sucesso!"});
	} catch (err) {
		res.status(500).send({message: 'Ocorreu um erro durante o processamento da requisição'});
		throw(err);
	}
}; 

exports.updateVote =  async  (req, res) =>  {
	try {
		const result =  await votesRepository.update(req.params.id,req.body);
		res.status(201).send({message: "O voto foi atualizado com sucesso!"});
	} catch (err) {
		res.status(500).send({message: 'Ocorreu um erro durante o processamento da requisição'});
		throw(err);
	}
}; 