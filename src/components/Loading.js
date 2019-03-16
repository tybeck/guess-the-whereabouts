'use strict';

import '../styles/Loading.sass'

import React, {Component} from 'react';
import * as bluebird from 'bluebird';

import ImageBackground from './ImageBackground';

class Loading extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        return bluebird
            .all([this._loadImages()])
            .then(() => this.props.context.setState({isLoaded: true}));
    }

    _loadImages() {
        const images = ImageBackground.IMAGES;
        bluebird.map(images, image => {
            return new Promise(resolve => {
                const loader = this._createImgInstance();
                loader.onload = () => {
                    this._destroyImgInstance(loader);
                    resolve(true);
                };
                loader.src = image;
            });
        })
            .then(() => true);
    }

    _destroyImgInstance(src) {
        document.body.removeChild(src);
    }

    _createImgInstance() {
        const imgLoader = document.createElement('img');
        if (imgLoader) {
            imgLoader.style.display = 'none';
            document.body.appendChild(imgLoader);
        }
        return imgLoader;
    }

    render() {
        return <div className="Loading">
            <div className="project-name">Guess the whereabouts</div>
            <div className="loading-text">Loading ...</div>
            <div className="progress-bar"></div>
            <div className="progress-text">

            </div>
        </div>
    }
}

export default Loading;