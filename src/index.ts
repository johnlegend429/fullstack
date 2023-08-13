import './pre-start';
import logger from 'jet-logger';

import EnvVars from '@src/declarations/major/EnvVars';
import server from './server';

const msg = ('Express server started on port: ' + EnvVars.port.toString());
server.listen(EnvVars.port, () => logger.info(msg));
