'use strict';

import '../styles/ImageBackground.sass'

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
            index: 0,
            futureIndex: 1,
            isTransitioning: false
        };
    }

    componentDidMount() {
        this._run();
    }

    /**
     * @method _run
     * @private
     */
    _run () {
        setTimeout(() => this._update(), 7500);
    }

    /**
     * @method _update
     * @private
     */
    _update () {
        let index = this.state.index;
        let futureIndex = ++this.state.index;
        if (futureIndex >= ImageBackground.IMAGES.length) {
            futureIndex = 0;
        }
        this.setState({ isTransitioning: true, futureIndex: futureIndex, index: index });
        setTimeout(() => {
            ++index;
            if (!futureIndex) {
                index = 0;
            }
            this.setState({ index, isTransitioning: false });
            return this._run();
        }, 2500);
    }

    render() {
        const primaryBackgroundImageClasses = new Array('present');
        const futureBackgroundImageClasses = new Array('future');
        const backgroundImageClasses = new Array('BackgroundImage');
        if (this.state.isTransitioning) {
            backgroundImageClasses.push('is-transitioning');
        }
        return <div className={backgroundImageClasses.join(' ')}>
            <img className={primaryBackgroundImageClasses.join(' ')} src={ImageBackground.IMAGES[this.state.index]} />
            <img className={futureBackgroundImageClasses.join(' ')} src={ImageBackground.IMAGES[this.state.futureIndex]} />
        </div>;
    }
}

export default ImageBackground;