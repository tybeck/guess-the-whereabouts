'use strict';

import '../styles/Loading.sass'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as bluebird from 'bluebird';
import {get} from 'lodash';

import ImageBackground from './ImageBackground';

class Loading extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        return bluebird
            .all([this._loadFonts(), this._importLocationImages(), this._loadImages()])
            .then(() => this.props.isAppLoading(true));
    }

    _importLocationImages() {
        return import(`../locations`)
            .then(data => {
                const locations = get(data, 'default');
                if (locations) {
                    return bluebird.map(locations, location => {
                        return new Promise(resolve => {
                            const loader = Loading.createImgInstance();
                            loader.onload = () => {
                                Loading.destroyImgInstance(loader);
                                resolve(true);
                            };
                            loader.src = location.image;
                        });
                    })
                }
            });
    }

    /**
     * @method _loadFonts
     * Load all fonts
     * @returns {Promise<T | never>}
     * @private
     */
    _loadFonts() {
        return document
            .fonts
            .ready
            .then(function () {
                return new Promise(resolve => {
                    return setTimeout(() => resolve(true), 1500);
                });
            });
    }

    /**
     * @method _loadImages
     * Load all images
     * @private
     */
    _loadImages() {
        const images = ImageBackground.IMAGES;
        bluebird.map(images, image => {
            return new Promise(resolve => {
                const loader = Loading.createImgInstance();
                loader.onload = () => {
                    Loading.destroyImgInstance(loader);
                    resolve(true);
                };
                loader.src = image;
            });
        })
            .then(() => true);
    }

    /**
     * @method destroyImgInstance
     * @param src
     * @private
     */
    static destroyImgInstance = src => document.body.removeChild(src);

    /**
     * @method createImgInstance
     * @returns {HTMLElement}
     */
    static createImgInstance() {
        const imgLoader = document.createElement('img');
        if (imgLoader) {
            imgLoader.style.display = 'none';
            document.body.appendChild(imgLoader);
        }
        return imgLoader;
    }

    render() {
        return <div className="Loading">
            {!this.props.load && <div className="LoadingArea">
                <div className="LoadingAreaContent">
                    <div className="project-name">Guess the whereabouts</div>
                    <div className="loading-text">Loading ...</div>
                    <div className="progress-bar" />
                    <div className="progress-text">
                    </div>
                </div>
            </div>}
        </div>;
    }
}

Loading.propTypes = {
    isAppLoading: PropTypes.func.isRequired
};

export default Loading;