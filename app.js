import bodyParser from 'body-parser';
import helmet from 'helmet';
import express from 'express';
import { loadAllRoutes} from './utils';
import logger from 'morgan';

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(logger('dev'));

loadAllRoutes(app);

export default app;
