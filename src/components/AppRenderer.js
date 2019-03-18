'use strict';

import '../styles/App.sass'

import React, {Component} from 'react';

import Primary from './content/Primary';
import DayGuesser from './content/DayGuesser';

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
                            {context.currentDay > 15 && <Primary />}
                            {context.currentDay <= 15 && <DayGuesser context={context} />}
                        </div>
                    )}
                </div>}
            </Context.Consumer>
        </div>
    }
}

export default AppRenderer;