'use strict';

import '../../styles/Primary.sass'

import React, {Component} from 'react';

import Background from '../Background';
import Countdown from '../Countdown';
import People from '../People';
import ImageBackground from '../ImageBackground';

class Primary extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="Primary">
            <div className="title">
                <h1>Guess the Whereabouts</h1>
            </div>
            <Countdown />
            <People />
            <ImageBackground />
            <Background />
        </div>;
    }
}

export default Primary;