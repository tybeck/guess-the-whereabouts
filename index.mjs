'use strict';

import {Server} from './server';

(app => {

    return app
        .run()
        .then(() => {

            console.log(`Server listening @ [::]:${app.port}`);

            return true;

        })
        .catch(e => {

            console.log('Unable to start server!', e);

            process.exit(0);

        });

})(new Server());