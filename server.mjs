'use strict';

import * as __ from 'lodash';
import * as _express from 'express';
import * as _nwb from 'nwb/express';
import * as _promise from 'bluebird';
import * as _globby from 'globby';

const _ = __.default;
const express = _.get(_express, 'default');
const nwb = _.get(_nwb, 'default');
const Promise = _.get(_promise, 'default');
const globby = _.get(_globby, 'default');

export class Server {
    constructor () {
        this.port = 80;
        this.app = express();
    }

    /**
     * @method _staticRoutes
     * @returns {Server}
     * @private
     */
    _staticRoutes () {
        this.app.use(nwb(express));
        this.app.use(express.static('public'));
        this.app.use(express.static('images'));
        return this;
    }

    /**
     * @method _routes
     * @returns {*}
     * @private
     */
    _routes () {
        return globby([
            `${process.cwd()}/routes/**/*.routes.mjs`,
            `!${process.cwd()}/routes/**/base.routes.mjs`,
        ])
            .then(paths => {
                if (!paths.length) {
                    return true;
                }
                return Promise.mapSeries(paths, path => {
                    return import(path).then(_route => {
                        const Route = _.get(_route, 'default');
                        if (Route) {
                            const instance = new Route(this.app, express);
                            if (instance && instance.run) {
                                return instance.run();
                            }
                        }
                        return true;
                    });
                });
            });
    };

    /**
     * @method _env
     * @returns {Promise<boolean | never>}
     * @private
     */
    _env () {
        return import('dotenv')
            .then(env => {
                const Env = _.get(env, 'default');
                if (Env) {
                    Env.config();
                }
                return true;
            });
    }

    /**
     * @method _listen
     * @returns {*}
     * @private
     */
    _listen () {
        return new Promise((resolve, reject) => {
            this.app.listen(this.port, err => {
                if (err) {
                    return reject(err);
                }
                return resolve(true);
            });
        });
    };

    /**
     * Setup our static routes, get our environment variables, setup primary
     * routes, and then listen for incoming connections
     * @method run
     */
    run () {
        this._staticRoutes();
        return Promise.mapSeries([
            this._env,
            this._routes,
            this._listen
        ], promise => {
            return promise.apply(this);
        });
    }
}