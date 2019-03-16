'use strict';

import '../styles/App.sass'

import React, {Component} from 'react';

import Background from './Background';
import Countdown from './Countdown';
import People from './People';
import ImageBackground from './ImageBackground';
import Context from '../context';

class AppRenderer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="AppRenderer">
            <Context.Consumer>
                {context => <div className="Content">
                    {context.isLoaded && (
                        <div className="ContentArea">
                            <div className="title">
                                <h1>Guess the Whereabouts</h1>
                            </div>
                            <Countdown />
                            <People />
                            <ImageBackground />
                            <Background />
                        </div>
                    )}
                </div>}
            </Context.Consumer>
        </div>
    }
}

export default AppRenderer;