import fs  from 'fs' ;
import path  from 'path';
import RateLimit from 'express-rate-limit';

export const normalizePort = (val) => {
	let port = (typeof val === 'string') ? parseInt(val) : val;
	if (isNaN(port)) return val;
	else if (port >= 0) return port;
	else return false;
};

export const onError = (server) => {
	return (error) => {
		
		let port = error.port;
		if (error.syscall !== 'listen') throw error;
		let bind = (typeof port === 'string') ? `pipe ${port}` : `port ${port}`;
		switch(error.code) {
		case 'EACCES':
			console.error(`############### ${bind} requires elevated privileges ###############`);
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(`############### ${bind} is already in use ###############`);
			process.exit(1);
			break;
		default:
			throw error;
		}
	};
};

export const onListening = (server) => {
	return () => {
		let addr = server.address();
		let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
		console.info(`Listening at ${bind}...`);
	};
};

export const loadAllRoutes = (app) => {
	fs.readdirSync(__dirname+'/src')
		.map(file => path.join(__dirname+'/src', file))
		.filter(path => fs.statSync(path).isDirectory() && !path.includes('node_modules') 
														&& !path.includes('.git') 
														&& !path.includes('config')
														&& !path.includes('test')
		).forEach(folder => {
			fs.readdirSync(folder)
				.map(file => folder + '/' + file)
				.filter(path => path.includes('-route.js'))
				.forEach(path => {
					require(path)(app);
				});
		});
};

export const responseResultObject = (message, data = 'error') => {
	return {message: message, data:data};
};

export const apiLimiter = () => {
	// maximo de 100 requisições durante 15 minutos
	return new RateLimit({windowMs: 15*60*1000, max: 10 ,delayMs: 0, message: 'Muitas requisições feitas a partir deste IP, por favor, tente novamente após alguns minutos'});
};