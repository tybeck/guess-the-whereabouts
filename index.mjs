'use strict';

import {Server} from './server';
import * as Chalk from 'chalk';

const server = new Server();

server
    .run()
    .then(() => console.log(Chalk.green(`Server listening @ [::]:${server.port}`)))
    .catch(e => console.log(Chalk.red('Unable to start server!'), e));