'use strict';

import '../styles/Loading.sass'

import React, {Component} from 'react';
import * as bluebird from 'bluebird';

import ImageBackground from './ImageBackground';
import Context from '../context';

function waitForWebfonts(fonts, callback) {
    var loadedFonts = 0;
    for(var i = 0, l = fonts.length; i < l; ++i) {
        (function(font) {
            var node = document.createElement('span');
            // Characters that vary significantly among different fonts
            node.innerHTML = 'giItT1WQy@!-/#';
            // Visible - so we can measure it - but not on the screen
            node.style.position      = 'absolute';
            node.style.left          = '-10000px';
            node.style.top           = '-10000px';
            // Large font size makes even subtle changes obvious
            node.style.fontSize      = '300px';
            // Reset any font properties
            node.style.fontFamily    = 'sans-serif';
            node.style.fontVariant   = 'normal';
            node.style.fontStyle     = 'normal';
            node.style.fontWeight    = 'normal';
            node.style.letterSpacing = '0';
            document.body.appendChild(node);

            // Remember width with no applied web font
            var width = node.offsetWidth;

            node.style.fontFamily = font;

            var interval;
            function checkFont() {
                // Compare current width with original width
                if(node && node.offsetWidth != width) {
                    ++loadedFonts;
                    node.parentNode.removeChild(node);
                    node = null;
                }

                // If all fonts have been loaded
                if(loadedFonts >= fonts.length) {
                    if(interval) {
                        clearInterval(interval);
                    }
                    if(loadedFonts == fonts.length) {
                        callback();
                        return true;
                    }
                }
            };

            if(!checkFont()) {
                interval = setInterval(checkFont, 50);
            }
        })(fonts[i]);
    }
};

class Loading extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        return bluebird
            .all([this._loadFonts(), this._loadImages()])
            .then(() => this.props.context.setState({isLoaded: true}));
    }

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
            <Context.Consumer>
                {context => <div className="LoadingArea">
                    {!context.isLoaded && (
                        <div className="LoadingAreaContent">
                            <div className="project-name">Guess the whereabouts</div>
                            <div className="loading-text">Loading ...</div>
                            <div className="progress-bar" />
                            <div className="progress-text">
                            </div>
                        </div>
                    )}
                </div>}
            </Context.Consumer>
        </div>
    }
}

export default Loading;