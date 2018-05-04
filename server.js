import { normalizePort, onError, onListening } from './utils';
import loadDatabase from './config/datasource';
import http from 'http';
import app from './app';

const server  = http.createServer(app);
const port = normalizePort(process.env.port || 3000);
const db = loadDatabase();

db.sequelize.sync()
	.then(() =>{
		server.listen(port);
		server.on('error',onError(server));
		server.on('listening', onListening(server));
	});
