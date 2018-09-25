'use strict';

import * as __ from 'lodash';
import * as _express from 'express';
import * as _nwb from 'nwb/express';

const _ = __.default;
const express = _.get(_express, 'default');
const nwb = _.get(_nwb, 'default');

export class Server {

    constructor () {
        this.port = 80;
        this.app = express();
    }

    _staticRoutes () {
        this.app.use(nwb(express));
        this.app.use(express.static('public'));
        return this;
    }

    _listen () {
        return new Promise((resolve, reject) => {
            this.app.listen(this.port, err => {
                if (err) {
                    return reject(err);
                }
                return resolve(true);
            });
        });
    }

    run () {
        return this
            ._staticRoutes()
            ._listen();
    }

}