import newRepository from './news-repository';

exports.getAllNews =  async  (req, res) =>  {
	try {
		const result =  await newRepository.findAll();
		res.status(200).send(result);
	} catch (err) {
		res.status(500).send({message: 'Ocorreu um erro durante o processamento da requisição'});
		throw(err);
	}
}; 

exports.addNew =  async  (req, res) =>  {
	try {
		const result =  await newRepository.create(req.body);
		res.status(201).send(result);
	} catch (err) {
		res.status(500).send({message: 'Ocorreu um erro durante o processamento da requisição'});
		throw(err);
	}
}; 

exports.updateUpVote =  async  (req, res) =>  {
	try {
		const result =  await newRepository.update(req.params.id,req.body);
		res.status(201).send({message: "A noticia foi atualizada com sucesso!"});
	} catch (err) {
		res.status(500).send({message: 'Ocorreu um erro durante o processamento da requisição'});
		throw(err);
	}
}; 

exports.updateDownVote =  async  (req, res) =>  {
	try {
		const result =  await newRepository.update(req.params.id,req.body);
		res.status(201).send({message: "A noticia foi atualizada com sucesso!"});
	} catch (err) {
		res.status(500).send({message: 'Ocorreu um erro durante o processamento da requisição'});
		throw(err);
	}
}; 