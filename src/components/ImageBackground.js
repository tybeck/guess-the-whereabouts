'use strict';

import '../styles/Background.sass'

import React, {Component} from 'react';

class ImageBackground extends Component {
    static IMAGES = [
        '/images/photo1.jpg',
        '/images/photo2.jpg',
        '/images/photo3.jpg',
        '/images/photo4.jpg',
        '/images/photo5.jpg'
    ];

    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
        this._run();
    }

    /**
     * @method _run
     * @private
     */
    _run () {
        setTimeout(() => this._update(), 5000);
    }

    /**
     * @method _update
     * @private
     */
    _update () {
        let index = ++this.state.index;
        if (index >= ImageBackground.IMAGES.length) {
            index = 0;
        }
        this.setState({ index });
        return this._run();
    }

    render() {
        return <img src={ImageBackground.IMAGES[this.state.index]} />;
    }
}

export default ImageBackground;