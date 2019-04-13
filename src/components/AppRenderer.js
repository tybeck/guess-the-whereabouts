'use strict';

import '../styles/App.sass'

import React, {Component} from 'react';

import Primary from './content/Primary';
import DayGuesser from './content/DayGuesser';

import Context from '../context';

class AppRenderer extends Component {
    constructor(props) {
        super(props);
        this.DAY_NUM_START = 15;
    }

    render() {
        return <div className="AppRenderer">
            <Context.Consumer>
                {context => <div className="Content">
                    {context.isLoaded && (
                        <div className="ContentArea">
                            {context.currentDay > this.DAY_NUM_START && <Primary />}
                            {context.currentDay <= this.DAY_NUM_START && <DayGuesser context={context} />}
                        </div>
                    )}
                </div>}
            </Context.Consumer>
        </div>
    }
}

export default AppRenderer;