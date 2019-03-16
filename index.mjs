'use strict';

import * as __ from 'lodash';
import {Server} from './server';
import * as _chalk from 'chalk';

const _ = __.default;
const chalk = _.get(_chalk, 'default');

const server = new Server();

server
    .run()
    .then(() => console.log(chalk.green(`Server listening @ [::]:${server.port}`)))
    .catch(e => console.log(chalk.red('Unable to start server!'), e));